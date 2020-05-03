/**
 * @file chess.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a chess class for the chess.
 */

"use strict";

let BoardOnChess;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  BoardOnChess = require('./board.js').Board;
}
/* istanbul ignore next */
else { // Execution in browser
  BoardOnChess = Board;
}

const CANVAS = document.getElementById("canvas");
const CONTEXT = CANVAS.getContext("2d");
CANVAS.width = window.innerHeight - 175;
CANVAS.height = window.innerHeight - 175;

/**
 * @description Class representing an chess
 *
 * @class Chess
 */
class Chess {

  /**
   * @description Constructor that creates an instance of a chess.
   *
   * @memberof Chess
   */
  constructor() {
    this.board = new BoardOnChess();
  }

  chessMatch() {
    this.board.piecesOnStartingPosition();
    this.board.draw(CONTEXT, CANVAS);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Chess = Chess;
}
