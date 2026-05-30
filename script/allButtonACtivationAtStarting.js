
function allButtonACtivationAtStarting(){
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
.then(res=>res.json())
.then(out=>{

    const issues=out.data;
    ButtonClickingColorChangingAction("all");
    
    showCards(issues);
    issueNumberShower(issues.length);
    
    
    spinnerNeededNow(false);

})
}
// this function is called at the very beginning , as it's necessary to show all the issues from the beginning of the page load.
allButtonACtivationAtStarting();

























// this function is called at the very beginning , as it's necessary to show all the issues from the beginning of the page load.
// allOpenClosedButtonClickingAction(null,`all`);



// document.addEventListener("DOMContentLoaded",allButtonACtivationAtStarting());
// function allButtonACtivationAtStarting(){
//     allOpenClosedButtonClickingAction(null,"all");
// }


// document.addEventListener("DOMContentLoaded", () => {
//     allOpenClosedButtonClickingAction(null, "all");
// });