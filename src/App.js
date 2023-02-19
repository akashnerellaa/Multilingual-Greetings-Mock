import {Component} from 'react'

import LanguageItem from './components/LanguageItem'

import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {img: languageGreetingsList[0], buttonId: languageGreetingsList[0].id}

  updateMethod = id => {
    this.setState({buttonId: id})
    const res = languageGreetingsList.filter(e => e.id === id)
    this.setState({img: res[0]})
  }

  render() {
    const {img, buttonId} = this.state

    return (
      <div className="bg-container">
        <h1>Multilingual Greetings</h1>
        <ul className="list">
          {languageGreetingsList.map(e => (
            <LanguageItem
              item={e}
              key={e.id}
              buttId={buttonId}
              updateMethod={this.updateMethod}
            />
          ))}
        </ul>
        <img src={img.imageUrl} alt={img.imageAltText} className="img" />
      </div>
    )
  }
}

export default App
