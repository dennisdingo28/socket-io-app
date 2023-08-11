import React, {useRef} from 'react'
import {Button, Container, Form} from "react-bootstrap"
import {v4 as uuidv4} from "uuid";

const Login = ({onIdSubmit}) => {
    const idRef = useRef();

    function handleSubmit(e){
        e.preventDefault();
        onIdSubmit(idRef.current.value);
    }
    function createNewId(){
        onIdSubmit(uuidv4());
    }

  return (
    <Container className='align-items-center d-flex' style={{
        height:"100vh"
    }}>
        <Form onSubmit={handleSubmit} className='w-100'>
            <Form.Group>
                <Form.Label>Enter your id</Form.Label>
                <Form.Control type='text' ref={idRef} required/>
            </Form.Group>
            <Button type='submit' className='my-2'>Login</Button>
            <Button onClick={createNewId} type='submit' variant='secondary'>Create a new id</Button>
        </Form>
    </Container>
  )
}

export default Login