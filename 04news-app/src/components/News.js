import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from "prop-types"
import "./News.css"
import Dollarrate from './Dollarrate';
//import './fonts/Jacquard_24_Charted/Jacquard24Charted-Regular.ttf'

export class News extends Component {
    static defaultProps={
        pageSize : 6,
        category : 'general'

    }
    static propTypes = {
        pageSize:PropTypes.number,
        category:PropTypes.string
    }

    articles = [];
    totalResults = 0;
    
    constructor(){
        super();
        this.state ={
            articles: this.articles ,
            loading : false,
            page : 1,
            totalResults: this.totalResults
           
            

        }
    }
    
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5de7b2f11ccf4a00b4e8c053779a17c1&page=1&pageSize=${this.props.pageSize}` ;
        this.setState(
            {loading:true})
        let data= await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading :false
    });
    }

    prevClick = async()=>{

        let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5de7b2f11ccf4a00b4e8c053779a17c1&page=${this.state.page-1}&pageSize=${this.props.pageSize}` ;
        
        this.setState(
            {loading:true})
        let data= await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            page : this.state.page-1,
            loading :false
        });
        
         


    }

    nextClick = async() => {
        if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
            let url=`https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&apiKey=5de7b2f11ccf4a00b4e8c053779a17c1&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
            this.setState(
                {loading:true}
            )
            
            let data= await fetch(url);
            let parsedData=await data.json();
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                page : this.state.page+1,
                loading : false
            })

        }

        
    }


  render() {
    let {mode}=this.props;
    
    return (
        <>
        <div className="first-container">
        <div className="container-main ">
            <h1 id="topHeadlines" className={`text-center my-5 text-${mode === "light" ? "dark" : "light"}`} style={{marginTop:"100px"}}>Top Headlines</h1>
            {this.state.loading && <Spinner/>}
            <div className="row">
                {!this.state.loading && this.state.articles.map((element)=>{
                    return(
                    <div className="col md-4 my-5" key={element.url}>
                        {/* limiting title to 45 chars and description to 88 chars */}
                    <Newsitem title={element.title?element.title.slice(0,45):''} description={element.description?element.description.slice(0,88):''} imgUrl={element.urlToImage} newsurl={element.url}/>
                    </div>

                )})}
                

                
            
            </div>
            

            
        </div>
        <div >
                <Dollarrate/>
        </div>
    </div>

        <div className="d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} onClick={this.prevClick}class="btn btn-dark">&larr; Previous Page </button>
        <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)}onClick={this.nextClick} class="btn btn-dark">Next Page &rarr;</button>
        </div>
        </>

      

      
    )
  };
}

export default News
