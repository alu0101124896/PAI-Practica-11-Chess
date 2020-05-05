/**
 * @file poker-game.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a poker game class for the poker game.
 */

"use strict";

let PokerHandOnPokerGame;
let DeckOnPokerGame;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PokerHandOnPokerGame = require('./poker-hand.js').PokerHand;
  DeckOnPokerGame = require('./deck.js').Deck;
}
/* istanbul ignore next */
else { // Execution in bfileser
  PokerHandOnPokerGame = Board;
  DeckOnPokerGame = Deck;
}

/**
 * @description Class representing an poker game
 *
 * @class PokerGame
 */
class PokerGame {

  /**
   * @description Constructor that creates an instance of a poker game.
   *
   * @memberof PokerGame
   */
  constructor() {
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.PokerGame = PokerGame;
}
