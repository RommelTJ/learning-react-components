import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" commentText="Nice blog post!" />
            <CommentDetail author="Alice" timeAgo="Today at 2:00AM" commentText="Yeah!" />
            <CommentDetail author="Bob" timeAgo="Yesterday at 3:01PM" commentText="Woot woot!" />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
