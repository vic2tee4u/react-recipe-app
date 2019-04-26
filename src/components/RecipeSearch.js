import React, { Component } from 'react'

export default class RecipeSearch extends Component {
  render() {
      const {value, handleSubmission, handleChange} = this.props
    return (
      <React.Fragment>
          <div className="container">
          <div className="row">
          <div className="col-10 mx-auto col-md-8 mt5 text-center">
          <h1 className="text-bold text-capitalize">search for recipe with <strong className='text-danger'>Food2Fork</strong></h1>
          <form className='mt-4' onSubmit={handleSubmission}> 
          <label htmlFor="search" className='text-capitalize'>
          type recipe seperated by comma
          </label>
          <div className="input-group">
          <input type="text" 
          name='search'
           placeholder='chicken,onions,carrots'
           className='form-control'
           value = {value}
           onChange = {handleChange}
           />
          <div className="input-group-append">
          <button type='submit' className='input-group-text bg-primary text-white'>
          <i className="fas fa-search"></i>
          </button>
          </div>
          </div>
          </form>
          </div>
          </div>
          </div>
      </React.Fragment>
    )
  }
}
