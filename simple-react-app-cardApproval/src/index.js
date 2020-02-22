import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from "./CommentDetail";
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="Sam" timeAgo="4:45PM" content="Yohoooo!!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Alex" timeAgo="9:05PM" content="lucky you!!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author="Jane" timeAgo="3:30PM" content="Best of all!!" avatar={faker.image.avatar()}/>
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
