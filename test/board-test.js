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

    it('Board has a grid', () => {
      expectOnBoardTest(MY_BOARD).to.have.property('grid');
      expectOnBoardTest(MY_BOARD.grid).to.be.an('array');
      MY_BOARD.grid.forEach(rank => {
        expectOnBoardTest(rank).to.be.an('array');
      });
    });

    it('Default grid is full of 0', () => {
      MY_BOARD.grid.forEach(rank => {
        rank.forEach(file => {
          expectOnBoardTest(file).to.be.equal(0);
        });
      });
    });
  });

  describe('Board methods', () => {
    const MY_BOARD = new BoardOnBoardTest();

    it('Pieces on starting position', () => {
      MY_BOARD.piecesOnStartingPosition();
      expectOnBoardTest(MY_BOARD.grid[4][0]).to.be.not.equal(0);
      expectOnBoardTest(MY_BOARD.grid[4][7]).to.be.not.equal(0);

      expectOnBoardTest(MY_BOARD.grid[3][0]).to.be.not.equal(0);
      expectOnBoardTest(MY_BOARD.grid[3][7]).to.be.not.equal(0);

      expectOnBoardTest(MY_BOARD.grid[2][0]).to.be.not.equal(0);
      expectOnBoardTest(MY_BOARD.grid[5][0]).to.be.not.equal(0);
      expectOnBoardTest(MY_BOARD.grid[2][7]).to.be.not.equal(0);
      expectOnBoardTest(MY_BOARD.grid[5][7]).to.be.not.equal(0);

      expectOnBoardTest(MY_BOARD.grid[1][0]).to.be.not.equal(0);
      expectOnBoardTest(MY_BOARD.grid[6][0]).to.be.not.equal(0);
      expectOnBoardTest(MY_BOARD.grid[1][7]).to.be.not.equal(0);
      expectOnBoardTest(MY_BOARD.grid[6][7]).to.be.not.equal(0);

      expectOnBoardTest(MY_BOARD.grid[0][0]).to.be.not.equal(0);
      expectOnBoardTest(MY_BOARD.grid[7][0]).to.be.not.equal(0);
      expectOnBoardTest(MY_BOARD.grid[0][7]).to.be.not.equal(0);
      expectOnBoardTest(MY_BOARD.grid[7][7]).to.be.not.equal(0);

      for (let filesIterator = 0; filesIterator < 8; filesIterator++) {
        expectOnBoardTest(MY_BOARD.grid[filesIterator][1]).to.be.not.equal(0);
        expectOnBoardTest(MY_BOARD.grid[filesIterator][6]).to.be.not.equal(0);
      }
    });

    it('Reset board', ()=>{
      MY_BOARD.reset();
      for (let filesIterator = 0; filesIterator < 8; filesIterator++) {
        for (let ranksIterator = 0; ranksIterator < 8; ranksIterator++) {
          expectOnBoardTest(MY_BOARD.grid[filesIterator][ranksIterator]).to.be.equal(0);
        }
      }
    });
  });
});
