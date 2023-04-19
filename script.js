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


