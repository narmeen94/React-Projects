import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imgUrl,newsurl}=this.props; //newsitem k ander props pass kiye hain.
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
            <img src= {imgUrl?imgUrl:"https://techcrunch.com/wp-content/uploads/2024/05/ula-boeing.jpeg?resize=1200,674"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                <a href={newsurl} rel="noreferrer" target= "_blank" class="btn btn-dark">Read more</a>
            </div>
        </div>
      </div>
    )
  }
}

export default Newsitem
