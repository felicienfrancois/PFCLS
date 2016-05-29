import * as React from "react";
import { expect } from "chai";
import * as ReactTestUtils from "react-addons-test-utils";

import { CountDown } from "../../src/components/CountDown";

describe("<CountDown />", function () {
  it("renders", function () {
    const countDown = ReactTestUtils.renderIntoDocument(<CountDown secondsRemaining={5} />) as CountDown;
    expect(ReactTestUtils.isCompositeComponent(countDown)).to.equals(true);
  });
  it(`calls onEnd after timeout`, function (done) {
    this.timeout(10000);
    let timeouts = [1, 2, 3];
    let testsPassed: number = 0;
    // could also be implemented using sinon.spy()
    timeouts.forEach(function(timeout) {
      let start: number = new Date().getTime();
      let end: number;
      ReactTestUtils.renderIntoDocument(<CountDown secondsRemaining={timeout} onEnd={function onEnd() {
        end = new Date().getTime();
      }} />);
      setTimeout(function() {
        expect(end).to.be.gte(start + 1000 * timeout);
        expect(end).to.be.lt(start + 1000 * (timeout + 1));
        testsPassed++;
        if (testsPassed === timeouts.length) done();
      }, 1000 * (timeout + 1));
    });
    setTimeout(done, 5000);
  });
});
