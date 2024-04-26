import React from 'react'
import FullButton from '../buttons/FullButton';
import { baseURL } from '../../environment';
import { Form, Button, FormGroup, Input, Label } from 'reactstrap';
import { useRef } from 'react';

function MovieCreate(props) {

    const titleRef = useRef();
    const genreRef = useRef();
    const ratingRef = useRef();
    const LengthRef = useRef();
    const ReleasedRef = useRef();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const title = titleRef.current.value
        const genre = genreRef.current.value
        const rating = ratingRef.current.value
        const length = LengthRef.current.value
        const released = ReleasedRef.current.value
        
        let bodyObj = JSON.stringify({
            title: title, genre: genre, rating: rating, length: length, releaseYear: released
        })

        const url = `http://localhost:4005/movies`
        const headers = new Headers();
        console.log(headers)

        headers.append("Content-Type", "application/json");
        console.log(headers)
        headers.append("Authorization", localStorage.getItem('token'))
        
        console.log(headers)

        const requestOptions = {
            headers,
            body: bodyObj,
            method: 'POST'
        }

        try {
            const response = await fetch(url, requestOptions)
            const data = await response.json();
            console.log(data);
            props.fetchMovies();
        }catch(err) {
            console.error(err.message)
        }
    }

    let ratings = [null, 'G','PG',"PG-13", 'NC-17', "R"]

    let yearRange = () => {
        let years = [null];
        const thisYear = new Date().getFullYear();

        for(let i = thisYear; i >= 1892; i--) years.push(i);

        return(
            <>
            <Input type='select' innerRef={ReleasedRef}>
                {
                    years.map((y,i) => {
                        return <option key={i} value={y}>{y}</option>
                    })
                }
            </Input>
            
            </>
        )
    }
    return (
    <>
    
    <h1>ADD MOVIE!!!</h1>
    
    <Form onSubmit={handleSubmit}>

        <FormGroup>
            <Label>Title</Label>
            <Input 
            innerRef={titleRef}
            autoComplete='off'
            />
        </FormGroup>
        <FormGroup>
            <Label>Genre</Label>
            <Input 
            type='select'
            innerRef={genreRef}
            autoComplete='off'
            >
                <option value=""></option>
                <option value="Action">Action</option>
                <option value="Comedy">Comedy</option>
                <option value="Horror">Horror</option>
                <option value="Suspense">Suspense</option>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label>Rating</Label>
            <Input 
            type='select'
            innerRef={ratingRef}
            autoComplete='off'
            >
            {ratings.map((r,i) => <option key={i} value={r}>{r}</option>)}
            </Input>
        </FormGroup>
        <FormGroup>
            <Label>Length</Label>
            <Input 
            type='number'
            innerRef={LengthRef}
            autoComplete='off'
            />
        </FormGroup>
        <FormGroup>
            <Label>Released</Label>
            {yearRange()}
        </FormGroup>
        <FullButton>
            <Button type='submit'>Add Movie</Button>
        </FullButton>
    </Form>


    </>
  )
}

export default MovieCreate;