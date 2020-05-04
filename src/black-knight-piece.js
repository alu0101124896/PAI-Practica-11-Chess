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

// const BLACK_KNIGHT_PIECE = document.getElementById('black-knight-piece');

/**
 * @description Class representing an black knight piece
 *
 * @class BlackKnightPiece
 */
class BlackKnightPiece extends PieceOnBlackKnightPiece {

  /**
   * @description Constructor that creates an instance of a black knight piece.
   *
   * @param {number} [file=0] - File where the piece is on
   * @param {number} [rank=0] - Rank where the piece is on
   * @memberof BlackKnightPiece
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
   * @memberof BlackKnightPiece
   */
  drawPiece(CONTEXT, CANVAS) {
    CONTEXT.drawImage(BLACK_KNIGHT_PIECE, this.file * (CANVAS.width / 8),
      -this.rank * (CANVAS.width / 8), CANVAS.width / 8, -CANVAS.height / 8);
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the piece at the given canvas when the
   *  image is loaded
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof BlackKnightPiece
   */
  draw(CONTEXT, CANVAS) {
    BLACK_KNIGHT_PIECE.onload = this.drawPiece(CONTEXT, CANVAS);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.BlackKnightPiece = BlackKnightPiece;
}
