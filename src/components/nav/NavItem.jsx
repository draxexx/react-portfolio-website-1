const NavItem = ({href, onClick, isActive, children}) => {
  return (
    <a href={href} onClick={onClick} className={isActive ? "active": ""}>{children}</a>
  )
}

export default NavItem