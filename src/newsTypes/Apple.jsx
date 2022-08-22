import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
// import LinearProgress from '@mui/material/LinearProgress';

export default function Apple() {
  // ****** Api States ******
  const [news , setNews] = useState([]);
  const [loading , setLoading] = useState(false);
  const [error , setError] = useState(false);

  
  // ****** Functions ******
  const getData = async()=> {
    const response = await fetch("https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=7e1628d613e741f0a7d9fdd4d88e2558")
    if(response.ok) {
      const responses=await response.json()
      const data=responses.articles;
      setNews(data)
      setLoading(false);
    } else {
      setLoading(false);
      setError(true);
    }
  }

  useEffect(()=>{
    getData();
  },[])

  if(loading){
    <div className='absolute top-0 w-screen'>
      {/* <LinearProgress /> */}
    </div>
  } else if(error) {
    <div>
      <span className='text-white'>Some Error Occured Please Check your Internet Connection or Try again Later </span>
    </div>
  }

return (
<>
  {news?
  <div className='mx-0 lg:mx-24 p-9'>
  {news.map((data,index)=>(
    <div className='mt-20 bg-white p-3 md:h-64 rounded-xl grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 md:mr-44 lg:mr-72 md:border-0 h-fit  hover:shadow-2xl hover:scale-105 transition mb-6' key={index}>
          <div id="image" className='p-3'>
            <img src={data.urlToImage} alt={index} className='shadow-2xl border-2 border-white w-fit lg:w-52 h-52'/>
          </div>
          <div className='md:col-span-3 lg:col-span-5 m-3 p-3'>
            <div id="title" className='text-sm md:text-md lg:text-lg my-2 hover:underline'>
              <a href={data.url}>{data.title}</a>  
            </div>
            <div className="flex lg:flex-row flex-col">
              <div id="publishedBy" className='mx-3'>
                <span className='text-gray-500 text-normal text-sm'>Published By:- {data.author}</span>  
              </div>
              <div id="publishedOn">
                <span className='text-gray-500 text-normal text-sm'>Published On:- {data.publishedAt}</span>  
              </div>  
            </div>
            <div id='content' className='text-sm md:text-md lg:text-lg my-2'>
              {data.description}
            </div>
          </div>
        </div>
      ))}
  </div> :
  <div>
    <span className='Sorry no news available for now'></span>
  </div>  

}
</>
)
}
