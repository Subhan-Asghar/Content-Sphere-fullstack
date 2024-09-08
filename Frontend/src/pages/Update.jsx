import React, { useState, useEffect,useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import JoditEditor from 'jodit-react'



const Update = () => {
  const editor = useRef(null)
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const {id}=useParams();
  const Submit=()=>{
    const data = {
      title,
      author,
      content
    }
    try{
      axios.put(`http://localhost:3000/blog/${id}`,data)
      .then((res)=>
        {
           console.log(res.data.message)

      })
    }catch(err){
      console.log("Error",err)
    }
  }
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

<div className='min-h-screen bg-gray-50 flex  justify-center p-6 '>
<div className='bg-white p-8 rounded-lg shadow-lg  w-full'>
  <h1 className='text-3xl font-bold text-teal-800 mb-6'>Update Blog</h1>
  <form onSubmit={Submit}>
    <div className='mb-4'>
      <label htmlFor='title' className='block text-gray-700 text-sm font-medium mb-2'>Title:
        
      </label>
      <input
        type='text'
        id='title'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500'
        required
      />
    </div>
    <div className='mb-4'>
      <label htmlFor='author' className='block text-gray-700 text-sm font-medium mb-2'>
        Author:

      </label>
      <input
        type='text'
        id='author'
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className='w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500'
        required
      />
    </div>
    <div className='mb-6'>
      <label htmlFor='content' className='block text-gray-700 text-sm font-medium mb-2'>
        Content:</label>

      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}                required
      />
    </div>
    <button
      type='submit'
      className='bg-teal-600 text-white hover:bg-teal-700 rounded-lg px-6 py-3 font-medium shadow-md transition duration-300'
    >
      Update Blog
    </button>
  </form>
</div>
</div>
</>
  )
}

export default Update