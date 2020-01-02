import React from "react";
import {
  Button,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails,
  Grid
} from "@material-ui/core/";

class Expansionpanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            <div>
              <ExpansionPanel>
                <ExpansionPanelSummary
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                >
                  <Typography style={{ flexBasis: "33.33%", flexShrink: 0 }}>
                    Category
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <Typography>
                    <Button onClick={this.handleClick}>Hello</Button>
                  </Typography>
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </div>
          </Grid>
          <Grid item xs={2}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography style={{ flexBasis: "33.33%", flexShrink: 0 }}>
                  Title
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <Button onClick={this.handleClick}>Hello</Button>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xs={2}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography style={{ flexBasis: "33.33%", flexShrink: 0 }}>
                  Location
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <Button>Hello</Button>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xs={2}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography style={{ flexBasis: "33.33%", flexShrink: 0 }}>
                  Date_posted
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <Button>Hello</Button>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xs={1}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography style={{ flexBasis: "33.33%", flexShrink: 0 }}>
                  Type
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <Button>Hello</Button>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xs={2}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography style={{ flexBasis: "33.33%", flexShrink: 0 }}>
                  Company_type
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <Button>Hello</Button>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
          <Grid item xs={1}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Typography style={{ flexBasis: "33.33%", flexShrink: 0 }}>
                  Employer
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  <Button>Hello</Button>
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Expansionpanel;
