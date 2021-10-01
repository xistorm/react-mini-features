import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import ACTIONS from './utils'

function App() {
  const [itemName, setItemName] = useState('');
  const [itemList, setItemList] = useState([]);
  const [alert, setAlert] = useState(false);
  const [editing, setEditing] = useState(-1);

  const handleInput = (event) => {
    setItemName(event.target.value);
  }

  const handleAction = (event, action, id) => {
    event.preventDefault();

    let newItemList = [...itemList];
    let newItemName = '';
    let newEditingId = -1;

    switch(action) {
      case ACTIONS.ADD:
        newItemList.push(itemName);
        break;
      case ACTIONS.REMOVE:
        newItemList = newItemList.filter((item, index) => index !== id);
        break;
      case ACTIONS.CLEAR:
        newItemList = [];
        break;
      case ACTIONS.EDIT:
        newEditingId = id;
        newItemName = itemList[id];
        break;
      case ACTIONS.SAVE:
        newItemList[id] = itemName;
        setEditing()
        break;
      default:
        break;
    }

    setItemName(newItemName);
    setItemList(newItemList);
    setEditing(newEditingId);
    setAlert(action);
  }

  useEffect(() => {
    let timeout = setTimeout(() => {
      setAlert(null);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert])

  return (
    <section className="section-center">
      <form className="grocery-form">
        {alert && <Alert {...alert} />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={itemName}
            onChange={handleInput}>
          </input>
          <button
            type="submit"
            className="submit-btn"
            onClick={(event) => editing >= 0 ? handleAction(event, ACTIONS.SAVE, editing) : handleAction(event, ACTIONS.ADD)}
          > {editing >= 0 ? 'edit' : 'submit'}
          </button>
        </div>
      </form>
      {Boolean(itemList.length) && <List itemList={itemList} handleAction={handleAction} />}
    </section>
  )
}

export default App
