/**
 * @file white-bishop-piece-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the White Bishop Piece
 *  class
 */

"use strict";

let expectOnPieceTest;
let WhiteBishopPieceOnWhiteBishopPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnPieceTest = require('chai').expect;
  WhiteBishopPieceOnWhiteBishopPieceTest = require('../src/white-bishop-piece.js').WhiteBishopPiece;
} else { // Execution in browser
  expectOnPieceTest = expect;
  WhiteBishopPieceOnWhiteBishopPieceTest = WhiteBishopPiece;
}

describe('White Bishop Piece Class', () => {
  describe('Default inherited properties', () => {
    const MY_WHITE_BISHOP_PIECE = new WhiteBishopPieceOnWhiteBishopPieceTest();

    it('White Bishop Piece has a rank', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE).to.have.property('rank');
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.rank).to.be.a('number');
    });

    it('White Bishop Piece has a file', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE).to.have.property('file');
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.file).to.be.a('number');
    });

    it('White Bishop Piece has a size', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE).to.have.property('size');
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.size).to.be.a('number');
    });

    it('Default rank is 0', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.rank).to.be.equal(0);
    });

    it('Default file is 0', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.file).to.be.equal(0);
    });

    it('Default size is 10', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.size).to.be.equal(10);
    });
  });

  describe('Non default property values', () => {
    const MY_WHITE_BISHOP_PIECE = new WhiteBishopPieceOnWhiteBishopPieceTest(5, 10, 15);

    it('Modifies default rank correctly', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.rank).to.be.equal(5);
    });

    it('Modifies default file correctly', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.file).to.be.equal(10);
    });

    it('Modifies default size correctly', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.size).to.be.equal(15);
    });
  });
});
