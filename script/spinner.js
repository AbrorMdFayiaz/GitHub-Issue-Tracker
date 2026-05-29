function spinnerNeededNow(status){
    if(status){
        document.getElementById("spinner").classList.replace("hidden","flex");
        // document.getElementById("all-open-closed").classList.add("hidden");
        document.getElementById("main").classList.add("hidden");
    }
    else{
        document.getElementById("spinner").classList.replace("flex","hidden");
        // document.getElementById("all-open-closed").classList.remove("hidden");
        document.getElementById("main").classList.remove("hidden");
    }
}