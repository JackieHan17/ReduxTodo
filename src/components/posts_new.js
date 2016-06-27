import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from "react-router"
import { createPost } from '../actions/index';

class PostsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
      .then(() => {
        // blog post has been created, navigate the user to the index
        // We navigate by calling this.context.router.push with the
        // new path to navigate to.
        this.context.router.push('/');
      });
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>要皓光幹啥咧</h3>
        <div className="form-group">
          <label>我是誰</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className="form-group">
            <label>選一個喔</label><br/>
             <select {...categories}>
               <option value="1">聊天</option>
               <option value="2">吃飯</option>
               <option value="3">打遊戲</option>
               <option value="4">彈吉他</option>
               <option value="5">打球球</option>
               <option value="6">喝喝</option>
             </select>
             <br/>
                  <div className="col-lg-2">
                  <img src={"../img/1.png"} className="img-responsive"/>
                  <p>聊天</p>
                  </div>

                  <div className="col-lg-2">
                  <img src={"../img/2.png"} className="img-responsive"/>
                  <p>吃飯</p>
                  </div>

                  <div className="col-lg-2">
                  <img src={"../img/3.png"} className="img-responsive"/>
                  <p>打遊戲</p>
                  </div>

                  <div className="col-lg-2">
                  <img src={"../img/4.png"} className="img-responsive"/>
                  <p>彈吉他</p>
                  </div>

                  <div className="col-lg-2">
                  <img src={"../img/5.png"} className="img-responsive"/>
                  <p>打球球</p>
                  </div>

                  <div className="col-lg-2">
                  <img src={"../img/6.png"} className="img-responsive"/>
                  <p>喝喝</p>
                  </div>





        </div>
        <div className="form-group">
          <label>說點啥</label>
          <textarea className="form-control" {...content}/>
            <div className="text-help">
              {content.touched ? content.error : ''}
            </div>
        </div>
        <button type="submit" className="btn btn-primary mr">真的等不及拉</button>
        <Link to="/" className="btn btn-danger">嗚嗚下次再約ㄅ</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = '跟我說你是誰喔';
  }
  if (!values.categories) {
    errors.categories = '選一個喇';
  }
  if(!values.content) {
    errors.content = '說點啥吧';
  }

  return errors;
}

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title', 'categories', 'content'],
  validate
}, null, { createPost })(PostsNew);
