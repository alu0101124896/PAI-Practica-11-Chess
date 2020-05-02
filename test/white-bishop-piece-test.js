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

    it('White Bishop Piece has a xCoord', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE).to.have.property('xCoord');
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.xCoord).to.be.a('number');
    });

    it('White Bishop Piece has a yCoord', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE).to.have.property('yCoord');
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.yCoord).to.be.a('number');
    });

    it('White Bishop Piece has a size', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE).to.have.property('size');
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.size).to.be.a('number');
    });

    it('Default xCoord is 0', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.xCoord).to.be.equal(0);
    });

    it('Default yCoord is 0', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.yCoord).to.be.equal(0);
    });

    it('Default size is 10', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.size).to.be.equal(10);
    });
  });

  describe('Non default property values', () => {
    const MY_WHITE_BISHOP_PIECE = new WhiteBishopPieceOnWhiteBishopPieceTest(5, 10, 15);

    it('Modifies default xCoord correctly', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.xCoord).to.be.equal(5);
    });

    it('Modifies default yCoord correctly', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.yCoord).to.be.equal(10);
    });

    it('Modifies default size correctly', () => {
      expectOnPieceTest(MY_WHITE_BISHOP_PIECE.size).to.be.equal(15);
    });
  });
});
