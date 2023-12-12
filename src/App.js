import logo from './logo.svg';
import MovieCard from './MovieCard';
import './App.css';
import { Component } from "react";

class App extends Component {
  constructor(){
    super()
    this.movies = [
      {
        imageurl:"https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg",
        title: 'The Shawshank Redemption',
        year: 1994,
        duration: '2h 22m',
        rating: 'R',
        score: 9.3,
        votes: '2.8M',
        starring: 'Tim Robbins',
        timesadded:0
      },
      {
        imageurl:"https://upload.wikimedia.org/wikipedia/en/0/03/Godfather_part_ii.jpg",
        title: 'The Godfather',
        year: 1972,
        duration: '2h 55m',
        rating: 'R',
        score: 9.2,
        votes: '2M',
        starring: 'Marlon Brando',
        timesadded:0
  
      },
      {
        imageurl:"https://upload.wikimedia.org/wikipedia/en/1/1c/The_Dark_Knight_%282008_film%29.jpg",
        title: 'The Dark Knight',
        year: 2008,
        duration: '2h 32m',
        rating: 'PG-13',
        score: 9.0,
        votes: '2.8M',
        starring: 'Morgan Freeman, Gary Oldman, Christian Bale, Michael Caine, Aaron Eckhart, Heath Ledger, Maggie Gyllenhaal, Cillian Murphy, Chin Han',
        timesadded:0
      },
      {
        imageurl:"https://upload.wikimedia.org/wikipedia/en/0/03/Godfather_part_ii.jpg",
        title: 'The Godfather Part II',
        year: 1974,
        duration: '3h 22m',
        rating: 'R',
        score: 9.0,
        votes: '1.3M',
        starring: 'Al Pacino',
        timesadded:0
      },
      {
        imageurl:" https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
        title: '12 Angry Men',
        year: 1957,
        duration: '1h 36m',
        rating: 'Approved',
        score: 9.0,
        votes: '844K',
        starring: 'Henry Fonda, Martin Balsam, Jack Klugman, Lee J. Cobb, Ed Begley, Edward Binns, John Fiedler, E.G. Marshall, Joseph Sweeney, George Voskovec, Jack Warden, Robert Webber',
        timesadded:0
      }
    ];
  }
  additem=(movie)=>{
    const movies=this.movies
    const mind=this.movies.indexOf(movie);
    movies[mind].timesadded+=1

    this.setState({
      movies:movies
    })
    console.log(this.movies)
  }
    
    
  subitem=(movie)=>{
    const movies=this.movies;
    const mind=this.movies.indexOf(movie);
    movies[mind].timesadded-=1
    this.setState({
      movies:movies
    })

  }


  render(){
    return (
        <div>
          {this.movies.map(movie => <MovieCard movie={movie} add={this.additem}  sub={this.subitem}/> )}
        </div>
    
  );
  }
}

export default App;
