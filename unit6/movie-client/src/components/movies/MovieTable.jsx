import React from 'react'
import { Button, Table } from 'reactstrap'
import { baseURL } from '../../environment'
import { useNavigate } from 'react-router-dom'

function MovieTable({movies, token, fetchMovies}) {
    //console.log(movies)

    const navigate = useNavigate();

    async function deleteMovie(id){
        const url = `http://localhost:4005/movies/${id}`

        let requestOptions = {
            headers: new Headers({
                'Authorization': token

            }),
            method: 'DELETE'
        }


        try {
            let response = await fetch(url, requestOptions)
            let data = await response.json();
            if (data) {
                fetchMovies();
            }
        } catch (err)
        {
            console.error(err.message)
        }
    }
    return (
    <>
    <Table striped>
    <thead>
        <tr>
        <th>
            Title
        </th>
        <th>
            Genre
        </th>
        <th>
            Rating
        </th>
        <th>
            Length
        </th>
        <th>
            Year Released
        </th>
        <th>
            Edit/De-YEET
        </th>
        </tr>
    </thead>
    <tbody>
        {
            movies.map(movie => (
                <tr key={movie._id}>
                    <th scope='row'>{movie.title}</th>
                    <td>{movie.genre}</td>
                    <td>{movie.rating}</td>
                    <td>{movie.length}min</td>
                    <td>{movie.releaseYear}</td>
                    <td><Button onClick={()=> navigate(`http://localhost:4005/movies/update/${movie._id}`)} color='success'>Edit</Button></td>
                    <td><Button onClick={()=> deleteMovie(movie._id)} color='danger'>Da-YEET!</Button></td>
                </tr>
            ))
        }
  </tbody>
</Table>
    
    </>
  )
}

export default MovieTable