import { shallow } from 'enzyme';
import App from './App';
import React from 'react';
import "../../config/setupTests"


describe("<App>", () => {
    it("Verify App loads", () => {
        shallow(<App />)
    })

    it("Verifies header renders as App-header", () => {
        const myElem = shallow(<App />);
        expect(myElem.find('div').first().hasClass('App-header'));
    });

    it("Verifies header renders as App-body", () => {
        const myElem = shallow(<App />);
        expect(myElem.find('div').first().hasClass('App-body'));
    });

    it("Verifyies header renders as App-footerr", () => {
        const myElem = shallow(<App />);
        expect(myElem.find('div').first().hasClass('App-footer'));
    });
})