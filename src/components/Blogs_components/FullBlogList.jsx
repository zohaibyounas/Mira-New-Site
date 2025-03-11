import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FullBlogList.css";

const FullBlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6; // Display 6 blogs per page

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=18");
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

  // Pagination Logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const nextPage = () => {
    if (currentPage < Math.ceil(blogs.length / blogsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section className="blog-list-section">
      <h2 className="section-title">All Blog Posts</h2>

      {loading ? <p>Loading blogs...</p> : (
        <div className="blog-grid">
          {currentBlogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={`https://source.unsplash.com/300x200/?technology,office&sig=${blog.id}`} alt="Blog" className="blog-img"/>
              <div className="blog-content">
                <p className="blog-meta">Alex Wilham • 17 Jan 2022</p>
                <h3 className="blog-title">{blog.title.substring(0, 40)}...</h3>
                <p className="blog-description">{blog.body.substring(0, 80)}...</p>
                <div className="blog-tags">
                  <span className="tag blue">Design</span>
                  <span className="tag purple">Research</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>&lt; Previous</button>
        <span>Page {currentPage} of {Math.ceil(blogs.length / blogsPerPage)}</span>
        <button onClick={nextPage} disabled={currentPage === Math.ceil(blogs.length / blogsPerPage)}>Next &gt;</button>
      </div>
    </section>
  );
};

export default FullBlogList;
