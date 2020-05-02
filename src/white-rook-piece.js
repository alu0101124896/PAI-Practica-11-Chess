/**
 * @file white-rook-piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a white rook piece class for the chess.
 */

"use strict";

let PieceOnWhiteRookPiece;
if (typeof require !== 'undefined') { // Execution in node
  PieceOnWhiteRookPiece = require('./piece.js').Piece;
} else { // Execution in browser
  PieceOnWhiteRookPiece = Piece;
}

/**
 * @description Class representing an white rook piece
 *
 * @class WhiteRookPiece
 */
class WhiteRookPiece extends PieceOnWhiteRookPiece {

  /**
   * @description Constructor that creates an instance of a white rook piece.
   *
   * @memberof WhiteRookPiece
   */
  constructor(xCoord = 0, yCoord = 0, size = 10) {
    super(xCoord, yCoord, size);
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/white-rook-piece.jpg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.WhiteRookPiece = WhiteRookPiece;
}
