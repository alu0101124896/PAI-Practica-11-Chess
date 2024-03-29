/**
 * @file piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a piece class for the chess.
 */

"use strict";

/**
 * @description Class representing an piece
 *
 * @class Piece
 */
class Piece {

  /**
   * @description Constructor that creates an instance of a piece.
   *
   * @param {number} [file=0] - File where the piece is on
   * @param {number} [rank=0] - Rank where the piece is on
   * @memberof Piece
   */
  constructor(file = 0, rank = 0) {
    this.file = file;
    this.rank = rank;
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Piece = Piece;
}
