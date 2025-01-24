"use client"
import { RegisterLink } from '@kinde-oss/kinde-auth-nextjs';

const Register = () => {
    return (
                <RegisterLink
                    className="btn bg-teal-600 border-none text-white font-bold btn-sm px-6"
                >
                    Register
                </RegisterLink>
    );
};

export default Register;