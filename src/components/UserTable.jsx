/**
 * Componente que se encarga de mostrar la tabla con los usuarios guardados
 * La propiedad que recibe es una lista de usuarios con sus valores de atributos, los culaes se incluyen en la tabla
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