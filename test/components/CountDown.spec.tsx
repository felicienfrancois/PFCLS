import * as React from "react";
import { expect } from "chai";
import * as ReactTestUtils from "react-addons-test-utils";

import { CountDown } from "../../src/components/CountDown";

describe("<CountDown />", function () {
  it("renders", function () {
    const countDown = ReactTestUtils.renderIntoDocument(<CountDown secondsRemaining={5} onEnd={
        function _onEnd() {
            // empty
        }
    } />) as CountDown;
    expect(ReactTestUtils.isCompositeComponent(countDown)).to.equals(true);
  });
});