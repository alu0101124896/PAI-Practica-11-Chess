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

let expectOnPieceTest;
let BlackRookPieceOnBlackRookPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnPieceTest = require('chai').expect;
  BlackRookPieceOnBlackRookPieceTest = require('../src/black-rook-piece.js').BlackRookPiece;
} else { // Execution in browser
  expectOnPieceTest = expect;
  BlackRookPieceOnBlackRookPieceTest = BlackRookPiece;
}

describe('Black Rook Piece Class', () => {
  describe('Default inherited properties', () => {
    const MY_BLACK_ROOK_PIECE = new BlackRookPieceOnBlackRookPieceTest();

    it('Black Rook Piece has a xCoord', () => {
      expectOnPieceTest(MY_BLACK_ROOK_PIECE).to.have.property('xCoord');
      expectOnPieceTest(MY_BLACK_ROOK_PIECE.xCoord).to.be.a('number');
    });

    it('Black Rook Piece has a yCoord', () => {
      expectOnPieceTest(MY_BLACK_ROOK_PIECE).to.have.property('yCoord');
      expectOnPieceTest(MY_BLACK_ROOK_PIECE.yCoord).to.be.a('number');
    });

    it('Black Rook Piece has a size', () => {
      expectOnPieceTest(MY_BLACK_ROOK_PIECE).to.have.property('size');
      expectOnPieceTest(MY_BLACK_ROOK_PIECE.size).to.be.a('number');
    });

    it('Default xCoord is 0', () => {
      expectOnPieceTest(MY_BLACK_ROOK_PIECE.xCoord).to.be.equal(0);
    });

    it('Default yCoord is 0', () => {
      expectOnPieceTest(MY_BLACK_ROOK_PIECE.yCoord).to.be.equal(0);
    });

    it('Default size is 10', () => {
      expectOnPieceTest(MY_BLACK_ROOK_PIECE.size).to.be.equal(10);
    });
  });

  describe('Non default property values', () => {
    const MY_BLACK_ROOK_PIECE = new BlackRookPieceOnBlackRookPieceTest(5, 10, 15);

    it('Modifies default xCoord correctly', () => {
      expectOnPieceTest(MY_BLACK_ROOK_PIECE.xCoord).to.be.equal(5);
    });

    it('Modifies default yCoord correctly', () => {
      expectOnPieceTest(MY_BLACK_ROOK_PIECE.yCoord).to.be.equal(10);
    });

    it('Modifies default size correctly', () => {
      expectOnPieceTest(MY_BLACK_ROOK_PIECE.size).to.be.equal(15);
    });
  });
});
