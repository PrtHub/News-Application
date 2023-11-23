import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import AuthLayout from "./AuthLayout";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="flex justify-between">
        <SignedOut>
          <AuthLayout />
        </SignedOut>
        <SignedIn>
          <ul className="w-full flex items-center justify-between gap-5 py-5">
            <li className=" flex gap-5 items-center">
              <Link to="/">Home</Link>
              <Link to="/explore">Explore</Link>
              <Link to="/categories">Categories</Link>
              <Link to="/top-headlines">Top headlines</Link>
            </li>
            <UserButton afterSignOutUrl="/" />
          </ul>
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
