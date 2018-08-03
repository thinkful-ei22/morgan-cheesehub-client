import React from 'react';
import {connect} from 'react-redux';
import {fetchCheeses} from '../actions/cheese-actions';

class CheeseList extends React.Component{
  componentDidMount(){
    this.props.dispatch(fetchCheeses())
  }


  render(){
    console.log('IN COMPONENT',this.props.error);
    const cheeseItems = this.props.cheeses.map((cheeseName, index) => {
      return <li className='cheese-type' key={index}> {cheeseName} </li>
    })

    if(this.props.loading){
      return <div>Loading... </div>
    }

    if(this.props.error){
      return <div>{this.props.error}</div>
    }

    return (
      <ul className='cheese-list'>
        {cheeseItems}
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  cheeses: state.cheeses,
  loading: state.loading,
  error: state.error
})

export default connect(mapStateToProps)(CheeseList);