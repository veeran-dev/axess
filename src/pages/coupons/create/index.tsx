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

const CreateCoupon = ()=>{

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
    createTickets: [{tickets: '', amount: 0, quantity: 0}]

  }), [data]);
  
  const status = {
    active: [
      { id: 'Enable', label: 'Enable' },
      { id: 'Disable', label: 'Disable' },
      { id: 'Draft', label: 'Draft' },
    ],
  };


  const couponDetailsSchema = Yup.object().shape({
    selectEvent: Yup.string()
      .required('Event is required'),
    couponCode: Yup.string()
      .required('Code is required'),
    discount: Yup.number()
        .required('discount is required')
        .max(50, 'coupon can/t exceed 50%'),
    expiresOn: Yup.date()
      .required('Event date is required')
      .min(new Date(), 'Event date cannot be in the past'),
    active: Yup.string()
      .oneOf(
        ['Enable', 'Disable', 'Draft'],
        'status must be selected'
      )
      .required('Country is required'),
  });
  

  const handleSubmit = async (values:any) => {
    console.log("values...",values)
  }

  if(false){
    return <Loader classname={'flex h-screen justify-center items-center'} size={'size-12'}/>
  }

  return(
    <div className="mx-auto max-w-7xl py-4">
        <Header title="Create Coupon" />
        <div className='px-6 py-8 border rounded-md border-gray-300'>
          <div className=''>
            <h2 className="text-base font-semibold leading-6 text-text mb-8">Coupon Details</h2>
            <Form
              initialValues={initialValues}
              fieldOptions={status}
              schema={couponDetailsSchema}
              onSubmit={handleSubmit}
              disabledFields={[]}
            />
          </div>
        </div>
      </div>
  )
}

export default withAdminLayout(CreateCoupon)