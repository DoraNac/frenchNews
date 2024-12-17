import { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";

const HomePage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
  // dummydata
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

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Latest News</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.length > 0 ? (
          news.map((item) => (
            <NewsCard
              key={item.id}
              title={item.title}
              description={item.description}
            />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
