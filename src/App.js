import React from 'react'
import Nav from './components/Nav'
import AddForm from './components/AddForm'
import Footer from './components/Footer'

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

  handleChange = (event) => {
    event.preventDefault();
    
  }





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