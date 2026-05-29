function ButtonClickingColorChangingAction(clickedButton) {
    if (clickedButton=="all") {

        document.getElementById("all").classList.add("active");


        document.getElementById("open").classList.remove("active");
        document.getElementById("closed").classList.remove("active");
    } else if (clickedButton=="open"){
        
        document.getElementById("open").classList.add("active");


        document.getElementById("all").classList.remove("active");
        document.getElementById("closed").classList.remove("active");
    }
    else{

        document.getElementById("closed").classList.add("active");


        document.getElementById("open").classList.remove("active");
        document.getElementById("all").classList.remove("active");
    }
}