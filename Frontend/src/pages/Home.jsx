import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
const Home = () => {
  const[data,setdata]=useState([])
  useEffect(()=>{
    try{
      axios.get('http://localhost:3000')
      .then((res)=>
        {setdata(res.data.data)
        console.log(res.data.data)

      })
    }catch(err){
      console.log("Error",err)
    }
  },[])

  return (
    <>
    <div className='bg-gradient-to-r from-teal-900 via-teal-700 to-teal-900 flex justify-between items-center h-20 shadow-2xl'>
  <h3 className='text-white ml-8 text-4xl font-extrabold tracking-tight'>
    Content Sphere
  </h3>
  <button
    className='bg-teal-600 text-white hover:bg-teal-700 rounded-full h-12 px-6 mr-8 font-medium shadow-lg hover:shadow-2xl transition-all duration-300'
  >
    <Link to='/create' className='flex items-center justify-center h-full'>New Blog</Link>
  </button>
</div>

<div className='p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
  {data.length > 0 ? (
    data.map(blog => (
      <div key={blog._id} className='bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
        <h2 className='text-2xl font-bold text-teal-800 mb-3'>{blog.title}</h2>
        <p className='text-gray-800 mb-5'>Author: {blog.author}</p>
        <div className='flex space-x-4'>
          <Link 
            to={`/view/${blog._id}`} 
            className='bg-coral-500 text-black hover:bg-coral-600 rounded-lg px-5 py-2 font-medium shadow-md transition duration-300'>
            View
          </Link>
          <Link 
            to={`/update/${blog._id}`} 
            className='bg-teal-500 text-white hover:bg-teal-600 rounded-lg px-5 py-2 font-medium shadow-md transition duration-300'>
            Update
          </Link>
          <Link 
            to={`/delete/${blog._id}`} 
            className='bg-orange-500 text-white hover:bg-orange-600 rounded-lg px-5 py-2 font-medium shadow-md transition duration-300'>
            Delete
          </Link>
        </div>
      </div>
    ))
  ) : (
    <p className='text-gray-700 text-center'>No blogs available.</p>
  )}
</div>

    </>
  );
}

export default Home;
