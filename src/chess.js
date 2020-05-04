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
let QueenOnChess;
let LineOnChess;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  BoardOnChess = require('./board.js').Board;
  QueenOnChess = require('./black-queen-piece.js').BlackQueenPiece;
  LineOnChess = require('./line.js').Line;
}
/* istanbul ignore next */
else { // Execution in bfileser
  BoardOnChess = Board;
  QueenOnChess = BlackQueenPiece;
  LineOnChess = Line;
}

const NUM_OF_RANKS_ON_CHESS = 8;
const NUM_OF_FILES_ON_CHESS = 8;

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
    this.eightQueensSolutions = [];
    this.queens = [];
    this.lastSolutionDrawn = 0;
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

  /**
   * @description Function that checks if the queen is in line with another two
   *
   * @param {number} file - Candidate file to input a queen
   * @param {number} rank - Candidate rank to input a queen
   * @returns {boolean} Returns true if the queen is not in line
   * @memberof Chess
   */
  checkLine(file, rank) {
    if (this.queens.length < 2) {
      return true;
    }
    else {
      for (let firstQueen = 0; firstQueen < this.queens.length - 1;
        firstQueen++) {
        for (let secondQueen = firstQueen + 1; secondQueen < this.queens.length;
          secondQueen++) {
          let line = new LineOnChess(this.queens[firstQueen],
            this.queens[secondQueen]);
          if (line.isPointInLine(file, rank)) {
            return false;
          }
        }
      }
      return true;
    }
  }

  /**
   * @description Function that checks if the queen can be placed safely
   *
   * @param {number} file - Candidate file to input a queen
   * @param {number} rank - Candidate rank to input a queen
   * @returns {boolean} Returns true if the queen can be placed safely
   * @memberof Chess
   */
  isSafe(file, rank) {
    for (let rankIterator = 0; rankIterator < rank; rankIterator++) {
      if (this.board.grid[file][rankIterator] !== 0) {
        return false;
      }
    }
    for (let fileIterator = file, rankIterator = rank;
      (fileIterator >= 0) && (rankIterator >= 0);
      fileIterator--, rankIterator--) {
      if (this.board.grid[fileIterator][rankIterator] !== 0) {
        return false;
      }
    }
    for (let fileIterator = file, rankIterator = rank;
      (rankIterator >= 0) && (fileIterator < NUM_OF_FILES_ON_CHESS);
      fileIterator++, rankIterator--) {
      if (this.board.grid[fileIterator][rankIterator] !== 0) {
        return false;
      }
    }
    if (document.getElementById("generalized").checked) {
      return this.checkLine(file, rank);
    } else {
      return true;
    }
  }

  /**
   * @description Function that inserts a queen into the board
   *
   * @param {number} file - File position of the queen in the board
   * @param {number} rank - Rank position of the queen in the board
   * @memberof Chess
   */
  insertQueen(file, rank) {
    this.board.grid[file][rank] = new QueenOnChess(file, rank);
    this.queens.push(new QueenOnChess(file, rank));
  }

  /**
   * @description Function that extracts a queen out of the board
   *
   * @param {number} file - File position of the queen in the board
   * @param {number} rank - Rank position of the queen in the board
   * @memberof Chess
   */
  extractQueen(file, rank) {
    this.board.grid[file][rank] = 0;
    this.queens.pop();
  }

  /**
   * @description Function that deep copies a board instance
   *
   * @param {BoardOnChess} board - Board to be copied
   * @returns {BoardOnChess} Returns the copy of the board
   * @memberof Chess
   */
  copy(board) {
    let newBoard = new BoardOnChess();
    for (let filesIterator = 0; filesIterator < NUM_OF_FILES_ON_CHESS; filesIterator++) {
      for (let ranksIterator = 0; ranksIterator < NUM_OF_RANKS_ON_CHESS; ranksIterator++) {
        if (board.grid[filesIterator][ranksIterator] === 0) {
          newBoard.grid[filesIterator][ranksIterator] = 0;
        } else {
          newBoard.grid[filesIterator][ranksIterator] = Object.assign(
            Object.create(
              Object.getPrototypeOf(board.grid[filesIterator][ranksIterator])
            ),
            board.grid[filesIterator][ranksIterator]
          );
        }
      }
    }
    return newBoard;
  }

  /**
   * @description Recursive function that walks along the board searching for
   *  possible solutions
   *
   * @param {number} rank - Candidate rank to input a queen
   * @memberof Chess
   */
  placeQueens(rank) {
    if (rank === NUM_OF_RANKS_ON_CHESS) {
      this.eightQueensSolutions.push(this.copy(this.board));
    } else {
      for (let filesIterator = 0; filesIterator < NUM_OF_FILES_ON_CHESS;
        filesIterator++) {
        if (this.isSafe(filesIterator, rank)) {
          this.insertQueen(filesIterator, rank);
          this.placeQueens(rank + 1);
          this.extractQueen(filesIterator, rank);
        }
      }
    }
  }

  printSolution(solutionNumber) {
    this.eightQueensSolutions[solutionNumber].
      draw(this.CONTEXT, this.CANVAS);
    this.lastSolutionDrawn++;
  }

  /**
   * @description Function that starts the search of the solutions to the eight
   *  queens puzzle
   *
   * @memberof Chess
   */
  solvePuzzle() {
    this.board.reset();
    this.eightQueensSolutions.splice(this.eightQueensSolutions[0],
      this.eightQueensSolutions.length);
    this.lastSolutionDrawn = 0;
    const initialRank = 0;
    this.placeQueens(initialRank);
    if (this.eightQueensSolutions.length > 0) {
      this.printSolution(0);

    }
  }

  /**
   * @description Function that draws the next solution of the puzzle
   *
   * @memberof Chess
   */
  nextSolution() {
    if (this.lastSolutionDrawn < this.eightQueensSolutions.length) {
      this.printSolution(this.lastSolutionDrawn);
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Chess = Chess;
}
