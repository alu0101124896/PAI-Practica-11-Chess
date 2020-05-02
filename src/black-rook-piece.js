/**
 * @file black-rook-piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a black rook piece class for the chess.
 */

"use strict";

let PieceOnBlackRookPiece;
if (typeof require !== 'undefined') { // Execution in node
  PieceOnBlackRookPiece = require('./piece.js').Piece;
} else { // Execution in browser
  PieceOnBlackRookPiece = Piece;
}

/**
 * @description Class representing an black rook piece
 *
 * @class BlackRookPiece
 */
class BlackRookPiece extends PieceOnBlackRookPiece {

  /**
   * @description Constructor that creates an instance of a black rook piece.
   *
   * @memberof BlackRookPiece
   */
  constructor(xCoord = 0, yCoord = 0, size = 10) {
    super(xCoord, yCoord, size);
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/black-rook-piece.svg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.BlackRookPiece = BlackRookPiece;
}
