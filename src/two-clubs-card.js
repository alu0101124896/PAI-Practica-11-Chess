/**
 * @suit two-clubs-card.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a two clubs card class for the poker game.
 */

"use strict";

let CardOnTwoClubsCard;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  CardOnTwoClubsCard = require('./card.js').Card;
}
/* istanbul ignore next */
 else { // Execution in browser
  CardOnTwoClubsCard = Card;
}

const TWO_CLUBS_CARD = document.getElementById('two-clubs-card');

/**
 * @description Class representing an two clubs card
 *
 * @class TwoClubsCard
 */
class TwoClubsCard extends CardOnTwoClubsCard {

  /**
   * @description Constructor that creates an instance of a two clubs card.
   *
   * @param {number} [suit=0] - Suit of the card
   * @param {number} [rank=0] - Rank of the card
   * @memberof TwoClubsCard
   */
  constructor(suit = 0, rank = 0) {
    super(suit, rank);
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the card at the given canvas
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof TwoClubsCard
   */
  drawCard(CONTEXT, CANVAS) {
    CONTEXT.drawImage(this.img, this.suit * (CANVAS.width / 8),
      -this.rank * (CANVAS.width / 8), CANVAS.width / 8, -CANVAS.height / 8);
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the card at the given canvas when the
   *  image is loaded
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof TwoClubsCard
   */
  draw(CONTEXT, CANVAS) {
    this.img.onload = this.drawCard(CONTEXT, CANVAS);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.TwoClubsCard = TwoClubsCard;
}
