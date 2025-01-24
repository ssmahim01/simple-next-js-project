import Link from "next/link";
import Logout from "@/app/logout/page";
import Login from "@/app/login/page";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
  const {getUser} = getKindeServerSession();
  const user = await getUser();
  const links = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/profile">Profile</Link>
      </li>
    </>
  );
  return (
    <div className=" bg-base-200">
      <div className="navbar container mx-auto">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Blogopedia</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <div className="mr-3">
                <img
                  src={user?.picture}
                  alt="user image"
                  className="w-10 h-10 object-cover rounded-full border border-gray-300 p-0.5"
                ></img>
              </div>
              <Logout />
            </>
          ) : (
            <Login />
          )}
        </div>
      </div>
    </div>
  );
}

// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import NavbarClient from "./NavbarClient";

// const Navbar = async () => {
//   const { getUser } = getKindeServerSession();
//   const user = await getUser();

//   return <NavbarClient user={user} />;
// };

// export default Navbar;