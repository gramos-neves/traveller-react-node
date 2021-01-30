import styled from 'styled-components';

export const MenuLeft = styled.div`
    width: 60px;
    background: #F25D27;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    padding:15px;


    .menu-mid{
        display: flex;
        flex-direction: column;
        height: 150px;
        justify-content:space-between;
        align-items:center;   
    }

    
    a:hover{
        filter: brightness(0) invert(1);
       }


   a:focus {
      filter: brightness(0) invert(1);
   } 

`