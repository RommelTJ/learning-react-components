import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>Are you sure you want to do this?</ApprovalCard>

            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Sam"
                    timeAgo="Today at 4:45PM"
                    commentText="Nice blog post!"
                    avatarURL={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Alice"
                    timeAgo="Today at 2:00AM"
                    commentText="Yeah!"
                    avatarURL={faker.image.avatar()}
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetail
                    author="Bob"
                    timeAgo="Yesterday at 3:01PM"
                    commentText="Woot woot!"
                    avatarURL={faker.image.avatar()}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector('#root'));
