import React, { Component } from 'react';
import "./Dollarrate.css";
import calm from "./calm-meditating-monkey-gif-zoogif.gif"

export class Dollarrate extends Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            pkr: null,
            usd: 1
        };
    }

    async componentDidMount() {
        let apiKey = "91b4c2a6714f4bbf893f08bdbd9facdc";
        let url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`;

        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            pkr: parsedData.rates.PKR,
            loading: false
        });
    }

    dollarToPkr = async () => {
        let apiKey = "91b4c2a6714f4bbf893f08bdbd9facdc";
        let url = `https://api.currencyfreaks.com/v2.0/rates/latest?apikey=${apiKey}`;

        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json();
        
        this.setState({
            pkr: parsedData.rates.PKR * this.state.usd,
            loading: false
        });
    };

    updateUsd = (evt) => {
        const USD = evt.target.value;
        this.setState({
            usd: USD
        });
    };

    render() {
        return (
            
            <div className="container-side">

                <img src={calm} alt="" style={{height : "200px",width:"200px"}}/>
        
        
                
                
               
                    <h2 id="converter">USD to PKR Converter</h2>
                
                
               
               
                    
                        
                            
                            <input
                                type="text"
                                className="form-control mb-3"
                                
                                placeholder="1 USD"
                                onChange={this.updateUsd} // Changed function name
                            />
                       
                     
                            <input
                                type="text"
                                className="form-control mb-3" 
                               
                                placeholder={this.state.pkr}
                            />
                             
                       
                    <div className="buttonconv">
                        <button
                            type="button"
                            onClick={this.dollarToPkr} 
                            className="btn btn-dark"
                        >
                            Convert
                        </button>
                    </div>
                    </div>
               
                
                
          
        );
    }
}

export default Dollarrate;
