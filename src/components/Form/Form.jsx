import { useState } from "react";
import "./Form.css";

function Form() {
  const baseURL = "http://localhost:3000/Tarefas"; //url db.json

  let [novoItem, setNovoItem] = useState("");
  let [lista, setLista] = useState([]);

  async function create() {
    const response = await fetch(baseURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ title: novoItem }),
    });
    const novaTarefa = await response.json();
    setLista([novaTarefa]);
  }

  function AddNewItem() {
    create();
  }

  return (
    <>
      <input
        placeholder="Type your task here... "
        value={novoItem}
        onChange={(value) => setNovoItem(value.target.value)}
        type="text"
        className="task-input"
      />
      <button className="btn-add" onClick={() => AddNewItem()}>
        New Task
      </button>
    </>
  );
}

export default Form;
