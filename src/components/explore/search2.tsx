import React, {memo} from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Search =() =>{
    
    const validationSchema = Yup.object({
        search: Yup.string()
          .required("Search term is missing")
          .min(2, "Minimum 2 characters"),
        genre: Yup.string().required("Please select a genre"),
    });
    
    const handleSubmit = (values: any) => {
        console.log("Form Values:", values);
    };

    return(
        <div className="w-full p-4 rounded-md ">
            <div className="flex items-center justify-center bg-black/80 rounded-lg">
                {/* <div className="flex flex-col items-center text-white mb-12 text-center">
                    <h1 className="mb-2 font-bold text-3xl">Enter The Realm Of Unforgettable Experiences</h1>
                    <p className="max-w-md ">Discover and book exclusive experiences across music, sports, festivals, and more. Get your hot seats and make memories</p>
                </div> */}
            
                <Formik
                    initialValues={{ search: "", genre: "" }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({  }) => (
                    <Form className="w-full">
                        <div className="flex items-center relative bg-transparent ">
                            <span className="absolute text-indigo-500 mr-2 left-2"><MagnifyingGlassIcon className="size-8"/></span>
                            <Field
                                type="text"
                                name="search"
                                placeholder="Search"
                                className="text-md bg-black/30 text-white border-[1px] border-[#393939] rounded-lg h-16 w-full pl-12 px-4 py-2"
                            />
                        </div>
                    </Form>
                    )}
                </Formik>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center space-x-4 text-white p-4 leading-loose">
                <div className="cursor-pointer">
                    Music Festival
                </div>
                <div className="cursor-pointer">
                    Corporate Retreat
                </div>
                <div className="cursor-pointer">
                    Esports Competition
                </div>
                <div className="cursor-pointer">
                    Art Exhibhition
                </div>
                <div className="cursor-pointer">
                    Comedy Show
                </div>
                <div className="cursor-pointer">
                    Concert
                </div>
            </div>
        </div>
    )
}

export default memo(Search)