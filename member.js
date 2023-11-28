function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var memberValue = member.value;
    var memberText = member.options[member.selectedIndex].text;
    var memberTextValue = memberText + " (" + memberValue + ")";

    if (memberValue == "none") {
        skills.innerHTML = "";
    } else {
        skills.innerHTML = memberTextValue;
    }
}