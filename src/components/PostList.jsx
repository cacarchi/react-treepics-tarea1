import React, { useState, useEffect } from 'react';
import Post from "./Post";
import PropTypes from 'prop-types';
function PostList ({posts}) {
    const [ loading, setLoading ] = useState(true);
    useEffect(() => {
        if (loading) {
        const timer = () => setTimeout(() => setLoading(false), 3000);
        const timerId = timer();
        return () => {
            clearTimeout(timerId);
        };
        }
    }, [loading, posts]);

    useEffect(() => {
        setLoading(true);
    }, [posts])

    return (
        <div className="cards row">
            
            {loading ? <h3>Loading...</h3> : (
                posts.map(post => (
                    <Post 
                    key={post.id}
                    id={post.id}
                    createdAt={new Date(post.time)}
                    name={post.user}
                    title="Card TreePic 1"
                    description={post.text}
                    img="https://source.unsplash.com/random/800x800"
                    like={post.likes}
                    comments={post.comments} />
                ))
                
            )}
        </div>
    );
}
PostList.propTypes = {
    posts: PropTypes.array.isRequired,
}
export default PostList;