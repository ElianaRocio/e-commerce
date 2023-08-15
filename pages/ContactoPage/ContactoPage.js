import contactanos from '../../assets/images/contactanos.png';
import ubicacion from '../../assets/images/ubicacion.png';
import Form from '../../components/Form/Form';
export default function ContactoPage() {
    return (
        <>
            <div className="container-fluid my-3">

                <div className="row my-3">
                    <h1 className="titulo text-center my-3">CONTÁCTANOS</h1>
                </div>
                <div className="row my-3">
                <div className="col text-center">
                <img src={contactanos} className="img-fluid" alt="contactanos" width="1100" />
                    </div> 
                </div>
                
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col my-3 text-center texto2">
                        <div className="row my-2 ">
                            <h2>SUCURSALES</h2>
                        </div>
                        <div className="row my-2 ">
                            <p>Avenida Buenos Aires Calle cuarto centernario</p>
                        </div>
                        <div className="row my-2 ">
                            <p>Teléfono:60566232</p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="container-fluid my-3">
                <Form />
            </div>
        </>
    )
}