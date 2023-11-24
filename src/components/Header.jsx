import { useState } from "react";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import AuthLayout from "./AuthLayout";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  const [show, setShow] = useState(false);
  const [view, setView] = useState(false);

  return (
    <header>
      <div className="flex justify-between">
        <SignedOut>
          <AuthLayout />
        </SignedOut>
        <SignedIn>
          <nav className="w-full flex items-center lg:items-end justify-between gap-5 py-5 bg-red-500 px-5">
            {/* desktop */}
            <section className="hidden lg:flex items-end gap-10">
              <h1 className="uppercase text-4xl font-bold">Newz</h1>
              <ul className="flex gap-5 items-center text-lg font-semibold">
                <Link to="/">Home</Link>
                <Link to="/explore">Explore</Link>
                <Link to="/categories">Categories</Link>
                <Link to="/top-headlines">Top headlines</Link>
              </ul>
            </section>
            {/* mobile */}
            <section className="flex lg:hidden items-center gap-2 relative">
              <MdOutlineMenu
                onClick={() => setShow(!show)}
                className="text-3xl cursor-pointer"
              />
              <h1 className="uppercase text-2xl font-bold">Newz</h1>
              {show && (
                <ul className="absolute top-12 -left-4 w-fit px-5 py-4 bg-red-500 flex flex-col gap-4 text-lg font-semibold rounded z-40 slidebar">
                  <Link to="/">Home</Link>
                  <Link to="/explore">Explore</Link>
                  <Link to="/categories">Categories</Link>
                  <Link to="/top-headlines" className="whitespace-nowrap">
                    Top headlines
                  </Link>
                </ul>
              )}
            </section>

            <section className="flex items-center gap-5">
              <form className="w-full sm:bg-white flex items-center gap-2 px-2 text-gray-500 rounded">
                <IoIosSearch
                  className="text-2xl sm:text-lg cursor-pointer text-white sm:text-gray-500"
                  onClick={() => setView(!view)}
                />
                <input
                  type="text"
                  placeholder="Search for news"
                  className="outline-none py-1 hidden sm:block"
                />
                {view && (
                  <input
                    type="text"
                    placeholder="Search for news"
                    className="block sm:hidden w-full py-3 absolute top-16 right-0 z-50 px-5 rounded outline-none slidebar"
                  />
                )}
              </form>
              <UserButton afterSignOutUrl="/" />
            </section>
          </nav>
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
