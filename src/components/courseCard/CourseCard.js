import { Button } from "@material-ui/core";
import React from "react";
import "./CourseCard.css";

function CourseCard({ title, image, price, rating }) {
  return (
    <div className="card">
      <div className="card__info">
        <p>{title}</p>
        <p className="card__price">
          <small>$</small>
          <small>{price}</small>
        </p>
        <div className="card__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img
        src={image}
        alt=""
      />
      <Button size="small" variant="contained">
        Add to cart
      </Button>
    </div>
  );
}

export default CourseCard;
