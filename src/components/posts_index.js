import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';

class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <div>
            <Link to={"posts/" + post.id}>
              <img className="img-sm pull-xs-right" src={`../img/${post.categories}.png`}/>
              <strong>{post.title}</strong>
            </Link>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="text-xs-center">
          <Link to="/posts/new" className="btn btn-primary btn-lg">
            等不及拉
          </Link>
        </div>
        <h1>要皓光幹啥</h1><br/>
        <h4>有誰要揪皓光</h4>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
