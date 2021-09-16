import React from 'react'
import './cards.css'
import { stockData } from './../../services/data';

function cards() {
    return (
        <>  <div className="container">
            <div className="row">
                {stockData.map((data, key) => {
                    return (
                        <div className="col-sm-6 col-md-3 col-lg-3 mb-3" key={key} style={{ backgroundImage: `url(${data.imgurl})` }}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{data.company}</h5>
                                    <p className="card-text">{data.ticker}</p>
                                    <p className="card-text">{data.stockPrice}</p>
                                    <p className="card-text">{data.timeElapsed}</p>
                                    <a href="https:/www.google.com" className="btn btn-primary">Buy <i class="fas fa-address-card"></i></a>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
        </>
    )
}

export default cards
