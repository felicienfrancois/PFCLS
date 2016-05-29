import * as React from "react";
import {expect} from "chai";
import * as ReactTestUtils from "react-addons-test-utils";

import { Hand } from "../../src/models/Hand";
import { HandPick } from "../../src/components/HandPick";

const hands : Hand[] = [Hand.ROCK, Hand.PAPER, Hand.SCISSORS, Hand.LIZARD, Hand.SPOCK];

describe("<HandPick />", function () {
  it("renders", function () {
    const handPick = ReactTestUtils.renderIntoDocument(<HandPick hands={hands} onPick={function(){}}/>) as HandPick;
    expect(ReactTestUtils.isCompositeComponent(handPick)).to.equals(true);
  });
  hands.forEach(function(hand) {
    it(`calls onPick when clicking hand ${hand}`, function () {
      // could also be implemented using sinon.spy()
      let pickedHand: Hand;
      const handPick = ReactTestUtils.renderIntoDocument(<HandPick hands={hands} onPick={function onPick(hand) {
        pickedHand = hand;
      }} />) as HandPick;
      ReactTestUtils.Simulate.click(handPick.refs[hand.id]);
      expect(pickedHand).to.equals(hand);
    });
  });
});
