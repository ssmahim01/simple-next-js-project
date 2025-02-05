"use client";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import Login from "@/app/login/page";
import Register from "@/app/register/page";
import Logout from "@/app/logout/page";

const NavbarClient = ({ user }) => {
  // console.log(user.picture);

  // const issuerUrl = process.env.KINDE_ISSUER_URL;

  const routes = (
    <>
      <Link
        className="border border-gray-300 hover:bg-neutral hover:text-white rounded-md px-3 py-1 flex gap-2 items-center"
        href={"/"}
      >
        <FaHome className="text-xl" /> <span>Home</span>
      </Link>
      <Link
        className="border border-gray-300 hover:bg-neutral hover:text-white rounded-md px-3 py-1 flex gap-2 items-center"
        href={user ? "/profile" : "/api/auth/login"}
      >
        <BsPersonCircle className="text-xl" /> <span>Profile</span>
      </Link>
    </>
  );

  return (
    <div className="navbar py-2 bg-slate-50 fixed shadow-md lg:px-12 md:px-6 px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[5] mt-3 w-56 p-3 shadow *:text-base gap-3 mr-3 *:text-gray-800 *:font-bold"
          >
            {routes}
          </ul>
        </div>
        <a className="btn btn-ghost lg:text-3xl text-xl lg:pb-0 pb-1 font-bold">
          Blogs View
        </a>
      </div>
      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal *:text-base gap-3 mr-3 *:text-gray-800 *:font-bold px-1">
            {routes}
          </ul>
        </div>
        <div className="flex gap-3 items-center">
          {!user ? (
            <div className="flex gap-2 items-center">
             <Login />
             
             <Register />
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <img
                src={user?.picture}
                className="w-12 h-12 border-4 border-amber-400 rounded-full"
                alt="Profile picture of user"
                referrerPolicy="no-referrer"
              />
            <Logout />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarClient;
