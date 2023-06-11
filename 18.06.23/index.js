let currentPage = 1;
let currentBlock = 1;
let totalResults = 0;
let maxVisibleButtons = 5;

$("#searchForm").on("submit", function (e) {
    e.preventDefault();
    currentPage = 1;
    searchMovies();
});

function searchMovies(page = 1) {
    const searchTerm = $("#searchInput").val();
    const type = $("#typeSelect").val();

    $.ajax({
        method: "GET",
        url: "http://www.omdbapi.com/",
        data: {
            s: searchTerm,
            type: type,
            page: page,
            apiKey: "939b435f"
        },
        success: function (result) {
            if (result.Response === "True") {
                totalResults = parseInt(result.totalResults);
                displayResults(result.Search);
                displayPagination(totalResults, searchTerm, type);
            } else {
                $("#results").html("<p class='error-message'>Movie not found!</p>");
            }
        }
    });
}

function changeBlock(block, searchTerm, type) {
    currentBlock = block;
    displayPagination(totalResults, searchTerm, type); 
}

function changePage(page, searchTerm, type) {
    currentPage = Number(page);
    currentBlock = Math.ceil(currentPage / maxVisibleButtons);
    searchMovies(currentPage);
    displayPagination(totalResults, searchTerm, type);
}

function displayResults(results) {
    let htmlString = "<ul class='movie-list'>";
    results.forEach(function (movie) {
        htmlString += `<li class="movie-item">
           <img src="${movie.Poster}" alt="${movie.Title}" class="movie-poster">
           <div class="movie-info-wrapper">
             <p class="movie-type">${movie.Type}</p>
             <h3 class="movie-title">${movie.Title}</h3>
             <h4 class="movie-year">${movie.Year}</h4>
             <button onclick="getMovieDetails('${movie.imdbID}')" class="details-button">Details</button>
           </div>
        </li>`;
    });
    htmlString += "</ul>";
    $("#results").html(htmlString);
}

function getMovieDetails(id) {
    $.ajax({
        method: "GET",
        url: "http://www.omdbapi.com/",
        data: {
            i: id,
            apiKey: "939b435f"
        },
        success: function (result) {
            let htmlString = `<img src="${result.Poster}" alt="${result.Title}" class="movie-poster-large">`;

            htmlString +=
                `<div class="details-info-wrapper">
               <div><strong>Title:</strong></div><div>${result.Title}</div>
               <div><strong>Released:</strong></div><div>${result.Released}</div>
               <div><strong>Genre:</strong></div><div>${result.Genre}</div>
               <div><strong>Country:</strong></div><div>${result.Country}</div>
               <div><strong>Director:</strong></div><div>${result.Director}</div>
               <div><strong>Writer:</strong></div><div>${result.Writer}</div>
               <div><strong>Actors:</strong></div><div>${result.Actors}</div>
               <div><strong>Awards:</strong></div><div>${result.Awards}</div>
               </div>`;
            $("#details").html(htmlString);
        }
    });
}

function displayPagination(totalResults, searchTerm, type) {
    const buttonAmount = Math.ceil(totalResults / 10); // Total number of pages
    const blockAmount = Math.ceil(buttonAmount / maxVisibleButtons);
    const startPage = (currentBlock - 1) * maxVisibleButtons + 1;
    const endPage = currentBlock * maxVisibleButtons > buttonAmount ? buttonAmount : currentBlock * maxVisibleButtons;

    let htmlString = "<ul class='pagination-list'>";

    if (currentBlock > 1) {
        htmlString += `<li class="pagination-item"><button onclick="changeBlock(${currentBlock - 1}, '${searchTerm}', '${type}')" class="pagination-button">←</button></li>`;
    }

    for (let i = startPage; i <= endPage; i++) {
        if (i === currentPage) {
            htmlString += `<li class="pagination-item"><button onclick="changePage(${i}, '${searchTerm}', '${type}')" class="pagination-button active">${i}</button></li>`;
        } else {
            htmlString += `<li class="pagination-item"><button onclick="changePage(${i}, '${searchTerm}', '${type}')" class="pagination-button">${i}</button></li>`;
        }
    }

    if (currentBlock < blockAmount) {
        htmlString += `<li class="pagination-item"><button onclick="changeBlock(${currentBlock + 1}, '${searchTerm}', '${type}')" class="pagination-button">→</button></li>`;
    }

    htmlString += "</ul>";
    $("#pagination").html(htmlString);
}
