import React from "react";
import "./Blogs.css";
import { useTranslation } from "react-i18next";

const blogs = [
  {
    date: "November 16, 2014",
    title: "Three Pillars of User Delight",
    description:
      "Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ...",
    categories: ["Research", "UI UX"],
    image: "/images/blog-1.jpg",
  },
  {
    date: "September 24, 2017",
    title: "UX Mapping Methods",
    description:
      "Visual-design principles can be applied consistently throughout the process of creating a polished UX map...",
    categories: ["Research", "UI Design"],
    image: "/images/blog-2.jpg",
  },
  {
    date: "March 13, 2014",
    title: "Agile Development Projects and Usability",
    description:
      "Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality.",
    categories: ["Programming", "Research", "Developments"],
    image: "/images/blog-3.jpg",
  },
];

const Blogs = () => {
  const { t } = useTranslation();
  return (
    <section className="blogs">
      <h2 className="blogs-heading">Our recent blogs</h2>
      <div className="blogs-container">
        {blogs.map((blog, index) => (
          <div key={index} className={`blog-card ${index % 2 === 0 ? "left" : "right"}`}>
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-date">{blog.date}</p>
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-tags">
                {blog.categories.map((category, i) => (
                  <span key={i} className={`blog-tag ${category.toLowerCase().replace(/\s+/g, "-")}`}>
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="view-more">View More Blogs</button>
    </section>
  );
};

export default Blogs;
