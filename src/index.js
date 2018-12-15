import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail author="Sam" timeAgo="Today at 4:45PM" />
            <CommentDetail author="Alice" timeAgo="Today at 2:00AM" />
            <CommentDetail author="Bob" timeAgo="Yesterday at 3:01PM" />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
