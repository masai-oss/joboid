import React from "react";

// material-ui
import {
  Button,
  TableContainer,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core/";

class Admindashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [
        (0,
        "16 Mar, 2019",
        "Elvis Presley",
        "Tupelo, MS",
        "VISA ⠀•••• 3719",
        312.44),
        (1,
        "16 Mar, 2019",
        "Paul McCartney",
        "London, UK",
        "VISA ⠀•••• 2574",
        866.99),
        (2,
        "16 Mar, 2019",
        "Tom Scholz",
        "Boston, MA",
        "MC ⠀•••• 1253",
        100.81),
        (3,
        "16 Mar, 2019",
        "Michael Jackson",
        "Gary, IN",
        "AMEX ⠀•••• 2000",
        654.39),
        (4,
        "15 Mar, 2019",
        "Bruce Springsteen",
        "Long Branch, NJ",
        "VISA ⠀•••• 5919",
        212.79)
      ]
    };
  }

  // componentDidMount() {
  //     document.body.style.backgroundColor = "black"
  // }

  render() {
    const { rows } = this.state;
    return (
      <div style={{ color: "white" }}>
        <Grid container fixed spacing={3}>
          <Grid item xs={3} style={{ backgroundColor: "#424242", height: 672 }}>
            <div align="center">
              <Typography style={{ color: "#90BDBA" }}>Search</Typography>
              <Button style={{ color: "white" }}>Last Month</Button>
              <br />
              <Button style={{ color: "white" }}>last Week</Button>
            </div>
          </Grid>
          <Grid item xs={9}>
            <AppBar position="">
              <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                  DASHBOARD
                </Typography>
              </Toolbar>
            </AppBar>
            <TableContainer>
              <Table style={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Admindashboard;
