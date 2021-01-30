import { Switch, Route, BrowserRouter, } from 'react-router-dom';
import Cidades from '../pages/Cidades';
import Login from '../pages/Login';
import PerfilCidade from '../pages/PerfilCidade';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/city" component={Cidades} />
            <Route path="/perfilcity" component={PerfilCidade} />
        </Switch>
    </BrowserRouter>
)

export default Routes

