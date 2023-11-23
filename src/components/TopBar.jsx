import { SignedIn, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <>
      <header>
        <div className="flex justify-between">
          {/* <SignedOut>
            <AuthLayout />
          </SignedOut> */}
          {/* <SignedIn>
            <ul className="w-full flex items-end justify-end gap-5 px-5 py-5">
             
            </ul>
          </SignedIn> */}
        </div>
      </header>
    </>
  );
};

export default TopBar;
