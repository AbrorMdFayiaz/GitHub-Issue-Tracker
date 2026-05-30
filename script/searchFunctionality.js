


// const searchBtn=document.getElementById("searchButton");
// searchBtn.addEventListener("keydown",searchFunctionality)
// function searchFunctionality (event){
//     if (event.key!=="Enter") {
//         return;
//     }
//     spinnerNeededNow(true);
//     const searchInput=searchBtn.value ;
//     fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${searchInput}`)
//     .then(res=>res.json())
//     .then(out=>{
//         showCards(out.data);

//         spinnerNeededNow(false);
//     })
// }