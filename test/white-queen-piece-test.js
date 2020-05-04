/**
 * @file white-queen-piece-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the White Queen Piece
 *  class
 */

"use strict";

let expectOnWhiteQueenPieceTest;
let WhiteQueenPieceOnWhiteQueenPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnWhiteQueenPieceTest = require('chai').expect;
  WhiteQueenPieceOnWhiteQueenPieceTest = require('../src/white-queen-piece.js').WhiteQueenPiece;
} else { // Execution in browser
  expectOnWhiteQueenPieceTest = expect;
  WhiteQueenPieceOnWhiteQueenPieceTest = WhiteQueenPiece;
}

describe('White Queen Piece Class', () => {
  describe('Default inherited properties', () => {
    const MY_WHITE_QUEEN_PIECE = new WhiteQueenPieceOnWhiteQueenPieceTest();

    it('White Queen Piece has a file', () => {
      expectOnWhiteQueenPieceTest(MY_WHITE_QUEEN_PIECE).to.have.property('file');
      expectOnWhiteQueenPieceTest(MY_WHITE_QUEEN_PIECE.file).to.be.a('number');
    });

    it('White Queen Piece has a rank', () => {
      expectOnWhiteQueenPieceTest(MY_WHITE_QUEEN_PIECE).to.have.property('rank');
      expectOnWhiteQueenPieceTest(MY_WHITE_QUEEN_PIECE.rank).to.be.a('number');
    });

    it('Default file is 0', () => {
      expectOnWhiteQueenPieceTest(MY_WHITE_QUEEN_PIECE.file).to.be.equal(0);
    });

    it('Default rank is 0', () => {
      expectOnWhiteQueenPieceTest(MY_WHITE_QUEEN_PIECE.rank).to.be.equal(0);
    });
  });

  describe('Non default property values', () => {
    const MY_WHITE_QUEEN_PIECE =
      new WhiteQueenPieceOnWhiteQueenPieceTest(5, 10);

    it('Modifies default file correctly', () => {
      expectOnWhiteQueenPieceTest(MY_WHITE_QUEEN_PIECE.file).to.be.equal(5);
    });

    it('Modifies default rank correctly', () => {
      expectOnWhiteQueenPieceTest(MY_WHITE_QUEEN_PIECE.rank).to.be.equal(10);
    });
  });
});
