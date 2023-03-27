import { Component } from 'react';

export default class AddSetlistForm extends Component {
  state = {
    artist: '',
    venue: '',
    tour: '',
    eventDate: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const {artist, venue, tour, eventDate} = this.state;
      const formData = {artist, venue, tour, eventDate};
     
      const user = await addSetlist(formData);
      this.props.setUser(user);
    } catch {
  
      this.setState({ error: 'Adding Setlist Failed - Try Again' });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <div>
        <div className="form-container">
          <form autoComplete="off" onSubmit={this.handleSubmit}>
            <label>Artist</label>
            <input type="text" name="artist" value={this.state.name} onChange={this.handleChange} required />
            <label>Venue</label>
            <input type="text" name="venue" value={this.state.name} onChange={this.handleChange} required />
            <label>Tour</label>
            <input type="text" name="tour" value={this.state.name} onChange={this.handleChange} required />
            <label>Event Date</label>
            <input type="date" name="eventDate" value={this.state.name} onChange={this.handleChange} required />
            <button type="submit" disabled={disable}>Add Setlist</button>
          </form>
        </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}