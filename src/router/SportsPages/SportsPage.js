import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {mainColor} from '../../assets/colors'
import SportModal from './SportModal';
import SportsList from './SportsList';

const useStyles = makeStyles((theme) => ({
  search: {
    marginRight: theme.spacing(3),
    height:"10vh",
    marginBottom:"20px",
    padding:"30px"
  },
  list: {
    marginRight: theme.spacing(3),
    padding:"30px"
  },
  searchForm:{
    width: '100%',
    marginBottom:"10px"
  },
  searchBar:{
    width: '90%',
  },
  icon:{
    color:mainColor,
    fontSize:"35px"
  },
}));
export default function SportsPage() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const [updateKeyword,setUpdateKeyword] = React.useState("")
    const [searchKeyword,setSearchKeyword] = React.useState("")

    const handleOpen = () => {
      setOpen(true);
    }

    const handleClose = () => {
      setOpen(false);
    }
    const handleUpload = () => {
      setOpen(false);
    }
    const handleUpdateChange = (event) => {
      setUpdateKeyword(event.target.value);
    };

    const handleSearchChange = (event) => {
      setSearchKeyword(event.target.value);
    };
    
    
    return (
        <div>
            <Paper className={classes.search}>
                <section>
                    <form noValidate autoComplete="off" className={classes.searchForm}>
                        <TextField 
                          className={classes.searchBar}
                          onChange={handleSearchChange}
                          label="종목을 검색하세요!" />
                    </form>
                </section>
            </Paper>
                
            <Paper className={classes.list}>
              <IconButton onClick={handleOpen}>
                <AddCircleIcon className={classes.icon}></AddCircleIcon>
              </IconButton>

              <SportModal 
                openModal={open} 
                handleClose={handleClose}
                handleUpload={handleUpload}
                handleChange={handleUpdateChange}
                modalKind={"upload"}
                sport={""}>
              </SportModal>

              <SportsList></SportsList>
            </Paper>
        </div>
    )
}
