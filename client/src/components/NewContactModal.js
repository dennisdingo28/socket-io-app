import { Modal, Form, Button } from "react-bootstrap"
import { useRef } from "react";
import { useContacts } from "../context/ContactsProvider";

const NewContactModal = ({closeModal}) => {
    const idRef = useRef();
    const nameRef = useRef();
    const {createContact} = useContacts();

    function handleSubmit(e){
        e.preventDefault();

        createContact(idRef.current.value, nameRef.current.value);
        closeModal();
    }
  return (
    <>
        <Modal.Header closeButton>
            Create Contact
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Id</Form.Label>
                    <Form.Control type="text" ref={idRef} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" ref={nameRef} required/>
                </Form.Group>
                <Button type="submit" className="my-2">Create</Button>
            </Form>
        </Modal.Body>
    </>
  )
}

export default NewContactModal
