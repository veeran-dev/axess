import DynamicFormSkeleton from "@/components/form/dynamicFormLoader";
import Header from "@/components/header"
import Loader from "@/components/loader";
import withAdminLayout from "@/lib/withAdminLayout"
import dynamic from "next/dynamic";
import { useMemo } from "react";
import * as Yup from 'yup';

const Form = dynamic(() => import('@/components/form/dynamicForm'), {
  ssr: false,
  loading:()=><DynamicFormSkeleton fieldCount={4}/>
});

const CreateEvent = ()=>{

  // const {data, loading:userQueryLoading} = useGetUserQuery({variables:{
  //   id: userID
  // }})

  const data:any = {}

  const initialValues = useMemo(() => ({
    firstName: data?.getUser?.firstName ?? '',
    lastName: data?.getUser?.lastName ?? '',
    mobileNo: data?.getUser?.mobileNo?.toString() ?? '',
    email: data?.getUser?.email ?? '',
    roleId: data?.getUser?.role?.id ?? '',
    createTickets: [{tickets: '', amount: 0, quantity: 0}],
    termsAndConditions: [{title: '', description: ''}]

  }), [data]);
  
  const MAX_FILE_SIZE = 102400; //100KB

  const validFileExtensions = { image: ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'] };

  function isValidFileType(fileName:any, fileType:any) {
    console.log(fileType)
    return fileName && validFileExtensions['image'].indexOf(fileName.split('.').pop()) > -1;
  }
  
  // Yup.addMethod(Yup.string, 'meta', function (metadata) {
  //   return this.transform((value) => ({ value, ...metadata }));
  // });

  const clientDetailsSchema = Yup.object().shape({
    eventName: Yup.string()
      .required('Event name is required')
      .meta({ inputType: 'text' }),
    organizedOn: Yup.date()
      .required('Event date is required')
      .min(new Date(), 'Event date cannot be in the past')
      .meta({ inputType: 'date' }),
    about: Yup.string()
      .max(250, 'About cannot exceed 250 characters')
      .meta({ inputType: 'textarea' }),
    cover: Yup
      .mixed()
      .required("Required")
      .meta({ inputType: 'image' })
      .test("is-valid-type", "Not a valid image type",
        // (value:any) => isValidFileType(value && value.name.toLowerCase(), "image")
        (value:any)=>{
          console.log("value is....",value)
          return value.some((v:any)=> isValidFileType(v && v.name.toLowerCase(), "image")===false) 
        }
      )
      .test("is-valid-size", "Max allowed size is 100KB",
        (value:any) => value && value.size <= MAX_FILE_SIZE),
        address1: Yup.string()
        .required('Address line 1 is required')
        .max(100, 'Address line 1 can\'t exceed 100 characters')
        .meta({ inputType: 'text' }),
      address2: Yup.string()
        .max(100, 'Address line 2 can\'t exceed 100 characters')
        .meta({ inputType: 'text' }),
      city: Yup.string()
        .required('City is required')
        .max(50, 'City can\'t exceed 50 characters'),
      state: Yup.string()
        .required('State is required')
        .max(50, 'State can\'t exceed 50 characters')
        .meta({ inputType: 'text' }),
      country: Yup.string()
        .required('Country is required')
        .max(50, 'Country can\'t exceed 50 characters')
        .meta({ inputType: 'text' }),
      pincode: Yup.string()
        .required('Pincode is required')
        .matches(/^\d{6}$/, 'Pincode must be exactly 6 digits')
        .meta({ inputType: 'text' }),
      createTickets: Yup.array().of(
          Yup.object().shape({
            ticketType: Yup.string()
              .required('Ticket type is required')
              .meta({ inputType: 'text' }),
            amount: Yup.number()
              .required('Amount is required')
              .positive('Amount must be greater than zero')
              .meta({ inputType: 'text' }),
            quantity: Yup.number()
              .required('Quantity is required')
              .min(1, 'Quantity must be at least 1')
              .meta({ inputType: 'text' }),
          })
        ).min(1, 'At least one ticket must be provided')
        .meta({ inputType:'array' }),
      termsAndConditions: Yup.array().of(
          Yup.object().shape({
            title: Yup.string()
              .required('Title is required')
              .meta({ inputType: 'text' }),
            description: Yup.string()
              .required('Description is required')
              .meta({ inputType: 'textarea' }),
          })
        )
        .meta({ inputType:'array' })
  });
  

  const handleSubmit = async (values:any) => {
    console.log("values...",values)
  }

  if(false){
    return <Loader classname={'flex h-screen justify-center items-center'} size={'size-12'}/>
  }

  return(
    <div className="mx-auto max-w-7xl py-4">
        <Header title="Create Event" />
        <div className='px-6 py-8 border rounded-md border-gray-300'>
          <div className=''>
            <h2 className="text-base font-semibold leading-6 text-text mb-8">Event Details</h2>
            <Form
              initialValues={initialValues}
              fieldOptions={undefined}
              schema={clientDetailsSchema}
              onSubmit={handleSubmit}
              disabledFields={[]}
            />
          </div>
        </div>
      </div>
  )
}

export default withAdminLayout(CreateEvent)