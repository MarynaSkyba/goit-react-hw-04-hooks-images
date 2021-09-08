
import { Component } from "react";


export default class SearchBar extends Component  {
    state = {
        searchImage: '',
        loading: false,
      }

      handleNameChange = e => {
        this.setState({searchImage : e.currentTarget.value.toLowerCase()})
      }
    
      handleSubmit = e => {
        e.preventDefault();
        if(this.state.searchImage.trim() ==='') {
            return alert('нет имя')
        }
        this.props.onSubmit(this.state.searchImage)
        this.setState({searchImage: ''})
      }

    render() {
    return (
    <header className="Searchbar">
  <form className="SearchForm"  onSubmit = {this.handleSubmit}>
    <button type="submit" className="SearchForm-button">
      <span className="SearchForm-button-label">Search</span>
    </button>

    <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
      onChange = {this.handleNameChange}
      placeholder="Search images and photos"
    />
  </form>

</header>
    )
}}

