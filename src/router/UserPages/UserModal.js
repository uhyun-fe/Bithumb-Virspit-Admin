import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { mainColor } from '../../assets/colors';
import SubmitBtn from '../../components/SubmitBtn';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

function getModalStyle() {
    const top = 50;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 500,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    icon:{
      color:mainColor,
      fontSize:"35px"
    },
     modalContent:{
        margin:"30px",
     },
     modalBtn:{
      margin:"20px",
      marginLeft:"130px"
     },
     selectType:{
         display:"flex"
     },
     input:{
         margin:"20px",
     },
    revenueContent:{
        marginTop:"30px"
    }
  }));

export default function UserModal(props) {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const revenue = props.user.revenue
    const user = props.user

    const modalbody = (
      <div style={modalStyle} className={classes.paper}>
          <div className={classes.modalContent}>
            <form noValidate autoComplete="off" >
                <TextField 
                  label="이름"
                  defaultValue={user.name}
                  onChange={props.handleNameChange}
                  InputProps={{
                    style: { width: "400px" },
                }}/>
            </form>
            </div>


            <div className={classes.modalContent}>
            <form>
                <FormControl component="fieldset" error={props.error} className={classes.selectTyep}>
                    <RadioGroup aria-label="quiz" name="quiz" value={props.type} onChange={props.handleRadioChange}>
                    <FormControlLabel value="team" control={<Radio />} label="Team" />
                    <FormControlLabel value="player" control={<Radio />} label="Player" />
                    </RadioGroup>
                </FormControl>
            </form>
            </div>

            
            <div className={classes.modalContent}>

            <form noValidate autoComplete="off" >
                <TextField 
                  label="종목"
                  defaultValue={user.sport}
                  onChange={props.handleSportChange}
                  InputProps={{
                    style: { width: "400px" },
                }}/>
            </form>
            </div>

            
            <div className={classes.modalContent}>

            <form noValidate autoComplete="off" >
                <TextField 
                  label="설명"
                  defaultValue={user.describe}
                  onChange={props.handleDescriptionChange}
                  InputProps={{
                    style: { width: "400px" },

                }}/>
            </form>

            <Grid className={classes.revenueContent}>
                <div style={{fontWeight:"bold" }}>Revenue Share</div>
                <Grid item xs>
                <Slider
                    value={parseInt(revenue)}
                    onChange={props.handleSliderChange}
                    aria-labelledby="input-slider"
                />
                </Grid>
                <Grid container spacing={2} alignItems="center">
                    <div style={{fontWeight:"bold" }}>ViRSPiT</div>
                    <Input
                        className={classes.input}
                        name={"virspit"}
                        value={revenue}
                        margin="dense"
                        onChange={props.handleRevenueChange}
                        inputProps={{
                        step: 1,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                        }}
                    />
                    <div style={{fontWeight:"bold" }}>%&nbsp;&nbsp;&nbsp;</div>
                    <div style={{fontWeight:"bold" }}>TEAM</div>
                    <Input
                        className={classes.input}
                        name={"team"}
                        value={100-revenue}
                        margin="dense"
                        onChange={props.handleRevenueChange}
                        inputProps={{
                        step: 1,
                        min: 0,
                        max: 100,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                        }}
                    />
                    <div style={{fontWeight:"bold" }}>%</div>
                </Grid>
            </Grid>
          </div>



          <div className={classes.modalBtn}>
            {
                props.modalKind==="upload"?
                <SubmitBtn value={"Upload"} onClick={props.handleUpload}></SubmitBtn>
                :
                <SubmitBtn value={"Update"} onClick={props.handleEdit}></SubmitBtn>
            }
            
            </div>
      </div>
    );
  
    return (
      <div>
          <Modal
              open={props.openModal}
              onClose={props.handleClose}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
          >
              {modalbody}
          </Modal>
      </div>
    )
}
