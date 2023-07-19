import { useState } from "react";
import reviewsData from "./data";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const App = () => {
  const [index, setIndex] = useState(0);
  const { image, job, name, text } = reviewsData[index];

  const nextBtn = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex + 1) % reviewsData.length;
      return newIndex;
    });
  };

  const prevBtn = () => {
    setIndex((currentIndex) => {
      const newIndex = (currentIndex - 1) % reviewsData.length;
      return newIndex;
    });
  };

  const randomReview = () => {
    setIndex(() => {
      const randomNumber =
        Math.floor(Math.random() * reviewsData.length) % reviewsData.length;
      return randomNumber;
    });
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <div className="quote-icon">
            <FaQuoteLeft />
          </div>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button type="button" className="prev-btn" onClick={prevBtn}>
            <FaChevronLeft />
          </button>
          <button type="button" className="next-btn" onClick={nextBtn}>
            <FaChevronRight />
          </button>
        </div>
        <button
          type="button"
          className="btn btn-hipster"
          onClick={randomReview}
        >
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
