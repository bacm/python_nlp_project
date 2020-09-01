import {AnalysisResult, TextAnalysisDispatchTypes, TEXT_ANALYSIS_FAILED, TEXT_ANALYSIS_LOADING, TEXT_ANALYSIS_SUCCESS} from '../actions/TextAnalysisActionTypes'

interface IDefaultState {
    loading: boolean,
    data?: AnalysisResult[]
}

const defaultState : IDefaultState = {
    loading: false
};

const textAnalysisReducer = (state : IDefaultState = defaultState, action : TextAnalysisDispatchTypes) : IDefaultState => {
    switch (action.type) {
        case TEXT_ANALYSIS_FAILED:
            return {
                loading: false
            }
        case TEXT_ANALYSIS_LOADING:
            return {
                loading: true
            }
        case TEXT_ANALYSIS_SUCCESS:
            return {
                loading: false,
                data: action.payload
            }
        default: return state
    }
};

export default textAnalysisReducer