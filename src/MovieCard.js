import { Component } from "react";
import './MovieCard.css';

export default class MovieCard extends Component{

    render(){
        const { movie } = this.props;
        // const { title, rating, posterUrl } = movie;
        const {imageurl,title,year,duration,rating,score,votes,starring,timesadded}=movie
        //console.log(this.props)
        console.log(movie)
        return(
            <>
            <div class="moviecard">
                <img class="image" src={imageurl} alt=""/>
                <div class="infocontainor">
                    <h1 class="moviename">{title}</h1>
                    <div class="info">
                    <p >{year}</p>
                    <p >{duration}</p>
                    <p >{rating}</p>
                    </div>
                    <div class="rating">
                        <span>{votes}</span><span>{score}</span>
                        <p>{starring}</p>
                    </div>
                    <div class="buttons">
                        <h3 id="cartitem">{timesadded}</h3>
                        <button onClick={()=>(this.props.add(this.props.movie))}>Add to cart</button>







                        <button onClick={()=>(this.props.sub(this.props.movie))}>Remove</button>

                    </div>
                    

                </div>
            </div>
            </>
        )
    }
}