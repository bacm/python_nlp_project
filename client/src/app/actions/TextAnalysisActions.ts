import {Dispatch} from 'redux'
import axios from 'axios'

import {TextAnalysisDispatchTypes, TEXT_ANALYSIS_FAILED, TEXT_ANALYSIS_LOADING, TEXT_ANALYSIS_SUCCESS} from './TextAnalysisActionTypes'

export const GetTextAnalysis = (text: string) => async (dispatch:Dispatch<TextAnalysisDispatchTypes>) => {
    try {
        dispatch({
            type: TEXT_ANALYSIS_LOADING,
        });

        debugger;
        const res = await axios.post('http://127.0.0.1:5000/process', { text });

        dispatch({
            type: TEXT_ANALYSIS_SUCCESS,
            payload: res.data
        })

    } catch (e) {
        dispatch({
            type: TEXT_ANALYSIS_FAILED
        });
    }
};