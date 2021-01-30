import styled from 'styled-components';


export const Container = styled.div`
    height: 100vh;
    display:flex;
    align-items:stretch;

`

export const Header = styled.div`
    
    height:96px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items:center;


    strong{
      font-weight: 600;
      font-size: 36px;
      line-height: 46px;
      color: #123952;
      margin-left:100px;
    }


    button{
        width: 214px;
        height: 48px;
        background: #51B853; 
        border-radius: 10px;
        border: 0;
        margin-right:100px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        font-weight: 500;
        font-size: 16px;  
    }

`


export const Content = styled.div`
        flex:1;
        background: #E5E5E5;

         .line{
            border: 1px solid #DCE2E6;
         }
         

`



export const ContentCard = styled.div`
    display: flex;
    justify-content: center;


    .card-list{
        margin-top: 50px;
        width: 80%;
        display: grid;
        grid-template-columns: repeat(auto-fill,256px);
        grid-gap: 20px 15px;
        justify-content: space-between;

    }

    .card{
        width: 256px;
        height: 266px;
        background: #FFFFFF;
        border: 1px solid #DCE2E6;
        box-sizing: border-box;
        border-radius: 16px;
        margin-right: 20px;
    }

    .background-img{
        height: 178px;
        border-radius: 16px 16px 0px 0px;
        display: flex;
        justify-content:flex-end;   
        button{
            margin-top: 15px;
            margin-right: 2px;
            height: 40px;
            width: 40px;
            background: #FFFFFF;
            border: 1px solid #DCE2E6;
            box-sizing: border-box;
            border-radius: 10px 0px 0px 10px;
            &+button{
                margin-right: 8px;
                border-radius: 0px 10px 10px 0px;
            }
        }
        
    }

    .title-card{
        display:flex;
        flex-direction:column;
        margin-left: 24px;

        strong{
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
            color: #123952;
        }

        span{
            font-size: 16px;
            line-height: 28px;
            color: #617480;
        }


    }


`