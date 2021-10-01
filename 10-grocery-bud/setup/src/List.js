import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa'
import ACTIONS from './utils'

const List = ({ itemList, handleAction}) => {
  return (
    (
      <div className="grocery-container">
        <div className="grocery-list">
          {
            itemList.map((item, index) => {
              return (
                <article key={index} className="grocery-item">
                  <p className="title">{item}</p>
                  <div className="btn-container">
                    <button type="button" className="edit-btn" onClick={(event) => handleAction(event, ACTIONS.EDIT, index)}>
                      <FaEdit />
                    </button>
                    <button type="button" className="delete-btn" onClick={(event) => handleAction(event, ACTIONS.REMOVE, index)}>
                      <FaTrash />
                    </button>
                  </div>
                </article>
              )
            })
          }
        </div>
        <button className="clear-btn" onClick={(event) => handleAction(event, ACTIONS.CLEAR)}>clear items</button>
      </div>
    )
    
  )
}

export default List
