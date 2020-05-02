/**
 * @file black-knight-piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a black knight piece class for the chess.
 */

"use strict";

let PieceOnBlackKnightPiece;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PieceOnBlackKnightPiece = require('./piece.js').Piece;
}
/* istanbul ignore next */
 else { // Execution in browser
  PieceOnBlackKnightPiece = Piece;
}

/**
 * @description Class representing an black knight piece
 *
 * @class BlackKnightPiece
 */
class BlackKnightPiece extends PieceOnBlackKnightPiece {

  /**
   * @description Constructor that creates an instance of a black knight piece.
   *
   * @memberof BlackKnightPiece
   */
  constructor(rank = 0, file = 0, size = 10) {
    super(rank, file, size);
    /* istanbul ignore next */
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/black-knight-piece.svg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.BlackKnightPiece = BlackKnightPiece;
}
