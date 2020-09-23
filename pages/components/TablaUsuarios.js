import React from 'react'
import BaseComponent from './BaseComponent'

class TablaUsuarios extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = { tableData: [], isModalOpen: true }
        this.data = []

        this.nombre = React.createRef();
        this.apellidos = React.createRef();
        this.identificacion = React.createRef();
        this.rolAsociado = React.createRef();
        this.estado = React.createRef();
        this.password = React.createRef();
        this.telefono = React.createRef();
        this.correo = React.createRef();

        this.handleOnClick = this.handleOnClick.bind(this)
    }

    async componentDidMount() {
        //const response = await this.getUsuariosExistentes();
        //const data = await response.json()
        //this.data = data;
        // this.setState({ tableData: data })
    }

    handleOnClick(e) {
        e.preventDefault();
        const { id } = e.target;
        if (id === "filtrar") {
            const nombre = this.nombre.current.value
            console.log(nombre)
            const apellidos = this.apellidos.current.value
            const identificacion = this.identificacion.current.value
            const rolAsociado = this.rolAsociado.current.value
            const estado = this.estado.current.value
            const password = this.password.current.value
            const telefono = this.telefono.current.value
            const correo = this.correo.current.value

            const filterItems = this.data.filter((item) => item['nombre'].toLowerCase().includes(nombre.toLowerCase()))

            if (filterItems.length > 0) {
                this.setState({ tableData: filterItems })
            } else {
                this.setState({ tableData: this.data })
            }

        } else {
            this.nombre.current.value = ''
            this.apellidos.current.value = ''
            this.identificacion.current.value = ''
            this.rolAsociado.current.value = ''
            this.estado.current.value = ''
            this.password.current.value = ''
            this.telefono.current.value = ''
            this.correo.current.value = ''

            this.setState({ tableData: this.data })
        }
    }

    render() {
        const { tableData, isModalOpen } = this.state;
        return (
            <main className={`${isModalOpen && 'loading'}`}>
                <div className="tablaUsuarios-root">
                    <div className="tablaUsuarios-contenido">
                        <div className="tablaUsuarios-title">
                            <div>
                                <img src="./icons/grupo.svg" />
                                <p> Usuarios Existentes </p>
                            </div>
                            <button onClick={(e) => this.setState({ isModalOpen: true })}> Crear </button>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th> Nombres </th>
                                    <th> Apellidos </th>
                                    <th> Identificación (C.C) </th>
                                    <th> Rol Asociado </th>
                                    <th> Estado </th>
                                    <th> Teléfono </th>
                                    <th> Correo Electrónico </th>
                                    <th> Acción </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.length > 0 && tableData.map(usuario => <tr key={usuario.id}>
                                    <td> {usuario['nombre']} </td>
                                    <td> {usuario['apellidos']} </td>
                                    <td> {usuario['identificacion']} </td>
                                    <td> {usuario['rol_asociado']} </td>
                                    <td> {usuario['estado']} </td>
                                    <td> {usuario['telefono']} </td>
                                    <td> {usuario['correo_electronico']} </td>
                                    <td> <div> <img src="./icons/lapiz.svg" /> <img src="./icons/borrar.svg" /> </div> </td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>

                    <form className="form-busqueda" onSubmit={this.handleOnClick} id="filtrar">
                        <div className="form-title">
                            <img src="./icons/seguir.svg" />
                            <p> Filtrar búsqueda </p>
                        </div>
                        <div>
                            <label htmlFor="nombre"> Nombres </label>
                            <input ref={this.nombre} type="text" name="nombre" />
                        </div>
                        <div>
                            <label htmlFor="nombre"> Apellidos </label>
                            <input ref={this.apellido} type="text" name="nombre" />
                        </div>
                        <div>
                            <label htmlFor="nombre"> Identificación (C.C) </label>
                            <input ref={this.identificacion} type="number" name="nombre" />
                        </div>
                        <div>
                            <label htmlFor="nombre"> Rol asociado </label>
                            <input ref={this.rolAsociado} type="select" name="nombre" />
                        </div>
                        <div>
                            <label htmlFor="nombre"> Estado </label>
                            <input ref={this.estado} type="select" name="nombre" />
                        </div>
                        <div>
                            <label htmlFor="nombre"> Contraseña </label>
                            <input ref={this.password} type="password" name="nombre" />
                        </div>
                        <div>
                            <label htmlFor="nombre"> Teléfono </label>
                            <input ref={this.telefono} type="number" name="nombre" />
                        </div>
                        <div>
                            <label htmlFor="nombre"> Correo Electrónico </label>
                            <input ref={this.correo} type="text" name="nombre" />
                        </div>
                        <div className="container-buttons">
                            <button className="btn-filtrar" type="submit"> Filtrar </button>
                            <button className="btn-limpiar" id="limpiar" type="button" onClick={this.handleOnClick}> Limpiar </button>
                        </div>
                    </form>

                    <div className="modal">
                        <div className="modal-vista">

                            <div className="modal-crearUsuario">
                                <form>
                                    <p> Agregar un nuevo usuario </p>

                                    <div className="crearUsuario-columna">
                                        <div className="crearUsuario-row">
                                            <label htmlFor="nombre"> Nombres </label>
                                            <input type="text" name="nombre" />
                                        </div>
                                        <div className="crearUsuario-row">
                                            <label htmlFor="nombre"> Identificación (C.C) </label>
                                            <input type="text" name="nombre" />
                                        </div>
                                        <div className="crearUsuario-row">
                                            <label htmlFor="nombre"> Estado </label>
                                            <input type="number" name="nombre" />
                                        </div>
                                        <div className="crearUsuario-row">
                                            <label htmlFor="nombre"> Teléfono </label>
                                            <input type="select" name="nombre" />
                                        </div>
                                    </div>

                                    <div className="crearUsuario-columna">
                                        <div className="crearUsuario-row">
                                            <label htmlFor="nombre"> Estado </label>
                                            <input type="select" name="nombre" />
                                        </div>
                                        <div className="crearUsuario-row">
                                            <label htmlFor="nombre"> Contraseña </label>
                                            <input type="password" name="nombre" />
                                        </div>
                                        <div className="crearUsuario-row">
                                            <label htmlFor="nombre"> Teléfono </label>
                                            <input type="number" name="nombre" />
                                        </div>
                                        <div className="crearUsuario-row">
                                            <label htmlFor="nombre"> Correo Electrónico </label>
                                            <input type="text" name="nombre" />
                                        </div>
                                    </div>

                                <div className="container-buttons">
                                    <button className="btn-filtrar" type="submit"> Filtrar </button>
                                    <button className="btn-limpiar" id="limpiar" type="button" onClick={this.handleOnClick}> Limpiar </button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        )
    }
}

export default TablaUsuarios;