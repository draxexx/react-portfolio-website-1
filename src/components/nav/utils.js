import {AiOutlineHome, AiOutlineUser} from "react-icons/ai";
import {BiBook, BiMessageSquareDetail} from "react-icons/bi";
import {RiServiceLine} from "react-icons/ri";

export const MenuItems = [
    {
        href:"#",
        children: <AiOutlineHome/>,
    },
    {
        href:"#about",
        children: <AiOutlineUser/>,
    },
    {
        href:"#experience",
        children: <BiBook/>,
    },
    {
        href:"#services",
        children: <RiServiceLine/>,
    },
    {
        href:"#contact",
        children: <BiMessageSquareDetail/>,
    },
];

