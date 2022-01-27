import React from 'react';
import { Link } from 'react-router-dom';
import './Playbill.css';
import { topFilmsRequest } from '../../API/API';

class Playbill extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            films: [],
            activeFilm: 0,
        };
    }

    componentDidMount() {
        topFilmsRequest()
            .then((response) => response.json())
            .then((result) => {
                this.setState({ 
                    films: result.films 
                });
            },
            (error) => {
                this.setState({
                    error
                });
            });
    }

    render() {
        const { films, error } = this.state;
        if (error) {
            return <h2 className="title-h2">Error: {error.message}</h2>
        } else {
            return (
                <div className="container">
                    <h2 className="title-h2">
                        Самые ожидаемые фильмы по мнению пользователей Кинопоиска
                    </h2>
                    <div className={'playbill__movies'}>
                        {films.map((film) => (
                            <Link
                                to={`/films/${film.filmId}`}
                                className={'playbill__film'}
                                key={film.filmId}
                                style={{ backgroundImage: `url(${film.posterUrl})` }}
                            >
                                <div className={'playbill__gray'}>
                                    <div className="playbill__green">
                                        <span className={'playbill__title'}>{film.nameRu}</span>
                                        <span className={'playbill__subtitle'}>{film.year}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            );
        };
    }
}

export default Playbill;
