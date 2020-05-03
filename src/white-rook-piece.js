/**
 * @file white-rook-piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a white rook piece class for the chess.
 */

"use strict";

let PieceOnWhiteRookPiece;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PieceOnWhiteRookPiece = require('./piece.js').Piece;
}
/* istanbul ignore next */
 else { // Execution in browser
  PieceOnWhiteRookPiece = Piece;
}

const WHITE_ROOK_PIECE = document.getElementById('white-rook-piece');

/**
 * @description Class representing an white rook piece
 *
 * @class WhiteRookPiece
 */
class WhiteRookPiece extends PieceOnWhiteRookPiece {

  /**
   * @description Constructor that creates an instance of a white rook piece.
   *
   * @param {number} [file=0] - File where the piece is on
   * @param {number} [rank=0] - Rank where the piece is on
   * @memberof WhiteRookPiece
   */
  constructor(file = 0, rank = 0) {
    super(file, rank);
    /* istanbul ignore next */
    if (typeof exports === 'undefined') { // Execution in browser
      this.img = new Image();
    }
  }

  drawPiece(CONTEXT, CANVAS) {
    CONTEXT.drawImage(WHITE_ROOK_PIECE, this.file * (CANVAS.width / 8),
      -this.rank * (CANVAS.width / 8), CANVAS.width / 8, -CANVAS.height / 8);
  }

  draw(CONTEXT, CANVAS) {
    WHITE_ROOK_PIECE.onload = this.drawPiece(CONTEXT, CANVAS);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.WhiteRookPiece = WhiteRookPiece;
}
