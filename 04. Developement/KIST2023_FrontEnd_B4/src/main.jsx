import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import House from './house.jsx'
import DistanceTravelled from './Car/DistanceTravelled.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <House/> */}
    <DistanceTravelled/>
  </React.StrictMode>,
)
