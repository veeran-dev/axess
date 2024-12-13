// import DynamicFormSkeleton from "@/components/form/dynamicFormLoader";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
// import dynamic from "next/dynamic";
import { memo } from "react";

// const Form = dynamic(() => import('@/components/form/dynamicForm'), {
//   ssr: false,
//   loading:()=><DynamicFormSkeleton fieldCount={4}/>
// });

const Cancel = ()=>{

  // const {data, loading:userQueryLoading} = useGetUserQuery({variables:{
  //   id: userID
  // }})

  // const data:any = {}


  return(
    <div className="p-4">
      <div className="text-white font-bold text-xl mb-4">
        Cancel Ticket
      </div>
      <h2 className="font-bold">Digital Dialogue & Pandora Presents – Kaufmann</h2>
      <div>
        <div>Single Adult Pass</div>
        <div className="w-[90px]">
          <span><PlusIcon className="size-4"/></span>
          <input type="number" />
          <span><MinusIcon className="size-4"/></span>
        </div>
      </div>


    </div>
  )
}

export default memo(Cancel)