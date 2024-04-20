import React from 'react'
import css from './Board.module.css'

const Board = () => {
  return (
    <div className={css.board__content}>
        <div className={css.scores}>
              <div className={css.score}>22</div>
              <div className={css.score}>12</div>
        </div>
        <div className={css.scores}></div>
    </div>
  )
}

export default Board