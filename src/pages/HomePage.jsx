import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

const HomePage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setNews([
        { id: 1, title: "News 1", description: "Brief description of News 1" },
        { id: 2, title: "News 2", description: "Brief description of News 2" },
        { id: 3, title: "News 3", description: "Brief description of News 3" },
        { id: 4, title: "News 4", description: "Brief description of News 4" },
        { id: 5, title: "News 5", description: "Brief description of News 5" },
        { id: 6, title: "News 6", description: "Brief description of News 6" },
        { id: 7, title: "News 7", description: "Brief description of News 7" },
        { id: 8, title: "News 8", description: "Brief description of News 8" },
      ]);
    }, 2000);
  }, []);

  const SkeletonCard = () => (
    <div className="card w-full bg-white shadow-lg">
      <div className="h-48 w-full bg-gray-300 animate-pulse"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded animate-pulse mb-2"></div>
        <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
      </div>
    </div>
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Latest News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.length > 0
          ? news.map((item) => (
              <NewsCard
                key={item.id}
                title={item.title}
                description={item.description}
              />
            ))
          : Array.from({ length: 8 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))}
      </div>
    </div>
  );
};

export default HomePage;
