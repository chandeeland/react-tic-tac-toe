import React, {useState, useEffect} from 'react';
import Cell from './cell'

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState('X')
  const [winner, setWinner] = useState([])

  useEffect(() => {
    document.title = title()
  });

  function title() {
    if (winner.length > 0) {
      return player + " Wins!"
    } else if (tieGame()) {
      return "Tie Game"
    } else {
      return player + "'s Turn'"
    }
  }

  function makeCell(i) {
    return (
      <Cell
        onClick={clickHandler(i)}
        value={board[i]}
        winner={winner}
        cell_id={i}
      />
    )
  }

  function clickHandler(i) {
    return function(e) {
      if (board[i] != null) { return }
      if (winner.length != 0) { return }

      let new_board = board.map((item, j)=>{
        if (i == j) {
          return player
        }
        return item
      });

      setBoard(new_board)
      calculateWins(i, new_board)
    }
  }

  function togglePlayer() {
    setPlayer(player == 'X' ? 'O' : 'X')
  }

  function calculateWins(i, new_board) {
    const lines = [
      [0,1,2], [3,4,5], [6,7,8],
      [0,3,6], [1,4,7], [2,5,8],
      [0,4,8], [2,4,6]
    ]
    var possibilities = lines.filter((line)=>{return line.includes(i)})

    for (var j = 0; j < possibilities.length; j++) {
      var line = possibilities[j]
      var actual = line.map((pindex) => {
        return new_board[pindex];
      })

      if (actual.filter((item)=>{return item == player}).length == 3) {
        setWinner(line);
        return line
      }
    }
    togglePlayer()
    return false
  }

  function tieGame() {
    return board.filter((item)=>{return item == null}).length == 0
  }

  return (
    <div>
      <h1> {title()} </h1>
      <div className="Board">
        { makeCell(0) }
        { makeCell(1) }
        { makeCell(2) }

        { makeCell(3) }
        { makeCell(4) }
        { makeCell(5) }

        { makeCell(6) }
        { makeCell(7) }
        { makeCell(8) }
      </div>
    </div>
  );
}

export default Board;
