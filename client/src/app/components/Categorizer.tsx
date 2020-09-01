import * as React from 'react'
import PartOfSpeech from './PartOfSpeech'
import TextInput from './TextInput'
import {useSelector} from 'react-redux'
import { RootStore } from '../Store'

export default function Categorizer() {
    const analysis = useSelector((state: RootStore) => state.textAnalysis)
    return (
    <div>
        <TextInput />
        {analysis && !analysis.loading && analysis.data && analysis.data.map((e) => 
                <PartOfSpeech
                    label={e.text}
                    pos={e.pos}/>
            )}
    </div>)
}