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
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PieceOnWhiteBishopPiece = require('./piece.js').Piece;
}
/* istanbul ignore next */
 else { // Execution in browser
  PieceOnWhiteBishopPiece = Piece;
}

// const WHITE_BISHOP_PIECE = document.getElementById('white-bishop-piece');

/**
 * @description Class representing an white bishop piece
 *
 * @class WhiteBishopPiece
 */
class WhiteBishopPiece extends PieceOnWhiteBishopPiece {

  /**
   * @description Constructor that creates an instance of a white bishop piece.
   *
   * @param {number} [file=0] - File where the piece is on
   * @param {number} [rank=0] - Rank where the piece is on
   * @memberof WhiteBishopPiece
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
   * @memberof WhiteBishopPiece
   */
  drawPiece(CONTEXT, CANVAS) {
    CONTEXT.drawImage(WHITE_BISHOP_PIECE, this.file * (CANVAS.width / 8),
      -this.rank * (CANVAS.width / 8), CANVAS.width / 8, -CANVAS.height / 8);
  }

  /* istanbul ignore next */
  /**
   * @description Function that draws the piece at the given canvas when the
   *  image is loaded
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof WhiteBishopPiece
   */
  draw(CONTEXT, CANVAS) {
    WHITE_BISHOP_PIECE.onload = this.drawPiece(CONTEXT, CANVAS);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.WhiteBishopPiece = WhiteBishopPiece;
}
