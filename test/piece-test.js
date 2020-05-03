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

    it('Piece has a rank', () => {
      expectOnPieceTest(MY_PIECE).to.have.property('rank');
      expectOnPieceTest(MY_PIECE.rank).to.be.a('number');
    });

    it('Piece has a file', () => {
      expectOnPieceTest(MY_PIECE).to.have.property('file');
      expectOnPieceTest(MY_PIECE.file).to.be.a('number');
    });

    it('Default rank is 0', () => {
      expectOnPieceTest(MY_PIECE.rank).to.be.equal(0);
    });

    it('Default file is 0', () => {
      expectOnPieceTest(MY_PIECE.file).to.be.equal(0);
    });
  });

  describe('Non default property values', () => {
    const MY_PIECE = new PieceOnPieceTest(5, 10);

    it('Modifies default rank correctly', () => {
      expectOnPieceTest(MY_PIECE.rank).to.be.equal(5);
    });

    it('Modifies default file correctly', () => {
      expectOnPieceTest(MY_PIECE.file).to.be.equal(10);
    });
  });
});
