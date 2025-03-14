import React, { useEffect, useState } from 'react';
import NewsCard from './newsCard';

function NewsBoard({category}) {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=7eb251d76d59482285312a76f8625be7`;   
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("API Response:", data); // ✅ Check console
                if (data.articles) {
                    setArticles(data.articles);
                } else {
                    console.error("No articles found:", data);
                }
            })
            .catch(error => console.error("Error fetching news:", error));
    }, [category]);
    
    return (
        <div className="relative text-center py-4">
            <h2 className="text-[1.5]xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 inline-block px-6 py-2 rounded-lg shadow-lg">
                Latest News
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                {articles.map((article, index) => ( 
                    <NewsCard 
                        key={index} 
                        title={article.title} 
                        description={article.description} 
                        src={article.urlToImage} 
                        url={article.url} 
                    />
                ))}
            </div>
        </div>
    );
}

export default NewsBoard;
