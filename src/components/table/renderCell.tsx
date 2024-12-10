import React from 'react';
import { Field, FormikErrors } from 'formik';
import { rowDataProps, TableCell } from './tableInterface';

interface RenderCellProps {
  index: number;
  cell: TableCell;
  keyName: string;
  errors: FormikErrors<rowDataProps[]>;
  modalData: string[];
  setModalData: (value: string[]) => void;
}

const RenderCell: React.FC<RenderCellProps> = ({
  index,
  cell,
  keyName,
  // errors,
  // modalData,
  // setModalData,
}) => {
  const fieldName = `${index}.${keyName}`;

  // const hasError = (index: number, keyName: string) => {
  //   return errors?.[index]?.[keyName] ? true : false;
  // };
  // const toRemove = (index:string) => {
  //   setModalData(modalData.filter((item) => item !== index.toString()));
  // };

  switch (cell.type) {
    case 'text':
      return (
        <>
        <span
          className="max-w-[150px] truncate cursor-pointer"
          style={{ display: 'inline-block' }}
          title={cell.value ? cell.value.toString():''}
        >
          {cell.value}
        </span>
        <Field
          name={fieldName}
          as="input"
          type="text"
          className={`hidden`}
        />
        </>
      );
    case 'pill':
      return( 
      <>
      <Field
          name={fieldName}
          as="input"
          type="text"
          className={`hidden`}
        />
      {Array.isArray(cell.value) ? (
        <div className="flex space-x-1">
          {cell.value.map((pill: string | number) => (
            <span
              key={pill}
              className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-200 text-gray-800"
            >
              {pill}
            </span>
          ))}
        </div>
      ) : (
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-200 text-gray-800">
          {cell.value}
        </span>
      )}
      </>)
    case 'currency':
      return (
        <>
        <Field
            name={fieldName}
            as="input"
            type="text"
            className={`hidden`}
          />
        <span className="text-green-600">
          {cell.value}
          {/* {currencyFormatter.format( as number)} */}
        </span>
        </>
      );
    case 'warning':
      return (
        <>
        <Field
            name={fieldName}
            as="input"
            type="text"
            className={`hidden`}
          />
        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
          {cell.value}
        </span>
        </>
      );
    default:
      return null;
  }
};

export default RenderCell;