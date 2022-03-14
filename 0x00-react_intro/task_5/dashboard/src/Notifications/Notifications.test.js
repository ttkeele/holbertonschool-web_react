import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notifications";
import "../../config/setupTests"

describe("<Notifications /> componet", () => {
    it("Notifications renders without crashing", () => {
	shallow(<Notifications />)
    });
    it("Notifications renders three list items", () => {
	const wrapper = shallow(<Notifications />);
	expect(wrapper.find("li")).toHaveLength(3);
    });
    it("Notifications renders the text Here is the list of notifications", () => {
	const text = "Here is the list of notifications";
	const wrapper = shallow(<Notifications />);
	expect(wrapper.find(".Notifications p").text()).toEqual(text);
    });
});
