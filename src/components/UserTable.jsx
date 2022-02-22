
/**
 * Componente qque devuelve na tabla con la lista de usuarios
 * @param {*} props Lista de usuarios guardados o registrados
 * @returns Tabla con los valores de atributos de los usuarios guardados
 */
const UserTable = (props) => {

    return (
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Actions</th>
        </tr>
        </thead>
        <tbody>
            {
                props.users.length > 0 ?
                props.users.map((user,i)=>(
                    <tr key={i}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                            <td><button className="btn btn-success">Edit</button></td>
                            <td><button  className="button muted-button">Delete</button></td>
                        </td>
                    </tr>
                )) :(
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )
            }
        </tbody>
    </table>
    );
}

export default UserTable;