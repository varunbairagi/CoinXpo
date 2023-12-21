import React,{useState} from "react";
// import logo from "../log-crypto.png"
import { NavLink } from "react-router-dom";
import { data } from "../tdata";
import "./Style/N.css"
const Nav = ({}) => {
  const[val,setVal]=useState("")
  const[ham,setHam]=useState("nn");
  const[mag,setMag]=useState("nn")
  const[filtered,setFiltered]=useState()
  // const smag=()=>{
  //   mag=='nn'?setMag("blk"):setMag("nn")
    
  // }
  const shw=()=>{
      ham==="nn"?setHam("blk"):setHam("nn")
      mag=='nn'?setMag("blk"):setMag("nn")
      
  }
  const key=(e)=>{
    console.log(e.key)
    if(e.key==='Enter') {
      if(ham=='blk'){
      shw()}
    }
  }
  const Filter=()=>{
     setFiltered(data.coins.filter(function (res) { return res.name.toLowerCase().includes(val)}))
     console.log(filtered)
  }
  const input=(e)=>{
    
    setVal(String(e.target.value))
    Filter()
    console.log(val)
  }
  
  return (
    
    
    <>
        
        
        <div className="nav-cont">
      <div className="cont-1">

        <div className="img-div">
          <img src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
          <p>CoinXpo</p>
        </div>
        <div className="lks">
          <ul>
          <NavLink to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink to='/allcoins'>
            <li>CryptoCurrecies</li>
          </NavLink>
          <NavLink to='/marketcap'>
            <li>MarketCap</li>
          </NavLink>
          <NavLink to='/about'>            
            <li>About</li>
          </NavLink>
          </ul>
        </div>
        <div className="icn-cont">
            <div className="icn">
            <i class="fa-solid fa-magnifying-glass"/>
              <input type="text" name="cname" id="cname" placeholder="Search here" onChange={input} onKeyDown={key}/> 
            </div>
            <i id='mag' className="fa-solid fa-magnifying-glass px-2 py-3 hover:text-blue-700" onClick={()=>shw()}/>
          <i className="fa-solid fa-cart-shopping px-3 py-3 hover:text-blue-700" />
          <i className="fa-solid fa-user px-3 py-3 hover:text-blue-700" />
          <i id="hamb" className={`fa-solid fa-bars px-3 py-3 hover:text-blue-700`} onClick={()=>shw()}/>
        </div>
      </div>
      <div className={`icn-2 ${mag}`}>
            <i class="fa-solid fa-magnifying-glass"/>
              <input type="text" name="cname" id="cname" placeholder="Search here" onChange={input} onKeyDown={key}/> 
            </div>
      <div className={`cont-2 ${ham}`}>
      
      <div className='lks-2'>
          <ul onClick={()=>shw()}>
          <NavLink to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink to='/allcoins'>
            <li>CryptoCurrecies</li>
          </NavLink>
          <NavLink to='/marketcap'>
            <li>MarketCap</li>
          </NavLink>
          <NavLink to='/about'>            
            <li>About</li>
          </NavLink>
          </ul>
        </div>
      </div>
      </div>


{/* <nav className="nav bg-white border-gray-200 dark:bg-gray-900">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link to='/' className="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">CoinXpo</span>
  </Link>
  <div className="flex md:order-2">
  <i className="fa-solid fa-cart-shopping px-4 py-3 hover:text-blue-700"/>
  <i className="fa-solid fa-user px-4 py-3 hover:text-blue-700"/>
    <button type="button" onClick={set} data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      <span className="sr-only">Search</span>
    </button>
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." onChange={input}/>
    </div>
    <button data-collapse-toggle="navbar-search" onClick={set} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
    <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${dis}`} id="navbar-search" >
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round"strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." onChange={input}/>
      </div>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <Link to='/'>
        <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          Home
        </li>
        </Link>
        <Link to='/allcoins'>
        <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          CryptoCurrencies
        </li>
        </Link>
        <Link to='marketcap'>
        <li className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
          MarketCap
        </li></Link>
      </ul>
    </div>
  </div>
</nav> */}



    </>
  )
}

export default Nav;