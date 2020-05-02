/**
 * @file board.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a board class for the chess.
 */

"use strict";

let PieceOnBoard;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  PieceOnBoard = require('./piece.js').Piece;
}
/* istanbul ignore next */
else { // Execution in browser
  PieceOnBoard = Piece;
}

const NUM_OF_RANKS = 8;
const NUM_OF_FILES = 8;

/**
 * @description Class representing an board
 *
 * @class Board
 */
class Board {

  /**
   * @description Constructor that creates an instance of a board.
   *
   * @memberof Board
   */
  constructor(xCoord = 0, yCoord = 0, size = 10) {
    this.xCoord = xCoord;
    this.yCoord = yCoord;
    this.size = size;
    this.matrix = [];
    for (let ranksIterator = 0; ranksIterator < NUM_OF_RANKS; ranksIterator++) {
      let tempRank = [];
      for (let filesIterator = 0; filesIterator < NUM_OF_FILES; filesIterator++) {
        tempRank.push(0);
      }
      this.matrix.push(tempRank);
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Board = Board;
}
