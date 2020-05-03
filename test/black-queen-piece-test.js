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

let expectOnPieceTest;
let BlackQueenPieceOnBlackQueenPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnPieceTest = require('chai').expect;
  BlackQueenPieceOnBlackQueenPieceTest = require('../src/black-queen-piece.js').BlackQueenPiece;
} else { // Execution in browser
  expectOnPieceTest = expect;
  BlackQueenPieceOnBlackQueenPieceTest = BlackQueenPiece;
}

describe('Black Queen Piece Class', () => {
  describe('Default inherited properties', () => {
    const MY_BLACK_QUEEN_PIECE = new BlackQueenPieceOnBlackQueenPieceTest();

    it('Black Queen Piece has a rank', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE).to.have.property('rank');
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.rank).to.be.a('number');
    });

    it('Black Queen Piece has a file', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE).to.have.property('file');
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.file).to.be.a('number');
    });

    it('Default rank is 0', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.rank).to.be.equal(0);
    });

    it('Default file is 0', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.file).to.be.equal(0);
    });
  });

  describe('Non default property values', () => {
    const MY_BLACK_QUEEN_PIECE =
      new BlackQueenPieceOnBlackQueenPieceTest(5, 10);

    it('Modifies default rank correctly', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.rank).to.be.equal(5);
    });

    it('Modifies default file correctly', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.file).to.be.equal(10);
    });
  });
});
