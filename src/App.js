import { useState } from "react";
import UserTable from "./components/UserTable";
import {v4 as uuidv4} from 'uuid'
import AddUserForm from "./components/AddUserForm";


function App() {

  /**
   * Lista de usuarios para mostrar en la tabla de usuarios registrados
   */
  const usersData = [
    { id: uuidv4(), name: 'Tania', username: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', username: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', username: 'benisphere' },
  ]

  /**
   * Estado que permite actualizar los cambios que se realicen en la lista de usuarios
   */
  const [users, setUsers] = useState(usersData);


  /**
   * Función que asigna un ID unico a un usuario, junto a los valores de name y username y lo agrega a la lista de users
   * @param {*} user Usuario con valores de atributos a guardar
   */
  const addUser =(user) =>{
    user.id =  uuidv4();
    setUsers([
      ...users,
      user
    ])
  }

  return (
    <div className="container">
      <h1>Crud App with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
        <div>
            <h2>Add user</h2>
              <AddUserForm addUser={addUser}/>
            </div>
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
