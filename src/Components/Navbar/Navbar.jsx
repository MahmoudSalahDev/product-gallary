import { NavLink } from "react-router-dom";
import logo from "../../assets/shopping.png"



export default function Navbar() {

   

    return (
        <>
            <nav className="nav bg-[#2c3e50] text-white py-[10px] fixed w-full transition-[padding] duration-500 z-50 px-[20px]">
                <div className="container flex flex-col lg:flex-row lg:justify-between lg:items-center gap-[10px]">
                    <div className="flex justify-between items-center">
                        <NavLink to="/" className="flex items-center gap-2"><img src={logo} alt=""  className="max-w-[60px]"/><h2 className="text-[calc(1.325rem+.9vw)]">Product Gallary</h2></NavLink>
                        <a className="text-[30px] lg:hidden cursor-pointer" onClick={() => {
                            document.getElementById("tabs").classList.toggle("hidden")
                        }}><i className="fa-solid fa-bars"></i></a>
                    </div>
                    <div className="flex-col lg:flex-row hidden items-center  h-auto overflow-hidden py-3 lg:h-auto lg:flex" id="tabs">
                        <ul className="uppercase flex  flex-col lg:flex-row items-center lg:items-center gap-[20px]">
                        <li><NavLink onClick={() => {
                                if (window.innerWidth < 992) {
                                    document.getElementById("tabs").classList.toggle("hidden")
                                }
                            }} to="/" className={({ isActive }) => {
                                return `p-[8px] font-bold rounded-md block ${isActive ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" : ""}`
                            }}>home</NavLink></li>
                            <li><NavLink onClick={() => {
                                if (window.innerWidth < 992) {
                                    document.getElementById("tabs").classList.toggle("hidden")
                                }
                            }} to="/products" className={({ isActive }) => {
                                return `p-[8px] font-bold rounded-md block ${isActive ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" : ""}`
                            }}>products</NavLink></li>
                            <li><NavLink onClick={() => {
                                if (window.innerWidth < 992) {
                                    document.getElementById("tabs").classList.toggle("hidden")
                                }
                            }} to="/cart" className={({ isActive }) => {
                                return `p-[8px] font-bold rounded-md block ${isActive ? "bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" : ""}`
                            }}>cart</NavLink></li>
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}