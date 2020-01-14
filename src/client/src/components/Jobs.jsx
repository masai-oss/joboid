import React from "react";
import {
  Grid,
  Switch,
  CssBaseline,
  Card,
  Paper,
  List,
  Typography,
  Avatar,
  Button,
  CardContent,
  CardActions,
  ListItem,
  Divider
} from "@material-ui/core/";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import ShareIcon from "@material-ui/icons/Share";
import Axios from "axios";
import Pagination from "react-paginating";

// components
import Home from "./Home";
import CircularIndeterminate from "./Spinner";
import Expansionpanel from "./Expansionpanel";

class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allJobs: [],
      detailedView: [],
      firstData: [],
      perPage: 20,
      status: false,
      jobStatus: false,
      currentPage: 1
    };
  }

  componentDidMount = () => {
    Axios.get("http://127.0.0.1:5000/readjobs").then(res => {
      this.setState({
        allJobs: res.data.data,
        firstData: res.data.data[0],
        status: true
      });
    });
  };

  handleChange = page => {
    this.setState({
      currentPage: page
    });
  };

  handleClick = id => {
    Axios.get(`http://127.0.0.1:5000/detailedview/${id}`).then(response => {
      this.setState({
        detailedView: response.data.data,
        jobStatus: true
      });
    });
  };

  // handleSaveJobs = id => {};

  render() {
    const {
      status,
      jobStatus,
      detailedView,
      allJobs,
      perPage,
      currentPage,
      firstData
    } = this.state;
    const DataPerPage = perPage;
    const pageCount = 5;
    const totalLength = allJobs.length;
    const start = (currentPage - 1) * Number(DataPerPage);
    const end = start + Number(DataPerPage);
    const slicedData = allJobs.slice(start, end);
    const eachJobs = slicedData.map(e => {
      return (
        <div>
          <ListItem
            button
            style={{ marginTop: 5 }}
            key={e.id}
            onClick={() => {
              this.handleClick(e.id);
            }}
          >
            <Grid container spacing={2}>
              <Grid item xs>
                <Avatar />
              </Grid>
              <Grid item xs={7}>
                <Typography
                  variant="body2"
                  component="p"
                  style={{ fontFamily: "Proza Libre" }}
                >
                  <b>{e.job_title}</b>
                  <br />
                </Typography>
                <div style={{ fontFamily: "Open Sans" }}>
                  {e.location}
                  <br />
                  {e.type}
                  <br />
                  {e.comapny_type}
                  <br />
                  <b color="textSecondary">Via</b> {e.parent_source}
                </div>
              </Grid>
              <Grid item xs>
                <BookmarkBorderIcon
                  style={{ fontSize: 30 }}
                  onClick={() => this.handleSaveJobs(e.id)}
                />
              </Grid>
            </Grid>
          </ListItem>
          <div>
            <Divider />
          </div>
        </div>
      );
    });

    return (
      <div>
        <CssBaseline />
        <Home />
        <Expansionpanel />
        {/* <div>
          
        </div> */}
        <Grid container spacing={3} style={{ marginTop: 5 }}>
          <Grid item xs={4} style={{ overflow: "scroll", height: 510 }}>
            <Paper square>
              <List>
                {status ? (
                  <div>
                    {eachJobs}
                    <div align="center" style={{ marginTop: 10 }}>
                      <Pagination
                        total={totalLength}
                        limit={DataPerPage}
                        pageCount={pageCount}
                        currentPage={currentPage}
                      >
                        {({
                          pages,
                          hasNextPage,
                          hasPreviousPage
                          // previousPage,
                          // nextPage,
                          // totalPages,
                          // getPageItemProps
                        }) => (
                          <div>
                            <Button
                              size="small"
                              variant="outlined"
                              color="primary"
                              // {...getPageItemProps({
                              //   pageValue: 1,
                              //   onPageChange: this.handleChange
                              // })}
                            >
                              First
                            </Button>
                            {hasPreviousPage && (
                              <Button
                                size="small"
                                variant="outlined"
                                color="primary"
                                // {...getPageItemProps({
                                //   pageValue: previousPage,
                                //   onPageChange: this.handleChange
                                // })}
                              >
                                {"<"}
                              </Button>
                            )}
                            {pages.map(page => {
                              // let activePage = null;
                              if (currentPage === page) {
                                // activePage = { backgroundColor: "#47aad6 " };
                              }
                              return (
                                <Button
                                  size="small"
                                  variant="outlined"
                                  color="primary"
                                  // {...getPageItemProps({
                                  //   pageValue: page,
                                  //   key: page,
                                  //   style: activePage,
                                  //   onPageChange: this.handleChange
                                  // })}
                                >
                                  {page}
                                </Button>
                              );
                            })}
                            {hasNextPage && (
                              <Button
                                size="small"
                                variant="outlined"
                                color="primary"
                                // {...getPageItemProps({
                                //   pageValue: nextPage,
                                //   onPageChange: this.handleChange
                                // })}
                              >
                                {">"}
                              </Button>
                            )}
                            <Button
                              size="small"
                              variant="outlined"
                              color="primary"
                              // {...getPageItemProps({
                              //   pageValue: totalPages,
                              //   onPageChange: this.handleChange
                              // })}
                            >
                              Last
                            </Button>
                          </div>
                        )}
                      </Pagination>
                    </div>
                  </div>
                ) : (
                  <div align="center">
                    <CircularIndeterminate />
                  </div>
                )}
              </List>
            </Paper>
            <h5>Turn on email alerts for this search</h5>
            <div style={{ backgroundColor: "#4285F4", height: 50 }}>
              <Switch
                value="checkedA"
                inputProps={{ "aria-label": "primary checkbox" }}
                style={{ float: "right" }}
              />
            </div>
          </Grid>
          <Grid item xs={8} style={{ overflow: "scroll", height: 510 }}>
            <Paper>
              {jobStatus ? (
                <div>
                  {detailedView.map(e => {
                    return (
                      <Card variant="outlined" key={e.id}>
                        <CardContent>
                          <Grid container spacing={3}>
                            <Grid item xs={9}>
                              <Typography
                                variant="h5"
                                component="h1"
                                style={{ fontFamily: "Oswald" }}
                              >
                                <b>{e.job_title}</b>
                              </Typography>
                            </Grid>
                            <Grid item xs={3} style={{ float: "right" }}>
                              <TurnedInNotIcon
                                style={{ fontSize: 25, marginRight: 20 }}
                              />
                              <Button
                                variant="outlined"
                                color="primary"
                                size="medium"
                                style={{ marginRight: 20 }}
                              >
                                SAVE
                              </Button>
                              <ShareIcon style={{ fontSize: 25 }} />
                            </Grid>
                          </Grid>
                          <Typography
                            variant="body2"
                            component="p"
                            color="textSecondary"
                            style={{ fontFamily: "Nunito" }}
                          >
                            {e.location}
                          </Typography>
                          <div style={{ marginTop: 20 }}>
                            <hr />
                            <Button
                              variant="contained"
                              color="primary"
                              size="small"
                            >
                              {e.parent_source}
                            </Button>
                            <hr />
                          </div>
                          <div style={{ marginTop: 20 }}>
                            <Grid container spacing={3}>
                              <Grid item xs={9}>
                                <Typography style={{ fontFamily: "Oswald" }}>
                                  <b>
                                    {e.date_posted}, {e.type}
                                  </b>
                                </Typography>
                                <Typography />
                              </Grid>
                            </Grid>
                          </div>
                          <div style={{ marginTop: 20 }}>
                            <Typography
                              style={{ fontFamily: "Old Standard TT" }}
                            >
                              {e.description}
                            </Typography>
                          </div>
                          <div style={{ marginTop: 25 }}>
                            <hr />
                            <Typography variant="h5" component="h2">
                              {e.company_name}
                            </Typography>
                            <hr />
                          </div>
                          <div style={{ marginTop: 20 }}>
                            <Typography color="textSecondary">
                              Payscale: {e.payscale} LPA
                            </Typography>
                          </div>
                          <hr />
                          <span>
                            <Typography>{e.company_type}</Typography>
                            <Typography>{e.active}</Typography>
                          </span>
                        </CardContent>
                        <CardActions>
                          {/* <Button size="small">Learn More</Button> */}
                        </CardActions>
                      </Card>
                    );
                  })}
                </div>
              ) : (
                <div>
                  {/* <CircularIndeterminate /> */}
                  <Card variant="outlined" key={firstData.id}>
                    <CardContent>
                      <Grid container spacing={3}>
                        <Grid item xs={9}>
                          <Typography
                            variant="h5"
                            component="h1"
                            style={{ fontFamily: "Oswald" }}
                          >
                            <b>{firstData.job_title}</b>
                          </Typography>
                        </Grid>
                        <Grid item xs={3} style={{ float: "right" }}>
                          <TurnedInNotIcon
                            style={{ fontSize: 25, marginRight: 20 }}
                          />
                          <Button
                            variant="outlined"
                            color="primary"
                            size="medium"
                            style={{ marginRight: 20 }}
                          >
                            SAVE
                          </Button>
                          <ShareIcon style={{ fontSize: 25 }} />
                        </Grid>
                      </Grid>
                      <Typography
                        variant="body2"
                        component="p"
                        color="textSecondary"
                        style={{ fontFamily: "Nunito" }}
                      >
                        {firstData.location}
                      </Typography>
                      <div style={{ marginTop: 20 }}>
                        <hr />
                        <Button
                          variant="contained"
                          color="primary"
                          size="small"
                        >
                          {firstData.parent_source}
                        </Button>
                        <hr />
                      </div>
                      <div style={{ marginTop: 20 }}>
                        <Grid container spacing={3}>
                          <Grid item xs={9}>
                            <Typography style={{ fontFamily: "Oswald" }}>
                              <b>
                                {firstData.date_posted}, {firstData.type}
                              </b>
                            </Typography>
                            <Typography />
                          </Grid>
                        </Grid>
                      </div>
                      <div style={{ marginTop: 20 }}>
                        <Typography style={{ fontFamily: "Old Standard TT" }}>
                          {firstData.description}
                        </Typography>
                      </div>
                      <div style={{ marginTop: 25 }}>
                        <hr />
                        <Typography variant="h5" component="h2">
                          {firstData.company_name}
                        </Typography>
                        <hr />
                      </div>
                      <div style={{ marginTop: 20 }}>
                        <Typography color="textSecondary">
                          Payscale: {firstData.payscale} LPA
                        </Typography>
                      </div>
                      <hr />
                      <span>
                        <Typography>{firstData.company_type}</Typography>
                        <Typography>{firstData.active}</Typography>
                      </span>
                    </CardContent>
                    <CardActions>
                      {/* <Button size="small">Learn More</Button> */}
                    </CardActions>
                  </Card>
                </div>
              )}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Jobs;
