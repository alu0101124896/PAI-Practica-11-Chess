/**
 * @file black-bishop-piece-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Black Bishop Piece
 *  class
 */

"use strict";

let expectOnBlackBishopPieceTest;
let BlackBishopPieceOnBlackBishopPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnBlackBishopPieceTest = require('chai').expect;
  BlackBishopPieceOnBlackBishopPieceTest = require('../src/black-bishop-piece.js').BlackBishopPiece;
} else { // Execution in browser
  expectOnBlackBishopPieceTest = expect;
  BlackBishopPieceOnBlackBishopPieceTest = BlackBishopPiece;
}

describe('Black Bishop Piece Class', () => {
  describe('Default inherited properties', () => {
    const MY_BLACK_BISHOP_PIECE = new BlackBishopPieceOnBlackBishopPieceTest();

    it('Black Bishop Piece has a file', () => {
      expectOnBlackBishopPieceTest(MY_BLACK_BISHOP_PIECE).to.have.property('file');
      expectOnBlackBishopPieceTest(MY_BLACK_BISHOP_PIECE.file).to.be.a('number');
    });

    it('Black Bishop Piece has a rank', () => {
      expectOnBlackBishopPieceTest(MY_BLACK_BISHOP_PIECE).to.have.property('rank');
      expectOnBlackBishopPieceTest(MY_BLACK_BISHOP_PIECE.rank).to.be.a('number');
    });

    it('Default file is 0', () => {
      expectOnBlackBishopPieceTest(MY_BLACK_BISHOP_PIECE.file).to.be.equal(0);
    });

    it('Default rank is 0', () => {
      expectOnBlackBishopPieceTest(MY_BLACK_BISHOP_PIECE.rank).to.be.equal(0);
    });
  });

  describe('Non default property values', () => {
    const MY_BLACK_BISHOP_PIECE =
      new BlackBishopPieceOnBlackBishopPieceTest(5, 10);

    it('Modifies default file correctly', () => {
      expectOnBlackBishopPieceTest(MY_BLACK_BISHOP_PIECE.file).to.be.equal(5);
    });

    it('Modifies default rank correctly', () => {
      expectOnBlackBishopPieceTest(MY_BLACK_BISHOP_PIECE.rank).to.be.equal(10);
    });
  });
});
