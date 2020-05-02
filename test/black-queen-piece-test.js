/**
 * @file black-queen-piece-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Black Queen Piece
 *  class
 */

"use strict";

let expectOnPieceTest;
let BlackQueenPieceOnBlackQueenPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnPieceTest = require('chai').expect;
  BlackQueenPieceOnBlackQueenPieceTest = require('../src/black-queen-piece.js').BlackQueenPiece;
} else { // Execution in browser
  expectOnPieceTest = expect;
  BlackQueenPieceOnBlackQueenPieceTest = BlackQueenPiece;
}

describe('Black Queen Piece Class', () => {
  describe('Default inherited properties', () => {
    const MY_BLACK_QUEEN_PIECE = new BlackQueenPieceOnBlackQueenPieceTest();

    it('Black Queen Piece has a xCoord', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE).to.have.property('xCoord');
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.xCoord).to.be.a('number');
    });

    it('Black Queen Piece has a yCoord', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE).to.have.property('yCoord');
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.yCoord).to.be.a('number');
    });

    it('Black Queen Piece has a size', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE).to.have.property('size');
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.size).to.be.a('number');
    });

    it('Default xCoord is 0', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.xCoord).to.be.equal(0);
    });

    it('Default yCoord is 0', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.yCoord).to.be.equal(0);
    });

    it('Default size is 10', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.size).to.be.equal(10);
    });
  });

  describe('Non default property values', () => {
    const MY_BLACK_QUEEN_PIECE = new BlackQueenPieceOnBlackQueenPieceTest(5, 10, 15);

    it('Modifies default xCoord correctly', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.xCoord).to.be.equal(5);
    });

    it('Modifies default yCoord correctly', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.yCoord).to.be.equal(10);
    });

    it('Modifies default size correctly', () => {
      expectOnPieceTest(MY_BLACK_QUEEN_PIECE.size).to.be.equal(15);
    });
  });
});
