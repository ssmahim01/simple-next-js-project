"use client"
import { LoginLink } from '@kinde-oss/kinde-auth-nextjs';

const Login = () => {
    return (
              <LoginLink
                className="btn bg-emerald-500 border-none text-white font-bold btn-sm px-6"
              >
                Login
              </LoginLink>
    );
};

export default Login;