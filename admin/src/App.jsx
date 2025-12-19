import { Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import Add from "./pages/add/Add"
import List from "./pages/list/List"
import Orders from "./pages/orders/Orders"
 import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
    <Navbar />
    <ToastContainer />
    <div className="app-content">
      <Sidebar />
      <Routes>
        <Route path="/add" element={<Add /> } />
        <Route path="/list" element={<List /> } />
        <Route path="/orders" element={<Orders /> } />
      </Routes>
    </div>
    </>
  )
}

export default App
