"use client";
import Link from "next/link";

const NavbarClient = ({ isAuthenticated, user }) => {
  // console.log(user.picture);

  const routes = (
    <>
      <Link href="/">Home</Link>
      <Link href="/profile">Profile</Link>
    </>
  );

  return (
    <div className="navbar bg-base-100 fixed shadow-md md:px-12 px-6">
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
        <a className="btn btn-ghost text-xl font-bold">My Blogs</a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal *:text-base gap-3 mr-3 *:text-gray-800 *:font-bold px-1">
          {routes}
        </ul>
      </div>
      <div className="flex gap-3 items-center">
        {!isAuthenticated ? (
          <Link
          href="/api/auth/login"
            className="btn bg-emerald-500 border-none text-white font-bold btn-sm px-6"
          >
            Login
          </Link>
        ) : (
         <div className="flex gap-2 items-center">
          <img src={user?.picture}
           className="w-12 h-12 border-4 border-amber-400 rounded-full"
           alt="Profile picture of user"
           referrerPolicy="no-referrer"
           />

           <Link
          href="/api/auth/logout"
            className="btn btn-sm bg-rose-500 border-none text-white font-bold px-6"
          >
            Log Out
          </Link>
         </div>
        )}
      </div>
    </div>
  );
};

export default NavbarClient;
