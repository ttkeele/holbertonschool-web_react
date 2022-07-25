import React from "react";
import App, { mapStateToProps } from "./App";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { listNotificationsOnset } from './App';
import { mount } from 'enzyme';
import AppContext from "./AppContext";
import { user, logOut } from "./AppContext";
import { fromJS } from "immutable";
import { Provider } from "react-redux";
import uiReducer from "../reducers/uiReducer";
import { basicState } from "../reducers/uiReducer";
import { createStore } from "redux";

/* describe("<App />", () => {
  beforeAll(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterAll(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });
  it("App renders without crashing", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("should contain the Notifications component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });
  it("should contain the Header component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Header")).toHaveLength(1);
  });
  it("should contain the Login component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Login")).toHaveLength(1);
  });
  it("should contain the Footer component", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("Footer")).toHaveLength(1);
  });
  it("CourseList is not displayed with isLoggedIn false by default", () => {
    const wrapper = shallow(<App />);
    wrapper.update();
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
  it("isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn />);
    wrapper.update();
    expect(wrapper.find("Login")).toHaveLength(1);
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });
  it("when the keys control and h are pressed the logOut function, passed as a prop, is called and the alert function is called with the string Logging you out", () => {
    const events = {};
    const logout = jest.fn();
    document.addEventListener = jest.fn((event, cb) => {
      events[event] = cb;
    });
    window.alert = jest.fn();
    shallow(<App logOut={logout} />);
    events.keydown({ key: "h", ctrlKey: true });
    expect(window.alert).toHaveBeenCalledWith("Logging you out");
    expect(logout).toHaveBeenCalled();
    jest.restoreAllMocks();
  });
  it("Has default state for displayDrawer false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
  it("displayDrawer changes to true when calling handleDisplayDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    const instance = wrapper.instance();
    instance.handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
  });
  it("displayDrawer changes to false when calling handleHideDrawer", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toEqual(false);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toEqual(true);
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toEqual(false);
  });
  it("test to verify that the logIn function updates the state correctly", () => {
    const wrapper = mount(
      <AppContext.Provider value ={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );
    const userLoggedIn = {
      email: "jeff@gmail.com",
      password: "123456789",
      isLoggedIn: true,
    };
    const instance = wrapper.instance();
    expect(wrapper.state().user).toEqual(user);
    instance.logIn(userLoggedIn.email, userLoggedIn.password);
    expect(wrapper.state().user).toEqual(userLoggedIn);
  });
  it("test to verify that the logOut function updates the state correctly", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );
    const userLoggedIn = {
      email: "jeff@gmail.com",
      password: "123456789",
      isLoggedIn: true,
    };
    const instance = wrapper.instance();
    expect(wrapper.state().user).toEqual(user);
    instance.logIn(userLoggedIn.email, userLoggedIn.password);
    expect(wrapper.state().user).toEqual(userLoggedIn);
    instance.logOut();
    expect(wrapper.state().user).toEqual(user);
  });
  {/*it("verify that markNotificationAsRead works as intended", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ user, logOut }}>
        <App />
      </AppContext.Provider>
    );
    const instance = wrapper.instance();
    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsOnset
    );
    instance.markNotificationsAsRead(4);
    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsOnset
    );
    instance.markNotificationsAsRead(3);
    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsOnset.slice(0, 2)
    );
    instance.markNotificationsAsRead(1);
    expect(wrapper.state().listNotifications).toEqual(
      listNotificationsOnset.slice(1, 2)
    );
  });
  */
  const store = createStore(uiReducer, basicState);
  describe("<App />", () => {
    it(" returns the right object ", () => {
      let state = fromJS({
        isUserLoggedIn: true
      });
      const output = mapStateToProps(state);
      expect(output).toEqual({ isLoggedIn: true });
    })
  })