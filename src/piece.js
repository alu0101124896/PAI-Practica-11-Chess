/**
 * @file piece.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a piece class for the smiley face.
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
   * @memberof Piece
   */
  constructor(xCoord = 0, yCoord = 0) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Piece = Piece;
}
