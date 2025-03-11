import React from "react";
import Navbar from "../components/Navbar";
import BlogSubscription from "../components/Blogs_components/BlogSubscription";
// import LiveBlogs from "../components/Blogs_components/LiveBlogs";
import TechBlogs from "../components/Blogs_components/TechBlogs";
import FullBlogList from "../components/Blogs_components/FullBlogList";
import RelatedArticles from "../components/Blogs_components/RelatedArticles";
import Footer from "../components/Footer";

// import "./BlogPage.css";

const Blogs = () => {

 return (
    <div>
     <Navbar />
       <BlogSubscription />
       {/* <LiveBlogs /> */}
       <TechBlogs />
       <FullBlogList />
       <RelatedArticles />
      <Footer />
    </div>
  );
};

export default Blogs;


