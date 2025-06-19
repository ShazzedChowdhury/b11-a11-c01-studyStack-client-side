import React from 'react';
import { useNavigate } from 'react-router';

const NoContentSection = ({ content, btnContent, path }) => {
    const navigate = useNavigate()
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 py-20 text-center">
      <h1 className="md:text-4xl text-3xl font-bold  mb-5">{content}</h1>
      <button className="btn btn-primary" onClick={() => navigate(path)}>
        {btnContent}
      </button>
    </section>
  );
};

export default NoContentSection;