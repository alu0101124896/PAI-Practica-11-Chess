/**
 * @file black-bishop-piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a black bishop piece class for the chess.
 */

"use strict";

let PieceOnBlackBishopPiece;
if (typeof require !== 'undefined') { // Execution in node
  PieceOnBlackBishopPiece = require('./piece.js').Piece;
} else { // Execution in browser
  PieceOnBlackBishopPiece = Piece;
}

/**
 * @description Class representing an black bishop piece
 *
 * @class BlackBishopPiece
 */
class BlackBishopPiece extends PieceOnBlackBishopPiece {

  /**
   * @description Constructor that creates an instance of a black bishop piece.
   *
   * @memberof BlackBishopPiece
   */
  constructor(xCoord = 0, yCoord = 0, size = 10) {
    super(xCoord, yCoord, size);
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/black-bishop-piece.svg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.BlackBishopPiece = BlackBishopPiece;
}
