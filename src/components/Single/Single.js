import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Single.css';

const Single = () => {
    const { filmId } = useParams();
    const [film, setFilm] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://kinopoiskapiunofficial.tech/api/v2.2/films/${filmId}`, {
            method: 'GET',
            headers: {
                'X-API-KEY': 'd903a339-d7c7-4cbd-8f52-85ca9ca35e4e',
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw Error('Could not fetch the data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setFilm(data);
                setError(null);
            })
            .catch((error) => {
                setError(error.message);
            });
    }, [filmId]);
    return (
        <div>
            {error && <h2 className="title-h2">Error: {error}</h2>}
            {film && (
                <div className="container film">
                    <div className="film__img">
                        <img className="film__poster" src={film.posterUrl} alt={film.nameRu} />
                    </div>
                    <div className="film__content">
                        <h3 className="film__title">{film.nameRu}</h3>
                        <div className="film__wrapper">
                            <span className="film__name-original">{film.nameOriginal}</span>
                            <span className="film__rating-mpaa">
                                Рейтинг MPAA {film.ratingMpaa}
                            </span>
                            <div className="film__slogan">{film.slogan}</div>
                            <div className="film__year">Год производства {film.year}</div>
                            <div className="film__film-length">Время {film.filmLength} (мин)</div>
                            <div className="film__rating-imdb">
                                Рейтинг ожидания {Math.round(film.ratingAwait)}
                            </div>
                            <div className="film__description">{film.description}</div>
                            <a
                                className="film__kinopoisk"
                                href={`https://www.kinopoisk.ru/film/${filmId}`}
                                target="_blank"
                                rel="ofollow noopener noreferrer"
                            >
                                Подробнее на Кinopoisk.ru
                            </a>
                            <a
                                className="film__kinopoisk"
                                href={`https://www.kinopoisk.ru/film/${filmId}/video/`}
                                target="_blank"
                                rel="ofollow noopener noreferrer"
                            >
                                Трейлер (дублированный)
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export { Single };
