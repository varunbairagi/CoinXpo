import React from 'react'

const Profilepage = () => {
  return (
    <>


<div className="flex h-screen items-center justify-center bg-gradient-to-b from-sky-500 to-violet-900">
  <div className="max-w-xs rounded-2xl border bg-white p-10 text-center shadow-lg">
    <img className="mx-auto mb-4 h-32 w-32 rounded-full shadow-lg" src="" />
    <h1 className="text-xl font-semibold text-slate-800">Varun Bairagi</h1>
    <h2 className="font-semibold text-slate-500">Email</h2>
    
    
    <button className="mt-8 rounded-3xl border-2 border-solid border-violet-900 px-5 py-2 font-semibold uppercase tracking-wide text-violet-900 hover:bg-violet-900 hover:text-white">
      your Orders
    </button>
  </div>
</div>


    </>
  )
}

export default Profilepage