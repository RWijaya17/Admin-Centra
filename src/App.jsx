import { useState } from 'react'
import './App.css'
import Dashboard from './Pages/Home/Dashboard.jsx'
import Account from './Pages/Account/Account.jsx' 
import Centra from './Pages/Centra/Centra.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Centra" element={<Centra />} />
        <Route path="/Account" element={<Account />} /> 
      </Routes>
    </Router>
  )
}

export default App

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Route,
//   Link,
// } from "react-router-dom";

// function App() {
//   const [count, setCount] = useState(0)

//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <Dashboard />
//       ),
//     },
//     {
//       path: "Centra",
//       element: <Centra />,
//     },
//     {
//       path: "Account",
//       element: <Account />,
//     },
//   ]);
  

//   return <RouterProvider router={router} />;
// }
