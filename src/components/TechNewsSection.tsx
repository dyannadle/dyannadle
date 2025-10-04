import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";
import RevealAnimation from "./ui/RevealAnimation";

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
  };
  urlToImage?: string;
}

const TechNewsSection: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Fetch latest QA and software testing news
        const queries = [
          "software testing",
          "QA automation",
          "quality assurance",
          "selenium testing",
          "API testing"
        ];
        
        const randomQuery = queries[Math.floor(Math.random() * queries.length)];
        
        // Using News API with tech focus
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${randomQuery}&sortBy=publishedAt&pageSize=6&language=en&apiKey=87f062bf12894323afb623aa9f3dd8f1`
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch news");
        }
        
        const data = await response.json();
        setNews(data.articles || []);
        setLoading(false);
      } catch (err) {
        setError("Unable to load latest tech news");
        setLoading(false);
      }
    };

    fetchNews();
    
    // Refresh news every 10 minutes to always show fresh content
    const interval = setInterval(fetchNews, 600000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tech-news" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-7xl">
        <RevealAnimation animation="fade-in-up">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Latest Tech News
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest in QA, Software Testing & Technology
            </p>
          </div>
        </RevealAnimation>

        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading latest news...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-12">
            <p className="text-red-600">{error}</p>
          </div>
        )}

        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <RevealAnimation 
                key={index} 
                animation="fade-in-up"
                className="h-full"
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  {article.urlToImage && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={article.urlToImage}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {article.source.name}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(article.publishedAt).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-1">
                      {article.description}
                    </p>
                    <a
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm group"
                    >
                      Read More
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </Card>
              </RevealAnimation>
            ))}
          </div>
        )}

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            🔄 News updates automatically every 10 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechNewsSection;
