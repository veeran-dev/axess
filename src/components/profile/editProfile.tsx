import DynamicFormSkeleton from "@/components/form/dynamicFormLoader";
import Loader from "@/components/loader";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import * as Yup from 'yup';

const Form = dynamic(() => import('@/components/form/dynamicForm'), {
  ssr: false,
  loading:()=><DynamicFormSkeleton fieldCount={4}/>
});

const EditProfile = ()=>{

  // const {data, loading:userQueryLoading} = useGetUserQuery({variables:{
  //   id: userID
  // }})

  const data:any = {}

  const initialValues = useMemo(() => ({
    firstName: data?.getUser?.firstName ?? '',
    lastName: data?.getUser?.lastName ?? '',
    mobileNo: data?.getUser?.mobileNo?.toString() ?? '',
    email: data?.getUser?.email ?? '',

  }), [data]);

  const MAX_FILE_SIZE = 102400;

  const validFileExtensions = ['jpg', 'gif', 'png', 'jpeg', 'svg', 'webp'];

  const isValidFileType = (fileType:string) => validFileExtensions.includes(fileType);


  const profileValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First name is required')
      .min(2, 'First name must be at least 2 characters')
      .max(50, 'First name must be at most 50 characters'),
  
    lastName: Yup.string()
      .required('Last name is required')
      .min(2, 'Last name must be at least 2 characters')
      .max(50, 'Last name must be at most 50 characters'),
  
    mobileNo: Yup.string()
      .required('Mobile number is required')
      .matches(
        /^[6-9]\d{9}$/,
        'Mobile number must be a valid Indian number (10 digits starting with 6, 7, 8, or 9)'
      ),
  
    email: Yup.string()
      .required('Email is required')
      .email('Email must be a valid email address'),
    profileImage: Yup.mixed()
      .required('Profile image is required')
      .meta({ inputType: 'image' })
      .test(
        'is-valid-type',
        'Only JPEG or PNG images are allowed',
        (value:any) => value && isValidFileType(value.type)
      )
      .test(
        'is-valid-size',
        'Max allowed size is 100KB',
        (value:any) => value && value.size <= MAX_FILE_SIZE
      ),
  });
  

  const handleSubmit = async (values:any) => {
    console.log("values...",values)
  }

  if(false){
    return <Loader classname={'flex h-screen justify-center items-center'} size={'size-12'}/>
  }

  return(
    <div className="max-w-3xl py-4">
        <div className='px-6 py-8 border rounded-md border-gray-300'>
          <div className=''>
            <Form
              initialValues={initialValues}
              schema={profileValidationSchema}
              onSubmit={handleSubmit}
              disabledFields={[]}
            />
          </div>
        </div>
      </div>
  )
}

export default EditProfile