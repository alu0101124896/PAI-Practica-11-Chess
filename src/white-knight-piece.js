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
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PieceOnWhiteKnightPiece = require('./piece.js').Piece;
}
/* istanbul ignore next */
 else { // Execution in browser
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
   * @param {number} [rank=0] - Rank where the piece is on
   * @param {number} [file=0] - File where the piece is on
   * @memberof WhiteKnightPiece
   */
  constructor(rank = 0, file = 0) {
    super(rank, file);
    /* istanbul ignore next */
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/white-knight-piece.svg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.WhiteKnightPiece = WhiteKnightPiece;
}
