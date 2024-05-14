import React, { Component } from 'react';
import "./Dollarrate.css";

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
            <>
            <div className="text-center">
                <h2>Welcome to News Monkey- Your Free news Companion!</h2>
                
                <div>
                    <p>Let's see USD to PKR today:</p>
                </div>
                </div>
                <div className="container-main " >
                <form className="container-form">
                    <div className="col-4">
                        <div className="input-group my-3 mx-3" >
                            <div className="input-group-text"></div>
                            <input
                                type="text"
                                className="form-control"
                                id="inlineFormInputGroupUsername"
                                placeholder="1 USD"
                                onChange={this.updateUsd} // Changed function name
                            />
                        </div>
                     
                            <input
                                type="text"
                                className="form-control" 
                                id="inlineFormInputGroupUsername"
                                placeholder={this.state.pkr}
                            />
                       </div>
                    <div className="col-5">
                        <button
                            type="button"
                            onClick={this.dollarToPkr} 
                            className="btn btn-primary"
                        >
                            Convert
                        </button>
                    </div>
                </form>
                </div>
            </>
        );
    }
}

export default Dollarrate;
