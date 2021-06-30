import authReducers from './auth.reducers'
import registerReducer from './register.reducers'
import formationReducer from './formation.reducers'
import formateurReducer from './formateurs.reducers'
import Centre_formationReducers from './centreFormation.reducers'
import get_UserReducers from './User.reducers'
import candidatReducers from './candidat.reducers'

import { combineReducers } from 'redux'


const rootReducer = combineReducers({
    auth: authReducers ,
    register: registerReducer ,
    Formation : formationReducer,
    centre_formation :Centre_formationReducers,
    Formateur : formateurReducer,
    getUser : get_UserReducers,
    candidat :candidatReducers

})
export default rootReducer;