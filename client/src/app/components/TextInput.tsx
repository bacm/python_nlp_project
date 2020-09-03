import * as React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TextField, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { GetTextAnalysis } from '../actions/TextAnalysisActions'

const useStyles = makeStyles({
    root: {
        width: '100%',
        paddingBottom: '10px'
    }
});

export default function TextInput() {
    const classes = useStyles();
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
                    className={classes.root}
                />
            </div>
            <div className="col-md-10 mx-auto">
                <Button variant="contained" color="primary" fullWidth={true} onClick={handleSubmit}>Submit</Button>
            </div>
        </form>
    )
}