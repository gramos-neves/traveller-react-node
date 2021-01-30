
import { MenuLeft} from './styles';
import Logo from '../../asserts/Logo.svg';
import Sair from '../../asserts/Sair.svg';
import CidadesImg from '../../asserts/Cidade.svg';
import Comentarios from '../../asserts/Comentarios.svg';
import Categorias from '../../asserts/Categorias.svg';



const Menu = () => {

    return (
        <MenuLeft >
        <div>
            <a href="#" >
                <img alt="Logo" src={Logo} />
            </a>
        </div>
        <div className="menu-mid">
            <a href="#" >
                <img alt="cidades" src={CidadesImg} />
            </a>
            <a href="#1" >
                <img alt="categorias" src={Categorias} />
            </a>
            <a href="#2" >
                <img alt="comentarios" src={Comentarios} />
            </a>
        </div>
        <div>
            <a href="#" >
                <img src={Sair} />
            </a>
        </div>
    </MenuLeft>
    )
}


export default Menu