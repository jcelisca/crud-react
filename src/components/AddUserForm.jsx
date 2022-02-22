import { useForm } from "react-hook-form";

/**
 * Componente que permite agregar un nuevo usuario
 * @param {*} props Valores de atributos del usuario a registar (id, name, username)
 * @returns Formulario con los campos para agregar un usuario
 */
const AddUserForm = (props) => {

    /**
     * Validar los campos del formulario
     */
    const {register,handleSubmit, formState:{errors}} = useForm();

    /**
     * Funcion que agrega un usuario a la lista de users
     * @param {*} data Lista de usuarios
     * @param {*} e Estado que permite limpiar el formulario al presionar el boton
     */
    const onSubmit = (data,e)=>{
        props.addUser(data);
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" {...register("name",{required:true, maxLength:15})} />
            {errors.name && errors.name.type === "required" && <span className="text-danger text-small d-block mb-2">This is required</span>}
            <label>Username</label>
            <input type="text" name="username" {...register("username",{required:true, maxLength:20})} />
            {errors.username && errors.username.type === "required" && <span className="text-danger text-small d-block mb-2">This is required</span>}
            <button>Add new user</button>
        </form>
     );
}

export default AddUserForm;