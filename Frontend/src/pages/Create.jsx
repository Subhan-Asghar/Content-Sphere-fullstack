import React, { useState, useRef,useMemo  } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import JoditEditor from 'jodit-react'

const Create = () => {
  const editor = useRef(null)
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const config = useMemo(() => ({
    height: 400, 
     
  }), []);
  const Submit = () => {
    const data = {
      title,
      author,
      content
    }
    try {
      axios.post('http://localhost:3000/create', data)
        .then((res) => {
          console.log(res.data.message)
          window.location.reload();

        })
    } catch (err) {
      console.log("Error", err)
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
  
          <form onSubmit={Submit}>
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-3xl font-bold text-teal-800'>Create New Blog</h1>
            <button
              type='submit'
              className='bg-teal-600 text-white hover:bg-teal-700 rounded-lg px-6 py-3 font-medium shadow-md transition duration-300'
            >
              Create Blog
            </button>
          </div>
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
              <label htmlFor='content' className='block text-gray-700 text-sm font-medium mb-2'>Content:</label>
              <JoditEditor
                ref={editor}
                value={content}
                config={config} // Pass configuration with height setting
                onChange={(newContent) => setContent(newContent)}
                required
              />
            </div>
           
          </form>
        </div>
      </div>
    </>
  );
}

export default Create;
