import {
  SignedIn,
  SignedOut,
  UserButton,
  useClerk,
} from "@clerk/clerk-react";
import { Link } from "react-router-dom";

function SignUpButton() {
    const clerk = useClerk();
  
    return (
      <button className="sign-up-btn" onClick={() => clerk.openSignUp({})}>
        Sign up
      </button>
    );
  }

function SignInButton() {
    const clerk = useClerk();
  
    return (
      <button className="sign-in-btn" onClick={() => clerk.openSignIn({})}>
        Sign in
      </button>
    );
  }

const Header = () => {
  return (
    <>
      <header>
        <div className="flex justify-between">
        <SignedOut>
          <ul>
            <li>
              <SignUpButton />
            </li>

            <li>
              <SignInButton />
            </li>
          </ul>
        </SignedOut>
          <SignedIn>
            <ul className="flex items-center gap-5">
              <Link to="/">Home</Link>
              <li>About</li>
              {/* <Link to="/products">Products</Link> */}
              <UserButton afterSignOutUrl="/" />
            </ul>
          </SignedIn>
        </div>
      </header>
    </>
  );
};

export default Header;
