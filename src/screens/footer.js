import React, {Component} from 'react';

class Footer extends Component {
  render(){

    const footerArea = (
      <div className='footerArea'>Created using ReactJS, Redux</div>
    );

    const copyrightArea = (
      <div className='copyright'>CopyRight of Debayan Sen</div>
    );

    return (
      <div className='App-footer'>
        {footerArea}
        {copyrightArea}
      </div>
    )
  }
}

export default Footer;