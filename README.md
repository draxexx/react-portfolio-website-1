# Getting Started with Create React App

To create React project:

`npx create-react-app react-portfolio-website-1`

Initial CSS style:

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

Defining the variables in CSS:

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

To add Google Fonts, import it in the `.css` file:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
```

To install react icons:

Go to [link](https://react-icons.github.io/react-icons/).

To draw line in the CSS:

```css
.header__socials::after{
    content: "";
    width: 1px;
    height: 2rem;
    background: var(--color-primary);
}
```

To center the class:

```css
position: absolute;
    left: 50%;
    transform: translateX(-50%);
```

To center an item on the page all the time:

>It will be on the page all the time because it's `position` is `fixed`. Also it's `z-index` equals `2`, so it will be top of the other objects.

```css
z-index: 2;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 2rem;
```

Defining `useState`:

```js
const [activeNav, setActiveNav] = useState("#");
```

Set clicked menu item background different from the others:

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