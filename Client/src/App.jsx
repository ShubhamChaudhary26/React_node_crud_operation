import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import User from './components/getUser/User'
import Add from './components/addUser/add'
import Edit from './components/updateUser/edit'

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<User/>,
    },
    {
      path:"/add",
      element:<Add/>,

    },
    {
      path:"/edit/:id",
      element:<Edit/>
    },
  ])

  return (
    <>
    <RouterProvider router={route} >
    </RouterProvider>
    </>
  )
}

export default App
