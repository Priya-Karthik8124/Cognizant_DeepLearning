// src/App.js
import React, { Component } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'book'
    };
  }

  renderComponentIfElse() {
    if (this.state.selected === 'book') {
      return <BookDetails />;
    } else if (this.state.selected === 'blog') {
      return <BlogDetails />;
    } else {
      return <CourseDetails />;
    }
  }

  renderComponentTernary() {
    return (
      <div>
        {
          this.state.selected === 'book' ? <BookDetails /> :
            this.state.selected === 'blog' ? <BlogDetails /> :
              <CourseDetails />
        }
      </div>
    );
  }

  renderComponentShortCircuit() {
    return (
      <div>
        {this.state.selected === 'book' && <BookDetails />}
        {this.state.selected === 'blog' && <BlogDetails />}
        {this.state.selected === 'course' && <CourseDetails />}
      </div>
    );
  }

  render() {
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial' }}>
        <h1>Blogger App</h1>
        <select onChange={(e) => this.setState({ selected: e.target.value })}>
          <option value="book">Book</option>
          <option value="blog">Blog</option>
          <option value="course">Course</option>
        </select>

        <hr />

        <h3>Rendering using if-else</h3>
        {this.renderComponentIfElse()}

        <hr />

        <h3>Rendering using ternary operator</h3>
        {this.renderComponentTernary()}

        <hr />

        <h3>Rendering using short-circuit && operator</h3>
        {this.renderComponentShortCircuit()}
      </div>
    );
  }
}

export default App;
