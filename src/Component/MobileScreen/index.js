import {Component} from 'react'
import QuestionArea from '../QuestionArea'

import './index.css'

const questionList = [
  {
    questionNumber: 1,
    questionText:
      'What does not grow on tree according to a popular Hindi saying ?',
    options: [
      {id: 'A', text: 'A. Mangoes'},
      {id: 'B', text: 'B. Money'},
      {id: 'C', text: 'C. Leaves'},
      {id: 'D', text: 'D. Flowers'},
    ],
    correctOption: 'B',
  },
  {
    questionNumber: 2,
    questionText: 'Current Railway Minister of India is ?',
    options: [
      {id: 'A', text: 'A. Piyush Goyal'},
      {id: 'B', text: 'B. Ram Vilash'},
      {id: 'C', text: 'C. Mumta Banerjee'},
      {id: 'D', text: 'D. Ashwini Vaishnav'},
    ],
    correctOption: 'D',
  },
  {
    questionNumber: 3,
    questionText: 'Which god is also known as Gauri Nandan ?',
    options: [
      {id: 'A', text: 'A. Ganesh'},
      {id: 'B', text: 'B. Shivji'},
      {id: 'C', text: 'C. Vishnu'},
      {id: 'D', text: 'D. Karan'},
    ],
    correctOption: 'A',
  },
  {
    questionNumber: 4,
    questionText: 'How many major religions are there in India ?',
    options: [
      {id: 'A', text: 'A. 6'},
      {id: 'B', text: 'B. 9'},
      {id: 'C', text: 'C. 7'},
      {id: 'D', text: 'D. 8'},
    ],
    correctOption: 'A',
  },
  {
    questionNumber: 5,
    questionText:
      'Which country is the largest producer of coffee in the world ?',
    options: [
      {id: 'A', text: 'A. India'},
      {id: 'B', text: 'B. Vietnam'},
      {id: 'C', text: 'C. Brazil'},
      {id: 'D', text: 'D. Ethiopia'},
    ],
    correctOption: 'C',
  },
]

class MobileScreen extends Component {
  state = {
    list: questionList,
    ActiveQuestion: 1,
    score: 0,
    UserName: '',
    nameSubmitted: false,
  }

  onOptionSelection = option => {
    const {ActiveQuestion, list} = this.state
    const correctAnswer = list.find(
      each => each.questionNumber === ActiveQuestion,
    )
    this.setState(prevState => ({
      ActiveQuestion: prevState.ActiveQuestion + 1,
    }))

    if (correctAnswer.correctOption === option) {
      this.setState(prevState => ({score: prevState.score + 1}))
      alert('Congratulation!! your answer is correct')
    } else {
      alert('Sorry! Wrong answer')
    }
  }

  enterName = event => {
    this.setState({UserName: event.target.value})
  }

  onSubmitName = event => {
    event.preventDefault()
    const {UserName} = this.state
    if (UserName !== '') {
      this.setState({nameSubmitted: true})
    } else {
      alert('Please Enter your Name to start with the Game!!')
    }
  }

  render() {
    const {list, UserName, ActiveQuestion, score, nameSubmitted} = this.state
    const filteredQuestion = list.find(
      each => each.questionNumber === ActiveQuestion,
    )

    return (
      <div>
        {nameSubmitted ? (
          <div className="mobile-scr-container">
            <h1 style={{color: 'white', textAlign: 'center', fontSize: '25px'}}>
              Hello {UserName}, Welcome to Kaun Banega Crorepati
            </h1>
            <img
              src="https://res.cloudinary.com/dtzajnril/image/upload/v1728386867/KAUN_BANEGA_CROREPATI_SEASON_11-removebg-preview_ez05pq.png"
              alt="logo"
              className="logo"
            />
            <div className="mobile-scr-container-sub">
              {ActiveQuestion <= 5 ? (
                <div>
                  <QuestionArea
                    filteredQuestion={filteredQuestion}
                    onOptionSelection={this.onOptionSelection}
                  />
                </div>
              ) : (
                <div>
                  <h1 style={{color: 'white', fontSize: '25px'}}>
                    Your Total Score is {score}
                  </h1>
                </div>
              )}
            </div>
          </div>
        ) : (
          <form onSubmit={this.onSubmitName} className="form-container">
            <input
              style={{
                margin: '15px',
                width: '285px',
                fontSize: '15px',
                padding: '10px',
              }}
              placeholder="Enter Name"
              type="text"
              id="name"
              value={UserName}
              onChange={this.enterName}
            />
            <button
              className="submit-button"
              style={{margin: '15px'}}
              type="submit"
            >
              Enter
            </button>
          </form>
        )}
      </div>
    )
  }
}

export default MobileScreen
