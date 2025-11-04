import React from 'react'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import About from './Pages/About'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Contarct from './Pages/Contarct'
import Layout from './layout/Layout'

const App = () => {

  const MyRoute = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contract' element={<Contarct/>}/>
    </Route>


  ))


  return (
    <>
    
    <RouterProvider router={MyRoute}/>
    </>
  )
}

export default App