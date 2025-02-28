import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Posts from './pages/Posts'
import Post from './pages/Post'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router=createBrowserRouter([
    {
        path:"/",
        element:<Posts />
    },
    {
        path:"/posts/:id",
        element:<Post />
    }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
