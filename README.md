# Getting Started with Create React App

### To create React project:

`npx create-react-app react-portfolio-website-1`

### Initial CSS style:

```css
*{
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none ;
}

html{
    scroll-behavior: smooth; 
}

::-webkit-scrollbar{
     display: none;
}

body{
    font-family: 'Poppins', sans-serif;
    background: var(--color-bg);
    color: var(--color-white);
    line-height: 1.7;
    /* background-image: url(../src/assets/bg-texture.png); */
}
```

### Defining the variables in CSS:

```css
:root{
    --color-bg: #1f1f38;
    --color-bg-variant: #2c2c6c;
    --color-primary: #4db5ff;
    --color-primary-variant: rgba(77, 181, 255, 0.4);
    --color-white: #fff;
    --color-light: rgba(255, 255, 255, 0.6);

    --container-width-lg: 75%;
    --container-width-md: 86%;
    --container-width-sm: 90%;
}
```

### To add Google Fonts, import it in the `.css` file:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
```

### To install react icons:

Go to [link](https://react-icons.github.io/react-icons/).

### To draw line in the CSS:

```css
.header__socials::after{
    content: "";
    width: 1px;
    height: 2rem;
    background: var(--color-primary);
}
```

### To center the class:

```css
position: absolute;
    left: 50%;
    transform: translateX(-50%);
```

### To center an item on the page all the time:

>It will be on the page all the time because it's `position` is `fixed`. Also it's `z-index` equals `2`, so it will be top of the other objects.

```css
z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
```

### Defining `useState`:

```js
const [activeNav, setActiveNav] = useState("#");
```

### Set clicked menu item background different from the others:

>To notice changes, we use `useState`

>In the logic, when we click on the item, we set state variable as id of the item. In the `className` of the item, we check it's id equals to state variable or not. If it equals, then we set it's `className` as `active`. Therefore, it's background will be different from the others.

```js
const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? "active" : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "active" : ""}><AiOutlineUser/></a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "active" : ""}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "active" : ""}><RiServiceLine/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "active" : ""}><BiMessageSquareDetail/></a>
    </nav>
  )
```

>CSS code to set selected item's background and color

```css
nav a.active{
    background: var(--color-bg);
    color: var(--color-white);
}
```

### To format codes while saving:

1. Create a `settings.json` file in the `.vscode` folder

```json
{
    "editor.formatOnSave": true,
}
```
### Creating custom component to prevent code repeat:

1. Create custom component:

>We can define props for the custom component `{href, onClick, isActive, children}`

```js
const NavItem = ({href, onClick, isActive, children}) => {
  return (
    <a href={href} onClick={onClick} className={isActive ? "active": ""}>{children}</a>
  )
}

export default NavItem
```

2. Create it's data:

>`export` the variable to access from other components

```js
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
```
3. Get the custom component from other components:

```js
{MenuItems.map(item => <NavItem href={item.href} onClick={() => navItemOnClickHandler(item.href)} isActive={activeNav === item.href}>{item.children}</NavItem>)}
```

### Creating hooks:

1. Create hook file:

```js
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
```

2. Get hook from the other components:

```js
  const { activeNav, navItemOnClickHandler } = useNav();
```

### Using createContext:

1. Create an `createContext` object

```js
export const UserContext = createContext();
```

2. Wrap the components with the `UserContext.Provider`

>`user` is a variable. `setUser` is a function to change the `user` variable.

```js
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
```

3. Get `useContext` from the other components:

```js
  const { user, setUser } = useContext(UserContext);
```

>Don't forget to import it

```js
import { useContext } from "react";
import { UserContext } from '../../App';
```
4. Set the user by using setUser function

```js
onClick={() => {
        setUser({
          email: "",
          name: "",
          jobTitle: "",
        })
      }
```

### To repeat certain element:

>In this example, we repeat the `ul` element

```js
{Array(itemCount).fill(<ul className="service__list">
                <BiCheck className="service__list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </ul>)}
```

### To Add Carousel/Slides:

1. Go to [link](https://swiperjs.com/react).

2. Install `SwiperJS`

>Type it in the terminal

`npm i swiper`

3. Import necessary elements

```js
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
```
4. Wrap your element with `Swiper` and it's items with `SwiperSlide`

```js
<Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <TestimonialItem name="Aniruddha Jarmo" avatar={AVTR1} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem name="Bernetta Blake" avatar={AVTR2} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem name="Odell Neely" avatar={AVTR3} />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialItem name="Sudhir Noam" avatar={AVTR4} />
        </SwiperSlide>
      </Swiper>
```

5. You can style indicators

```css
.swiper-pagination-clickable .swiper-pagination-bullet{
    background: var(--color-primary);
}
```