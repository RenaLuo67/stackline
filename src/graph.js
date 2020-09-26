import React from 'react';
import LineGraph from './lineGraph.js';
import Table from './table.js';


class Graph extends React.Component {
  render() {
    return (
      <div id="graph">
        <div id="lineGraph">
          <LineGraph sales={this.props.sales}/>
        </div>
        <div id="table">
          <Table sales={this.props.sales}/>
        </div>
      </div>
    );
  } 
}

export default Graph;