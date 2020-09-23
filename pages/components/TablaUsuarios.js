import React from 'react'
import BaseComponent from './BaseComponent'

class TablaUsuarios extends BaseComponent {

    constructor(props) {
        super(props);
        this.state = { tableData: [], isModalOpen: false, currentPage: 1, visiblePages: [1, 2] }
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
        this.handleChangePage = this.handleChangePage.bind(this)
        this.setPage = this.setPage.bind(this)
    }

    async componentDidMount() {
        this.data = await this.getUsuariosExistentes();
        this.setPage(1);
    }
    handleOnRegister(e) {
        e.preventDefault();
    }

    handleChangePage(e) {
        const { id } = e.target;
        const { currentPage } = this.state

        if (id === "siguiente") {
            this.setPage(currentPage + 1);
        } else if (id === "anterior") {
            this.setPage(currentPage - 1);
        } else if (id === "primera") {
            this.setPage(1);
        } else if (id === "ultima") {
            this.setPage('ultima');
        }


    }

    handleOnClick(e) {
        e.preventDefault();
        const { id } = e.target;
        if (id === "filtrar") {
            const nombre = this.nombre.current.value
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

    setPage(currentPage = 1, visibleItems = 8) {
        if (this.data.length > 0 && currentPage > 0 || currentPage === 'ultima') {
            currentPage = currentPage === 'ultima' ? Math.ceil(this.data.length / visibleItems) : currentPage;
            const final = currentPage * visibleItems;
            const init = final - visibleItems;
            this.setState({ tableData: this.data.slice(init, final), currentPage: currentPage, visiblePages: this.getVisiblePages(visibleItems) })
        }
    }

    filterPages = (visiblePages, totalPages) => {
        return visiblePages.filter(page => page <= totalPages);
    };

    getVisiblePages(visibleItems) {
        const total = Math.ceil(this.data.length / visibleItems)
        const { currentPage } = this.state
        if (total < 5 && total > 0) {
            return this.filterPages([1, 2, 3, 4, 5], total);
        } else {
            if (currentPage % 5 >= 0 && currentPage > 4 && currentPage + 2 < total) {
                return [1, currentPage - 1, currentPage, currentPage + 1, total];
            } else if (currentPage % 5 >= 0 && currentPage > 4 && currentPage + 2 >= total) {
                return [1, total - 3, total - 2, total - 1, total];
            } else {
                return [1, 2, 3, 4, 5, total];
            }
        }
    };

    render() {
        const { tableData, isModalOpen, visiblePages, currentPage } = this.state;
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
                        <div className="tablaUsuarios-pages">
                            <img onClick={this.handleChangePage} id="primera" src="./icons/final-left.svg" />
                            <img onClick={this.handleChangePage} id="anterior" src="./icons/galon-izquierdo.svg" />
                            <div className="tablaUsuarios-numbers">
                                {visiblePages.map((page, index, array) => {
                                    return (
                                        <p
                                            key={page}
                                            className={currentPage === page ? "page-active" : ''}
                                            onClick={() => this.setPage(page)}
                                        >
                                            {array[index - 1] + 2 < page ? `...${page}` : page}
                                        </p>
                                    );
                                })}
                            </div>
                            <img onClick={this.handleChangePage} id="siguiente" src="./icons/galon-derecho.svg" />
                            <img onClick={this.handleChangePage} id="ultima" src="./icons/final-right.svg" />
                        </div>
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
                            <input ref={this.apellidos} type="text" name="nombre" />
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
                                <form onSubmit={this.handleOnRegister}>
                                    <div className="crearUsuario-header">
                                        <p> Agregar un nuevo usuario </p>
                                        <img className="modal-cerrar" src="./icons/cerrar.svg" onClick={(e) => this.setState({ isModalOpen: false })} />
                                    </div>

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
                                        <button className="btn-filtrar" type="submit"> Aceptar </button>
                                        <button className="btn-limpiar" type="button" onClick={(e) => this.setState({ isModalOpen: false })} > Cancelar </button>
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