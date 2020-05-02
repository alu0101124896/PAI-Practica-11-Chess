/**
 * @file white-knight-piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a white knight piece class for the chess.
 */

"use strict";

let PieceOnWhiteKnightPiece;
if (typeof require !== 'undefined') { // Execution in node
  PieceOnWhiteKnightPiece = require('./piece.js').Piece;
} else { // Execution in browser
  PieceOnWhiteKnightPiece = Piece;
}

/**
 * @description Class representing an white knight piece
 *
 * @class WhiteKnightPiece
 */
class WhiteKnightPiece extends PieceOnWhiteKnightPiece {

  /**
   * @description Constructor that creates an instance of a white knight piece.
   *
   * @memberof WhiteKnightPiece
   */
  constructor(xCoord = 0, yCoord = 0, size = 10) {
    super(xCoord, yCoord, size);
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/white-knight-piece.jpg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.WhiteKnightPiece = WhiteKnightPiece;
}
