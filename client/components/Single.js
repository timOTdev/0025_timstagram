import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from '../actions/actionCreators'

import Photo from './Photo';
import Comments from './Comments';

const Single = (state) => {
  const i = state.posts.findIndex((post) => post.code === state.match.params.postId)
  const post = state.posts[i];
  console.log(i, post);
  console.log(state);
  return (
    <div className="single-photo">
      <Photo i={i} post={post} {...state} />
      <Comments />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Single);