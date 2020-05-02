/**
 * @file white-king-piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a white king piece class for the chess.
 */

"use strict";

let PieceOnWhiteKingPiece;
if (typeof require !== 'undefined') { // Execution in node
  PieceOnWhiteKingPiece = require('./piece.js').Piece;
} else { // Execution in browser
  PieceOnWhiteKingPiece = Piece;
}

/**
 * @description Class representing an white king piece
 *
 * @class WhiteKingPiece
 */
class WhiteKingPiece extends PieceOnWhiteKingPiece {

  /**
   * @description Constructor that creates an instance of a white king piece.
   *
   * @memberof WhiteKingPiece
   */
  constructor(xCoord = 0, yCoord = 0, size = 10) {
    super(xCoord, yCoord, size);
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/wK.jpg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.WhiteKingPiece = WhiteKingPiece;
}
