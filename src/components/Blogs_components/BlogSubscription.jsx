import React, { useState } from "react";
import "./BlogSubscription.css";

const BlogSubscription = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("❌ Please enter a valid email!");
      return;
    }

    setMessage("✅ Subscribed Successfully!");
    setEmail(""); // Clear input field after submission

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <section className="blog-subscription">
      <h5 className="blog-header">Our Blog</h5>
      <h2 className="blog-title">Stories and Interviews</h2>
      <p className="blog-description">
        Subscribe to learn about new product features, the latest in technology, solutions, and updates.
      </p>

      <form className="subscription-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      
      {message && <p className="subscription-message">{message}</p>}

      <p className="privacy-note">
        We care about your data in our <a href="#">privacy policy</a>.
      </p>
    </section>
  );
};

export default BlogSubscription;
