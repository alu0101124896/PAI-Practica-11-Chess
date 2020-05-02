/**
 * @file white-king-piece-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the White King Piece class
 */

"use strict";

let expectOnPieceTest;
let WhiteKingPieceOnWhiteKingPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnPieceTest = require('chai').expect;
  WhiteKingPieceOnWhiteKingPieceTest = require('../src/white-king-piece.js').WhiteKingPiece;
} else { // Execution in browser
  expectOnPieceTest = expect;
  WhiteKingPieceOnWhiteKingPieceTest = WhiteKingPiece;
}

describe('White King Piece Class', () => {
  describe('Default inherited properties', () => {
    const MY_WHITE_KING_PIECE = new WhiteKingPieceOnWhiteKingPieceTest();

    it('White King Piece has a rank', () => {
      expectOnPieceTest(MY_WHITE_KING_PIECE).to.have.property('rank');
      expectOnPieceTest(MY_WHITE_KING_PIECE.rank).to.be.a('number');
    });

    it('White King Piece has a file', () => {
      expectOnPieceTest(MY_WHITE_KING_PIECE).to.have.property('file');
      expectOnPieceTest(MY_WHITE_KING_PIECE.file).to.be.a('number');
    });

    it('White King Piece has a size', () => {
      expectOnPieceTest(MY_WHITE_KING_PIECE).to.have.property('size');
      expectOnPieceTest(MY_WHITE_KING_PIECE.size).to.be.a('number');
    });

    it('Default rank is 0', () => {
      expectOnPieceTest(MY_WHITE_KING_PIECE.rank).to.be.equal(0);
    });

    it('Default file is 0', () => {
      expectOnPieceTest(MY_WHITE_KING_PIECE.file).to.be.equal(0);
    });

    it('Default size is 10', () => {
      expectOnPieceTest(MY_WHITE_KING_PIECE.size).to.be.equal(10);
    });
  });

  describe('Non default property values', () => {
    const MY_WHITE_KING_PIECE = new WhiteKingPieceOnWhiteKingPieceTest(5, 10, 15);

    it('Modifies default rank correctly', () => {
      expectOnPieceTest(MY_WHITE_KING_PIECE.rank).to.be.equal(5);
    });

    it('Modifies default file correctly', () => {
      expectOnPieceTest(MY_WHITE_KING_PIECE.file).to.be.equal(10);
    });

    it('Modifies default size correctly', () => {
      expectOnPieceTest(MY_WHITE_KING_PIECE.size).to.be.equal(15);
    });
  });
});
