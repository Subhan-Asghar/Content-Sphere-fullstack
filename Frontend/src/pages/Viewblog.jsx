import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Viewblog = () => {
  const [htmlContent, setHtmlContent] = useState('');
  const[data,setdata]=useState([])
  const {id}=useParams();
  useEffect(()=>{
    try{
      axios.get(`http://localhost:3000/blog/${id}`)
      .then((res)=>
        {setdata(res.data.data)
          setHtmlContent(res.data.data.content)
        console.log(res.data.data)

      })
    }catch(err){
      console.log("Error",err)
    }
  },[id])

  return (
    <>
    <div className='bg-gradient-to-r from-teal-900 via-teal-700 to-teal-900 flex justify-between items-center h-20 shadow-2xl'>
        <h3 className='text-white ml-8 text-4xl font-extrabold tracking-tight'>
          Content Sphere
        </h3>
        <button
          className='bg-teal-600 text-white hover:bg-teal-700 rounded-full h-12 px-6 mr-8 font-medium shadow-lg hover:shadow-2xl transition-all duration-300'
        >
          <Link to='/' className='flex items-center justify-center h-full'>Blog</Link>
        </button>
      </div>
<div className='flex flex-col  justify-center mt-16'>
<div className='bg-white w-full h-auto p-6 rounded-xl shadow-lg '>
        <h2 className='text-2xl font-bold text-teal-800 mb-3'>Title: {data.title}</h2>
        <h2 className='text-xl font-semibold text-teal-800 mb-3'>Author: {data.author}
        </h2>
        <h2 className='text-xl pb- font-bold text-teal-800 mb-3'>Blog:</h2>
        <div className='border-black border-t-2 pt-5'
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
          </div>
        </div>
       
</>



  )
}

export default Viewblog