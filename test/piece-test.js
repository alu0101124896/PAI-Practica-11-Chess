/**
 * @file piece-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Piece class
 */

"use strict";

let expectOnPieceTest;
let PieceOnPieceTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnPieceTest = require('chai').expect;
  PieceOnPieceTest = require('../src/piece.js').Piece;
} else { // Execution in browser
  expectOnPieceTest = expect;
  PieceOnPieceTest = Piece;
}

describe('Piece Class', () => {
  describe('Default properties', () => {
    const MY_PIECE = new PieceOnPieceTest();

    it('Piece has a xCoord', () => {
      expectOnPieceTest(MY_PIECE).to.have.property('xCoord');
      expectOnPieceTest(MY_PIECE.xCoord).to.be.a('number');
    });

    it('Piece has a yCoord', () => {
      expectOnPieceTest(MY_PIECE).to.have.property('yCoord');
      expectOnPieceTest(MY_PIECE.yCoord).to.be.a('number');
    });

    it('Piece has a size', () => {
      expectOnPieceTest(MY_PIECE).to.have.property('size');
      expectOnPieceTest(MY_PIECE.size).to.be.a('number');
    });

    it('Default xCoord is 0', () => {
      expectOnPieceTest(MY_PIECE.xCoord).to.be.equal(0);
    });

    it('Default yCoord is 0', () => {
      expectOnPieceTest(MY_PIECE.yCoord).to.be.equal(0);
    });
  });
});
