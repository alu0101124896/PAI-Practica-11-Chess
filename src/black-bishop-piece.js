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
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PieceOnBlackBishopPiece = require('./piece.js').Piece;
}
/* istanbul ignore next */
 else { // Execution in browser
  PieceOnBlackBishopPiece = Piece;
}

const BLACK_BISHOP_PIECE = document.getElementById('black-bishop-piece');

/**
 * @description Class representing an black bishop piece
 *
 * @class BlackBishopPiece
 */
class BlackBishopPiece extends PieceOnBlackBishopPiece {

  /**
   * @description Constructor that creates an instance of a black bishop piece.
   *
   * @param {number} [file=0] - File where the piece is on
   * @param {number} [rank=0] - Rank where the piece is on
   * @memberof BlackBishopPiece
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
   * @memberof BlackBishopPiece
   */
  drawPiece(CONTEXT, CANVAS) {
    CONTEXT.drawImage(BLACK_BISHOP_PIECE, this.file * (CANVAS.width / 8),
      -this.rank * (CANVAS.width / 8), CANVAS.width / 8, -CANVAS.height / 8);
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the piece at the given canvas when the
   *  image is loaded
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof BlackBishopPiece
   */
  draw(CONTEXT, CANVAS) {
    BLACK_BISHOP_PIECE.onload = this.drawPiece(CONTEXT, CANVAS);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.BlackBishopPiece = BlackBishopPiece;
}
