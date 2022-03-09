import { useContext } from "react";
import "./nav.css";
import NavItem from './NavItem';
import { MenuItems } from './utils';
import useNav from '../../hooks/useNav';
import { BiLogOutCircle } from 'react-icons/bi';
import { UserContext } from '../../App';

const Nav = () => {
  const { user, setUser } = useContext(UserContext);

  const { activeNav, navItemOnClickHandler } = useNav();

  return (
    <nav>
      {MenuItems.map(item => <NavItem href={item.href} onClick={() => navItemOnClickHandler(item.href)} isActive={activeNav === item.href}>{item.children}</NavItem>)}
      {user.name && <NavItem href="#test" onClick={() => {
        alert("Signed out!!"); setUser({
          email: "",
          name: "",
          jobTitle: "",
        })
      }} isActive={false}><BiLogOutCircle /></NavItem>}
    </nav>
  )
}

export default Nav