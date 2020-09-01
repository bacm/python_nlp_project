import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip'
import Popover from '@material-ui/core/Popover'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    typography: {
      padding: theme.spacing(2),
    },
  }));

interface PartOfSpeechProps {
    label: string,
    pos: string
}

function PartOfSpeech(props: PartOfSpeechProps) {

    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)
    const id = open ? 'simple-popover' : undefined

    const handleClick = (event:React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <span>
            <Chip 
                label={props.label} 
                onClick={handleClick}
            />
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}>
                <Typography className={classes.typography}>position is {props.pos}</Typography>
            </Popover>
        </span>
    )
}

export default PartOfSpeech