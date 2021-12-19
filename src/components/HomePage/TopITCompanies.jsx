import React from "react";

export const TopITCompanies = () => {
  return (
    <section className="topIT-companies">
      <div className="container top-companies-container">
        <div className="top-companies-title">
          <h3>Лучшие IT-компании</h3>
        </div>
      </div>
      <div className="IT-companies-slider">
        <div className="slider-items">
          <div className="slider-item">
            <div className="company-logo"></div>
          </div>
        </div>
        <div className="slider-arrows"></div>
      </div>
    </section>
  );
};
