import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarClient from "./NavbarClient";

const Navbar = async () => {
  const session = await getKindeServerSession();
  const isAuthenticated = await session?.isAuthenticated();
  const user = await session?.getUser();

  return <NavbarClient isAuthenticated={isAuthenticated} user={user} />;
};

export default Navbar;