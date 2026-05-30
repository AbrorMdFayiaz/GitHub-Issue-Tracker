
function allOpenClosedButtonClickingAction(event,clickedButton){

    if (event.key!=="Enter" && event.type === "keydown" && event ) {
        return;
    }
    spinnerNeededNow(true);
    const searchInput=document.getElementById("searchInput").value;
    console.log(searchInput);
    fetch(searchInput===""?
        "https://phi-lab-server.vercel.app/api/v1/lab/issues"
        :`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchInput}`)
.then(res=>res.json())
.then(out=>{
    let issues;
    
    if (clickedButton==`open`){
        issues=out.data.filter(item=>item.status=="open")
        ButtonClickingColorChangingAction("open");
    }
    else if (clickedButton==`closed`){
        issues=out.data.filter(item=>item.status=="closed")
        ButtonClickingColorChangingAction("closed");
    }
    else{
        issues=out.data;
        ButtonClickingColorChangingAction("all");
    }
    
    showCards(issues);
    issueNumberShower(issues.length);
    
    
    spinnerNeededNow(false);

})
}
// this function is called at the very beginning , as it's necessary to show all the issues from the beginning of the page load.
// allOpenClosedButtonClickingAction(null,`all`);



// document.addEventListener("DOMContentLoaded",allButtonACtivationAtStarting());
// function allButtonACtivationAtStarting(){
//     allOpenClosedButtonClickingAction(null,"all");
// }


// document.addEventListener("DOMContentLoaded", () => {
//     allOpenClosedButtonClickingAction(null, "all");
// });