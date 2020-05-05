/**
 * @file card.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a card class for the Poker. More info
 *  about it here: https://en.wikipedia.org/wiki/Poker
 */

"use strict";

const SPADES_ON_CARD = 4;
const HEARTS_ON_CARD = 3;
const DIAMONDS_ON_CARD = 2;
const CLUBS_ON_CARD = 1;

const ACE_ON_CARD = 14;
const KING_ON_CARD = 13;
const QUEEN_ON_CARD = 12;
const JACK_ON_CARD = 11;
const TEN_ON_CARD = 10;
const NINE_ON_CARD = 9;
const EIGHT_ON_CARD = 8;
const SEVEN_ON_CARD = 7;
const SIX_ON_CARD = 6;
const FIVE_ON_CARD = 5;
const FOUR_ON_CARD = 4;
const THREE_ON_CARD = 3;
const TWO_ON_CARD = 2;

/**
 * @description Class representing a card
 *
 * @class Card
 */
class Card {

  /**
   * @description Constructor that creates an instance of a card.
   *
   * @memberof Card
   */
  constructor(suit = CLUBS_ON_CARD, rank = TWO_ON_CARD) {
    this.suit = suit;
    this.rank = rank;
    this.getImage();
  }

  getImage() {
    switch (this.suit) {
      case SPADES_ON_CARD:
        switch (this.rank) {
          case ACE_ON_CARD:
            this.img = document.getElementById('ace-spades-card');
            break;
          case KING_ON_CARD:
            this.img = document.getElementById('king-spades-card');
            break;
          case QUEEN_ON_CARD:
            this.img = document.getElementById('queen-spades-card');
            break;
          case JACK_ON_CARD:
            this.img = document.getElementById('jack-spades-card');
            break;
          case TEN_ON_CARD:
            this.img = document.getElementById('ten-spades-card');
            break;
          case NINE_ON_CARD:
            this.img = document.getElementById('nine-spades-card');
            break;
          case EIGHT_ON_CARD:
            this.img = document.getElementById('eight-spades-card');
            break;
          case SEVEN_ON_CARD:
            this.img = document.getElementById('seven-spades-card');
            break;
          case SIX_ON_CARD:
            this.img = document.getElementById('six-spades-card');
            break;
          case FIVE_ON_CARD:
            this.img = document.getElementById('five-spades-card');
            break;
          case FOUR_ON_CARD:
            this.img = document.getElementById('four-spades-card');
            break;
          case THREE_ON_CARD:
            this.img = document.getElementById('three-spades-card');
            break;
          case TWO_ON_CARD:
            this.img = document.getElementById('two-spades-card');
            break;

          default: console.error('Error: unknown rank on spades suit');
            break;
        }
        break;
      case HEARTS_ON_CARD:
        switch (this.rank) {
          case ACE_ON_CARD:
            this.img = document.getElementById('ace-hearts-card');
            break;
          case KING_ON_CARD:
            this.img = document.getElementById('king-hearts-card');
            break;
          case QUEEN_ON_CARD:
            this.img = document.getElementById('queen-hearts-card');
            break;
          case JACK_ON_CARD:
            this.img = document.getElementById('jack-hearts-card');
            break;
          case TEN_ON_CARD:
            this.img = document.getElementById('ten-hearts-card');
            break;
          case NINE_ON_CARD:
            this.img = document.getElementById('nine-hearts-card');
            break;
          case EIGHT_ON_CARD:
            this.img = document.getElementById('eight-hearts-card');
            break;
          case SEVEN_ON_CARD:
            this.img = document.getElementById('seven-hearts-card');
            break;
          case SIX_ON_CARD:
            this.img = document.getElementById('six-hearts-card');
            break;
          case FIVE_ON_CARD:
            this.img = document.getElementById('five-hearts-card');
            break;
          case FOUR_ON_CARD:
            this.img = document.getElementById('four-hearts-card');
            break;
          case THREE_ON_CARD:
            this.img = document.getElementById('three-hearts-card');
            break;
          case TWO_ON_CARD:
            this.img = document.getElementById('two-hearts-card');
            break;

          default: console.error('Error: unknown rank on hearts suit');
            break;
        }
        break;
      case DIAMONDS_ON_CARD:
        switch (this.rank) {
          case ACE_ON_CARD:
            this.img = document.getElementById('ace-diamonds-card'); break;

          case KING_ON_CARD:
            this.img = document.getElementById('king-diamonds-card'); break;

          case QUEEN_ON_CARD:
            this.img = document.getElementById('queen-diamonds-card'); break;

          case JACK_ON_CARD:
            this.img = document.getElementById('jack-diamonds-card'); break;

          case TEN_ON_CARD:
            this.img = document.getElementById('ten-diamonds-card'); break;

          case NINE_ON_CARD:
            this.img = document.getElementById('nine-diamonds-card'); break;

          case EIGHT_ON_CARD:
            this.img = document.getElementById('eight-diamonds-card'); break;

          case SEVEN_ON_CARD:
            this.img = document.getElementById('seven-diamonds-card'); break;

          case SIX_ON_CARD:
            this.img = document.getElementById('six-diamonds-card'); break;

          case FIVE_ON_CARD:
            this.img = document.getElementById('five-diamonds-card'); break;

          case FOUR_ON_CARD:
            this.img = document.getElementById('four-diamonds-card'); break;

          case THREE_ON_CARD:
            this.img = document.getElementById('three-diamonds-card'); break;

          case TWO_ON_CARD:
            this.img = document.getElementById('two-diamonds-card'); break;


          default: console.error('Error: unknown rank on diamonds suit');
            break;
        }
        break;
      case CLUBS_ON_CARD:
        switch (this.rank) {
          case ACE_ON_CARD:
            this.img = document.getElementById('ace-clubs-card');
            break;
          case KING_ON_CARD:
            this.img = document.getElementById('king-clubs-card');
            break;
          case QUEEN_ON_CARD:
            this.img = document.getElementById('queen-clubs-card');
            break;
          case JACK_ON_CARD:
            this.img = document.getElementById('jack-clubs-card');
            break;
          case TEN_ON_CARD:
            this.img = document.getElementById('ten-clubs-card');
            break;
          case NINE_ON_CARD:
            this.img = document.getElementById('nine-clubs-card');
            break;
          case EIGHT_ON_CARD:
            this.img = document.getElementById('eight-clubs-card');
            break;
          case SEVEN_ON_CARD:
            this.img = document.getElementById('seven-clubs-card');
            break;
          case SIX_ON_CARD:
            this.img = document.getElementById('six-clubs-card');
            break;
          case FIVE_ON_CARD:
            this.img = document.getElementById('five-clubs-card');
            break;
          case FOUR_ON_CARD:
            this.img = document.getElementById('four-clubs-card');
            break;
          case THREE_ON_CARD:
            this.img = document.getElementById('three-clubs-card');
            break;
          case TWO_ON_CARD:
            this.img = document.getElementById('two-clubs-card');
            break;

          default: console.error('Error: unknown rank on clubs suit');
            break;
        }
        break;

      default: console.error('Error: unknown suit');
        break;
    }
  }

