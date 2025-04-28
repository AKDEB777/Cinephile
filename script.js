document.addEventListener("DOMContentLoaded", function () {
  const movies = [
    // Movie objects
  ];
  
  const gallery = document.querySelector(".movie-gallery");
  
  // Add movies dynamically
  movies.forEach(movie => {
    const movieCard = document.createElement("div");
    movieCard.classList.add("movie-card");
    gallery.appendChild(movieCard);
  });
});
