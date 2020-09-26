import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store/store.js';
import {initListAction} from './store/actionCreators.js';
import Title from './title.js';
import Summary from './summary.js';
import Graph from './graph.js';



class Stackline extends React.Component {
  constructor() {
      super();
      this.state = store.getState();
  }

  componentDidMount() {
      fetch('./Webdev_data2.json', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      })
      .then(res => res.json())
      .then(data => {
        const action = initListAction(data[0]);
        store.dispatch(action);
        //console.log(store.getState());
        this.setState(store.getState());
      });
  }


  render() {
    return (
      <div id="all">
        <Title />
        <Summary image={this.state.image} title={this.state.title} subtitle={this.state.subtitle} tags={this.state.tags}/>
        <Graph sales={this.state.sales}/>
      </div>
    );
  }
}



 
ReactDOM.render(
  <Stackline/>,
  document.getElementById('root')
);



