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
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PieceOnWhiteKingPiece = require('./piece.js').Piece;
}
/* istanbul ignore next */
 else { // Execution in browser
  PieceOnWhiteKingPiece = Piece;
}

/**
 * @description Class representing an white king piece
 *
 * @class WhiteKingPiece
 */
class WhiteKingPiece extends PieceOnWhiteKingPiece {

  /**
   *
   * @description Constructor that creates an instance of a white king piece.
   *
   * @param {number} [rank=0] - Rank where the piece is on
   * @param {number} [file=0] - File where the piece is on
   * @memberof WhiteKingPiece
   */
  constructor(rank = 0, file = 0) {
    super(rank, file);
    /* istanbul ignore next */
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/white-king-piece.svg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.WhiteKingPiece = WhiteKingPiece;
}
