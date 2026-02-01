function filterMovies(category) {

  let allMovies = document.getElementsByClassName("card");

  for (let i = 0; i < allMovies.length; i++) {

    if (category === "all") {
      allMovies[i].style.display = "block";
    }
    else if (allMovies[i].classList.contains(category)) {
      allMovies[i].style.display = "block";
    }
    else {
      allMovies[i].style.display = "none";
    }
  }
}