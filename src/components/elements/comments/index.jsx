import React, { useEffect, useState } from 'react';
import '../../../common/style/root.css';

const Comments = () => {
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    fetch('https://globy.space/apix/comments')
      .then((res) => res.json())
      .then((data) => {
        const activeComments = data.filter(comment => comment.is_active);
        const formatted = activeComments.map((item) => ({
          name: item.name,
          country: item.country,
          date: new Date().toLocaleDateString('en-GB'),
          rating: item.rating,
          comment: item.comment
        }));
        setCommentsData(formatted);
      })
      .catch(console.error);
  }, []);

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
              <p className="Text">“{item.comment}”</p>
              <p className="Date">{item.date}</p>
              <div className="Stars">{'★'.repeat(item.rating)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
