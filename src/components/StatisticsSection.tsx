import React, { useState, useEffect } from 'react';
import RevealAnimation from './ui/RevealAnimation';
import { Github, Cloud, Globe, Newspaper, TrendingUp, Star, GitFork } from 'lucide-react';

interface WeatherData {
  temp: number;
  description: string;
  city: string;
  country: string;
}

interface CountryData {
  name: string;
  capital: string;
  population: number;
  flag: string;
}

interface NewsArticle {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
}

interface GitHubStats {
  repos: number;
  followers: number;
  following: number;
}

const StatisticsSection: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [country, setCountry] = useState<CountryData | null>(null);
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [githubStats, setGithubStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Weather Data (OpenWeatherMap)
        const weatherRes = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=YOUR_OPENWEATHER_API_KEY&units=metric`
        );
        if (weatherRes.ok) {
          const weatherData = await weatherRes.json();
          setWeather({
            temp: Math.round(weatherData.main.temp),
            description: weatherData.weather[0].description,
            city: weatherData.name,
            country: weatherData.sys.country,
          });
        }

        // Fetch Country Data (RESTCountries)
        const countryRes = await fetch('https://restcountries.com/v3.1/alpha/in');
        if (countryRes.ok) {
          const countryData = await countryRes.json();
          setCountry({
            name: countryData[0].name.common,
            capital: countryData[0].capital[0],
            population: countryData[0].population,
            flag: countryData[0].flags.svg,
          });
        }

        // Fetch Tech News (News API)
        const newsRes = await fetch(
          `https://newsapi.org/v2/everything?q=technology&sortBy=publishedAt&pageSize=3&apiKey=YOUR_NEWS_API_KEY`
        );
        if (newsRes.ok) {
          const newsData = await newsRes.json();
          setNews(newsData.articles.slice(0, 3));
        }

        // Fetch GitHub Stats
        const githubRes = await fetch('https://api.github.com/users/dyannadle');
        if (githubRes.ok) {
          const githubData = await githubRes.json();
          setGithubStats({
            repos: githubData.public_repos,
            followers: githubData.followers,
            following: githubData.following,
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <section
      id="statistics"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-100 overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute top-10 right-1/4 w-32 h-32 bg-purple-300/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-blue-300/20 rounded-full blur-2xl animate-float animation-delay-300"></div>

      <div className="section-container relative z-10">
        <RevealAnimation animation="zoom-in">
          <h2 className="section-title text-center bg-gradient-to-r from-indigo-700 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Live Statistics & Insights
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full animate-pulse"></div>
          <p className="section-subtitle text-center mx-auto text-gray-700">
            Real-time data from various APIs showcasing weather, country info, tech news, and GitHub stats
          </p>
        </RevealAnimation>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Weather Card */}
            {weather && (
              <RevealAnimation animation="fade-in-up" delay={100}>
                <div className="glass bg-gradient-to-br from-white/95 to-blue-50/80 p-6 rounded-2xl shadow-lg border border-blue-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <Cloud className="w-10 h-10 text-blue-600" />
                    <span className="text-3xl font-bold text-blue-600">{weather.temp}°C</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 capitalize">{weather.description}</h3>
                  <p className="text-gray-600 mt-2">
                    {weather.city}, {weather.country}
                  </p>
                </div>
              </RevealAnimation>
            )}

            {/* Country Card */}
            {country && (
              <RevealAnimation animation="fade-in-up" delay={200}>
                <div className="glass bg-gradient-to-br from-white/95 to-green-50/80 p-6 rounded-2xl shadow-lg border border-green-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <Globe className="w-10 h-10 text-green-600" />
                    <img src={country.flag} alt={country.name} className="w-12 h-8 object-cover rounded" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{country.name}</h3>
                  <p className="text-gray-600 mt-2">Capital: {country.capital}</p>
                  <p className="text-gray-600">Population: {(country.population / 1000000).toFixed(1)}M</p>
                </div>
              </RevealAnimation>
            )}

            {/* GitHub Stats Card */}
            {githubStats && (
              <RevealAnimation animation="fade-in-up" delay={300}>
                <div className="glass bg-gradient-to-br from-white/95 to-gray-50/80 p-6 rounded-2xl shadow-lg border border-gray-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <Github className="w-10 h-10 text-gray-800" />
                    <TrendingUp className="w-6 h-6 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">GitHub Stats</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 flex items-center gap-2">
                        <Star className="w-4 h-4" /> Repos
                      </span>
                      <span className="font-bold text-gray-800">{githubStats.repos}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600 flex items-center gap-2">
                        <GitFork className="w-4 h-4" /> Followers
                      </span>
                      <span className="font-bold text-gray-800">{githubStats.followers}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-600">Following</span>
                      <span className="font-bold text-gray-800">{githubStats.following}</span>
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            )}

            {/* News Card Placeholder */}
            <RevealAnimation animation="fade-in-up" delay={400}>
              <div className="glass bg-gradient-to-br from-white/95 to-orange-50/80 p-6 rounded-2xl shadow-lg border border-orange-100/50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center justify-between mb-4">
                  <Newspaper className="w-10 h-10 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Latest Tech News</h3>
                <p className="text-gray-600 text-sm">
                  {news.length > 0 ? `${news.length} articles available` : 'Stay updated with tech trends'}
                </p>
              </div>
            </RevealAnimation>
          </div>
        )}

        {/* Tech News Section */}
        {news.length > 0 && (
          <div className="mt-12 max-w-6xl mx-auto">
            <RevealAnimation animation="fade-in-up" delay={500}>
              <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                Latest Tech News
              </h3>
            </RevealAnimation>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {news.map((article, idx) => (
                <RevealAnimation key={idx} animation="fade-in-up" delay={600 + idx * 100}>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass bg-white/90 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-orange-100/50"
                  >
                    <h4 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">{article.title}</h4>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.description}</p>
                    <p className="text-xs text-gray-500">
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </p>
                  </a>
                </RevealAnimation>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default StatisticsSection;
