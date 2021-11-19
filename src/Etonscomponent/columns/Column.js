import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import  ServiceData  from '../../services/ServiceData';




const ColumnAz = () => {
    return (
        <div className="container">
            <Carousel>
                <Carousel.Item >
                    <div className="row" >
                        {ServiceData && ServiceData.map((item,key) => {
                            return (
                                <div className="col-2" >
                                    <div className="card " key={key}>
                                        <img className="card-img-top " src={item.image} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">Card title</h5>
                                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" className="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Carousel.Item>
            </Carousel>
        </div >
    )
}

export default ColumnAz
