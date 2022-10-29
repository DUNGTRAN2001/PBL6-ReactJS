import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader";
import "./HomePage.scss";
import OutStanding from "./Section/Oustanding";
import Pants from "./Section/Pants";
import Shorts from "./Section/Shorts";
import Shirts from "./Section/Shirts";
import Tshirts from "./Section/Tshirts";
import Skirts from "./Section/Skirts";
import Accessory from "./Section/Accessory";
import HomeFooter from "./HomeFooter";
import About from "./Section/About";

class HomePage extends Component {
  render() {
    let settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
    return (
      <div>
        <HomeHeader />
        <OutStanding settings={settings} />
        <Pants settings={settings} />
        <Shorts settings={settings} />
        <Shirts settings={settings} />
        <Tshirts settings={settings} />
        <Skirts settings={settings} />
        <Accessory settings={settings} />
        <About />
        <HomeFooter />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
