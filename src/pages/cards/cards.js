import React from 'react'
import { stockData } from './../../services/data';

function cards() {
    return (
        <>
            {stockData.map((data, key) => {
                return (
                    <div key={key}>
                        <div className="container">
                            <div className="row">
                                <div className="card m-3" style={{ width: "18rem" }}>
                                    <div className="card-body">
                                        <h5 className="card-title">{data.company}</h5>
                                        <p className="card-text">{data.ticker}</p>
                                        <p className="card-text">{data.stockPrice}</p>
                                        <p className="card-text">{data.timeElapsed}</p>
                                        <a href="www.google.com" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
            }
        </>

    )
}

export default cards
