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
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PieceOnBlackQueenPiece = require('./piece.js').Piece;
}
/* istanbul ignore next */
 else { // Execution in browser
  PieceOnBlackQueenPiece = Piece;
}

// const BLACK_QUEEN_PIECE = document.getElementById('black-queen-piece');

/**
 * @description Class representing an black queen piece
 *
 * @class BlackQueenPiece
 */
class BlackQueenPiece extends PieceOnBlackQueenPiece {

  /**
   * @description Constructor that creates an instance of a black queen piece.
   *
   * @param {number} [file=0] - File where the piece is on
   * @param {number} [rank=0] - Rank where the piece is on
   * @memberof BlackQueenPiece
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
   * @memberof BlackQueenPiece
   */
  drawPiece(CONTEXT, CANVAS) {
    CONTEXT.drawImage(BLACK_QUEEN_PIECE, this.file * (CANVAS.width / 8),
      -this.rank * (CANVAS.width / 8), CANVAS.width / 8, -CANVAS.height / 8);
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the piece at the given canvas when the
   *  image is loaded
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof BlackQueenPiece
   */
  draw(CONTEXT, CANVAS) {
    BLACK_QUEEN_PIECE.onload = this.drawPiece(CONTEXT, CANVAS);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.BlackQueenPiece = BlackQueenPiece;
}
