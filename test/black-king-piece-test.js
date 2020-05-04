/**
 * @file black-king-piece-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Black King Piece class
 */

"use strict";

let expectOnBlackKingPieceTest;
let BlackKingPieceOnBlackKingPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnBlackKingPieceTest = require('chai').expect;
  BlackKingPieceOnBlackKingPieceTest = require('../src/black-king-piece.js').BlackKingPiece;
} else { // Execution in browser
  expectOnBlackKingPieceTest = expect;
  BlackKingPieceOnBlackKingPieceTest = BlackKingPiece;
}

describe('Black King Piece Class', () => {
  describe('Default inherited properties', () => {
    const MY_BLACK_KING_PIECE = new BlackKingPieceOnBlackKingPieceTest();

    it('Black King Piece has a file', () => {
      expectOnBlackKingPieceTest(MY_BLACK_KING_PIECE).to.have.property('file');
      expectOnBlackKingPieceTest(MY_BLACK_KING_PIECE.file).to.be.a('number');
    });

    it('Black King Piece has a rank', () => {
      expectOnBlackKingPieceTest(MY_BLACK_KING_PIECE).to.have.property('rank');
      expectOnBlackKingPieceTest(MY_BLACK_KING_PIECE.rank).to.be.a('number');
    });

    it('Default file is 0', () => {
      expectOnBlackKingPieceTest(MY_BLACK_KING_PIECE.file).to.be.equal(0);
    });

    it('Default rank is 0', () => {
      expectOnBlackKingPieceTest(MY_BLACK_KING_PIECE.rank).to.be.equal(0);
    });
  });

  describe('Non default property values', () => {
    const MY_BLACK_KING_PIECE = new BlackKingPieceOnBlackKingPieceTest(5, 10);

    it('Modifies default file correctly', () => {
      expectOnBlackKingPieceTest(MY_BLACK_KING_PIECE.file).to.be.equal(5);
    });

    it('Modifies default rank correctly', () => {
      expectOnBlackKingPieceTest(MY_BLACK_KING_PIECE.rank).to.be.equal(10);
    });
  });
});