  /**
   * @description Function that compares two cards to see which one has the
   *  higher suit. In case of tie, compares the ranks.
   *
   * @static
   * @param {Card} cardOne - First card to compare
   * @param {Card} cardTwo - Second card to compare
   * @returns {Card} Returns the card with the highest value
   * @memberof Card
   */
  static compare(cardOne, cardTwo) {
    if (cardOne.suit > cardTwo.suit) {
      return cardOne;
    } else if (cardOne.suit === cardTwo.suit) {
      if (cardOne.rank >= cardTwo.rank) {
        return cardOne;
      } else {
        return cardTwo;
      }
    } else {
      return cardTwo;
    }
  }

  betterThan(secondCard) {
    if (this.suit > secondCard.suit) {
      return true;
    } else if (this.suit === secondCard.suit) {
      if (this.rank >= secondCard.rank) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the card at the given canvas
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof TwoClubsCard
   */
  drawCard(cardNumber, CONTEXT, CANVAS) {
    CONTEXT.drawImage(this.img, cardNumber * (CANVAS.width / 5), 0,
      CANVAS.width / 5, CANVAS.height);
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
  draw(cardNumber, CONTEXT, CANVAS) {
    this.img.onload = this.drawCard(cardNumber, CONTEXT, CANVAS);
  }
}

if (typeof exports !== 'undefined') { // Execution in node
  exports.Card = Card;
}
