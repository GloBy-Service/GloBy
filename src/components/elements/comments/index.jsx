import React, { useState, useEffect } from 'react';
import '../../../common/style/root.css';

const Comments = () => {
    const [commentsData, setCommentsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await fetch('https://globy.space/apix/comments');
                if (!response.ok) {
                    throw new Error('Failed to fetch comments');
                }
                const data = await response.json();
                setCommentsData(data.filter(comment => comment.is_active));
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchComments();
    }, []);

    if (loading) return <div>Loading comments...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="Comments-Group">
            <div className="Directions-Group">
                <p>Comments</p>
            </div>
            <div className="Comments-Marquee">
                <div className="Comments-Track">
                    {[...commentsData, ...commentsData].map((item, index) => (
                        <div key={index} className="Comment-Card">
                            <h4>{item.name}</h4>
                            <p className="Country">{item.country}</p>
                            <p className="Text">"{item.comment}"</p>
                            <p className="Date">{item.comment_date || 'Recently'}</p>
                            <div className="Stars">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Comments;