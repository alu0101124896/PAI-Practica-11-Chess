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
    this.CANVAS = document.getElementById("canvas");
    this.CONTEXT = this.CANVAS.getContext("2d");
    this.CANVAS.width = window.innerWidth / 2 - 100;
    this.CANVAS.height = window.innerWidth / 2 - 100;
    this.CONTEXT.translate(0, this.CANVAS.height);
    this.board.draw(this.CONTEXT, this.CANVAS);
  }

  /**
   * @description Function that puts all pieces on the starting position of a
   *  chess match and draws it on the canvas
   *
   * @memberof Chess
   */
  chessMatch() {
    this.board.piecesOnStartingPosition();
    this.board.draw(this.CONTEXT, this.CANVAS);
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Chess = Chess;
}
