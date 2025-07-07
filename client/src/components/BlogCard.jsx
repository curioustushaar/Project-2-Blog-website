import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-xl overflow-hidden shadow-md bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
    >
      <div className="w-full aspect-[16/9] overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="p-4">
        <span className="inline-block px-3 py-1 mb-2 bg-primary/20 text-primary text-xs rounded-full">
          {category}
        </span>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
        <p
          className="text-sm text-gray-600 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 100) }}
        ></p>
      </div>
    </div>
  );
};

export default BlogCard;
