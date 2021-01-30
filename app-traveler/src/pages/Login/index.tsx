import {useHistory} from 'react-router-dom'
import { Background, Container, Content } from './styles';

const Login = () => {
   const history = useHistory();

    return (
        <Container>
            <Background />
            <Content>
              <strong>Fazer Login</strong>
              <input className="login-input" placeholder="E-Mail" />
              <input className="login-input" type="password" placeholder="Password" /> 
               <div className="login-checkbox"> 
                   <div className="check">            
                     <input type="checkbox"  />
                     <span>Lembrar-me</span>
                   </div>
                   <a href="#" >Esqueci a minha senha</a>
               </div>
              <button  onClick={() => history.push('/city')} >Acessar plataforma</button>
            </Content>
        </Container>
    )
}


export default Login