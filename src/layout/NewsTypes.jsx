import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import LinearProgress from "@mui/material/LinearProgress";

export default function NewsTypes() {
  // ****** Api States ******
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // ****** Functions ******
  const getData = async () => {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=top&apiKey=7e1628d613e741f0a7d9fdd4d88e2558"
    );
    if (response.ok) {
      const responses = await response.json();
      const data = responses.articles;
      setNews(data);
      setLoading(true);
    } else {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    <div className="absolute top-52 w-screen">
      {/* <LinearProgress /> */}
    </div>;
  } else if (error) {
    <div>
      <span>
        Some Error Occured Please Check your Internet Connection or Try again
        Later{" "}
      </span>
    </div>;
  }

  return (
    <>
      <div className="">
        <div className="bg-slate-200">
          {/* Editor's Choice front Page*/}
          <div id="head" className="mt-0.5 relative text-center lg:text-left lg:mx-12 -my-10 -top-4 pt-10 rounded-full w-fit px-10 lg:px-0">
            <span className="text-2xl md:text-3xl lg:text-4xl text-gray-600">
              Editor's Choice
            </span>
          </div>
          <hr />
          <div id="topCols" className="flex flex-col lg:flex-row p-6 bg-slate-200">
            <div className="border-4 p-4">
            {news[0]? (
              <>
                <div className="flex-grow">
                  <div className="flex flex-col">
                    <div id="image" className="my-3">
                      <img
                        src={news[0].urlToImage}
                        className="h-[20rem] lg:h-[28rem] rounded-lg shadow-2xl"
                        alt=""
                      />
                    </div>
                    <div id="title" className="my-3 ">
                      <a href={news[0].url}>
                        <span className="text-lg md:text-xl lg:text-2xl hover:underline">
                          {news[0].title}
                        </span>
                      </a>
                    </div>
                    <div
                      id="description"
                      className="text-lg md:text-xl lg:text-2xl"
                    >
                      <span className="text-gray-700">
                        {news[0].description}
                      </span>
                    </div>  
                    <div
                      id="publicationData"
                      className="flex flex-col md:flex-row"
                    >
                      <div className="my-1 mr-3">
                        <span className="text-gray-700">
                          Published by:- {news[0].author}
                        </span>
                      </div>
                      <div className="my-1 mr-3">
                        <span className="text-gray-700">
                          Published On:- {news[0].publishedAt}
                        </span>
                      </div>
                      <div className="my-1 mr-3">
                        <span className="text-gray-700">
                          Source:- {news[0].source.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) :  (
              <div className="relative border-2 border-black">  
                <span>No news for now</span>
              </div>
            )}
            </div>
            <div className="flex flex-col m-0 lg:m-5 h-fit">
              <div className="w-[20rem] md:w-[46rem] lg:w-[40rem] h-fit">
                  {news[1]? (
                    <div>
                        <div className="my-3 bg-white rounded-xl m-4 p-6 hover:shadow-2xl hover:scale-105 transition">
                            <div id="image" className="float-left">
                                <img src={news[1].urlToImage} alt="" className="w-48 h-44 m-3 rounded-lg"/>
                            </div>
                            <div>
                              <div id="title" className="my-3">
                                  <span className="text-xl">{news[1].title}</span>    
                              </div>
                              <div id="description" className="my-3">
                                  <span className="text-lg text-gray-500">{news[1].description}</span>
                              </div>
                            </div>
                            <div
                              id="publicationData"
                              className="flex flex-col md:flex-row px-2"
                            >
                              <div className="mr-3">
                                <span className="text-gray-700 text-sm">
                                  Published by:- {news[1].author}
                                </span>
                              </div>
                              <div className="mr-3">
                                <span className="text-gray-700 text-sm">
                                  Published On:- {news[1].publishedAt}
                                </span>
                              </div>
                              <div className="mr-3">
                                <span className="text-gray-700 text-sm">
                                  Source:- {news[1].source.name}
                                </span>
                              </div>
                            </div>
                        </div>
                    </div>
                  ):(
                    <div>
                      <span className="text-2xl text-gray-500 font-normal">Please check your Internet Connection</span>
                    </div>
                  )}
              </div>
              <div className="w-[20rem] md:w-[46rem] lg:w-[40rem] h-fit">
                {news[2]? (
                    <div className="mt-10 ">
                        <div className="my-3 bg-white rounded-xl m-4 p-6 hover:shadow-2xl hover:scale-105 transition">
                            <div id="image" className="float-left">
                                <img src={news[2].urlToImage} alt="" className="w-48 h-44 m-3 rounded-lg"/>
                            </div>
                            <div>
                              <div id="title" className="my-3">
                                  <span className="text-xl">{news[2].title}</span>    
                              </div>
                              <div id="description" className="my-3">
                                  <span className="text-lg text-gray-500">{news[2].description}</span>
                              </div>
                            </div>
                            <div
                              id="publicationData"
                              className="flex flex-col md:flex-row px-2"
                            >
                              <div className="mr-3">
                                <span className="text-gray-700 text-sm">
                                  Published by:- {news[2].author}
                                </span>
                              </div>
                              <div className="mr-3">
                                <span className="text-gray-700 text-sm">
                                  Published On:- {news[2].publishedAt}
                                </span>
                              </div>
                              <div className="mr-3">
                                <span className="text-gray-700 text-sm">
                                  Source:- {news[2].source.name}
                                </span>
                              </div>
                            </div>
                        </div>
                    </div>
                  ):(
                    <div>
                      <span className="text-2xl text-gray-500 font-normal">Please check your Internet Connection</span>
                    </div>
                  )}
            </div>
            </div>

          </div>
          <hr/>
          <div className="mx-7 md:mx-20 lg:mx-36 my-36 h-fit shadow-xl shadow-gray-600 rounded-2xl p-1 md:p-3 lg:p-5 bg-white">
          {news.map((data,key)=>(
            <div className="flex flex-col h-fit items-center">
              {key > 2 && key <= news.length ? (
                <>
                <div className="my-3 bg-white rounded-xl m-4 p-14 w-full" key={key}>
                <div id="image" className="float-left hover:scale-110 transition">
                    <img src={data.urlToImage} alt="" href={data.url} className="hover:shadow-2xl relative w-44 h-44 mr-3 rounded-lg"/>
                </div>
                <div>
                  <div id="title" className="my-3">
                      <a href={data.url}>
                      <span className="text-xl hover:underline  ">{data.title}</span>    
                      </a>  
                  </div>
                  <div id="description" className="my-3">
                      <span className="text-lg text-gray-500">{data.description}</span>
                  </div>
                </div>
                <div
                  id="publicationData"
                  className="flex flex-col md:flex-row px-2"
                >
                  <div className="mr-3">
                    <span className="text-gray-700 text-sm">
                      Published by:- {data.author}
                    </span>
                  </div>
                  <div className="mr-3 overflow-x-hidden">
                    <span className="text-gray-700 text-sm">
                      Published On:- {data.publishedAt}
                    </span>
                  </div>
                  <div className="mr-3">
                    <span className="text-gray-700 text-sm">
                      Source:- {data.source.name}
                    </span>
                  </div>
                </div>
              </div>
                </>
              ):(
                <>
                </>
              )}
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
