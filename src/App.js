import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./containers/home/index";
import Login from './containers/login/index';
import Register from "./containers/register/index";
import About from "./containers/about/index";
import Formateurs from "./containers/formateurs/index";
import Formateur from "./containers/formateur/index";
import CentresList from "./containers/CentresList/index";
import Formations from './containers/formations/index'
import SAllFormation from './containers/formations/AllFormation'
import Evaluation from './containers/formations/evaluation'
import DetailsFormation from './containers/formations/Formation-details'
import DashboardAdmin from "./containers/users/admin";
import CategoriesAdmin from "./containers/users/admin/categories";


import SettingSite from "./containers/users/admin/settingSite";
import Profile from './containers/users/admin/profile/index'
import Allformations from './containers/users/admin/formations/index'
import CentreFormation from './containers/users/CentreFormation/index'
import FormationCentreFormation from './containers/users/CentreFormation/FormationCentreFormation/index'
import ProfileCentreFormation from './containers/users/CentreFormation/ProfileCentre/index'
import ContratFormation from './containers/users/CentreFormation/ContratFormation/index'
import AddContratFormation from './containers/users/CentreFormation/ContratFormation/AddContrat'
import FormateurCentreFormation from "./containers/users/CentreFormation/Formateurs/index";

import SalleCentre from "./containers/users/CentreFormation/SalleCentre";

import Dashboarcandidat from './containers/users/candidat/index'
import CandidatProfile from './containers/users/candidat/CandidatProfile/index'
import Subscriptions from "./containers/users/candidat/subscriptions";
import DashboardFormateur from './containers/users/formateur/index'
import FormationFormateur from './containers/users/formateur/FormationFormateur/index'
import ContratFormateur from './containers/users/formateur/ContratFormateur/index'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Route path="/about" exact component={About} />

          <Route path="/formateurs" exact component={Formateurs} />
          <Route path="/formateur" exact component={Formateur} />
          <Route path="/centres" exact component={CentresList} />
          <Route path="/formations-search" exact component={Formations} />
          <Route path="/formations" exact component={SAllFormation} />
          <Route path="/formation-details-:id" exact component={DetailsFormation} />
          <Route path="/evaluation" exact component={Evaluation} />
          
          <Route path="/admin/dashboard" exact component={DashboardAdmin} />
          <Route path="/admin/settings" exact component={SettingSite} />
          <Route path="/admin/Profile" exact component={Profile} />
          <Route path="/admin/formations" exact component={Allformations} />
          <Route path="/admin/categories" exact component={CategoriesAdmin} />

          <Route path="/centre_formations/dashboard" exact component={CentreFormation} />
          <Route path="/centre_formations/formations" exact component={FormationCentreFormation} />
          <Route path="/centre_formations/salles" exact component={SalleCentre} />
          <Route path="/centre_formations/contratformation" exact component={ContratFormation} />
          <Route path="/centre_formations/AddContratFormation" exact component={AddContratFormation} />
          <Route path="/centre_formations/profile" exact component={ProfileCentreFormation} />
          <Route path="/centre_formations/formateurs" exact component={FormateurCentreFormation}/>

          <Route path="/candidat/dashboard" exact component={Dashboarcandidat} />
          <Route path="/candidat/profile" exact component={CandidatProfile} />
          <Route path="/candidat/subscriptions" exact component={Subscriptions} />

          <Route path="/formateur/dashboard" exact component={DashboardFormateur}/>
          <Route path="/formateur/formations" exact component={FormationFormateur}/>
          <Route path="/formateur/contratformation" exact component={ContratFormateur}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
