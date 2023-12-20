import { Outlet } from "react-router-dom";
import { Header } from "../components";
import '../App.css'

const Layout = () => {
  return (
    <>
        <div className="w-full h-screen mx-auto bg-black text-white">
          <Header />
          <div className="w-full max-w-[1920px] mx-auto p-5">
          <Outlet />
          </div>
        </div>
    </>
  );
};

export default Layout;
