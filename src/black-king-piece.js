/**
 * @file black-king-piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a black king piece class for the chess.
 */

"use strict";

let PieceOnBlackKingPiece;
if (typeof require !== 'undefined') { // Execution in node
  PieceOnBlackKingPiece = require('./piece.js').Piece;
} else { // Execution in browser
  PieceOnBlackKingPiece = Piece;
}

/**
 * @description Class representing an black king piece
 *
 * @class BlackKingPiece
 */
class BlackKingPiece extends PieceOnBlackKingPiece {

  /**
   * @description Constructor that creates an instance of a black king piece.
   *
   * @memberof BlackKingPiece
   */
  constructor(xCoord = 0, yCoord = 0, size = 10) {
    super(xCoord, yCoord, size);
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/black-king-piece.svg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.BlackKingPiece = BlackKingPiece;
}
