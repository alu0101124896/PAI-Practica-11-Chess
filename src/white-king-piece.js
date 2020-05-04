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

const WHITE_KING_PIECE = document.getElementById('white-king-piece');

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
   * @param {number} [file=0] - File where the piece is on
   * @param {number} [rank=0] - Rank where the piece is on
   * @memberof WhiteKingPiece
   */
  constructor(file = 0, rank = 0) {
    super(file, rank);
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the piece at the given canvas
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof WhiteKingPiece
   */
  drawPiece(CONTEXT, CANVAS) {
    CONTEXT.drawImage(WHITE_KING_PIECE, this.file * (CANVAS.width / 8),
      -this.rank * (CANVAS.width / 8), CANVAS.width / 8, -CANVAS.height / 8);
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the piece at the given canvas when the
   *  image is loaded
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof WhiteKingPiece
   */
  draw(CONTEXT, CANVAS) {
    WHITE_KING_PIECE.onload = this.drawPiece(CONTEXT, CANVAS);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.WhiteKingPiece = WhiteKingPiece;
}
