import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    search: {
      marginLeft: theme.spacing(5),
      width:"100vh",
    },
    formControl: {
        minWidth: 150,
    },
  }));
export default function UserSearch(props) {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    
    const sport = props.sport || ""

    const handleClose = () => {
      setOpen(false);
    }
  
    const handleOpen = () => {
      setOpen(true);
    }

    return (
        <div style={{display:"flex"}}>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">종목</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={sport}
                    onChange={props.handleSelectSportChange}
                >
                <MenuItem value={"Soccer"}>Soccer</MenuItem>
                <MenuItem value={"Baseball"}>Baseball</MenuItem>
                <MenuItem value={"Basketball"}>Basketball</MenuItem>
                </Select>
            </FormControl>

            <form noValidate autoComplete="off" onSubmit={props.handleUserSearchSubmit} >
                <TextField 
                  label="팀 / 선수 이름"
                  onChange={props.handleSearchUser}
                  className={classes.search}/>
            </form>
        </div>
    )
}
