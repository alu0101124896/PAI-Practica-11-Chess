/**
 * @file white-rook-piece-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the White Rook Piece
 *  class
 */

"use strict";

let expectOnWhiteRookPieceTest;
let WhiteRookPieceOnWhiteRookPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnWhiteRookPieceTest = require('chai').expect;
  WhiteRookPieceOnWhiteRookPieceTest = require('../src/white-rook-piece.js').WhiteRookPiece;
} else { // Execution in browser
  expectOnWhiteRookPieceTest = expect;
  WhiteRookPieceOnWhiteRookPieceTest = WhiteRookPiece;
}

describe('White Rook Piece Class', () => {
  describe('Default inherited properties', () => {
    const MY_WHITE_ROOK_PIECE = new WhiteRookPieceOnWhiteRookPieceTest();

    it('White Rook Piece has a file', () => {
      expectOnWhiteRookPieceTest(MY_WHITE_ROOK_PIECE).to.have.property('file');
      expectOnWhiteRookPieceTest(MY_WHITE_ROOK_PIECE.file).to.be.a('number');
    });

    it('White Rook Piece has a rank', () => {
      expectOnWhiteRookPieceTest(MY_WHITE_ROOK_PIECE).to.have.property('rank');
      expectOnWhiteRookPieceTest(MY_WHITE_ROOK_PIECE.rank).to.be.a('number');
    });

    it('Default file is 0', () => {
      expectOnWhiteRookPieceTest(MY_WHITE_ROOK_PIECE.file).to.be.equal(0);
    });

    it('Default rank is 0', () => {
      expectOnWhiteRookPieceTest(MY_WHITE_ROOK_PIECE.rank).to.be.equal(0);
    });
  });

  describe('Non default property values', () => {
    const MY_WHITE_ROOK_PIECE = new WhiteRookPieceOnWhiteRookPieceTest(5, 10);

    it('Modifies default file correctly', () => {
      expectOnWhiteRookPieceTest(MY_WHITE_ROOK_PIECE.file).to.be.equal(5);
    });

    it('Modifies default rank correctly', () => {
      expectOnWhiteRookPieceTest(MY_WHITE_ROOK_PIECE.rank).to.be.equal(10);
    });
  });
});
