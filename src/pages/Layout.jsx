import { Outlet } from "react-router-dom";
import { Header } from "../components";
import '../App.css'

const Layout = () => {
  return (
    <>
        <div className="w-full h-screen max-w-[1440px] mx-auto bg-black text-white">
          <Header />
          <Outlet />
        </div>
    </>
  );
};

export default Layout;
