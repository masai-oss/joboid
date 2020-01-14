import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
// import TiSocialFacebookSocial from "react-icons/lib/ti/social-facebook-circular";

class FacebookOauth extends Component {
  facebookResponse = () => {};

  render() {
    return (
      <div>
        <FacebookLogin
          appId={process.env.REACT_APP_FACEBOOK_APP_ID}
          autoLoad={false}
          fields="name,email,picture"
          callback={this.facebookResponse}
          cssClass="my-facebook-button-class"
          // icon={<TiSocialFacebookSocial/>}
        />
      </div>
    );
  }
}

export default FacebookOauth;
