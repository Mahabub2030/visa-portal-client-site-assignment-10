import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../AuthProvider.jsx/AuthProvider";

const Navbar = () => {

  const {user, userLogOut} = useContext(Authcontext)
  const handelLogOute = () =>{
    userLogOut()
  }
  const links = <>
    <li className="text-lg font-bold"><NavLink to="/">Home</NavLink></li>
    <li className="text-lg font-bold"><NavLink to="/AllVisa">All visas</NavLink></li>
    <li className="text-lg font-bold"><NavLink to="/AddVisa">Add Visa</NavLink></li>
    <li className="text-lg font-bold"><NavLink to="/Myaddedvisa">My added visas</NavLink></li>
    <li className="text-lg font-bold"><NavLink to="/MyVisaApplication">My Visa applications</NavLink></li>
  </>
  return (
    <div>
      <div className="navbar text-gray-800 m-2 p-5 bg-[#83CD20]  shadow-2xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">
              {links}
            </ul>
          </div>
          <a className="text-xl">VISA NAVIGATOR</a>

          {/* remove */}
          <div className=" text-red-600 text-sm font-mono">
{
  user? user.email : "Please Log in"
}
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
         {links}
          </ul>
        </div>
        <div className="navbar-end">
        {
  user? <div> 
    <button onClick={handelLogOute} className="border px-5 py-1 rounded-lg font-medium">LogOut</button>
  </div> : 

<div className="space-x-2">
  <Link to={`/login`} >
  <button  className="border px-5 py-1 rounded-lg font-medium">LogIn</button>
  </Link>
  <Link to={`/register`} >
  <button  className="border px-5 py-1 rounded-lg font-medium">Register</button>
  </Link>
</div>


}
        </div>
      </div>
    </div>
  );
};

export default Navbar;



