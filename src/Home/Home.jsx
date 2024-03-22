import "./Home.css"

import basesdatos from "../utils/basesdatos.json"

export function Home() {

  console.log(basesdatos[0])

    return ( //zona de renderizado
        <>
            <section className="container mt-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h1 className="text-muted"> <span className="fuente">Servicios a un clic</span> </h1>
                        <h2 className="text-muted">HOLA<span className="fuente"><b>{basesdatos[0].nombreUsuario}</b></span></h2>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque animi ex cumque provident necessitatibus ipsam, sint dolores. Nostrum maiores culpa tempore error atque id temporibus possimus dolorem voluptate qui voluptatibus, ad vitae et harum! Omnis cumque quam quo mollitia commodi voluptatibus libero nemo aspernatur, velit distinctio consectetur rerum, facilis hic.</p>
                    </div>
                    <div className="col-12 col-md-6">
                        <select class="form-select" aria-label="Default select example">
                            <option selected>Tu Grupo Familiar</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>   

                        <div className="row">
                                <div className="col-12 col-md-2"><i class="bi bi-person-circle fs-1 fuente mt-2"></i></div>
                                <div className="col-12 col-md-10 mt-2"><h5>MEDICO DE FAMILIA</h5>
                                    <p>Doctor {basesdatos[0].medicoDeFamilia}</p></div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-12 col-md-2"><i class="bi bi-person-fill fs-1 fuente mt-1"></i></div>
                                <div className="col-12 col-md-10 mt-1"><h5>TIPO DE AFILIADO</h5>
                                    <p>Cotizante</p>
                                    <p>{basesdatos[0].grupoDeIngreso}</p></div>    
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-12 col-md-2"><i class="bi bi-suitcase-lg-fill fs-1 fuente mt-1"></i></div>
                                <div className="col-12 col-md-10 mt-1"><h5>ESTADO DE AFILIACION</h5>
                                <p>Tiene derecho a cobertura integral</p></div>
                                
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-12 col-md-2"><i class="bi bi-hospital-fill fs-1 fuente mt-1"></i></div>
                                <div className="col-12 col-md-10 mt-2"> <h5>IPS ACTUAL</h5>
                                <p>{basesdatos[0].ips}</p></div> 

                        </div>
                    </div>
                </div>
            </section>

            <hr/>
            <section className="container">
                <div className="row">
                    <div className="col-12 col-md-5">
                        <h5>PACIENTE {basesdatos[0].nombreUsuario} estas son tus proximas citas:</h5>
                    </div>
                </div>

            </section>
            <section className="container my-5">
                <div className="row row-cols-1 row-cols-md-3">
                    {
                        basesdatos[0].citasMedicas.map(function(cita){
                            return(
                                <div className="col">
                                    <div className="card h-100 shadow px-2">
                                        <h3>{cita.especialidad}</h3>
                                        <h4>Fecha: {cita.fecha}</h4>
                                        <h4>{cita.direccion}</h4>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}