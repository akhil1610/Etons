import React from 'react'
import { stockData } from './../../services/data';

function cards() {
    return (
        <>  <div className="container">
            <div className="row">
                {stockData.map((data, key) => {
                    return (
                        <div className="col-md-3 mb-3" key={key} >
                            <div className="card " style={{ width: "18rem" }}>
                                <div className="card-body">
                                    <h5 className="card-title">{data.company}</h5>
                                    <p className="card-text">{data.ticker}</p>
                                    <p className="card-text">{data.stockPrice}</p>
                                    <p className="card-text">{data.timeElapsed}</p>
                                    <a href="https:/www.google.com" className="btn btn-primary">Go somewhere</a>
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
