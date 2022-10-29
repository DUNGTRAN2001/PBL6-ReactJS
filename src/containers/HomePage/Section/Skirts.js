import React, { Component } from "react";
import { connect } from "react-redux";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Skirts extends Component {
  render() {
    return (
      <div className="section-share section-skirts">
        <div className="section-container">
          <div className="section-header">
            <span className="title-section">Váy</span>
            <button className="btn-section">Xem thêm</button>
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <div className="bg-image section-skirts-bg"></div>
                <div className="content-bg">
                  <div className="title-image">Váy 1</div>
                  <div className="price">480.000đ</div>
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-skirts-bg"></div>
                <div className="content-bg">
                  <div className="title-image">Váy 1</div>
                  <div className="price">480.000đ</div>
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-skirts-bg"></div>
                <div className="content-bg">
                  <div className="title-image">Váy 1</div>
                  <div className="price">480.000đ</div>
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-skirts-bg"></div>
                <div className="content-bg">
                  <div className="title-image">Váy 1</div>
                  <div className="price">480.000đ</div>
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-skirts-bg"></div>
                <div className="content-bg">
                  <div className="title-image">Váy 1</div>
                  <div className="price">480.000đ</div>
                </div>
              </div>
              <div className="section-customize">
                <div className="bg-image section-skirts-bg"></div>
                <div className="content-bg">
                  <div className="title-image">Váy 1</div>
                  <div className="price">480.000đ</div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Skirts);
