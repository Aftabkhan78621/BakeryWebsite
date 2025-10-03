import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'

const App = ()=>{
    return(
        <>
        <div className='w-[1590px]' >
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
        </div>
        </>
    )
}
export default App
