/**
 * @file black-queen-piece-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Black Queen Piece
 *  class
 */

"use strict";

let expectOnBlackQueenPieceTest;
let BlackQueenPieceOnBlackQueenPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnBlackQueenPieceTest = require('chai').expect;
  BlackQueenPieceOnBlackQueenPieceTest = require('../src/black-queen-piece.js').BlackQueenPiece;
} else { // Execution in browser
  expectOnBlackQueenPieceTest = expect;
  BlackQueenPieceOnBlackQueenPieceTest = BlackQueenPiece;
}

describe('Black Queen Piece Class', () => {
  describe('Default inherited properties', () => {
    const MY_BLACK_QUEEN_PIECE = new BlackQueenPieceOnBlackQueenPieceTest();

    it('Black Queen Piece has a file', () => {
      expectOnBlackQueenPieceTest(MY_BLACK_QUEEN_PIECE).to.have.property('file');
      expectOnBlackQueenPieceTest(MY_BLACK_QUEEN_PIECE.file).to.be.a('number');
    });

    it('Black Queen Piece has a rank', () => {
      expectOnBlackQueenPieceTest(MY_BLACK_QUEEN_PIECE).to.have.property('rank');
      expectOnBlackQueenPieceTest(MY_BLACK_QUEEN_PIECE.rank).to.be.a('number');
    });

    it('Default file is 0', () => {
      expectOnBlackQueenPieceTest(MY_BLACK_QUEEN_PIECE.file).to.be.equal(0);
    });

    it('Default rank is 0', () => {
      expectOnBlackQueenPieceTest(MY_BLACK_QUEEN_PIECE.rank).to.be.equal(0);
    });
  });

  describe('Non default property values', () => {
    const MY_BLACK_QUEEN_PIECE =
      new BlackQueenPieceOnBlackQueenPieceTest(5, 10);

    it('Modifies default file correctly', () => {
      expectOnBlackQueenPieceTest(MY_BLACK_QUEEN_PIECE.file).to.be.equal(5);
    });

    it('Modifies default rank correctly', () => {
      expectOnBlackQueenPieceTest(MY_BLACK_QUEEN_PIECE.rank).to.be.equal(10);
    });
  });
});
