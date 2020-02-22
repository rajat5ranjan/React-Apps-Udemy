import React from 'react';

import {connect} from 'react-redux';

class UserHeader extends React.Component{
    render(){
        const{user} =this.props;
        if (!user){
            return null;
        }
        return (
        <div className='header'>{user.name}</div>
        );
    }

}

const mapStateToProps=(prevState,ownProps)=>{

    return {user : prevState.user.find((u)=>u.id===ownProps.userId)};
}


export default connect(mapStateToProps)(UserHeader);
