import React from 'react';
import MoviesTableRow from '../moviesTableRow/moviesTableRow';
import "./moviesTable.css";

class MoviesTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let info = this.props.data;
        let header = {
            sno : "S. No.",
            name : "Movie Name",
            genre: "Genre",
            rating: "Rating"
        }
        let rows = [];
        for(let i of info){ //of mein data aata hai aur in mai indexing aati hai
            rows.push(<MoviesTableRow key ={i.sno} data={i} />); // in react it creates prblm if same object so create key
        }
        return (
            // where header not mentioned its undefined
            <div className="movies-table">
                <MoviesTableRow data={header} header={true}/>
                {/* same to keeping this in an array */}
                {/* <MoviesTableRow data={info} />
                <MoviesTableRow data={info} />
                <MoviesTableRow data={info} /> */}
                {rows}
            </div>
        )
    }
}

export default MoviesTable;