import React, { useEffect, useState } from "react";
import axios from "axios";
import "./LiveBlogs.css";

const LiveBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=6");
        setBlogs(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();

    // Auto-refresh every 60 seconds
    const interval = setInterval(fetchBlogs, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="blog-section">
      <h2 className="blog-list-title">Latest Blog Posts</h2>
      {loading ? <p>Loading blogs...</p> : (
        <div className="blog-list">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <h3>{blog.title}</h3>
              <p>{blog.body.substring(0, 100)}...</p>
              <button className="read-more">Read More</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default LiveBlogs;
