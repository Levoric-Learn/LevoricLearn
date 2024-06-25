function search_programming() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("Levoric-course-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
// DarkMode Of Levoric //
function Levoric_learning() {
    let LevoricBtn = document.body;
    if (LevoricBtn.classList.toggle("dark"));
    else {
        (LevoricBtn.classList.toggle("White").length
        )
    }
    }