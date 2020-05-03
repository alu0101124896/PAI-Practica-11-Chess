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
    for (let ranksIterator = 0; ranksIterator < NUM_OF_RANKS; ranksIterator++) {
      let tempRank = [];
      for (let filesIterator = 0; filesIterator < NUM_OF_FILES;
        filesIterator++) {
        tempRank.push(0);
      }
      this.matrix.push(tempRank);
    }
  }

  piecesOnStartingPosition() {
    for (let filesIterator = 0; filesIterator < array.length; filesIterator++) {
      this.matrix[1][filesIterator] = new WhitePawnPieceOnBoard(1,
         filesIterator);
      this.matrix[6][filesIterator] = new BlackPawnPieceOnBoard(6,
         filesIterator);
    }
  }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') { // Execution in node
  exports.Board = Board;
}
