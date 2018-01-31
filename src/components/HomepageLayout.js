import React, { Component } from "react";
import {
  Button,
  Container,
  Image,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
  Visibility,
  Card
} from "semantic-ui-react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./Home";
import Dapp from "./Dapp";
import Gmaps from "./Gmaps";
import DemoCarousel from "./DemoCarousel";
import SocialButton from "./SocialButton";
import InstagramLogin from "react-instagram-login";
import auth0 from "auth0-js";
import Auth from "../Auth/Auth.js";
import Popup from "react-popup";
import Dashboard from "./Dashboard";
import Buy from "./Buy";
import MyBackpack from "./MyBackpack";
import Spend from "./Spend";
import Book from "./Book";
import Login from "./Login";
import LoggedIn from "./LoggedIn";
import ActivityFeed from "./ActivityFeed";
import "./App.css";


const auth = new Auth();
// auth.login();
const responseInstagram = response => {
  console.log(response);
};
const handleSocialLogin = user => {
  // console.log(user);
  if (user === user) {
    console.log(user + "is Logged in.");
  } else {
    console.log(user);
  }
};
const handleSocialLoginFailure = err => {
  console.error(err);
};
const FixedMenu = () => (
  <Menu fixed="top" size="large">
    <Container>
      <Menu.Item as="a" active>
        Home
      </Menu.Item>
      <Menu.Item as="a">Dashboard</Menu.Item>
   
      <Menu.Menu position="right">
        <Menu.Item className="item">
          <Button basic color="violet" as="a" onClick={Auth}>
          <Icon name="log in" />
            Log in
          </Button>
        </Menu.Item>
        <Menu.Item>
          <Button basic color="violet" as="a" primary>
          <Icon name="log out" />
            Logout
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
);


const logoSize = {
  width: "100px",
  height: "100px"
};
const iconSize = {
  width: "13px",
  height: "13px"
};
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
            style={{ minHeight: 700, padding: "0em 0em" }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Link to={`/`}>
                  <Menu.Item as="a" active>
                    Home
                  </Menu.Item>
                </Link>
                <Link to={`/dashboard`}>
                  <Menu.Item as="a">Dashboard</Menu.Item>
                </Link>

                <Link to={`/book`}>
                  <Menu.Item as="a">Book Travel</Menu.Item>
                </Link>
                <Menu.Item position="right">
                  
                  <Button basic color="blue" onClick={auth.login}>
                    Log in
                  </Button>
                  <Button basic color="blue">
                  <Icon name="log out" />
                    Logout
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            
            <div fluid>
              <img src={require("../images/logo2.png")} style={logoSize} />
              <Header
                as="h1"
                content="Backpackerpoints"
                inverted
                style={{
                  fontSize: "5em",
                  fontWeight: "normal",
                  marginBottom: 0,
                  marginTop: 0
                }}
              />
              <Header
                as="h2"
                content="A new travel rewards program just for backpackers!"
                inverted
                style={{ fontSize: "1.3em", fontWeight: "normal" }}
              />
              <br />
              <br />
              <div className="Div-Padding">
                Login with: &nbsp;
                <SocialButton
                  provider="facebook"
                  appId="178953362706490"
                  onLoginSuccess={handleSocialLogin}
                  onLoginFailure={handleSocialLoginFailure}
                  btnProps={{
                    disabled: true,
                    onClick: function(){alert('Callback called.');}
                  }}
                >
                  <Button color="facebook" onClick={Popup.alert}>
                    <Icon name="facebook" /> Facebook
                  </Button> 
                </SocialButton>
                <SocialButton
                  provider="google"
                  appId="440198501776-sbtfoml6df7badr0smbeq6gekknedeih.apps.googleusercontent.com"
                  onLoginSuccess={handleSocialLogin}
                  onLoginFailure={handleSocialLoginFailure}
                >
                  <Button color="google plus">
                    <Icon name="google plus" /> Google
                  </Button>
                </SocialButton>
                {/* <InstagramLogin
              clientId="fa4d833b7db84483a21b13423af3bac5"
              // buttonText="Login"
              onSuccess={responseInstagram}
              onFailure={responseInstagram}
              
            /> */}
                <Button color="instagram">
                  <Icon name="instagram" /> Instagram
                </Button>
              </div>
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/home" component={Home} />
              <Route path="/spend" component={Spend} />
              <Route path="/mybackpack" component={MyBackpack} />
              <Route path="/login" component={Login} />
              <Route path="/book" component={Book} />
              <Route path="/user=loggedinsuccess" component={LoggedIn} />
              
              </div>

          </Segment>
        </Visibility>

        <Segment inverted vertical style={{ padding: "3em 0em" }}>
          <Container>
            <Grid divided inverted stackable>
            {/* <Grid divided inverted stackable> */}
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
                <Grid.Column width={6}>
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
