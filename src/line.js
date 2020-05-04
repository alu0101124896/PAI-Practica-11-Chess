/**
 * @file line.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a line class for the chess.
 */

"use strict";

let QueenOnLine;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  QueenOnLine = require('./white-queen-piece.js').WhiteQueenPiece;
}
/* istanbul ignore next */
else { // Execution in bfileser
  QueenOnLine = WhiteQueenPiece
}

/**
 * @description Class representing an line
 *
 * @class Line
 */
class Line {

  /**
   * @description Constructor that creates an instance of a line.
   *
   * @param {QueenOnLine} firstQueen - The first of the queens
   * @param {QueenOnLine} secondQueen - The second of the queens
   * @memberof Line
   */
  constructor(firstQueen, secondQueen) {
    this.slope = (secondQueen.rank - firstQueen.rank) /
      (secondQueen.file - firstQueen.file);
    this.displacement = (this.slope * (-firstQueen.file)) + firstQueen.rank;
  }

  /**
   * @description Function that checks if the queen is in a line
   *
   * @param {number} file - Candidate file to input a queen
   * @param {number} rank - Candidate rank to input a queen
   * @returns {boolean} Returns true if the queen is in the line
   * @memberof Line
   */
  isPointInLine(file, rank) {
    return ((this.slope * file + this.displacement - rank) === 0);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Line = Line;
}
