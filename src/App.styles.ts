import styled, { keyframes, createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body {
        background-color: black;
        color: white;
    }
    #anim{
        display: flex;
        margin-left: 10px;
        margin-right: 10px;
        
    }
    
    div{
        padding: 2px;
        
    }
    #divround{
        border-radius: 50%;
        background-color: red;
        align-items: top;
        justify-content: top;
        width: 50px;
        height: 50px;          
        margin-top: 50px;
    }
    #divround h4{
        text-align: top;
        margin-top: 0px;
        margin-left: 3px;
    }
    #divround2{
        border-radius: 50%;
        background-color: orange;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;  
        
        margin-top: 8px;
    }
    #category{
        color: white;
        text-align: center;
    }
    #container{
        border: 4px solid white;
        display:flex;
        margin-left: 200px;
        margin-right: 200px;
        color: white;
    }
    #cat1{
        display: flex;
        color: white;
        background-color: #00897B ;
        width: 150px;
        height: 200px;
        align-items: center;
        justify-content: center;
    }
    #cat1 h2{
        text-align: center;
       
    }
    #cat2{
        display: flex;
        color: white;
        background-color: orange;
        width: 150px;
        height: 200px;    
        text-align: center;
        align-items: center;
        justify-content: center;
    }
    #cat3{
        display: flex;
        color: white;
        background-color: #03A9F4 ;
        width: 150px;
        height: 200px;        
        text-align: center;
        align-items: center;
         justify-content: center;
    }
    #cat4 {
        display: flex;
        color: white;
        background-color: pink;
        width: 150px;
        height: 200px;       
        text-align: center; 
        align-items: center;
        justify-content: center;
    }
`

// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear 15;
  background-color: red;
  font-size: 1.2rem;
  
  
`;

const rotate2 = keyframes`
  from {
    
    transform: translate(-500px)
  }

  to {
    transform: translate(500px);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate2 = styled.div`
  
  animation: ${rotate2} 3s linear 1;
  background-color: red;
  font-size: 1.2rem;
  
  
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #fff;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;
  :hover {
    opacity: 0.8;
  }
  
  button {
    cursor: pointer;
    user-select: none;
    font-size: 0.8rem;
    width: 100%;
    height: 35px;
    margin: 3px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg, #56FFA4, #59BC86)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, #FF5656, #C16868)'
        : 'linear-gradient(90deg, white, yellow)'};
    border: 3px solid #ffffff;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);    
    color: maroon;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
`;


