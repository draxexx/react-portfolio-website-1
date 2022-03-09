import { useState, createContext, useEffect } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export const UserContext = createContext();

const App = () => {
  // defining states
  const [user, setUser] = useState({
    email: "",
    name: "",
    jobTitle: "",
  });

  // defining const variables
  // defining custom hooks

  // defining effects
  useEffect(() => {
    console.log("data fetching...");

    // will be called after 2000 ms
    // async
    return setTimeout(() => {
      const userData = {
        email: "test@hotmail.com",
        name: "John Kennen",
        jobTitle: "Full Stack Developer",
      };
      setUser(userData);
    }, 2000);
  }, [])

  // defining functions

  return (
    <UserContext.Provider value={{
      user, setUser
    }}>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </UserContext.Provider>
  )
}

export default App