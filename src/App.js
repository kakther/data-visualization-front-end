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


  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };





  addVacation = (vacation) => {
    vacation.preventDefault()
    axios.post('https://data-visualization-back-end.herokuapp.com/', vacation)
    .then((response) => {
      this.getVacation()
      this.setState({
        name: '',
        description: '',
        img: '',
        cost: '',
        notes: ''
      })
    })
  }


  getVacation = () => {
    axios
      .get('https://data-visualization-back-end.herokuapp.com/')
      .then(
        (response) =>this.setState({vacation: response.data.reverse()}),
        (err) => console.error(err)
      )
      .catch((err) => console.error(err));
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