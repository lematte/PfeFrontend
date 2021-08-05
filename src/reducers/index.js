import authReducers from './auth.reducers'
import registerReducer from './register.reducers'
import FormationReducer from './formation.reducers'
import formateurReducer from './formateurs.reducers'
import centreFormationsReducer from './centreFormation.reducers'
import get_UserReducers from './User.reducers'
import candidatReducers from './candidat.reducers'
import salleReducers from './salle.reducers'
import contratsReducers from './contratFormation.reducers'
import contratsFormateurReducers from './contratFormateur.reducers'
import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    auth: authReducers ,
    register: registerReducer ,
    Formation : FormationReducer ,
    centre_formation :centreFormationsReducer ,
    Formateur : formateurReducer,
    getUser : get_UserReducers,
    candidat :candidatReducers,
    salles : salleReducers,
    contrats : contratsReducers,
    contratsFormateurs :contratsFormateurReducers

})
export default rootReducer;