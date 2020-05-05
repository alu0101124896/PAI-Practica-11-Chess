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
let CardOnPoker;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PokerHandOnPoker = require('./poker-hand.js').PokerHand;
  DeckOnPoker = require('./deck.js').Deck;
  CardOnPoker = require('./two-clubs-card.js').Card;
}
/* istanbul ignore next */
else { // Execution in bfileser
  PokerHandOnPoker = Board;
  DeckOnPoker = Deck;
  CardOnPoker = Card;
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
    this.firstCard = new CardOnPoker(2, 2);
    this.CANVAS1 = document.getElementById("canvas1");
    this.CANVAS2 = document.getElementById("canvas2");
    this.CONTEXT1 = this.CANVAS1.getContext("2d");
    this.CONTEXT2 = this.CANVAS2.getContext("2d");
    this.CANVAS1.width = window.innerWidth - 100;
    this.CANVAS1.height = window.innerHeight / 2 - 100;
    this.CANVAS2.width = window.innerWidth - 100;
    this.CANVAS2.height = window.innerHeight / 2 - 100;
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Poker = Poker;
}
