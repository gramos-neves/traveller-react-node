import styled from 'styled-components';

export const Header = styled.div`
    height:96px;
    background: #FFFFFF;
    display: flex;
    justify-content: space-between;
    align-items:center;


    .button-back{
            height: 40px;
            width: 40px;
            background: #FFFFFF;
            border: 1px solid #DCE2E6;
            box-sizing: border-box;
            border-radius: 10px;
            margin-left:100px;
    } 


    .button-editar-excluir-add{
        display: flex;
        flex-direction: row;
        justify-content:center;
        align-items:center;
    }

    .button-editar-excluir{
            margin-right: 2px;
            height: 40px;
            width: 40px;
            background: #FFFFFF;
            border: 1px solid #DCE2E6;
            box-sizing: border-box;
            border-radius: 10px 0px 0px 10px;
            & + button{
                margin-right: 8px;
                border-radius: 0px 10px 10px 0px;
            }
        }
    

   .button-add{
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

export const Container = styled.div`
    height: 100vh;
    display:flex;
    align-items:stretch;

`

export const Body = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
    justify-content:center;
`


export const Content = styled.div`
        background: #E5E5E5;
         flex:1;
         .line{
            border: 1px solid #DCE2E6;
         }

        .header-img{
            display: flex;
            height: 450px;
        } 

        .header-img img{
             flex:1;  
        }


        .title-category{
             display: flex;
             flex-direction: row;
             margin-left: 60px;
             margin-right: 100px;
         }



        .title-city{
            display: flex;
            flex-direction: column;
            width: 600px;
            padding: 20px;
            
              
            strong{
                font-weight: 600;
                font-size: 54px;
                line-height: 54px;
                color: #123952;
            }

        }

        .title-sub1{
                margin-top: 40px;
                font-weight: normal;
                font-size: 20px;
                line-height: 30px;
                color: #123952;
        }

        .title-sub2{
                margin-top: 40px;
                font-weight: normal;
                font-size: 16px;
                line-height: 26px;
                color: #617480;
        }



        .categorys{
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items:center;
        }


        .categorys-card{
            display: flex;
            flex-direction: column;
            width: 160px;
            height: 268px;
            background: #FFFFFF;
            border: 1px solid #DCE2E6;
            box-sizing: border-box;
            border-radius: 20px;
            margin-right: 20px;
            
            strong{
                font-style: normal;
                font-weight: 600;
                font-size: 40px;
                line-height: 40px;
                color: #123952;
                padding: 12px;
            }

            span{
                width: 70px;
                font-style: normal;
                font-weight: normal;
                font-size: 16px;
                line-height: 22px;
                color: #617480;
                padding: 12px;
                white-space: normal;
            }
        }
        
        .category-img{
            height: 50px;
            padding: 20px;
        }

        .line-card{
            border: 1px solid #DCE2E6;
        }  
        
`


export const ContentBody = styled.div`
       display: flex;
       flex-direction: column;
       margin-top: 110px;
       padding: 50px;
       margin-left: 30px;
       .top-city-title{
            font-weight: 600;
            font-size: 36px;
            line-height: 46px;
            color: #123952;    
       }


    /*  Card com star  */   
    .card-list{
        margin-top: 50px;
        width: 90%;
        display: grid;
        grid-template-columns: repeat(auto-fill,256px);
        grid-gap: 25px 10px;
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
        justify-content:space-between;   
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
                margin-right: 15px;
                border-radius: 0px 10px 10px 0px;
            }
        }
        
    }

       .card-star{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items:center; 
          width:46px;
          height: 73px;
          background: #F25D27;
          border-radius: 10px;
          margin-top: -20px;
          margin-left: 15px;

          strong{
            color: #F5F8FA;
            margin-top: 5px;
          }
       }


    .title-card{
        display:flex;
        flex-direction:column;

        strong{
            font-weight: 600;
            font-size: 20px;
            line-height: 30px;
            color: #123952;
            margin-bottom: 10px;
            margin-left: 25px;
        }

       

    }

    .title-card-photo{
          display: flex;
          justify-content:space-around;
          align-items:center;
          margin-top:10px; 
          

        span{
            font-weight: 500;
            font-size: 16px;
            line-height: 26px;
            color: #617480;
        }

        img{
            width:24px;
            height:24px;
        }

    }


`

