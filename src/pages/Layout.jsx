import { Outlet } from "react-router-dom";
import { AuthLayout, BottomBar, Header, SideBar, TopBar } from "../components";
import { SignedIn, SignedOut } from "@clerk/clerk-react";

const Layout = () => {
  return (
    <>
      <SignedOut>
        <AuthLayout />
      </SignedOut>
      <SignedIn>
        <div className="w-full md:flex">
          <section className="w-full flex justify-between items-start">
          <SideBar />
          <Header/>
          </section>
          <TopBar />
          <section className="flex flex-1 h-full">
            <Outlet />
          </section>
          {/* <BottomBar /> */}
        </div>
      </SignedIn>
    </>
  );
};

export default Layout;
