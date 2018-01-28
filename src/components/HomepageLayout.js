import React, { Component } from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Dapp from "./Dapp";

const FixedMenu = () => (
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item as="a" active>
        Home
      </Menu.Item>
      <Menu.Item as="a">Dashboard</Menu.Item>
      <Menu.Item as="a">My Backpack</Menu.Item>
      <Menu.Item as="a">Buy Points</Menu.Item>
      <Menu.Item as="a">Gift Points</Menu.Item>
      <Menu.Item as="a">Earn Points</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item className="item">
          <Button basic color="violet" as="a">
            Log in
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button basic color="violet" as="a" primary>
            Sign Up
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);

export default class HomepageLayout extends Component {
  state = {};

  hideFixedMenu = () => this.setState({ visible: false });
  showFixedMenu = () => this.setState({ visible: true });

  render() {
    const { visible } = this.state;

    return (
      <div>
        {visible ? <FixedMenu /> : null}

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 700, padding: "1em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
              <Link to={`/home`}>
                <Menu.Item as="a" active>
                
                  Home
                  
                </Menu.Item></Link>
                <Link to={`/home`}>
                <Menu.Item as="a">Dashboard</Menu.Item>
                </Link>
                <Link to={`/mybackpack`}>
                <Menu.Item as="a">My Backpack</Menu.Item>
                </Link>
                <Link to={`/buy`}>
                <Menu.Item as="a">Buy Points</Menu.Item>
                </Link>
                <Link to={`/earn`}>
                <Menu.Item as="a">Earn Points</Menu.Item>
                </Link>
                <Link to={`/gift`}>
                <Menu.Item as="a">Gift Points</Menu.Item>
                </Link>
                <Link to={`/book`}>
                <Menu.Item as="a">Book Travel</Menu.Item>
                </Link>
                <Menu.Item position="right">
                  <Button basic color="blue">
                    Log in
                  </Button>
                  <Button basic color="blue">
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>

            <Container text>
              <Header
                as="h1"
                content="Backpackerpoints"
                inverted
                style={{
                  fontSize: "4em",
                  fontWeight: "normal",
                  marginBottom: 0,
                  marginTop: "3em"
                }}
              />
              <Header
                as="h2"
                content="A new travel rewards program just for backpackers!"
                inverted
                style={{ fontSize: "1.7em", fontWeight: "normal" }}
              />
              <Button basic color="violet" primary size="huge">
                My Backpack
                <Icon name="right arrow" />
              </Button>
              <br />
              <br />
              Login with:
              <br />
              <Button color="facebook">
                <Icon name="facebook" /> Facebook
              </Button>
              <br />
              <Button color="google plus">
                <Icon name="google plus" /> Google
              </Button>
              <br />
              <Button color="instagram">
                <Icon name="instagram" /> Instagram
              </Button>
              <Dapp />
            </Container>
          </Segment>
        </Visibility>

        <Segment style={{ padding: "0em" }} vertical>
          <Grid celled="internally" columns="equal" stackable>
            <Grid.Row textAlign="center">
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Recent Bookings Feed
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  John Doe just booked XYZ with 400 points!
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  Jane Doe just booked XYZ with 400 points!
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  Fred Doe just booked XYZ with 400 points!
                </p>
                <p style={{ fontSize: "1.33em" }}>
                  Mike Doe just booked XYZ with 400 points!
                </p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
                <Header as="h3" style={{ fontSize: "2em" }}>
                  Backpack Details here
                </Header>
                <p style={{ fontSize: "1.33em" }}>
                  {/* <Image avatar src='/assets/images/avatar/large/nan.jpg' /> */}
                  Your Backpack has 6,288 Points!
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Segment inverted vertical style={{ padding: "5em 0em" }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About Us" />
                  <List link inverted>
                    <List.Item as="a">FAQ</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                    <List.Item as="a">Blog</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="Partners" />
                  <List link inverted>
                    <List.Item as="a">Hostels</List.Item>
                    <List.Item as="a">Tour Companies</List.Item>
                    <List.Item as="a">Restaurants</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Backpackerpoints
                  </Header>
                  <p>A new travel rewards program just for backpackers!</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    );
  }
}
