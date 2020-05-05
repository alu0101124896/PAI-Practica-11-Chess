/**
 * @file poker-game.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a poker class for the poker. More info
 *  about it here: https://en.wikipedia.org/wiki/Poker
 */

"use strict";

let PokerHandOnPoker;
let DeckOnPoker;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PokerHandOnPoker = require('./poker-hand.js').PokerHand;
  DeckOnPoker = require('./deck.js').Deck;
}
/* istanbul ignore next */
else { // Execution in bfileser
  PokerHandOnPoker = PokerHand;
  DeckOnPoker = Deck;
}

/**
 * @description Class representing an poker game
 *
 * @class Poker
 */
class Poker {

  /**
   * @description Constructor that creates an instance of a poker game.
   *
   * @memberof Poker
   */
  constructor() {
    this.deck = new DeckOnPoker();
    this.numOfCardsByHand = 5
    this.CANVAS1 = document.getElementById("canvas1");
    this.CANVAS2 = document.getElementById("canvas2");
    this.CONTEXT1 = this.CANVAS1.getContext("2d");
    this.CONTEXT2 = this.CANVAS2.getContext("2d");
    this.CANVAS1.width = window.innerWidth * 2 / 3 - 100;
    this.CANVAS1.height = window.innerHeight / 2 - 100;
    this.CANVAS2.width = window.innerWidth * 2 / 3 - 100;
    this.CANVAS2.height = window.innerHeight / 2 - 100;
  }

  dealHands() {
    this.deck.shuffle();
    this.firstPlayer = new PokerHandOnPoker('', this.numOfCardsByHand);
    this.secondPlayer = new PokerHandOnPoker('', this.numOfCardsByHand);
    this.hands = [this.firstPlayer, this.secondPlayer];
    this.hands = this.deck.dealHands(this.hands, this.numOfCardsByHand);
    this.hands[0].draw(this.CONTEXT1, this.CANVAS1);
    this.hands[1].draw(this.CONTEXT2, this.CANVAS2);
    this.hands[0].classify();
    this.hands[1].classify();
    if (this.hands[0].betterThan(this.hands[1])) {
      document.getElementById("winnerHand").children[1].innerHTML = 'Jugador 1';
    } else {
      document.getElementById("winnerHand").children[1].innerHTML = 'Jugador 2';
    }
    PokerHandOnPoker.moveCards(this.hands[0], this.numOfCardsByHand, this.deck);
    PokerHandOnPoker.moveCards(this.hands[1], this.numOfCardsByHand, this.deck);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Poker = Poker;
}
