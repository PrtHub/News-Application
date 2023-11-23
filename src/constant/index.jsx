import { AiOutlineHome } from "react-icons/ai";
import { IoNewspaperOutline } from "react-icons/io5";
import { BiCategory , BiNews} from "react-icons/bi";

const Navlinks = [
    {
        icon: <AiOutlineHome/>,
        route: "/",
        label: "Home",
    },
    {
        icon: <IoNewspaperOutline/>,
        route: "/explore",
        label: "Explore",
    },
    {
        icon: <BiCategory/>,
        route: "/categories",
        label: "Categories",
    },
    {
        icon: <BiNews/>,
        route: "/top-headlines",
        label: "Top Headlines",
    },
]

export default Navlinks;
