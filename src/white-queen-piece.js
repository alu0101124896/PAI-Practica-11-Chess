/**
 * @file white-queen-piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a white queen piece class for the chess.
 */

"use strict";

let PieceOnWhiteQueenPiece;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PieceOnWhiteQueenPiece = require('./piece.js').Piece;
}
/* istanbul ignore next */
else { // Execution in browser
  PieceOnWhiteQueenPiece = Piece;
}

/**
 * @description Class representing an white queen piece
 *
 * @class WhiteQueenPiece
 */
class WhiteQueenPiece extends PieceOnWhiteQueenPiece {

  /**
   * @description Constructor that creates an instance of a white queen piece.
   *
   * @param {number} [rank=0] - Rank where the piece is on
   * @param {number} [file=0] - File where the piece is on
   * @memberof WhiteQueenPiece
   */
  constructor(rank = 0, file = 0) {
    super(rank, file);
    /* istanbul ignore next */
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/white-queen-piece.svg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.WhiteQueenPiece = WhiteQueenPiece;
}
