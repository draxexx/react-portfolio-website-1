import { useState, useEffect } from 'react';

const useNav = () => {
  // states
  const [activeNav, setActiveNav] = useState("#");

  // defining const variables

  // defining custom hooks

  // effects
  // will be called when activeNav changed
  useEffect(() => {
    console.log(activeNav);
  }, [activeNav])

  // will be called when the page build once
  useEffect(() => {
    console.log("rendered");
  }, [])

  // defining functions
  const navItemOnClickHandler = (href) => setActiveNav(href)

  // exports activeNav and navItemOnClickHandler
  return { activeNav, navItemOnClickHandler };
}

export default useNav