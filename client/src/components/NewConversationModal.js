import {Modal, Form, Button} from "react-bootstrap";
import {useContacts} from "../context/ContactsProvider";
import { useState } from "react";
import {useConversations} from "../context/ConversationsProvider";

const NewConversationModal = ({closeModal}) => {
  const [selectedContactIds,setSelectedContactIds] = useState([]);
  const {contacts} = useContacts(); 
  const {createConversation} = useConversations(); 

  function handleCheckboxChange(contactId){
    setSelectedContactIds(prev=>{
      if(prev.includes(contactId)){
        return prev.filter(prevId=>contactId!==prevId);
      }else{
        return [...prev,contactId];
      }
    })
  }

  function handleSubmit(e){
    e.preventDefault();

    createConversation(selectedContactIds);

    closeModal();
  }

  return (
    <>
        <Modal.Header closeButton>
            Create Convesations
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmit}>
                {contacts.map(contact=>(
                  <Form.Group controlId={contact.id} key={contact.id}>
                    <Form.Check type="checkbox" value={selectedContactIds.includes(contact.id)} label={contact.name} onChange={()=>handleCheckboxChange(contact.id)}/>
                  </Form.Group>
                ))}
                <Button type="submit" className="my-2">Create</Button>
            </Form>
        </Modal.Body>
    </>
  )
}

export default NewConversationModal
