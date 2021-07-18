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





  addVacation = (e) => {
   
    axios.post('https://data-visualization-back-end.herokuapp.com/')
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


deleteVacation = (e) => {
  axios
    .delete('https://data-visualization-back-end.herokuapp' + e.target.value)
    .then((response) => {
      this.getVacation();
    });
};



updateVacation = (e) => {
  e.preventDefault();
  const id = e.target.id;
  axios
    .put('https://data-visualization-back-end.herokuapp' + id, this.state)
    .then((response) => {
      this.getVacation();
      this.setState({
        name: '',
        description: '',
        img: '',
        cost: '',
        notes: ''
      });
    })
    .catch((error) => console.error(error));
}


componentDidMount = () => {
  this.getVacation();
};




  render = () => {
    return (
      <div>
      <Nav />
        <AddForm addVacation={this.addVacation} />
        {this.state.vacation.map((vacation) => {
          
          return (
            <> 
              vacation={vacation}
              updateVacation={this.updateVacation}
            
            </>
          )
        })}
      
        <Footer />
      </div>
    )
  }
}

export default App