import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {myRouter} from "./router"



ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={myRouter}/>
)
