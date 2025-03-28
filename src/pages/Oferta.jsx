import './../styles/Oferta.css'
import Card from './../components/Card'
import Data from './../assets/oferta.json'
import Header from './../components/Header'
import Carrusel from './../components/Carrusel'
import Footer from './../components/Footer'
import Default from './../assets/default.png'

function Oferta() {
  return (
    <>
      <Carrusel />
      <div className="div-title">
        <hr className="line"/>
        <h2 className="title">OFERTA EDUCATIVA</h2>
      </div>
      <div className="container">
          {Data.map((item, index) => {
            return (
              <div key={index}>
                <Card
                  imagen={item.imagen || Default}
                  nombre={item.carrera}
                  descripcion={item.informacion}
                />
              </div>
            )
          })}
      </div>
      <Footer />
    </>
  )
}

export default Oferta
