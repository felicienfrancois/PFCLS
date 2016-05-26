import * as React from "react";
import { expect } from "chai";
import * as ReactTestUtils from "react-addons-test-utils";

import { Hand } from "../../src/models/Hand";
import { HandPick } from "../../src/components/HandPick";

describe("<HandPick />", function () {
  it("renders", function () {
    const handPick = ReactTestUtils.renderIntoDocument(<HandPick hands={[Hand.ROCK, Hand.PAPER, Hand.SCISSORS, Hand.LIZARD, Hand.SPOCK]} onPick={
        function _onPick(hand) {
            // empty
        }
    } />) as HandPick;
    expect(ReactTestUtils.isCompositeComponent(handPick)).to.equals(true);
  });
});