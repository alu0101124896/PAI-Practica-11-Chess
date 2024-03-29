/**
 * @file white-knight-piece-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the White Knight Piece
 *  class
 */

"use strict";

let expectOnWhiteKnightPieceTest;
let WhiteKnightPieceOnWhiteKnightPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnWhiteKnightPieceTest = require('chai').expect;
  WhiteKnightPieceOnWhiteKnightPieceTest = require('../src/white-knight-piece.js').WhiteKnightPiece;
} else { // Execution in browser
  expectOnWhiteKnightPieceTest = expect;
  WhiteKnightPieceOnWhiteKnightPieceTest = WhiteKnightPiece;
}

describe('White Knight Piece Class', () => {
  describe('Default inherited properties', () => {
    const MY_WHITE_KNIGHT_PIECE = new WhiteKnightPieceOnWhiteKnightPieceTest();

    it('White Knight Piece has a file', () => {
      expectOnWhiteKnightPieceTest(MY_WHITE_KNIGHT_PIECE).to.have.property('file');
      expectOnWhiteKnightPieceTest(MY_WHITE_KNIGHT_PIECE.file).to.be.a('number');
    });

    it('White Knight Piece has a rank', () => {
      expectOnWhiteKnightPieceTest(MY_WHITE_KNIGHT_PIECE).to.have.property('rank');
      expectOnWhiteKnightPieceTest(MY_WHITE_KNIGHT_PIECE.rank).to.be.a('number');
    });

    it('Default file is 0', () => {
      expectOnWhiteKnightPieceTest(MY_WHITE_KNIGHT_PIECE.file).to.be.equal(0);
    });

    it('Default rank is 0', () => {
      expectOnWhiteKnightPieceTest(MY_WHITE_KNIGHT_PIECE.rank).to.be.equal(0);
    });
  });

  describe('Non default property values', () => {
    const MY_WHITE_KNIGHT_PIECE =
      new WhiteKnightPieceOnWhiteKnightPieceTest(5, 10);

    it('Modifies default file correctly', () => {
      expectOnWhiteKnightPieceTest(MY_WHITE_KNIGHT_PIECE.file).to.be.equal(5);
    });

    it('Modifies default rank correctly', () => {
      expectOnWhiteKnightPieceTest(MY_WHITE_KNIGHT_PIECE.rank).to.be.equal(10);
    });
  });
});
