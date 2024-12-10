import { useTableContext } from './tableContext';
import React, { useMemo, useState } from 'react';
import { Formik, Form } from 'formik';

import TableActions from './tableActions';
import dynamic from 'next/dynamic';
import Loading from './loader/loading';
import HeaderLoader from './loader/headerLoader';
import { rowDataProps } from './tableInterface';
import Header from '../header';
import Button from '../elements/button';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const TableBody = dynamic(() => delay(300).then(() => import('./tbody')), {
  ssr: false,
  loading: () => {
    return <Loading rows={9} />
  }
});

const TableHeader = dynamic(() => delay(300).then(() => import('./theader')), {
  ssr: false,
  loading: () => {

    return <HeaderLoader />
  }
});

const Table = () => {
  const { data, title, validationSchema, onSaveQuotation } = useTableContext();
  const [disabled, setDisabled] = useState<boolean>(false);
  
  const initialValues = useMemo(() => {
    return data.map((items) => {
      const obj: rowDataProps = {};
      Object.keys(items.data).map(
        (key) => (obj[key] = items.data[key].value ?? '')
      );
      return obj;
    });
  }, [data]);

  const hasAction = () => {
    return onSaveQuotation !== undefined && data.some((row) =>
      Object.values(row.data).some((item) =>
        ['textBox', 'dateTime', 'numberBox', 'popup'].includes(item.type ?? '')
      )
    );
  };

  const handleFormikSubmit = (values: any) => {
    setDisabled(true);
    if(onSaveQuotation){
      onSaveQuotation(values)
    }
  };

  return (
    <div>
      <div className="flex flex-col">
        {title !== '' && <Header title={title}/>}
        <TableActions />
      </div>
      <div className="mt-4 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className=" shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                validateOnChange={true}
                validateOnBlur={true}
                enableReinitialize={true}
                onSubmit={handleFormikSubmit}
              >
                {({ setFieldValue, errors, isValid }) => {
                  return (
                    <div className='overflow-x-auto'>
                      <Form>
                        <table className="table-auto w-full divide-y divide-gray-300">
                          <TableHeader />
                          <TableBody
                            errors={errors}
                            setFieldValue={setFieldValue}
                          />
                        </table>
                        {hasAction() && (
                          <div className="flex flex-end justify-end items-end py-6 pr-6">
                            <Button type={'submit'} disabled={disabled || !isValid}>
                              Save {title} {errors.length} {isValid}
                            </Button>
                          </div>
                        )}
                      </Form>
                    </div>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default React.memo(Table);
