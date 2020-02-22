import React from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component{

    componentDidMount () {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post=>{
            return (
                
                <div className='item' key={post.id}>
                    <i className='large middle aligned icon user'/>
                    <div className='description'>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId}/>
                </div>
            );
        });
    }
    
    render(){
        return (
            <div className='ui relaxed divided list'>
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps=prevState=>{
    return {posts : prevState.posts};
}

export default connect(mapStateToProps,{fetchPostsAndUsers})(PostList);