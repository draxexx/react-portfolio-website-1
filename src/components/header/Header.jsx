import { useContext } from "react";
import "./header.css";
import CTA from './CTA';
import ME from "../../assets/me.png"
import HeaderSocials from './HeaderSocials';
import useUser from '../../hooks/useUser';
import { UserContext } from '../../App';

const Header = () => {
  const { user } = useContext(UserContext);

  // const [{ name, jobTitle }, isLoading] = useUser();

  return (
    <header>
      <div className="container header__container">
        {/* {!isLoading ? <>
          <h5>Hello I'm</h5>
          <h1>{user.name}</h1>
          <h5 className="text-light">{user.jobTitle}</h5>
        </> : <h5>Loading...</h5>} */}
        {user.name ? <>
          <h5>Hello I'm</h5>
          <h1>{user.name}</h1>
          <h5 className="text-light">{user.jobTitle}</h5>
        </> : <h5>Loading...</h5>}
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header