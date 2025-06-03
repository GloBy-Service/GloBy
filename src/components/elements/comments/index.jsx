import React from 'react';
import '../../../common/style/root.css';

const commentsData = [
    {
        name: 'Murad Əliyev',
        country: 'Canada',
        date: '13 May 2025',
        rating: 5,
        comment: "They helped me understand exactly what Canadian immigration looks for. My bank statement was approved with no questions.",
        image: 'https://randomuser.me/api/portraits/men/10.jpg'
    },
    {
        name: 'Nigar Həsənova',
        country: 'United States',
        date: '23 April 2025',
        rating: 5,
        comment: "Fast, reliable, and detailed. I got my U.S. student visa without any financial document issues.",
        image: 'https://randomuser.me/api/portraits/women/11.jpg'
    },
    {
        name: 'Aysel Quliyeva',
        country: 'Schengen',
        date: '11 April 2025',
        rating: 5,
        comment: "Great experience. Their review saved me from a potential Schengen rejection due to unclear transactions.",
        image: 'https://randomuser.me/api/portraits/women/12.jpg'
    },
    {
        name: 'Rauf İbrahimov',
        country: 'Canada',
        date: '22 March 2025',
        rating: 5,
        comment: "I wasn’t sure if my Canadian visa was enough. They checked and gave clear suggestions.",
        image: 'https://randomuser.me/api/portraits/men/13.jpg'
    },
    {
        name: 'Elvin Məmmədov',
        country: 'United Kingdom',
        date: '5 March 2025',
        rating: 5,
        comment: "Their team gave feedback that helped me get my UK student visa quickly.",
        image: 'https://randomuser.me/api/portraits/men/14.jpg'
    },
    {
        name: 'Leyla Hüseynli',
        country: 'Australia',
        date: '19 February 2025',
        rating: 5,
        comment: "Super supportive and fast. They helped with the perfect document formatting for my visa.",
        image: 'https://randomuser.me/api/portraits/women/15.jpg'
    }
];

const Comments = () => {
    return (
        <div className="Comments-Group">
              <div className="Directions-Group">
                <p>Comments</p>
            </div>
            <div className="Comments-Marquee">
                <div className="Comments-Track">
                    {[...commentsData, ...commentsData].map((item, index) => (
                        <div key={index} className="Comment-Card">
                            <img src={item.image} alt={item.name} className="User-Image" />
                            <div className="Stars">{'★'.repeat(item.rating)}</div>
                            <h4>{item.name}</h4>
                            <p className="Country">{item.country}</p>
                            <p className="Text">“{item.comment}”</p>
                            <p className="Date">{item.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Comments;



