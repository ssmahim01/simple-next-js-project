"use client"
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs';

const Logout = () => {
    return (
        <div>
             <LogoutLink
                className="btn btn-sm bg-rose-500 border-none text-white font-bold px-6"
              >
                Log Out
              </LogoutLink>
        </div>
    );
};

export default Logout;