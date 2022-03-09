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