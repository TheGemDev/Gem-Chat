/*import React, {useRef, useState} from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Form, Button, Input} from 'antd';


import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();



function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(500);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <Form onSubmit={sendMessage} layout='inline'>
      <Input 
      id="outlined-basic" 
      label="message"
      placeHolder='hello' 
      enterButton
      value={formValue} 
      onChange={(e) => setFormValue(e.target.value)} 
      />
       <Button className="sign-out" disabled={!formValue} type="submit">SEND</Button>
      
      {/**<IconButton type="submit" disabled={!formValue} variant="contained" color="primary" disableElevation multiline rows={4}><SendIcon /></IconButton>
    </Form>
 </>)
};

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img alt={'img'} src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'}  />
      <p>{text}</p>
    </div>
  </>)
}

export { 
  ChatRoom,
  ChatMessage
}*/}
