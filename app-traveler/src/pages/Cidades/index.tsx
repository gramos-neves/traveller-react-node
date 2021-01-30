import { Container, Content, Header, ContentCard } from './styles';
import {useHistory} from 'react-router-dom'
import Editar from '../../asserts/Editar.svg';
import Excluir from '../../asserts/Excluir.svg';

import City from '../../asserts/floriamini.png';
import Menu from '../../components/Menu';

const Cidades = () => {
    const history = useHistory()

    return (
        <Container>
            <Menu />
            <Content>
                <Header >
                    <strong>Cidades</strong>
                    <button>+ Adicionar um perfil</button>
                </Header>
                <div className="line"></div>
                <ContentCard>
                    <div className="card-list">
                        <div className="card">
                            <div className="background-img" style={{ background: `url(${City}) no-repeat` }} >
                                <button onClick={() => history.push('/perfilcity')} ><img src={Editar} /></button>
                                <button><img src={Excluir} /></button>
                            </div>
                            <div className="title-card">
                                <strong>Florianópolis</strong>
                                <span>67 locais</span>
                            </div>
                        </div>

                        <div className="card">
                            <div className="background-img" style={{ background: `url(${City}) no-repeat` }} >
                                <button><img src={Editar} /></button>
                                <button><img src={Excluir} /></button>
                            </div>
                            <div className="title-card">
                                <strong>Águas Mornas</strong>
                                <span>13 locais</span>
                            </div>
                        </div>

                        <div className="card">
                            <div className="background-img" style={{ background: `url(${City}) no-repeat` }} >
                                <button><img src={Editar} /></button>
                                <button><img src={Excluir} /></button>
                            </div>
                            <div className="title-card">
                                <strong>Águas Mornas</strong>
                                <span>13 locais</span>
                            </div>
                        </div>


                        <div className="card">
                            <div className="background-img" style={{ background: `url(${City}) no-repeat` }} >
                                <button><img src={Editar} /></button>
                                <button><img src={Excluir} /></button>
                            </div>
                            <div className="title-card">
                                <strong>Águas Mornas</strong>
                                <span>13 locais</span>
                            </div>
                        </div>


                        <div className="card">
                            <div className="background-img" style={{ background: `url(${City}) no-repeat` }} >
                                <button><img src={Editar} /></button>
                                <button><img src={Excluir} /></button>
                            </div>
                            <div className="title-card">
                                <strong>Águas Mornas</strong>
                                <span>13 locais</span>
                            </div>
                        </div>

                        <div className="card">
                            <div className="background-img" style={{ background: `url(${City}) no-repeat` }} >
                                <button><img src={Editar} /></button>
                                <button><img src={Excluir} /></button>
                            </div>
                            <div className="title-card">
                                <strong>Águas Mornas</strong>
                                <span>13 locais</span>
                            </div>
                        </div>

                        <div className="card">
                            <div className="background-img" style={{ background: `url(${City}) no-repeat` }} >
                                <button><img src={Editar} /></button>
                                <button><img src={Excluir} /></button>
                            </div>
                            <div className="title-card">
                                <strong>Águas Mornas</strong>
                                <span>13 locais</span>
                            </div>
                        </div>

                        <div className="card">
                            <div className="background-img" style={{ background: `url(${City}) no-repeat` }} >
                                <button><img src={Editar} /></button>
                                <button><img src={Excluir} /></button>
                            </div>
                            <div className="title-card">
                                <strong>Águas Mornas</strong>
                                <span>13 locais</span>
                            </div>
                        </div>
                    </div>
                </ContentCard>

            </Content>
        </Container>
    )
}



export default Cidades