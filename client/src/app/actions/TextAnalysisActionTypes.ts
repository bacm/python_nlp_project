export const TEXT_ANALYSIS_LOADING = "TEXT_ANALYSIS_LOADING";
export const TEXT_ANALYSIS_FAILED = "TEXT_ANALYSIS_FAILED";
export const TEXT_ANALYSIS_SUCCESS = "TEXT_ANALYSIS_SUCCESS";

export type AnalysisResult = {
    dep: string,
    pos: string,
    text: string
}

export interface TextAnalysisLoading {
    type: typeof TEXT_ANALYSIS_LOADING
}

export interface TextAnalysisFailed {
    type: typeof TEXT_ANALYSIS_FAILED
}

export interface TextAnalysisSuccess {
    type: typeof TEXT_ANALYSIS_SUCCESS,
    payload: AnalysisResult[]
}

export type TextAnalysisDispatchTypes = TextAnalysisLoading | TextAnalysisFailed | TextAnalysisSuccess 