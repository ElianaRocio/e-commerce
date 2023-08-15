import historia from '../../assets/images/historia.png';
import foto1 from '../../assets/images/foto1.png';
import foto2 from '../../assets/images/foto2.png';
import foto3 from '../../assets/images/foto3.png';
export default function HistoriaPage() {

    return (
        <>
            <div className="container text-center my-3">

                <img src={historia} className="img-fluid" alt="historia" width="900" />
                <h1 className=" titulo my-3">CONÓCENOS</h1>
            </div>

            <div className="container  my-3">
                <div className="row ">


                    <div className="accordion" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                <button className="accordion-button text-center texto3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-controls="panelsStayOpen-collapseOne">
                                    NUESTRA HISTORIA
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                <div className="accordion-body">

                                    <div className="col texto2">
                                        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

                                    </div>

                                    <div className="col text-center">
                                        <img src={foto3} className="img" alt="foto3" width="500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center my-3">
                <div className="row ">
                    <div className="col ">

                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button texto3" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        NUESTROS PRODUCTOS
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body texto-2">

                                        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

                                        <img src={foto1} className="img" alt="foto1" width="500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container text-center my-3">
                <div className="row ">
                    <div className="col ">

                        <div className="accordion" id="accordionPanelsStayOpenExample">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                                    <button className="accordion-button texto-3 " type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                        NUESTRA TRAYECTORIA
                                    </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                    <div className="accordion-body texto2">

                                        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>

                                        <img src={foto2} className="img" alt="foto2" width="500" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}