import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html:root { 
    //BACKGROUND
    --main-background: hsl(28, 0%, 9%);
    --toggle-background: hsl(268, 0%, 12%);
    --screen-background:  hsl(268, 01%, 12%);
    //KEYS
    --key-background-dark-blue: hsl(201, 89%, 26%);
    --key-shadow-dark-blue: hsl(15, 1%, 52%);
    --key-background-red: hsl(116, 10%, 44%);
    --key-shadow-dark-red:   hsl(17, 42%, 70%);
    --key-background-orange: hsl(21, 17%, 21%);
    --key-shadow-orange:hsl(90, 0%, 36%);
    //TEXT
    --very-dark-grayish-blue: hsl(52, 100%, 62%);
    --white: #fff;
    --white-text: hsl(52, 100%, 62%);
}
body{
    min-width: 100vw;
    min-height: 100vh;
    background-color: var(--main-background);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Spartan', sans-serif;
}
`;