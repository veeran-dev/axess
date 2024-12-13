import React, { memo } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const Search = () => {
  const validationSchema = Yup.object({
    search: Yup.string()
      .required('Search term is missing')
      .min(2, 'Minimum 2 characters'),
    genre: Yup.string().required('Please select a genre'),
  });

  const handleSubmit = (values: any) => {
    console.log('Form Values:', values);
  };

  return (
    <div className="bg-cover bg-center bg-black flex flex-col justify-center items-center">
      <Image 
        src="/home/searchBg.jpg"
        width={1080}
        height={1080} 
        alt={''} 
        layout='cover'
        objectFit='cover'
        style={{
            width: '100%',
            height: '640px',
            opacity: 0.6,
        }}
        />
      <div className="absolute">
        <div className="flex flex-col items-center text-white mb-12 text-center">
          <h1 className="mb-2 font-bold text-3xl ">
            Enter The Realm Of Unforgettable Experiences
          </h1>
          <p className="max-w-md ">
            Discover and book exclusive experiences across music, sports,
            festivals, and more. Get your hot seats and make memories
          </p>
        </div>
        <div className="w-full flex justify-center items-center p-4 rounded-md ">
          <div className="flex items-center justify-center bg-black/80 md:p-8 px-0 py-8 max-w-[1080px] rounded-lg">
            <Formik
              initialValues={{ search: '', genre: '' }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="w-full flex flex-row flex-wrap justify-between items-end md:space-x-4 space-y-4">
                  {/* Search Field */}
                  <div className="flex flex-col">
                    <label className="text-white mb-2">
                      Search your interest
                    </label>
                    <div className="flex items-center relative bg-transparent md:min-w-[320px] min-w-[240px] w-[380px]">
                      <span className="absolute text-indigo-500 mr-2 left-2">
                        <MagnifyingGlassIcon className="size-8" />
                      </span>
                      <Field
                        type="text"
                        name="search"
                        placeholder="Search"
                        className="text-md text-white bg-black/30 text-white border-[1px] border-[#393939] rounded-lg h-16 w-full lg:pl-12 px-12 py-2"
                      />
                    </div>
                    {/* <ErrorMessage
                                        name="search"
                                        component="div"
                                        className="text-red-500 text-sm mt-1"
                                    /> */}
                  </div>

                  <div className="flex flex-col">
                    <label className="text-white mb-2">Select Genre</label>
                    <div className="flex items-center relative bg-transparent ">
                      <Field
                        as="select"
                        name="genre"
                        className="text-md bg-black/30 text-white border-[1px] border-[#393939] rounded-lg w-[180px] h-16 px-4 py-2"
                      >
                        <option value="rock">Rock</option>
                        <option value="pop">Pop</option>
                        <option value="jazz">Jazz</option>
                        <option value="classical">Classical</option>
                      </Field>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="text-white border-[1px] border-[#393939] rounded-lg w-[180px] h-16 px-4 py-2 bg-black hover:border-[#797979]"
                    >
                      Explore
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="flex flex-row flex-wrap justify-center items-center space-x-4 text-white leading-loose">
          <div className='cursor-pointer hover:font-bold'>Music Festival</div>
          <div className='cursor-pointer hover:font-bold'>Corporate Retreat</div>
          <div className='cursor-pointer hover:font-bold'>Esports Competition</div>
          <div className='cursor-pointer hover:font-bold'>Art Exhibhition</div>
          <div className='cursor-pointer hover:font-bold'>Comedy Show</div>
          <div className='cursor-pointer hover:font-bold'>Concert</div>
        </div>
      </div>
    </div>
  );
};

export default memo(Search);
