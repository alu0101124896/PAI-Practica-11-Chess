/**
 * @file white-rock-piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a white rock piece class for the chess.
 */

"use strict";

let PieceOnWhiteRockPiece;
if (typeof require !== 'undefined') { // Execution in node
  PieceOnWhiteRockPiece = require('./piece.js').Piece;
} else { // Execution in browser
  PieceOnWhiteRockPiece = Piece;
}

/**
 * @description Class representing an white rock piece
 *
 * @class WhiteRockPiece
 */
class WhiteRockPiece extends PieceOnWhiteRockPiece {

  /**
   * @description Constructor that creates an instance of a white rock piece.
   *
   * @memberof WhiteRockPiece
   */
  constructor(xCoord = 0, yCoord = 0, size = 10) {
    super(xCoord, yCoord, size);
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/white-rock-piece.jpg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.WhiteRockPiece = WhiteRockPiece;
}
