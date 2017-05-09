import React, { Component } from 'react';

class ProjectItem extends Component {

  render() {
    let { title, category } = this.props.project;
    console.log(this.props)
    return (
      <li className="project">
        <strong> {title} </strong> - {category}     
      </li>
    );
  }
}

export default ProjectItem;