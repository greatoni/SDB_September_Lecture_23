import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button, Col, Container, Form, FormGroup, Input, Label, Row, } from 'reactstrap';
import FullButton from '../buttons/FullButton';

export default function MovieEdit(props) {

    const {id} = useParams();
    const [movieTitle, setMovieTitle] = useState();
    const [movieGenre, setMovieGenre] = useState()
    const [movieRating, setMovieRating] = useState();
    const [movieLength, setMovieLength] = useState();
    const [movieReleased, setMovieReleased] = useState()
    const navigate = useNavigate();



    let ratings = [null, 'G','PG',"PG-13", 'NC-17', "R"]
    let genre = [null, 'Comdey','Drama','Action','Horror','Thriller','Family','Documentary'];


    let yearRange = () => {
        let years = [null];
        const thisYear = new Date().getFullYear();

        for(let i = thisYear; i >= 1892; i--) years.push(i);
        return(
            <>
            <Input type='select'>
                {
                    years.map((y,i) => {
                        return <option key={i} value={y}>{y}</option>
                    })
                }
            </Input>
            
            </>
        )
    }

        async function handleSubmit(e) {
            e.preventDefault();

            const url = `http://localhost:4005/movies/${id}`

            let body = JSON.stringify({
                title: movieTitle,
                genre: movieGenre,
                length: movieLength,
                rating: movieRating,
                releaseYear: movieReleased
            })

            const requestOptions = {
                headers: new Headers({
                    'Authorization': props.token,
                    "content-Type": 'application/json'
                }),
                body,
                method: 'PATCH'
            }

            try {

                const res = await fetch(url,requestOptions)
                const data = await res.json();

                if(data) fetchMovies()
            } catch(err) {
                console.error(err.message)
            }
        }

        const style = {
            textAlign: "center",
            textDecoration: "underline"
        }

        const fetchMovies = async () => {
            const url = `http://localhost:4005/movies/find-one/${id}`

            const requestOptions = {
                method: 'GET',
                headers: new Headers({
                    'Authorization': props.token
                })
            }

            try {
                const res = await fetch(url, requestOptions);
                const data = await res.json();

                console.log(data);

            }
            catch (err) {
                console.error(err.message);
            }
        }

/*         useEffect(() => {
            if(props.token) {
                fetchMovies();
            }
        }, [props.token]) */

    return(
    <>
        <h1 style={style}>Edit Movie</h1>Movieedit! ID: {id}
        <Container>
        <Row>
            <Col md='4'>
                <p><b>{movieTitle}</b></p>
                <p>Loremtext</p>
                <FullButton>
                    <Button
                        colo = 'info'
                        outlineonclick={() => navigate('/movie')}>
                            Back to Table!
                        </Button>
                </FullButton>
            </Col>
            <Col md='8'>
                <Form onSubmit={handleSubmit}>
                    <FormGroup>
                        <Label>Title</Label>
                        <Input
                        value = {movieTitle}
                        onChange={e => setMovieTitle(e.target.value)}
                        autoComplete='off'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Genre</Label>
                        <Input
                        value = {movieGenre}
                        onChange={e => setMovieGenre(e.target.value)}
                        autoComplete='off'
                        type='select'>
                        
                        {genre.map((g,i) => (
                            <option key={i} value={g}>{g}</option>
                        ))}
                        
                        </Input>                  
                    </FormGroup>
                    <FormGroup>
                        <Label>Rating</Label>
                        <Input
                        value = {movieRating}
                        onChange={e => setMovieRating(e.target.value)}
                        autoComplete='off'
                        type='select'>
                        
                        {ratings.map((g,i) => (
                            <option key={i} value={g}>{g}</option>
                        ))}
                        </Input>                  
                    </FormGroup>
                    <FormGroup>
                        <Label>Length</Label>
                        <Input
                        value = {movieLength}
                        onChange={e => setMovieLength(e.target.value)}
                        autoComplete='off'
                        type='number'
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Release YEAR</Label>
                        {yearRange()};
                    </FormGroup>
                    <FullButton>
                        <Button color='success'>Update</Button>
                    </FullButton>
                </Form>
            </Col>
        </Row>

        </Container>
    </>
)
}
/*
# useParams()
- Comes from React-Route-DOM
  - Considers the `path` provided within the `<Route>` in `App.jsx`.
  - Recognizes the `:id` as a parameter value in which to respond.
  - We are able to access the key of `id` much in the same way we did with the server.

# useNavigate()
- Comes from React-Router-DOM
  - Simply helps us move from one endpoint to another as we desire.
  - Must pass in the path as an argument
ex:
```jsx
navigate('/sample-endpoint');
```
*/