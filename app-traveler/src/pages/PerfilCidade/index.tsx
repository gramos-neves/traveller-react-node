
import Menu from '../../components/Menu';
import { useHistory } from 'react-router-dom'
import { Header, Container, Content, ContentBody, Body } from './styles';
import Editar from '../../asserts/Editar.svg';
import Excluir from '../../asserts/Excluir.svg';
import Voltar from '../../asserts/Voltar.svg';
import Floria from '../../asserts/floria.png';
import ponto from '../../asserts/Pontos.svg';
import eventos from '../../asserts/Eventos.svg';
import cafe from '../../asserts/cafe.svg';
import City from '../../asserts/floriamini.png';
import star from '../../asserts/Star.svg';
import Foto from '../../asserts/Foto.png';

const PerfilCidade = () => {
    const history = useHistory();
    return (
        <Container>
            <Menu />
            <Content>
                <Header >
                    <button onClick={() => history.push('/city')} className="button-back"><img alt="back" src={Voltar} /></button>
                    <div className="button-editar-excluir-add">
                        <div>
                            <button className="button-editar-excluir"><img alt="editar" src={Editar} /></button>
                            <button className="button-editar-excluir"><img alt="excluir" src={Excluir} /></button>
                        </div>
                        <button className="button-add">+ Adicionar um perfil</button>
                    </div>
                </Header>
                <div className="line"></div>

                <div className="header-img">
                    <img src={Floria} alt="floria" />
                </div>
                <Body>
                   <div>
                    <div className="title-category">
                        <div className="title-city">
                            <strong>Florianópolis</strong>
                            <span className="title-sub1">Capital do estado de Santa Catarina no sul do Brasil, é maioritariamente constituída pela Ilha de Santa Catarina, com 54 km de comprimento.</span>
                            <span className="title-sub2">É famosa pelas suas praias, incluindo estâncias turísticas populares como a Praia dos Ingleses na extremidade norte da ilha.</span>
                        </div>
                        <div className="categorys">
                            <div className="categorys-card">
                                <div className="category-img"> <img src={ponto} alt="photo" /> </div>
                                <div className="line-card"></div>
                                <strong>67</strong>
                                <span>Pontos Turísticos</span>
                            </div>

                            <div className="categorys-card">
                                <div className="category-img"> <img src={cafe} alt="photo" /> </div>
                                <div className="line-card"></div>
                                <strong>20</strong>
                                <span>Comida e Bebidas</span>
                            </div>

                            <div className="categorys-card">
                                <div className="category-img"> <img src={eventos} alt="photo" /> </div>
                                <div className="line-card"></div>
                                <strong>11</strong>
                                <span>Eventos Organizados</span>
                            </div>

                        </div>
                    </div>

                    <ContentBody>
                        <div>
                            <strong className="top-city-title">Top avaliados</strong>
                        </div>


                        <div className="card-list">
                            <div className="card">
                                <div className="background-img" style={{ background: `url(${Foto}) no-repeat` }} >
                                    <div className="card-star">
                                        <img src={star} />
                                        <strong>4,7</strong>
                                    </div>
                                    <div>
                                        <button onClick={() => history.push('/perfilcity')} ><img src={Editar} /></button>
                                        <button><img src={Excluir} /></button>
                                    </div>
                                </div>
                                <div className="title-card">
                                    <strong>Doce & Companhia</strong>
                                    <div className="line-card"></div>
                                    <div className="title-card-photo">
                                        <span>Comida e Bebida</span>
                                        <img src={cafe} alt="photo" />
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="background-img" style={{ background: `url(${Foto}) no-repeat` }} >
                                    <div className="card-star">
                                        <img src={star} />
                                        <strong>4,7</strong>
                                    </div>
                                    <div>
                                        <button onClick={() => history.push('/perfilcity')} ><img src={Editar} /></button>
                                        <button><img src={Excluir} /></button>
                                    </div>
                                </div>
                                <div className="title-card">
                                    <strong>Doce & Companhia</strong>
                                    <div className="line-card"></div>
                                    <div className="title-card-photo">
                                        <span>Comida e Bebida</span>
                                        <img src={cafe} alt="photo" />
                                    </div>
                                </div>
                            </div>


                            <div className="card">
                                <div className="background-img" style={{ background: `url(${Foto}) no-repeat` }} >
                                    <div className="card-star">
                                        <img src={star} />
                                        <strong>4,7</strong>
                                    </div>
                                    <div>
                                        <button onClick={() => history.push('/perfilcity')} ><img src={Editar} /></button>
                                        <button><img src={Excluir} /></button>
                                    </div>
                                </div>
                                <div className="title-card">
                                    <strong>Doce & Companhia</strong>
                                    <div className="line-card"></div>
                                    <div className="title-card-photo">
                                        <span>Comida e Bebida</span>
                                        <img src={cafe} alt="photo" />
                                    </div>
                                </div>
                            </div>


                            <div className="card">
                                <div className="background-img" style={{ background: `url(${Foto}) no-repeat` }} >
                                    <div className="card-star">
                                        <img src={star} />
                                        <strong>4,7</strong>
                                    </div>
                                    <div>
                                        <button onClick={() => history.push('/perfilcity')} ><img src={Editar} /></button>
                                        <button><img src={Excluir} /></button>
                                    </div>
                                </div>
                                <div className="title-card">
                                    <strong>Doce & Companhia</strong>
                                    <div className="line-card"></div>
                                    <div className="title-card-photo">
                                        <span>Comida e Bebida</span>
                                        <img src={cafe} alt="photo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ContentBody>
                    </div>
                </Body>
            </Content>

        </Container>
    )
}


export default PerfilCidade