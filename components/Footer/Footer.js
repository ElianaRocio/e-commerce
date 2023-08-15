import logo from '../../assets/images/logo.png';
export default function Footer() {

    return (

        <>
            <div className="container-fluid text-center fondo my-3 p-3">
                <div className="col  ">
                    <img src={logo} alt="logo" className="img" width="200" />
                </div>
                <div className="col">
                    <div className="row ">                       

                        <div className="col  text-center">
                            <p className="texto">Síguenos para más contenido, contáctanos para pedidos</p>
                            <p className="texto" > July's Bakery una sonrisa en cada mordida</p>
                        </div>

                    </div>


                    <div className="row ">


                        <div className="col-sm d-flex justify-content-center ">

                            <a href="https://www.facebook.com/PasteleriaJulys"><i className="bi bi-facebook px-3 icono" ></i></a>

                            <a href="https://www.instagram.com/pasteleria_julys_bakery/?next=%2F"><i className="bi bi-instagram px-3 icono" ></i></a>

                            <a href="https://wa.me/message/X7JONOS32T4QE1"><i className="bi bi-telephone-fill px-3 icono" ></i></a>

                        </div>

                    </div>

                </div>

            </div>


        </>
    );
}
