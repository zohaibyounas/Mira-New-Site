import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TechBlogs.css";

const TechBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=3");
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
    <section className="tech-blogs">
      <h2 className="section-title">Recent Blog Posts</h2>

      {loading ? <p>Loading blogs...</p> : (
        <div className="blog-grid">
          <div className="main-blog">
            <img src="https://source.unsplash.com/600x300/?technology,office" alt="Blog" className="blog-img"/>
            <div className="blog-content">
              <p className="blog-meta">Olivia Rhys • 10 Jan 2022</p>
              <h3 className="blog-title">UX Review Presentations</h3>
              <p className="blog-description">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
              <div className="blog-tags">
                <span className="tag blue">Design</span>
                <span className="tag pink">Research</span>
                <span className="tag purple">Presentation</span>
              </div>
            </div>
          </div>

          <div className="side-blogs">
            {blogs.map((blog) => (
              <div key={blog.id} className="side-blog">
                <img src="https://source.unsplash.com/300x150/?computer,work" alt="Blog" className="side-blog-img"/>
                <div className="side-blog-content">
                  <p className="blog-meta">Phoenix Baker • 19 Jan 2022</p>
                  <h4 className="side-blog-title">{blog.title.substring(0, 30)}...</h4>
                  <p className="side-blog-description">{blog.body.substring(0, 60)}...</p>
                  <div className="blog-tags">
                    <span className="tag pink">Design</span>
                    <span className="tag green">Research</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default TechBlogs;
