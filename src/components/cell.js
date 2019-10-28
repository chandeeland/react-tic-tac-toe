import React, {useState} from 'react';
function Cell({value, onClick, cell_id, winner}) {

  function styles() {
    if (winner.includes(cell_id)) {
      return "Cell Winner"
    }
    return "Cell"
  }

  return (
    <button className={styles()} onClick={onClick}>
      {value}
    </button>
  );
}

export default Cell;
