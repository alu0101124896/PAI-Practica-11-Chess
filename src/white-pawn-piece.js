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

const WHITE_PAWN_PIECE = document.getElementById('white-pawn-piece');

/**
 * @description Class representing an white pawn piece
 *
 * @class WhitePawnPiece
 */
class WhitePawnPiece extends PieceOnWhitePawnPiece {

  /**
   * @description Constructor that creates an instance of a white pawn piece.
   *
   * @param {number} [file=0] - File where the piece is on
   * @param {number} [rank=0] - Rank where the piece is on
   * @memberof WhitePawnPiece
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
   * @memberof WhitePawnPiece
   */
  drawPiece(CONTEXT, CANVAS) {
    CONTEXT.drawImage(WHITE_PAWN_PIECE, this.file * (CANVAS.width / 8),
      -this.rank * (CANVAS.width / 8), CANVAS.width / 8, -CANVAS.height / 8);
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the piece at the given canvas when the
   *  image is loaded
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof WhitePawnPiece
   */
  draw(CONTEXT, CANVAS) {
    WHITE_PAWN_PIECE.onload = this.drawPiece(CONTEXT, CANVAS);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.WhitePawnPiece = WhitePawnPiece;
}
