import React, {Component} from 'react';
import { PropTypes } from "prop-types";
import {connect} from 'react-redux';
import {setFilter} from '../actions.js';

class Link extends Component{
    constructor(props){
      super(props)
    }
    render(){
      const content = (this.props.active)?<b className="filter selected">{this.props.children}</b>:<a href="#" className="filter not-selected" onClick={(ev) => {
            ev.preventDefault();
            this.props.onClick();
          }}>
            {this.props.children}
          </a>;
      return(
          <p>{content}</p>
        )
      }       
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    active: state.filter === ownProps.filter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);