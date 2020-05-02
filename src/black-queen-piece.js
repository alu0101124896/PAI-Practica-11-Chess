/**
 * @file black-queen-piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a black queen piece class for the chess.
 */

"use strict";

let PieceOnBlackQueenPiece;
if (typeof require !== 'undefined') { // Execution in node
  PieceOnBlackQueenPiece = require('./piece.js').Piece;
} else { // Execution in browser
  PieceOnBlackQueenPiece = Piece;
}

/**
 * @description Class representing an black queen piece
 *
 * @class BlackQueenPiece
 */
class BlackQueenPiece extends PieceOnBlackQueenPiece {

  /**
   * @description Constructor that creates an instance of a black queen piece.
   *
   * @memberof BlackQueenPiece
   */
  constructor(xCoord = 0, yCoord = 0, size = 10) {
    super(xCoord, yCoord, size);
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/black-queen-piece.svg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.BlackQueenPiece = BlackQueenPiece;
}
