import { useState, useEffect } from "react";

const words = ["Developer", "Designer", "Problem Solver", "Critical Thinker"];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[index];

    const typingSpeed = isDeleting ? 50 : 100;
    const delay = isDeleting && text === "" ? 500 : typingSpeed;

    const typeEffect = setTimeout(() => {
      if (!isDeleting && charIndex < currentWord.length) {
        setText((prev) => prev + currentWord[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % words.length);
      }
    }, delay);

    return () => clearTimeout(typeEffect);
  }, [text, isDeleting, charIndex, index]);

  return (
    <section className="hero-section">
      <h1 className="slide-in">HELLO, I'M TAHA</h1>
      <p className="slide-left">
      A passionate full-stack developer with a knack for problem-solving and getting tasks done. Specializing in React, Node.js, and MySQL, turning complex ideas into clean, functional code and occasionally questioning my life choices when chasing a stubborn bug.
      </p>
      <span className="transitioning-words">{text}</span>
    </section>
  );
};

export default Home;
