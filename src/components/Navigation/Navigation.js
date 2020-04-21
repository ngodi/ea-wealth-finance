import React, {Component} from 'react';
import './Navigation.scss';


class Navigation extends Component {
  constructor(){
    super();
    this.state = {
   checked: false
};
  }
toggleChecked = () => {
  this.setState({checked: !this.state.checked})
}

render(){
 let output = (this.state.checked)?  <input type="checkbox" onClick={this.toggleChecked} className="navigation1__checkbox" id="navi-toggle" checked/>:
<input type="checkbox" onClick={this.toggleChecked} className="navigation1__checkbox" id="navi-toggle"/>;
   return (
  <div>
    <div className="navigation">
        <div className="logo">
            <span>AE</span>
            <span>Wealth & Financial Consulting</span>
        </div>
        <div class="social-links">
            <a target="_blank" href='https://www.facebook.com/Nevillepersonalfinanceconsulting'><i class="fab fa-facebook"></i></a>
            <a target="_blank" href='http://linkedin.com/in/neville-erambo-5912094a'><i class="fab fa-linkedin-in"></i></a>
            <a target="_blank" href='https://twitter.com/NERAMBO'> <i class="fab fa-twitter"></i></a>
          
        </div>
        <div className="nav-menu">
            <a className="home" href="#home">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#about">ABOUT</a>
            <a href="#activities">ACTIVITIES</a>
            <a href="#contact">CONTACT</a>
        </div>
        </div>
        <div className="navigation1">
         {output}
          <label htmlFor="navi-toggle" className="navigation1__button">
             <span className="navigation1__icon">&nbsp;</span>
          </label>
          <div className="navigation1__background">&nbsp;</div>

          <div className="navigation1__nav">
            <ul className="navigation1__list">
              <li className="navigation1__item"><a onClick={this.toggleChecked} className="navigation1__link" href="#home">HOME</a></li>
              <li className="navigation1__item"><a onClick={this.toggleChecked} className="navigation1__link" href="#services">SERVICES</a></li>
              <li className="navigation1__item"><a onClick={this.toggleChecked} className="navigation1__link" href="#about">ABOUT</a></li>
              <li className="navigation1__item"><a onClick={this.toggleChecked} className="navigation1__link" href="#activities">ACTIVITIES</a></li>
              <li className="navigation1__item"><a onClick={this.toggleChecked} className="navigation1__link" href="#contact">CONTACT</a></li>
            </ul>
          </div>
        </div>

    </div>
  );
}
 
}

export default Navigation;
