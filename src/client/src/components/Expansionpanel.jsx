// import React from "react";
// import {
//   Button,
//   ExpansionPanel,
//   ExpansionPanelSummary,
//   Typography,
//   ExpansionPanelDetails,
//   Grid,
//   Chip,
//   Menu,
//   MenuItem
// } from "@material-ui/core/";

// class Expansionpanel extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   handleClick = e => {
//     e.preventDefault();
//   };

//   render() {
//     return (
//       <div>
//         <Grid container spacing={3}>
//           <Grid item xs={1}>
//             <div>
//               <ExpansionPanel>
//                 <ExpansionPanelSummary
//                   aria-controls="panel1bh-content"
//                   id="panel1bh-header"
//                 >
//                   <Typography style={{ flexBasis: "33.33%", flexShrink: 0, fontFamily : 'Dosis' }}>
//                     <Chip size="small" label="Comapny Name" ></Chip>
//                   </Typography>
//                 </ExpansionPanelSummary>
//                 <ExpansionPanelDetails>
//                   <Typography>
//                     <Button onClick={this.handleClick}>Hello</Button>
//                   </Typography>
//                 </ExpansionPanelDetails>
//               </ExpansionPanel>
//             </div>
//           </Grid>
//           <Grid item xs={1}>
//             <ExpansionPanel>
//               <ExpansionPanelSummary
//                 aria-controls="panel1bh-content"
//                 id="panel1bh-header"
//               >
//                 <Typography style={{ flexBasis: "33.33%", flexShrink: 0, fontFamily : 'Dosis' }}>
//                   <b>Title</b>
//                 </Typography>
//               </ExpansionPanelSummary>
//               <ExpansionPanelDetails>
//                 <Typography>
//                   <Button onClick={this.handleClick}>Hello</Button>
//                 </Typography>
//               </ExpansionPanelDetails>
//             </ExpansionPanel>
//           </Grid>
//           <Grid item xs={1}>
//             <ExpansionPanel>
//               <ExpansionPanelSummary
//                 aria-controls="panel1bh-content"
//                 id="panel1bh-header"
//               >
//                 <Typography style={{ flexBasis: "33.33%", flexShrink: 0, fontFamily : 'Dosis' }}>
//                   <b>Location</b>
//                 </Typography>
//               </ExpansionPanelSummary>
//               <ExpansionPanelDetails>
//                 <Typography>
//                   <Button>Bangalore</Button>
//                   <Button>Chennai</Button>
//                   <Button>Patna</Button>
//                 </Typography>
//               </ExpansionPanelDetails>
//             </ExpansionPanel>
//           </Grid>
//           <Grid item xs={1}>
//             <ExpansionPanel>
//               <ExpansionPanelSummary
//                 aria-controls="panel1bh-content"
//                 id="panel1bh-header"
//               >
//                 <Typography style={{ flexBasis: "33.33%", flexShrink: 0, fontFamily : 'Dosis' }}>
//                   <b>Date_posted</b>
//                 </Typography>
//               </ExpansionPanelSummary>
//               <ExpansionPanelDetails>
//                 <Typography>
//                   <Button>Hello</Button>
//                 </Typography>
//               </ExpansionPanelDetails>
//             </ExpansionPanel>
//           </Grid>
//           <Grid item xs={1}>
//             <ExpansionPanel>
//               <ExpansionPanelSummary
//                 aria-controls="panel1bh-content"
//                 id="panel1bh-header"
//               >
//                 <Typography style={{ flexBasis: "33.33%", flexShrink: 0, fontFamily : 'Dosis' }}>
//                   <b>Type</b>
//                 </Typography>
//               </ExpansionPanelSummary>
//               <ExpansionPanelDetails>
//                 <Typography>
//                   <Button>Hello</Button>
//                 </Typography>
//               </ExpansionPanelDetails>
//             </ExpansionPanel>
//           </Grid>
//           <Grid item xs={1}>
//             <ExpansionPanel>
//               <ExpansionPanelSummary
//                 aria-controls="panel1bh-content"
//                 id="panel1bh-header"
//               >
//                 <Typography style={{ flexBasis: "33.33%", flexShrink: 0, fontFamily : 'Dosis' }}>
//                   <b>Company_type</b>
//                 </Typography>
//               </ExpansionPanelSummary>
//               <ExpansionPanelDetails>
//                 <Typography>
//                   <Button>Hello</Button>
//                 </Typography>
//               </ExpansionPanelDetails>
//             </ExpansionPanel>
//           </Grid>
//           <Grid item xs={1}>
//             <ExpansionPanel>
//               <ExpansionPanelSummary
//                 aria-controls="panel1bh-content"
//                 id="panel1bh-header"
//               >
//                 <Typography style={{ flexBasis: "33.33%", flexShrink: 0, fontFamily : 'Dosis' }}>
//                   <b>Employer</b>
//                 </Typography>
//               </ExpansionPanelSummary>
//               <ExpansionPanelDetails>
//                 <Typography>
//                   <Button>Hello</Button>
//                 </Typography>
//               </ExpansionPanelDetails>
//             </ExpansionPanel>
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }
// }

// export default Expansionpanel;
import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Chip from "@material-ui/core/Chip";
import { blue } from "@material-ui/core/colors";

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600]
  }
});

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = value => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        {emails.map(email => (
          <ListItem
            button
            onClick={() => handleListItemClick(email)}
            key={email}
          >
            <ListItemAvatar>
              <Avatar className={classes.avatar}>
                <PersonIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={email} />
          </ListItem>
        ))}

        <ListItem
          autoFocus
          button
          onClick={() => handleListItemClick("addAccount")}
        >
          <ListItemAvatar>
            <Avatar>
              <AddIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired
};

export default function Expansionpanel() {
  const handleCompanynameClick = () => {};

  const handleLocationClick = () => {};

  const handleTypeClick = () => {};

  const handleCompanytypeClick = () => {};

  const handleParentsourceClick = () => {};

  const handlePayscaleClick = () => {};

  return (
    <div>
      <Chip
        size="small"
        label="Comapny Name"
        onClick={handleCompanynameClick}
      />
      <Chip size="small" label="Location" onClick={handleLocationClick} />
      <Chip size="small" label="Type" onClick={handleTypeClick} />
      <Chip
        size="small"
        label="Company Type"
        onClick={handleCompanytypeClick}
      />
      <Chip
        size="small"
        label="Parent Source"
        onClick={handleParentsourceClick}
      />
      <Chip size="small" label="PayScale" onClick={handlePayscaleClick} />
    </div>
  );
}
