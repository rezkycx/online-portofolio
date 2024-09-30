import { createBrowserRouter } from "react-router-dom"
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Skills from './pages/Skills'
import Interest from './pages/Interest'
import Awards from './pages/Awards'
import MainLayout from "./layouts/MainLayout"
const router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout/>,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/experience',
                element: <Experience />
            },
            {
                path: '/skills',
                element: <Skills />
            },
            {
                path: '/interest',
                element: <Interest />
            },
            {
                path: 'awards',
                element: <Awards />
            },

        ]
    }
])

export default router