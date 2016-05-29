import * as React from "react";
import { expect } from "chai";
import * as ReactTestUtils from "react-addons-test-utils";

import { Confirm } from "../../src/components/Confirm";

describe("<Confirm />", function () {
  it("renders", function () {
    const confirm = ReactTestUtils.renderIntoDocument(<Confirm title="Test title" buttonLabel="Test label" onConfirm={
        function _onConfirm() {
            // empty
        }
    }>Some text</Confirm>) as Confirm;
    expect(ReactTestUtils.isCompositeComponent(confirm)).to.equals(true);
  });
  it("calls onConfirm when clicking button", function () {
    // could also be implemented using sinon.spy()
    let called: boolean = false;
    const confirm = ReactTestUtils.renderIntoDocument(<Confirm title="Test title" buttonLabel="Test label" onConfirm={
        function _onConfirm() {
            called = true;
        }
    }>Some text</Confirm>) as Confirm;
    ReactTestUtils.Simulate.click(confirm.refs["button"]);
    expect(called).to.equals(true);
  });
});
