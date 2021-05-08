import React from "react";
import "./MovieTitles.css";

export default function MovieTitles() {
  return (
    <div className="movie-titles">
      <h3>Movie title</h3>
      <form>
        <button type="button" class="btn btn-outline-secondary">
          Search Here
        </button>
        <input type="search" />
      </form>
    </div>
  );
}
