import { useState } from "react";
import UserTable from "./components/UserTable";
import {v4 as uuidv4} from 'uuid'


function App() {

  /**
   * Constante que contiene un lista de usuarios con sus valores de atributos. Permite mostrar una lista inicial de
   * usuarios en la tabla
   */
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  /**
   * Estado que permite actualizar los cambios que se realicen en la lista inicial de usuarios
   */
  const [users, setUsers] = useState(usersData);

  return (
    <div className="container">
      <h1>Crud App with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>

    </div>
  );
}

export default App;
