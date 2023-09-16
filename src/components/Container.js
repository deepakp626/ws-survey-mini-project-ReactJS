import React, { Component } from 'react'
import Details from './Details'
import Question from './Question'
import { v4 as uuidv4 } from 'uuid';
import {initializeApp} from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCHNjGMWhisi4XY0tAbukZh_bp6D_Vxf10",
  authDomain: "ws-survey-cac48.firebaseapp.com",
  databaseURL: "https://ws-survey-cac48-default-rtdb.firebaseio.com",
  projectId: "ws-survey-cac48",
  storageBucket: "ws-survey-cac48.appspot.com",
  messagingSenderId: "527275546495",
  appId: "1:527275546495:web:023b2ef90cd1a6684a6c4a"
};

const app = initializeApp(firebaseConfig);

// if(!firebase.app.length){
//   const app = initializeApp(firebaseConfig);
// }

export class Container extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        id:uuidv4(),
        name:null,
        email:null,
        isSubmitted:false,
        question:{
          q1:null,
          q2:null,
          q3:null,
          other:null,
        },
      }
    }
    detailsSubmitHandler =(event) =>{
      event.preventDefault()
      const name = event.target.name.value;
      const email = event.target.email.value;
      this.setState({name:name,email:email})
    }
    questionSubmitHandler = (event)=>{
        event.preventDefault()
        const question = {};
        question.q1 = event.target.q1.value;
        question.q2 = event.target.q2.value;
        question.q3 = event.target.q3.value;
        question.other = event.target.other.value;
        const isSubmitted =true
        this.setState({question, isSubmitted})
        const database = getDatabase(app);
        const db = getDatabase();
        set(ref(db, 'survey/' + this.state.id), {
          name: this.state.name,
          email: this.state.email,
          question : this.state.question
        });
      
    }

    render() {
    return (
        <>
        <div className="container-fluid">
        <div className="container card mt-2">
          <h1 className="text-center text-primary"> WsCube Tech Survey</h1>
        </div>
      </div>
      {
        this.state.isSubmitted? (
          <div className='card'> 
            <h1>Thank you </h1>
          </div>
        )
        :this.state.name === null && this.state.email === null? 
        <Details submit={this.detailsSubmitHandler}/>:
        <Question submit={this.questionSubmitHandler}/>
      }
        </>
    )
  }
}

export default Container;