import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
import "./RelatedArticles.css";

const articles = [
  {
    id: 1,
    title: "How to Write Articles with AI? Include Your Unique Perspective",
    date: "Oct 19",
    readTime: "3 min read",
    category: "Artificial Intelligence",
    image: "https://source.unsplash.com/400x250/?ai,technology"
  },
  {
    id: 2,
    title: "AI in Content Writing: Pros and Cons",
    date: "Oct 20",
    readTime: "4 min read",
    category: "Artificial Intelligence",
    image: "https://source.unsplash.com/400x250/?ai,robotics"
  },
  {
    id: 3,
    title: "How AI is Changing the Future of Digital Marketing",
    date: "Oct 21",
    readTime: "5 min read",
    category: "Marketing & AI",
    image: "https://source.unsplash.com/400x250/?marketing,technology"
  },
  {
    id: 4,
    title: "AI in Web Development: Should You Use It?",
    date: "Oct 22",
    readTime: "6 min read",
    category: "Web Development",
    image: "https://source.unsplash.com/400x250/?coding,ai"
  }
];

const RelatedArticles = () => {
  return (
    <section className="related-articles">
      <h2 className="section-title">Related Articles</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          480: { slidesPerView: 1 }
        }}
        className="article-slider"
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id} className="article-card">
            <div className="article-content">
              <img src={article.image} alt="Article" className="article-img" />
              <p className="article-category">{article.category}</p>
              <h3 className="article-title">{article.title}</h3>
              <p className="article-meta">{article.date} • {article.readTime}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RelatedArticles;
