/**
 * @file white-king-piece-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the White King Piece class
 */

"use strict";

let expectOnWhiteKingPieceTest;
let WhiteKingPieceOnWhiteKingPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnWhiteKingPieceTest = require('chai').expect;
  WhiteKingPieceOnWhiteKingPieceTest = require('../src/white-king-piece.js').WhiteKingPiece;
} else { // Execution in browser
  expectOnWhiteKingPieceTest = expect;
  WhiteKingPieceOnWhiteKingPieceTest = WhiteKingPiece;
}

describe('White King Piece Class', () => {
  describe('Default inherited properties', () => {
    const MY_WHITE_KING_PIECE = new WhiteKingPieceOnWhiteKingPieceTest();

    it('White King Piece has a file', () => {
      expectOnWhiteKingPieceTest(MY_WHITE_KING_PIECE).to.have.property('file');
      expectOnWhiteKingPieceTest(MY_WHITE_KING_PIECE.file).to.be.a('number');
    });

    it('White King Piece has a rank', () => {
      expectOnWhiteKingPieceTest(MY_WHITE_KING_PIECE).to.have.property('rank');
      expectOnWhiteKingPieceTest(MY_WHITE_KING_PIECE.rank).to.be.a('number');
    });

    it('Default file is 0', () => {
      expectOnWhiteKingPieceTest(MY_WHITE_KING_PIECE.file).to.be.equal(0);
    });

    it('Default rank is 0', () => {
      expectOnWhiteKingPieceTest(MY_WHITE_KING_PIECE.rank).to.be.equal(0);
    });
  });

  describe('Non default property values', () => {
    const MY_WHITE_KING_PIECE = new WhiteKingPieceOnWhiteKingPieceTest(5, 10);

    it('Modifies default file correctly', () => {
      expectOnWhiteKingPieceTest(MY_WHITE_KING_PIECE.file).to.be.equal(5);
    });

    it('Modifies default rank correctly', () => {
      expectOnWhiteKingPieceTest(MY_WHITE_KING_PIECE.rank).to.be.equal(10);
    });
  });
});
