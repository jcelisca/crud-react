import { useForm } from "react-hook-form";

/**
 * Componente que permite actualizar un usuario de la lista de users
 * @param {*} props Usuario que se va a actualizar
 * @returns Formulario con los campos para actualizar un usuario
 */
const EditUserForm = (props) => {

    /**
     * Valida los campos del formulario e inicialmente carga en ellos los datos de usuario a actualizar
     */
    const {register,handleSubmit, formState:{errors}, setValue} = useForm({
        defaultValues: props.currentUser
    });

    /**
     * Estados que cargan los valores del usuario a actualizar
     */
    setValue('name',props.currentUser.name)
    setValue('username',props.currentUser.username)


    /**
     * Función que actualiza los valores de atributos de un usuario registrado
     * @param {*} data Nuevos valores de atributo para el usuario
     * @param {*} e Estado que permite limpiar el formulario al presionar el boton
     */
    const onSubmit = (data,e)=>{
        data.id = props.currentUser.id
        props.updateUser(props.currentUser.id, data)
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" {...register("name",{required:true, maxLength:15})} />
            {errors.name && errors.name.type === "required" && <span className="text-danger text-small d-block mb-2">This is required</span>}
            <label>Username</label>
            <input type="text" name="username" {...register("username",{required:true, maxLength:15})} />
            {errors.username && errors.username.type === "required" && <span className="text-danger text-small d-block mb-2">This is required</span>}
            <button>Edit user</button>
        </form>
     );
}

export default EditUserForm;