
import Menu from '../../components/Menu';
import {Header, Container, Content} from './styles';


const PerfilCidade = () => {
 
    return(
        <Container>
            <Menu />
            <Content>
                <Header >
                    <strong>Cidades</strong>
                    <button>+ Adicionar um perfil</button>
                </Header>
                <div className="line"></div>
            </Content>    

        </Container>
    )
}


export default PerfilCidade