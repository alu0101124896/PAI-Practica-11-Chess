/**
 * @file board-test.js
 * @author Sergio Tabares Hernández <alu0101124896@ull.edu.es>
 * @since Spring 2020
 * @summary University of La Laguna
 * @summary Computer Science - Interactive Aplication Programing
 * @description This program implements the tests for the Board class
 */

"use strict";

let expectOnBoardTest;
let BoardOnBoardTest;
if (typeof require !== 'undefined') { // Execution in node
  expectOnBoardTest = require('chai').expect;
  BoardOnBoardTest = require('../src/board.js').Board;
} else { // Execution in browser
  expectOnBoardTest = expect;
  BoardOnBoardTest = Board;
}

describe('Board Class', () => {
  describe('Default properties', () => {
    const MY_BOARD = new BoardOnBoardTest();

    it('Board has a matrix', () => {
      expectOnBoardTest(MY_BOARD).to.have.property('matrix');
      expectOnBoardTest(MY_BOARD.matrix).to.be.an('array');
      MY_BOARD.matrix.forEach(rank => {
        expectOnBoardTest(rank).to.be.an('array');
      });
    });

    it('Default matrix is full of 0', () => {
      MY_BOARD.matrix.forEach(rank => {
        rank.forEach(file => {
          expectOnBoardTest(file).to.be.equal(0);
        });
      });
    });
  });
});
