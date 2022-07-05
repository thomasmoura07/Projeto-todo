import { useEffect, useState } from "react";
import "./Tasks.css";

function Tasks() {
  let [lista, setLista] = useState([]);

  const baseURL = "http://localhost:3000/Tarefas"; //url db.json

  async function findAllTarefas() {
    const response = await fetch(baseURL);
    const tarefas = await response.json();
    setLista([...tarefas]);
  }

  useEffect(() => {
    findAllTarefas();
  }, []);

  function deletarItem(index) {
    let tempArray = [...lista];
    tempArray.splice(index, 1);

    setLista(tempArray);
  }

  return (
    <ul className="List-Task">
      {lista.map((item, index) => (
        <li className="task" key={index}>
          <input type="checkbox" id={index} className="check-task" />
          <label for={index}> {item.title}</label>
          <div className="div-btn">
            <button onClick={() => deletarItem(index)} className="btn-delete">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
