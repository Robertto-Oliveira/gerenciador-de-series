/*const cadForm = document.querySelector(".cad-form");
const cadInput = document.querySelector("#cad_input");
const searchInput = document.querySelector("#search_input");
const editInput = document.querySelector("#edit_input");
const searchForm = document.querySelector(".search-form");
const resultForm = document.querySelector("#result-form");
const addBtn = document.querySelector("#add-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const searchBtn = document.querySelector("#search-btn");
const clearBtn = document.querySelector("#clear-btn");
const exitBtn = document.querySelector("#exit-btn");
const editBtn = document.querySelector("#edit-btn");
const deleteBtn = document.querySelector("#delete-btn");*/

function showForm(el) {
    var display = document.getElementById(el).style.display;
    if (display == "none")
        document.getElementById(el).style.display = "block";
    else
        document.getElementById(el).style.display = "none";
};

var exitBtn = document.getElementById("exit-btn");
exitBtn.addEventListener("click", function() {
    document.getElementById('result-form').style.display = 'none';
});

const addBtn = document.getElementById("add-btn");
const serieInput = document.getElementById("serie-input");
const seasonInput = document.getElementById("season-input");
const episodeInput = document.getElementById("episode-input");
addBtn.addEventListener("click", () => {
    const serieInputValue = serieInput.value;
    const seasonInputValue = seasonInput.value;
    const episodeInputValue = episodeInput.value;
    alert(serieInputValue);
    alert(seasonInputValue);
    alert(episodeInputValue);
});

/*const seasonInput = document.getElementById("season-input");
addBtn.addEventListener("click", () => {
    const seasonInputValue = seasonInput.value;
    alert(seasonInputValue);
});

const episodeInput = document.getElementById("episode-input");
addBtn.addEventListener("click", () => {
    const episodeInputValue = episodeInput.value;
    alert(episodeInputValue);
});*/

