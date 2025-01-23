import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarClient from "./NavbarClient";

const Navbar = async () => {
  const session = await getKindeServerSession();
  const isAuthenticated = await session?.isAuthenticated();

  return <NavbarClient isAuthenticated={isAuthenticated} />;
};

export default Navbar;