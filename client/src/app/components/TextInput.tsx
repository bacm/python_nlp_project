import * as React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, Button } from '@material-ui/core'
import { GetTextAnalysis } from '../actions/TextAnalysisActions'

export default function TextInput() {
    const dispatch = useDispatch();
    const [text, setText] = useState()
    const handleTextFieldChange = (e:any) => setText( e.target.value);
    const handleSubmit = () => dispatch(GetTextAnalysis(text))

    return (
        <form>
            <div className="col-md-12">
                <TextField 
                    value={text} 
                    onChange={handleTextFieldChange}
                    multiline
                />
            </div>
            <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
        </form>
    )
}