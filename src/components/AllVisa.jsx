import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Visa from './Visa';

const AllVisa = ({alldata}) => {
   
    const visaData = useLoaderData()
  
    return (
        <div className='container w-11/12 mx-auto mt-10 mb-10 '>
          <Navbar></Navbar>
          <h2 className='text-center text-2xl'>All Visa </h2>
          <div className='grid grid-cols-4 gap-10'>
            {
              visaData.map(visa => <Visa visa={visa} key={visa._id}> </Visa> )
            }
          </div>
          <Footer></Footer>
        </div>
    );
};

export default AllVisa;

