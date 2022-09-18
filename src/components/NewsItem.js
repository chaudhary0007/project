
import React, { Component } from 'react'
export class NewsItem extends Component {
    render() {
        let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="mx-5">
                <div className="card" >
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0'
                    }}>
                        <span className=" badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={!imgUrl ? "https://s.yimg.com/os/creatr-uploaded-images/2022-07/e03ad250-0884-11ed-b5f7-85a0d794b38d" : imgUrl} className="card-img-top" alt="..." />

                    <div className="card-body">

                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className="card-text"><small className="text-muted">By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a rel="noreferrer" href={newsUrl} target="blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}