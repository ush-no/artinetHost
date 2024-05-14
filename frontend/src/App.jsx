import { useState, useEffect } from 'react'
import axios from "axios";
import "./index.css";


export default function App() {
  const[write, setWrite] = useState(" ");
  const[displayText, setDisplayText] = useState("Article ");
  const[title, setTitle] = useState(" ");
  const[displayTitle, setDisplayTitle] = useState("");
  const[data, setData] = useState([]);
  
 useEffect(()=>{
  const fetchData = async ()=>{
    try{
      const response = await axios.get("https://artinetserver-ushnos-projects.vercel.app/api/fetch");  {/* https://artinetserver-ushnos-projects.vercel.app    http://localhost:5173*/}
      setData(response.data);
    }catch(error){
      console.log("Error",error);
    }
  };
  fetchData();
}, []); 




  const handleDisplay = async(e)=>{
    e.preventDefault();
     setDisplayText(write);
     setDisplayTitle(title);
     try{
      const response = await axios.post("https://artinetserver-ushnos-projects.vercel.app/api/posts", {write, title});
      console.log("Article submit successfully", response.data);
      setTitle(" ");
      setWrite(" ");//clear after post
     }catch(error){
      console.error("cannot submit article", error);
     }
  }

  const handleWrite = (e) =>{
    setWrite(e.target.value);
  }
  
  const handleTitle= (e) =>{
    setTitle(e.target.value);
  }

  return (
    <div>      
    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
        {/*  <img src="./image.png" class="h-8" alt="Flowbite Logo" />  */}
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ArtiNet</span>
    </a>
    
     <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
    </button>  
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Post</a>
        </li>
        <li>
          <a href="#" className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Profile</a>
        </li>
        
      </ul>
    </div>
    </div>
</nav>


  

<div className='pt-5 pl-10'>

<label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title:</label>
<textarea id="title" rows="2" className="block p-2.5 resize-none w-60 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write the title..."
 value={title}
 onChange={handleTitle}
/> 

<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Article:</label>
<textarea id="article" rows="4" className="block p-2.5  resize-none w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."
 value={write}
 onChange={handleWrite}
/>


<button
        className="select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={handleDisplay} type="button"
      >post</button>
        
</div>


{/* <div className=" float-right top-20 left- right-40 z-50">
<span  className=" block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
{displayTitle}</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">
{displayText}
</p>
</span>
</div>  */}



<div  className="flex justify-end flex-wrap-reverse  top-20  z-50">{/*grid grid-cols-4 gap-4   flex flex-wrap-reverse*/}
{data.map((item)=>(
<span key={item._id}  className="block m-4  overflow-x-hidden  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
{item.title}</h5>
<p className="font-normal text-gray-700 dark:text-gray-400">
{item.content}
</p>
</span>
))}
</div> 



      
    </div>
  )
}
