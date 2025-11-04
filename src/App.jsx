import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Contarct from './Pages/Contarct'
import Layout from './layout/Layout'
import Notfound from './Pages/Notfound'

const App = () => {

  const MyRoute = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contract' element={<Contarct/>}/>
      <Route path='*' element={<Notfound/>}/>
    </Route>


  ))


  return (
    <>
    
    <RouterProvider router={MyRoute}/>
    </>
  )
}

export default App