import React from 'react'

import { Chess } from 'chess.js'
import { ChessBoard, ChessBoardDndProvider } from 'react-fen-chess-board'

import { useChessBoard } from './useChessBoard'

// Define your puzzle's FEN string
const puzzleFen = 'r4k1r/p5pp/bpn1P2n/3pq1NQ/4p3/1P6/P1P2PPP/R1B1K2R w KQ - 0 1' // Example FEN
const chess = new Chess(puzzleFen) // Initialize with FEN string

const ChessPuzzlePage = () => {
  return (
    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
      <header style={{ textAlign: 'center', marginBottom: '20px' }}>
        <h1>Daily Chess Puzzle</h1>
        <p>Solve this chess puzzle by making the right moves!</p>
      </header>
      <ChessBoardDndProvider>
        <ChessBoard {...useChessBoard(chess)} />
      </ChessBoardDndProvider>
    </div>
  )
}

export default ChessPuzzlePage
