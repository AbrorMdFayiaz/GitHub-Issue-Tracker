function allOpenClosedButtonClickingAction(clickedButton){
    spinnerNeededNow(true);
    fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
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
allOpenClosedButtonClickingAction(`all`);