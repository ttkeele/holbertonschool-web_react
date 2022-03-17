import holberton_logo from '../assets/holberton_logo.jpg';
import Notifications from '../Notifications/Notifications.js';
import Login from '../Login/Login.js';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import React from 'react';
import PropTypes from 'prop-types'
import CourseList from '../CourseList/CourseList.js';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js'
import BodySection from '../BodySection/BodySection.js';
import { StyleSheet, css } from 'aphrodite';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.ctrlEvent = this.ctrlEvent.bind(this);
  }
  componentDidMount() {
    document.addEventListener('keydown', this.ctrlEvent);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.ctrlEvent);
  }

  ctrlEvent(e) {
    let k = e.key;
    console.log("This is e: ", e)
    if (e.ctrlKey && k === 'h') {
      console.log("hello");
      alert('Logging you out');
      this.props.logOut();
    }
  }
  
  render() {
    const listCourses = [
      { id: 1, name: "ES6", credit: 60 },
      { id: 2, name: "Webpack", credit: 20 },
      { id: 3, name: "React", credit: 40 },
    ];
    
    const listNotifications = [
      { id: 1, type: "default", value: "New course available" },
      { id: 2, type: "urgent", value: "New resume available" },
      { id: 3, type: "urgent", html: { __html: getLatestNotification() } },
    ];

    return (
      <React.Fragment>
        <Notifications listNotifications={listNotifications}/>
      <div className={css([styles.App, styles.Div])}>
        <Header />
        <div className={css([styles.AppBody, styles.Div])}>
          {this.props.isLoggedIn ? (
            <BodySectionWithMarginBottom title='Course list'>
              <CourseList listCourses={listCourses}/> 
           </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title={'Log in to continue'}>
              <Login />
            </BodySectionWithMarginBottom>
          )}
        </div>
        <BodySection title='News from the School'>
          <p>School is Over!!!</p>
        </BodySection>
        <Footer className={css(styles.footer)}/>
      </div>
      </React.Fragment>
    );
  }
}
const styles = StyleSheet.create({
  App: {
    textAlign: "center",
    minHeight: "100vh",
  },
  Div: {
    paddingBottom: "2px",
    paddingTop: "2px",
    paddingLeft: "8px",
    paddingRight: "8px",
  }, 
  AppBody: {
    paddingBottom: "36px",
    paddingTop: "36px",
    paddingLeft: "24px",
    paddingRight: "24px",
    minHeight: "65vmin",
  },
  footer: {
    width:  "100%",
    borderTop: "3px solid #DF344B",
    padding: "16px",
  }
});

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { console.log('test')}
}


export default App;