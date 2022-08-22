import React from "react";
import { useState } from "react";
import Logo from "../images/logo.jpeg";
import {Link} from "react-router-dom";
import { Sling as Hamburger } from 'hamburger-react'

export default function Navbar() {
  // ****** States ******
  const [dropDown , setDropDown] =  useState(false)
  const [isOpen, setOpen] = useState(false)
  const [activeBorder , setActiveBorder] = useState(false);
  const [bB , setBB] = useState({})

  // ****** Functions ******
  const showList = ()=>{
    setDropDown(!dropDown);
    setOpen(!isOpen)
  }

  const active = (index)=>{
    nav.map((value,key)=>{
      if(index === key){
        setActiveBorder(true)
          setBB({data:`border-b-4 ${value.navColor}`,id:index})
          console.log("Key in else",key)
          console.log("Index in else",index)
        
      } 
    })
  }

  const nav = [
    {
      navName: "Top Headlines",
      navId: "1",
      navPath: "/topheadlines",
      navItemColor: "text-red-500",
      navColor: "border-b-red-500"
    },
    {
      navName: "National News",
      navId: "2",
      navPath: "/national",
      navItemColor: "text-white",
      navColor: "border-b-white"
    },
    {
      navName: "Business News",
      navId: "3",
      navPath: "/business",
      navItemColor: "text-cyan-500",
      navColor: "border-b-cyan-500"
    },
    {
      navName: "Apple",
      navId: "4",
      navPath: "/apple",
      navItemColor: "text-green-500",
      navColor: "border-b-green-500"
    },
    {
      navName: "BitCoin",
      navId: "5",
      navPath: "/bitcoin",
      navItemColor: "text-orange-500",
      navColor: "border-b-orange-500"
    },
    {
      navName: "Tech",
      navId: "6",
      navPath: "/tech",
      navItemColor: "text-violet-500",
      navColor: "border-b-violet-500"
    },
    {
      navName: "Sports News",
      navId: "7",
      navPath: "/sports",
      navItemColor: "text-blue-500",
      navColor: "border-b-blue-500"
    },
  ]

  return (
    <React.Fragment>
      <div className="bg-zinc-800 border-2 border-transparent h-full px-8 md:px-10 flex-flex-row">
        <div id="logo" className="grid float-left h-14 w-36 mx-0 m-2 mb-0">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-14 w-14 md:w-16" />  
          </Link>
        </div>
        <div className="lg:float-right lg:mt-5 relative mt-6 md:-right-36 right-20 lg:right-0">
          <span className="text-center text-white text-lg md:text-3xl lg:text-4xl font-light">
            News Arena
          </span>
        </div>
        <div className="hidden relative  lg:top-1 lg:flex py-3">
          <ul className="grid grid-cols-7 shrink w-max">
            {nav.map((data,key)=>(
              <li
              id={data.navId}
              key={key}
              className={`text-sm text-center p-2 my-1 mx-2  transition-all duration-700 hover:cursor-pointer ${activeBorder&&bB.id===key?`${bB.data}`:""} py-2`}
              >
                <Link
                 to={data.navPath}
                 onClick={()=>{active(key)}}
                 className={`${data.navItemColor} hover:text-white`}
                >
                  {data.navName}
                </Link>

              </li>
            ))}
          </ul>
        </div>
        <div className="relative h-fit lg:h-0 lg:hidden">
            <button 
            className="relative border-2 border-black p-1 lg:hidden rounded-lg float-right mt-1 -top-12"
            onClick={showList}
            >
              <span className="text-white text-3xl hover:text-gray-500">
               <Hamburger duration={0.8} toggled={isOpen} toggle={setOpen}  />
              </span>
            </button>
            {dropDown?(
              <div className="grid absolute h-max p-3 rounded-2xl bg-zinc-700 w-max -right-5 top-5">
                <ul className="flex flex-col">
                  <li className="bg-red-700 text-white text-center p-2 my-1 mx-2">
                    <Link onClick={showList} to="/topheadlines">Top Headlines</Link>
                  </li>
                  <li className="bg-sky-700 text-white text-center p-2 my-1 mx-2">
                    <Link onClick={showList} to="/business">Business News</Link>
                  </li>
                  <li className="bg-slate-700 text-white text-center p-2 my-1 mx-2">
                    <Link onClick={showList} to="/apple">Apple News</Link>
                  </li>
                  <li className="bg-lime-700 text-white text-center p-2 my-1 mx-2">
                    <Link onClick={showList} to="/bitcoin">BitCoin News</Link>
                  </li>
                  <li className="bg-fuchsia-700 text-white text-center p-2 my-1 mx-2">
                    <Link onClick={showList} to="/tech">Tech Crunch</Link>
                  </li>
                  <li className="bg-orange-700 text-white text-center p-2 my-1 mx-2">
                    <Link onClick={showList} to="/sports">Sports News</Link>
                  </li>
                  <li className="bg-white text-black text-center p-2 my-1 mx-2">
                    <Link onClick={showList} to="/national">National News</Link>
                  </li>
                </ul>
              </div>
            ):(
              <div>
                
              </div>
            )}
        </div>
      </div>
    </React.Fragment>
  );
}
