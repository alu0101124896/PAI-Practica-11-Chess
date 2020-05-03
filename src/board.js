/**
 * @file board.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements a board class for the chess.
 */

"use strict";

let WhiteKingPieceOnBoard;
let WhiteQueenPieceOnBoard;
let WhiteBishopPieceOnBoard;
let WhiteKnightPieceOnBoard;
let WhiteRookPieceOnBoard;
let WhitePawnPieceOnBoard;
let BlackKingPieceOnBoard;
let BlackQueenPieceOnBoard;
let BlackBishopPieceOnBoard;
let BlackKnightPieceOnBoard;
let BlackRookPieceOnBoard;
let BlackPawnPieceOnBoard;
/* istanbul ignore next */
if (typeof require !== 'undefined') { // Execution in node
  WhiteKingPieceOnBoard = require('./white-king-piece.js').WhiteKingPiece;
  WhiteQueenPieceOnBoard = require('./white-queen-piece.js').WhiteQueenPiece;
  WhiteBishopPieceOnBoard = require('./white-bishop-piece.js').WhiteBishopPiece;
  WhiteKnightPieceOnBoard = require('./white-knight-piece.js').WhiteKnightPiece;
  WhiteRookPieceOnBoard = require('./white-rook-piece.js').WhiteRookPiece;
  WhitePawnPieceOnBoard = require('./white-pawn-piece.js').WhitePawnPiece;
  BlackKingPieceOnBoard = require('./black-king-piece.js').BlackKingPiece;
  BlackQueenPieceOnBoard = require('./black-queen-piece.js').BlackQueenPiece;
  BlackBishopPieceOnBoard = require('./black-bishop-piece.js').BlackBishopPiece;
  BlackKnightPieceOnBoard = require('./black-knight-piece.js').BlackKnightPiece;
  BlackRookPieceOnBoard = require('./black-rook-piece.js').BlackRookPiece;
  BlackPawnPieceOnBoard = require('./black-pawn-piece.js').BlackPawnPiece;
}
/* istanbul ignore next */
else { // Execution in browser
  WhiteKingPieceOnBoard = WhiteKingPiece;
  WhiteQueenPieceOnBoard = WhiteQueenPiece;
  WhiteBishopPieceOnBoard = WhiteBishopPiece;
  WhiteKnightPieceOnBoard = WhiteKnightPiece;
  WhiteRookPieceOnBoard = WhiteRookPiece;
  WhitePawnPieceOnBoard = WhitePawnPiece;
  BlackKingPieceOnBoard = BlackKingPiece;
  BlackQueenPieceOnBoard = BlackQueenPiece;
  BlackBishopPieceOnBoard = BlackBishopPiece;
  BlackKnightPieceOnBoard = BlackKnightPiece;
  BlackRookPieceOnBoard = BlackRookPiece;
  BlackPawnPieceOnBoard = BlackPawnPiece;
}

const NUM_OF_RANKS = 8;
const NUM_OF_FILES = 8;
const LIGHT_TILE = '#ffce9e';
const DARK_TILE = '#d18b47';

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
  constructor() {
    this.matrix = [];
    for (let filesIterator = 0; filesIterator < NUM_OF_FILES; filesIterator++) {
      let tempFile = [];
      for (let ranksIterator = 0; ranksIterator < NUM_OF_RANKS; ranksIterator++) {
        tempFile.push(0);
      }
      this.matrix.push(tempFile);
    }
  }

  /**
   * @description Function that places all the pieces on the starting position
   *  of the game.
   *
   * @memberof Board
   */
  piecesOnStartingPosition() {
    this.matrix[4][0] = new WhiteKingPieceOnBoard(4, 0);
    this.matrix[4][7] = new BlackKingPieceOnBoard(4, 7);
    this.matrix[3][0] = new WhiteQueenPieceOnBoard(3, 0);
    this.matrix[3][7] = new BlackQueenPieceOnBoard(3, 7);
    this.matrix[2][0] = new WhiteBishopPieceOnBoard(2, 0);
    this.matrix[5][0] = new WhiteBishopPieceOnBoard(5, 0);
    this.matrix[2][7] = new BlackBishopPieceOnBoard(2, 7);
    this.matrix[5][7] = new BlackBishopPieceOnBoard(5, 7);
    this.matrix[1][0] = new WhiteKnightPieceOnBoard(1, 0);
    this.matrix[6][0] = new WhiteKnightPieceOnBoard(6, 0);
    this.matrix[1][7] = new BlackKnightPieceOnBoard(1, 7);
    this.matrix[6][7] = new BlackKnightPieceOnBoard(6, 7);
    this.matrix[0][0] = new WhiteRookPieceOnBoard(0, 0);
    this.matrix[7][0] = new WhiteRookPieceOnBoard(7, 0);
    this.matrix[0][7] = new BlackRookPieceOnBoard(0, 7);
    this.matrix[7][7] = new BlackRookPieceOnBoard(7, 7);

    for (let filesIterator = 0; filesIterator < NUM_OF_FILES; filesIterator++) {
      this.matrix[filesIterator][1] = new WhitePawnPieceOnBoard(filesIterator, 1);
      this.matrix[filesIterator][6] = new BlackPawnPieceOnBoard(filesIterator, 6);
    }
  }

  /**
   * @description Function that draws the board with the containing pieces
   *
   * @param {*} CONTEXT - Canvas context
   * @param {*} CANVAS - Canvas
   * @memberof Board
   */
  draw(CONTEXT, CANVAS) {
    CONTEXT.translate(0, CANVAS.height);
    for (let filesIterator = 0; filesIterator < NUM_OF_FILES; filesIterator++) {
      for (let ranksIterator = 0; ranksIterator < NUM_OF_RANKS; ranksIterator++) {
        if (((filesIterator + ranksIterator) % 2) === 0) {
          CONTEXT.fillStyle = DARK_TILE;
        } else {
          CONTEXT.fillStyle = LIGHT_TILE;
        }
        CONTEXT.fillRect(filesIterator * (CANVAS.width / 8),
          -ranksIterator * (CANVAS.width / 8), CANVAS.width / 8,
          -CANVAS.height / 8);
        if (this.matrix[filesIterator][ranksIterator] !== 0) {
          this.matrix[filesIterator][ranksIterator].draw(CONTEXT, CANVAS);
        }
      }
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Board = Board;
}
