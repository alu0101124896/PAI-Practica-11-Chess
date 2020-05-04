/**
 * @file black-knight-piece-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Black Knight Piece
 *  class
 */

"use strict";

let expectOnBlackKnightPieceTest;
let BlackKnightPieceOnBlackKnightPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnBlackKnightPieceTest = require('chai').expect;
  BlackKnightPieceOnBlackKnightPieceTest = require('../src/black-knight-piece.js').BlackKnightPiece;
} else { // Execution in browser
  expectOnBlackKnightPieceTest = expect;
  BlackKnightPieceOnBlackKnightPieceTest = BlackKnightPiece;
}

describe('Black Knight Piece Class', () => {
  describe('Default inherited properties', () => {
    const MY_BLACK_KNIGHT_PIECE = new BlackKnightPieceOnBlackKnightPieceTest();

    it('Black Knight Piece has a file', () => {
      expectOnBlackKnightPieceTest(MY_BLACK_KNIGHT_PIECE).to.have.property('file');
      expectOnBlackKnightPieceTest(MY_BLACK_KNIGHT_PIECE.file).to.be.a('number');
    });

    it('Black Knight Piece has a rank', () => {
      expectOnBlackKnightPieceTest(MY_BLACK_KNIGHT_PIECE).to.have.property('rank');
      expectOnBlackKnightPieceTest(MY_BLACK_KNIGHT_PIECE.rank).to.be.a('number');
    });

    it('Default file is 0', () => {
      expectOnBlackKnightPieceTest(MY_BLACK_KNIGHT_PIECE.file).to.be.equal(0);
    });

    it('Default rank is 0', () => {
      expectOnBlackKnightPieceTest(MY_BLACK_KNIGHT_PIECE.rank).to.be.equal(0);
    });
  });

  describe('Non default property values', () => {
    const MY_BLACK_KNIGHT_PIECE =
      new BlackKnightPieceOnBlackKnightPieceTest(5, 10);

    it('Modifies default file correctly', () => {
      expectOnBlackKnightPieceTest(MY_BLACK_KNIGHT_PIECE.file).to.be.equal(5);
    });

    it('Modifies default rank correctly', () => {
      expectOnBlackKnightPieceTest(MY_BLACK_KNIGHT_PIECE.rank).to.be.equal(10);
    });
  });
});
