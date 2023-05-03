
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



