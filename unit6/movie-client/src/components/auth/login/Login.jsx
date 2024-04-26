import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState, useRef } from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function Login({updateToken}) {
    
    const usernameRef = useRef();
    const passwordRef = useRef()
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        const userName = usernameRef.current.value;
        const password = passwordRef.current.value;

        let bodyObj = JSON.stringify({
            email: userName, password: password
        })
        
        const url = `http://localhost:4005/user/login`
        const headers = new Headers({
            "Content-Type":'application/json'
        });

        headers.append("Content-Type", "application/json");
        // Setting out headers to accept the JSON object within the browser.

        const requestOptions = {
            headers,
            body: bodyObj,
            method: 'POST'
        }

        try {
            const response = await fetch(url, requestOptions);
            const data = await response.json();
            console.log(data);

            if(data.message === 'Successful') {
                updateToken(data.token)
                navigate('/movie')
            }
            updateToken(data.token)

        } catch(err) {
            console.error(err.message)
        }
    }
    
    return (
        <>
            <h2>Login</h2>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label>Username</Label>
                    <Input
                    innerRef={usernameRef}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input
                    innerRef={passwordRef}
                    />

                </FormGroup>
            <Button type='submit'>Sign In</Button>
            </Form>
        </>
    )
}

export default Login

/* 
    - Create a login folder within auth.
        - Create a JSX file called login (consider how the file/folder should be set)
    - Create a functional component called Login
    - Setup a form:
        - Above the form, make an h2 that displays "Login"
        - Use components from Reactstrap (hint: consider Signup)
        - No labels are required.
        - Two input fields: 
            - email: use a placeholder to denote "Email"
            - password: use a placeholder to denote "Password"
    - Import useRef:
        - create variables to reference both email & password.
        - incorporate within the Input components
    - Handle Submit
        - Set the form to fire off an async function called "handleSumbit"
            - write is as an arrow function.
        - Within the function
            - console.log both useRef variables that were established.
    - Export the component.
    - Import & mount the Login component within Auth.jsx
        - Note: Frame the component in the same fashion as Signup.
*/