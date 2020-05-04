/**
 * @file black-rook-piece-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Black Rook Piece
 *  class
 */

"use strict";

let expectOnBlackRookPieceTest;
let BlackRookPieceOnBlackRookPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnBlackRookPieceTest = require('chai').expect;
  BlackRookPieceOnBlackRookPieceTest = require('../src/black-rook-piece.js').BlackRookPiece;
} else { // Execution in browser
  expectOnBlackRookPieceTest = expect;
  BlackRookPieceOnBlackRookPieceTest = BlackRookPiece;
}

describe('Black Rook Piece Class', () => {
  describe('Default inherited properties', () => {
    const MY_BLACK_ROOK_PIECE = new BlackRookPieceOnBlackRookPieceTest();

    it('Black Rook Piece has a file', () => {
      expectOnBlackRookPieceTest(MY_BLACK_ROOK_PIECE).to.have.property('file');
      expectOnBlackRookPieceTest(MY_BLACK_ROOK_PIECE.file).to.be.a('number');
    });

    it('Black Rook Piece has a rank', () => {
      expectOnBlackRookPieceTest(MY_BLACK_ROOK_PIECE).to.have.property('rank');
      expectOnBlackRookPieceTest(MY_BLACK_ROOK_PIECE.rank).to.be.a('number');
    });

    it('Default file is 0', () => {
      expectOnBlackRookPieceTest(MY_BLACK_ROOK_PIECE.file).to.be.equal(0);
    });

    it('Default rank is 0', () => {
      expectOnBlackRookPieceTest(MY_BLACK_ROOK_PIECE.rank).to.be.equal(0);
    });
  });

  describe('Non default property values', () => {
    const MY_BLACK_ROOK_PIECE = new BlackRookPieceOnBlackRookPieceTest(5, 10);

    it('Modifies default file correctly', () => {
      expectOnBlackRookPieceTest(MY_BLACK_ROOK_PIECE.file).to.be.equal(5);
    });

    it('Modifies default rank correctly', () => {
      expectOnBlackRookPieceTest(MY_BLACK_ROOK_PIECE.rank).to.be.equal(10);
    });
  });
});
