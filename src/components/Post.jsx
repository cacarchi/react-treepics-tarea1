import React, { useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { likesParser, cooldownParser } from '../helpers/Parsers';
import * as LikeDatabase from '../helpers/LikeDatabase';
function Post ({id,createdAt,name,title,description,img,comments,like}) {
    const [likes, setLikes] = useState(0);
    useLayoutEffect(() => {
        const dbLikes = LikeDatabase.getLikes(id);
        setLikes(dbLikes);
    }, [id]);
    const handlerLike = () => {
        const current = likes + 1;
        setLikes(current);
        LikeDatabase.setLikes(id, current);
    }
    return (
        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
            <div className="card mb-3">
                <img className="card-img-top" src={img} alt="..." />
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center no-margin no-padding">
                        <p className="time">{cooldownParser(createdAt)}</p>
                        <a href="..." className="like btn btn-danger" onClick={handlerLike}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart-fill mr-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                            </svg>
                            { likesParser(likes) }
                        </a>
                    </div>
                    <h3>{name}</h3>
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="comments">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-right" viewBox="0 0 16 16">
                            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                        </svg> Comments ({comments})
                    </div>
                </div>
            </div>
        </div>
    );
}
Post.propTypes = {
    id: PropTypes.number,
    createdAt: PropTypes.instanceOf(Date).isRequired,
    likes: PropTypes.number,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
}
export default Post;