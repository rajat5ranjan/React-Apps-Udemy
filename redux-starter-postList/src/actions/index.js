
import jsonPlc from '../api/jsonPLaceholder';
export const fetchPosts = () => async dispatch => {
    const res = await jsonPlc.get('/posts');
    dispatch({ type : 'FETCH_POST', payload : res.data})
}



export const fetchUser = (id) => async dispatch => {
    const res = await jsonPlc.get(`/users/${id}`);
    dispatch({ type : 'FETCH_USER', payload : res.data})
}


export const fetchPostsAndUsers=()=> async (dispatch,getState)=>{
    console.log('about to fetch post')
    await dispatch(fetchPosts());
    const unique_usrs=[...new Set(getState().posts.map(post=>post.userId))];
    unique_usrs.forEach(id=>{
        dispatch(fetchUser(id));
    });
    
}