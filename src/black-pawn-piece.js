/**
 * @file black-pawn-piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a black pawn piece class for the chess.
 */

"use strict";

let PieceOnBlackPawnPiece;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PieceOnBlackPawnPiece = require('./piece.js').Piece;
}
/* istanbul ignore next */
 else { // Execution in browser
  PieceOnBlackPawnPiece = Piece;
}

/**
 * @description Class representing an black pawn piece
 *
 * @class BlackPawnPiece
 */
class BlackPawnPiece extends PieceOnBlackPawnPiece {

  /**
   * @description Constructor that creates an instance of a black pawn piece.
   *
   * @memberof BlackPawnPiece
   */
  constructor(rank = 0, file = 0, size = 10) {
    super(rank, file, size);
    /* istanbul ignore next */
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/black-pawn-piece.svg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.BlackPawnPiece = BlackPawnPiece;
}
