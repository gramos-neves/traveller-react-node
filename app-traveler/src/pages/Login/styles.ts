import styled from 'styled-components';
import background from '../../asserts/Image.png';


export const Container = styled.div`
    height: 100vh;
    display:flex;
    align-items:stretch;

`

export const Background = styled.div`
      flex:1;
      background: url(${background}) no-repeat ;
      background-size:cover;
`

export const Content = styled.div`
  display:flex;
  width: 100%;
  max-width: 900px;
  flex-direction: column;
  justify-content:center;
  align-items:center;

   
  strong{
      font-weight: 600;
      font-size: 36px;
      line-height: 32px;
      color: #123952;
      margin-bottom: 20px;
    }

 .login-input {
    padding: 24px;
    width: 416px;
    height: 72px;
    background: #FFFFFF;
    border: 1px solid #DCE2E6;
    box-sizing: border-box;
    border-radius: 10px 10px 0px 0px;
    color: #617480;
    font-size: 16px;

    &+input{
        border-radius: 0px 0px 10px 10px;
    }
    &::placeholder{
        color: var(--secondary-color);
    }
  }

  .login-checkbox{
      height: 72px;
      width: 416px;
      display:flex;
      justify-content:space-between;
      align-items:center;
  

     a{
        color: var(--secondary-color);
        font-size: 16px;
        line-height: 24px;
     }  
      
  }

  .check{
     display:flex;
     justify-content:center;
     align-items:center; 

    input{
        width: 24px;
        height: 24px;
    }

      span{
        margin-left:10px;
        font-size: 16px;
        line-height: 24px;
        color: var(--secondary-color);
      }
  }


  button{
    margin-top:30px;
    width: 416px;
    height: 72px;
    background: #F25D27; 
    border-radius: 10px;
    border: 0;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: #FFFFFF;
  }




`
