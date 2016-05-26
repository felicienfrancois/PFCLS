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
});