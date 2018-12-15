import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetail
                author="Sam"
                timeAgo="Today at 4:45PM"
                commentText="Nice blog post!"
                avatarURL={faker.image.avatar()}
            />

            <CommentDetail
                author="Alice"
                timeAgo="Today at 2:00AM"
                commentText="Yeah!"
                avatarURL={faker.image.avatar()}
            />

            <CommentDetail
                author="Bob"
                timeAgo="Yesterday at 3:01PM"
                commentText="Woot woot!"
                avatarURL={faker.image.avatar()}
            />
            <ApprovalCard />
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
