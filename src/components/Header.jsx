import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

const Header = () => {
  return (
    <>
      <header>
        <div className="flex justify-between">
          <SignedOut>
            <AuthLayout />
          </SignedOut>
          <SignedIn>
            <ul className="w-full flex items-center justify-between gap-5">
              <div>
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              </div>
              <UserButton afterSignOutUrl="/" />
            </ul>
          </SignedIn>
        </div>
      </header>
    </>
  );
};

export default Header;
