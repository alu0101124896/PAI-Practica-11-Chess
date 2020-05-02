/**
 * @file white-bishop-piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a white bishop piece class for the chess.
 */

"use strict";

let PieceOnWhiteBishopPiece;
if (typeof require !== 'undefined') { // Execution in node
  PieceOnWhiteBishopPiece = require('./piece.js').Piece;
} else { // Execution in browser
  PieceOnWhiteBishopPiece = Piece;
}

/**
 * @description Class representing an white bishop piece
 *
 * @class WhiteBishopPiece
 */
class WhiteBishopPiece extends PieceOnWhiteBishopPiece {

  /**
   * @description Constructor that creates an instance of a white bishop piece.
   *
   * @memberof WhiteBishopPiece
   */
  constructor(xCoord = 0, yCoord = 0, size = 10) {
    super(xCoord, yCoord, size);
    if (typeof exports === 'undefined') { // Execution in browser
      this.img.src = '../img/white-bishop-piece.jpg'
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.WhiteBishopPiece = WhiteBishopPiece;
}