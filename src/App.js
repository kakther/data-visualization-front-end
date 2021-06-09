import React from 'react'
import Nav from './components/Nav'
import AddForm from './components/AddForm'
import Footer from './components/Footer'
import axios from 'axios'

class App extends React.Component {
  state = {
    name: '',
    description: '',
    img: '',
    cost: '',
    notes: '',
    vacation: []
  }

  getVacation = () => {
    axios
      .get('http://localhost:8000')
  }


  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };







  render = () => {
    return (
      <div>
        <Nav />
        <AddForm />
        <Footer />
      </div>
    )
  }
}

export default App