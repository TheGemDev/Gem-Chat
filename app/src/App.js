import React, {useRef, useState } from 'react';
import './App.css';
import { Button, Form, Input } from 'antd';
import {YoutubeFilled, TwitterOutlined} from '@ant-design/icons';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';


import Pageheader from './components/pageHeader';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';




firebase.initializeApp({
  apiKey: "AIzaSyCfrS9gSP-xPdNFhA-1LHmMbFdRevlzxLs",
  authDomain: "gem-chat-app.firebaseapp.com",
  databaseURL: "https://gem-chat-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gem-chat-app",
  storageBucket: "gem-chat-app.appspot.com",
  messagingSenderId: "378782366095",
  appId: "1:378782366095:web:77ab77050f738839a9b3fa",
  measurementId: "G-ML6QFR1K72"
})

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();
const FormItem = Form.Item;
const layout = {
  labelCol: { span: 100},
  wrapperCol: { span: 100},
};

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <Pageheader />
        
        <a href='https://www.youtube.com/c/TheGemDev?sub_confirmation=1' target='_blank' rel="noreferrer"> <YoutubeFilled  style={{fontSize: '40px'}}/> </a>
        <a href='https://twitter.com/TheGemDev' target='_blank' rel="noreferrer"> <TwitterOutlined  style={{fontSize: '40px'}}/> </a>
        <br/>
        <SignOut />
       
      </header>

      <section>
        <br/>
        { user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <Button className="sign-in" onClick={signInWithGoogle} type="primary">Sign in with Google</Button>
      <p>Chat here Okay!!!!</p>
    </>
  )

}

function SignOut() {
  return auth.currentUser && (
    <Button className="sign-out" onClick={() => auth.signOut()} variant="contained" color="primary" disableElevation >Sign Out</Button>
  )
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(500);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    //e.preventDefault();

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

    <Form 
    style={{position: 'sticky', bottom: '0'}}
    {...layout}
    layout='inline'
    onFinish={sendMessage}
    onChange={(e) => setFormValue(e.target.value)}
    >
        <FormItem name='title' style={{width: '80%', marginBottom: 0, marginRight: 0 }} >
        <Input 
        placeholder='Type a message'
        value={formValue}
        allowClear
        />
        </FormItem>
        <FormItem /*{...tailLayout}*/ style={{marginBottom: 0, marginRight: 0, width: '20%' }}>
        <Button 
        type='primary'
        htmlType='submit'
        disabled={!formValue}
        >Send</Button>
        </FormItem>
    </Form>

    
</>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div className={`message ${messageClass}`}>
      <img alt={'img'} src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} />
      <p>{text}</p>
    </div>
  </>)
}

export default App;