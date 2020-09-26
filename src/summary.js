import React from 'react';


function GetTags(props) {
  const tags = props.tags;
  const tagList = tags.map((tag, index) => (
    <span key={index}>
      {index === 3 ? <br/> : ''}
      <span className="tag">{tag}</span> 
    </span>
  ));
  return (
      <div id="tags">{tagList}</div>
  );
}

class Summary extends React.Component {
  render() {
    return (
      <div id="summary">
        <div id="imageDiv">
          <img src={this.props.image} alt="" id="image"/>
          <p id="title">{this.props.title}</p>
          <p id="subtitle">{this.props.subtitle}</p>
        </div>
        <GetTags tags={this.props.tags}/>
        <div id="overview">
          <img src="./overview_icon.png" alt="" id="overview_icon"/>
        </div>
        <div id="sales">
          <img src="./sales_icon.png" alt="" id="sales_icon"/>
        </div>
      </div>
    );
  }
}

export default Summary;