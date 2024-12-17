const NewsCard = ({ title, description }) => {
  return (
    <div className="card w-full bg-base-100 shadow-lg hover:shadow-xl transition-all">
      <figure>
        <img
        //dummy photo
          src="https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D"
          alt="News"
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default NewsCard;
