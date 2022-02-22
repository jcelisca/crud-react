import { useState } from "react";
import UserTable from "./components/UserTable";
import {v4 as uuidv4} from 'uuid'
import AddUserForm from "./components/AddUserForm";
import EditUserForm from "./components/EditUserForm";


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

  /**
   * Estado que permite saber si se va a actualizar un usuario o crear uno nuevo
   */
  const [editing, setEditing] = useState(false);

  /**
   * Estado que permite inicializar los valores por defecto de un usuario
   */
  const [currentUser, setCurrentUser] = useState({
    id:null, name: '', username: ''
  });

  /**
   * Carga los valores de un usuario guardado
   * @param {*} user Valores de atributos del usuario
   */
  const editRow = (user) =>{
    setEditing(true);
    setCurrentUser({
      id:user.id, name: user.name, username:user.username
    })
  }

  /**
   * Funcion que actualiza los valores de atributo de un usuario
   * @param {*} id Identificador del usuario a actualizar
   * @param {*} updateUser Nuevos valores de atributos para el usuario
   */
  const updateUser = (id, updateUser) =>{
    setEditing(false);
    setUsers(users.map((user)=>(user.id === id ? updateUser : user)))
  }


  return (
    <div className="container">
      <h1>Crud App with hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {
            editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm currentUser={currentUser} updateUser={updateUser}/>
              </div>
              ):(
              <div>
                <h2>Add user</h2>
                <AddUserForm addUser={addUser}/>
              </div>
            )
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
