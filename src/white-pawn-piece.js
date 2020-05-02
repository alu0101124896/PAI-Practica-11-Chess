/**
 * @file white-pawn-piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a white pawn piece class for the chess.
 */

"use strict";

let PieceOnWhitePawnPiece;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PieceOnWhitePawnPiece = require('./piece.js').Piece;
}
/* istanbul ignore next */
 else { // Execution in browser
  PieceOnWhitePawnPiece = Piece;
}

/**
 * @description Class representing an white pawn piece
 *
 * @class WhitePawnPiece
 */
class WhitePawnPiece extends PieceOnWhitePawnPiece {

  /**
   * @description Constructor that creates an instance of a white pawn piece.
   *
   * @memberof WhitePawnPiece
   */
  constructor(rank = 0, file = 0, size = 10) {
    super(rank, file, size);
    /* istanbul ignore next */
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/white-pawn-piece.svg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.WhitePawnPiece = WhitePawnPiece;
}
