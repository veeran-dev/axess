import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FieldArray } from 'formik';
import * as Yup from 'yup';
import Button from '../elements/button';
import { PhotoIcon } from '@heroicons/react/16/solid';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface selectFieldOptions {
  [key: string]: { id: string; label: string }[];
}

interface DynamicFormProps {
  initialValues: any;
  schema: Yup.ObjectSchema<any>;
  onSubmit: (values: any) => void;
  fieldOptions?: selectFieldOptions;
  disabledFields?: string[];
}

const getFieldType = (
  schema: Yup.ObjectSchema<any>,
  field: string,
  fieldOptions?: selectFieldOptions
): string => {
  if (fieldOptions && fieldOptions[field]) {
    return 'select';
  }
  // const fieldDescription = schema.describe().fields[field];

  const fieldMetadata:any = schema.describe().fields[field]
  console.log(field.includes('.'))
  console.log(schema.describe().fields)
  console.log(schema.describe().fields[field])
  if(field.includes('.')){
    const fields = field.split('.')
    return (schema.describe().fields[fields[0]] as any).innerType.fields[fields[1]].meta.inputType 
  }
  return fieldMetadata?.meta?.inputType ?? 'text';
};

const DynamicForm: React.FC<DynamicFormProps> = ({
  initialValues,
  schema,
  onSubmit,
  fieldOptions,
  disabledFields,
}) => {
  const renderField = (
    field: string,
    fieldType: string,
    isDisabled: boolean | undefined,
    errors: any,
    touched: any,
    setFieldValue: any,
    values: any
  ) => {
    console.log('field...',field)
    console.log('fieldType...',fieldType)

    switch (fieldType) {
      case 'select':
        return (
          <Field
            disabled={isDisabled}
            as="select"
            id={field}
            name={field}
            className={`${
              isDisabled ? 'bg-gray-100' : 'bg-white'
            } block mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm`}
          >
            <option value="">Select {field}</option>
            {fieldOptions?.[field]?.map((option, index) => (
              <option key={index} value={option.id}>
                {option.label}
              </option>
            ))}
          </Field>
        );

      case 'image':
        return (
          <ImageInputField
            field={field}
            isDisabled={isDisabled}
            setFieldValue={setFieldValue}
            errors={errors}
            touched={touched}
          />
        );

      case 'array':
        return (
          <FieldArrayComponent
            field={field}
            values={values}
            setFieldValue={setFieldValue}
            schema={schema}
            errors={errors}
          />
        );
      case 'textarea':
        return (
          <Field
            disabled={isDisabled}
            id={field}
            name={field}
            as='textarea'
            rows={4}
            type={fieldType}
            className={`${
              isDisabled ? 'bg-gray-100' : 'bg-white'
            } block mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm ${
              errors[field] && touched[field] ? 'border-red-300' : 'border-gray-300'
            }`}
          />
        );

      default:
        return (
          <Field
            disabled={isDisabled}
            id={field}
            name={field}
            type={fieldType}
            className={`${
              isDisabled ? 'bg-gray-100' : 'bg-white'
            } block mt-2 w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm ${
              errors[field] && touched[field] ? 'border-red-300' : 'border-gray-300'
            }`}
          />
        );
    }
  };

  const FieldArrayComponent = ({
    field,
    values,
    schema,
    setFieldValue,
    errors,
    touched,
    disabledFields,
  }: any) => (
    <FieldArray
      name={field}
      render={(arrayHelpers) => (
        <div className="mt-2">
          {values[field] && values[field].length > 0 ? (
            values[field].map((item: any, index: number) => (
              <div key={index} className='flex flex-row flex-wrap justify-between items-end mb-2'>
                {Object.keys(schema.describe().fields[field].innerType.fields).map(
                  (nestedField) => {
                    const fullFieldName = `${field}[${index}].${nestedField}`;
                    const fieldName = `${field}.${nestedField}`;
                    const fieldType = getFieldType(schema, fieldName);
                    const isDisabled = disabledFields?.includes(fullFieldName);
                    console.log('fullFieldName...',fullFieldName)
                    console.log('fieldType...',fieldType)
                    return (
                      <>
                      {fieldType === 'textarea' ? <div className="basis-full h-0"></div> : ''}
                      <div key={nestedField} className={`flex flex-col ${fieldType === 'textarea' ? 'flex-grow mt-2':''}`}>
                        <label
                          htmlFor={fullFieldName}
                          className="capitalize block text-sm font-medium text-gray-700"
                        >
                          {nestedField.replace(/([A-Z])/g, ' $1').trim()}
                        </label>
                        {renderField(
                          fullFieldName,
                          fieldType,
                          isDisabled,
                          errors,
                          touched,
                          setFieldValue,
                          values
                        )}
                        <ErrorMessage
                          component="div"
                          name={fullFieldName}
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                      </>
                    );
                  }
                )}
                <Button
                  type="button"
                  onClick={() => arrayHelpers.remove(index)}
                  className="bg-red-400 text-white px-4 py-2 rounded-md mt-2"
                >
                  <XMarkIcon className="h-5 w-5" />
                </Button>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-500">No items available.</p>
          )}
          <Button
            type="button"
            onClick={() =>
              arrayHelpers.push(
                Object.keys(schema.describe().fields[field].innerType.fields).reduce(
                  (acc: any, key: string) => {
                    acc[key] = '';
                    return acc;
                  },
                  {}
                )
              )
            }
            className="bg-secondary text-white px-4 py-2 rounded-md"
          >
            <PlusIcon className="h-5 w-5" />
          </Button>
        </div>
      )}
    />
  );
  

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={(data) => onSubmit(data)}
      >
        {({ errors, touched, setFieldValue, values }) => (
          <Form className="fade-in transition-opacity">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {Object.keys(schema.describe().fields).map((field) => {
                const fieldType = getFieldType(schema, field, fieldOptions);
                console.log('fieldType...',fieldType)
                const isDisabled = disabledFields?.includes(fieldType);
                return (
                  <div key={field} className={`${fieldType === 'image' || fieldType === 'textarea' || fieldType === 'array' ? 'col-span-2' : ''} flex flex-col`}>
                    <label
                      htmlFor={field}
                      className="capitalize block text-sm font-medium text-gray-700"
                    >
                      {field.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    {renderField(field, fieldType, isDisabled, errors, touched, setFieldValue, values)}
                    <ErrorMessage
                      component="div"
                      name={field}
                      className="text-red-500 text-sm mt-1"
                    />
                  </div>
                );
              })}
            </div>
            <div className="mt-12">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

// const FieldArrayComponent = ({ field, values, schema, setFieldValue }: any) => (
//   <FieldArray
//     name={field}
//     render={(arrayHelpers) => (
//       <div className="mt-2">
//         {console.log("schema...",schema.describe().fields[field].innerType.fields)}
//         {values[field] && values[field].length > 0 ? (
//           values[field].map((item: any, index: number) => (
//             <div key={index} className="flex items-center mb-2">
//               {
//                  Object.keys(schema.describe().fields[field].innerType.fields).map((field:any)=>
//                   renderField(field, fieldType, isDisabled, errors, touched, setFieldValue, values)
//                 )
//               }
//               {/* <Field
//                 name={`${field}[${index}].ticketType`}
//                 placeholder="Ticket Type"
//                 className="mr-2 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm"
//               />
//               <Field
//                 name={`${field}[${index}].amount`}
//                 type="number"
//                 placeholder="Amount"
//                 className="mr-2 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm"
//               />
//               <Field
//                 name={`${field}[${index}].quantity`}
//                 type="number"
//                 placeholder="Quantity"
//                 className="mr-2 block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm"
//               /> */}
//               <Button
//                 type="button"
//                 onClick={() => arrayHelpers.remove(index)}
//                 className="bg-red-400 "
//               >
//                 <XMarkIcon className='font-sm size-4'/>
//               </Button>
//             </div>
//           ))
//         ) : (
//           <p className="text-sm text-gray-500">No tickets available.</p>
//         )}
//         <Button
//           type="button"
//           onClick={() => arrayHelpers.push({ ticketType: '', amount: 0, quantity: 1 })}
//         >
//           <PlusIcon className='font-sm size-4 text-white'/>
//         </Button>
//       </div>
//     )}
//   />
// );

const ImageInputField = ({
  field,
  isDisabled,
  setFieldValue,
  // errors,
  // touched,
}: any) => {
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const files = Array.from(e.target.files);
      const previewUrls = files.map((file) => URL.createObjectURL(file));

      setImagePreviews(previewUrls);
      setFieldValue(field, files);
    }
  };

  return (
    <div className="mt-2">
      <div className="">
        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
          <div className="text-center">
            <PhotoIcon
              aria-hidden="true"
              className="mx-auto h-12 w-12 text-gray-300"
            />
            <div className="mt-4 flex text-sm text-gray-600">
              <label
                htmlFor={field}
                className="relative cursor-pointer rounded-md bg-transparent font-semibold text-gray-600 focus-within:outline-none hover:text-gray-500"
              >
                <span>Upload files</span>
                <input
                  type="file"
                  id={field}
                  name={field}
                  disabled={isDisabled}
                  accept="image/*"
                  multiple // Allow multiple file selection
                  onChange={handleImageChange}
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs text-gray-600">PNG, JPG, GIF up to 10MB each</p>
          </div>
        </div>
        {imagePreviews.length > 0 && (
          <div className="mt-4 flex flex-row">
            {imagePreviews.map((previewUrl, index) => (
              <img
                key={index}
                src={previewUrl}
                alt={`${field} preview ${index + 1}`}
                className="w-16 h-16 mr-2 object-cover rounded-md"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicForm;
