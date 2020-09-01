import {combineReducers} from 'redux';
import textAnalysisReducer from './TextAnalysisReducer'

const RootReducer = combineReducers({
    textAnalysis : textAnalysisReducer
});

export default RootReducer