import React, { useState, useEffect } from 'react';
import NavBar from './navbar/NabBar';
import Head from '../common/header/Head';
import Footer from '../common/footer/Footer';
import './userhomepage.css'


const UserHomePage = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    // Fetch the latest news articles about Germany
    fetch(
      `https://newsapi.org/v2/top-headlines?country=de&apiKey=bda0a3c8ed5d458fa7d4803f4235350d`, // Replace 'YOUR_API_KEY' with your NewsAPI key
      {
        method: 'GET',
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setNewsArticles(data.articles.slice(0, 5));
      })
      .catch((error) => {
        console.error('Error fetching news data:', error);
      });
  }, []);

  return (
    <>
      <Head />
      <NavBar />
      <div className='user-home-page-content'>
        <div className='user-home-page-content-box'>
          <h2 className="user-home-page-content-header">Know More About Germany...</h2> {/* Apply the user-home-page-content-header class */}
            <div className='news-list'>
              <ul>
                {newsArticles.map((article) => (
                  <li key={article.title}>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      {article.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
        </div>
      </div>


      <Footer />
    </>
  );
};

export default UserHomePage;