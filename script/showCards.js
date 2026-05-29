function showCards(cardArray){

    document.getElementById("card-container").innerHTML=``;

    cardArray.forEach(element => {
        
            const singleCard=document.createElement("article");
    singleCard.classList.add(element.status=="open"?"border-[#00A96E]":"border-[#A855F7]","border-t-4","rounded-lg","bg-base-100");
    // id is added ,so that it becomes easier to find the element to attach event listener while showing modals. 
    singleCard.id=element.id;
    singleCard.innerHTML=`<section class="p-4 flex justify-between">
                    ${element.status=="open"?`<div class="flex bg-[#CBFADB] rounded-full p-1.5 h-7"><img class="w-" src="./assets/Open-Status.png" alt=""></div>`:`<div class="flex  rounded-full p-1.5  bg-[#F0E2FF]"><i class="fa-solid fa-check text-[#A855F7] border-[#A855F7] border-2  flex  rounded-full justify-center"></i></div>`}



                    ${element.priority=="high"?`<div class="bg-secondary-content text-[#EF4444] text-[12px] inline-block py-1.5 px-7  rounded-[6.25rem] ">HIGH</div>`:element.priority=="medium"?`<div class="bg-secondary-content text-[#D97706] bg-[#FFF8DB] text-[12px] inline-block py-1.5 px-7  rounded-[6.25rem]">${element.priority.toUpperCase()}</div>`:`<div class="bg-base-300 text-[#9CA3AF] text-[12px] inline-block py-1.5 px-7  rounded-[6.25rem] ">LOW</div>`}
                    


                </section>
                <section class="text-start px-4 pb-3">
                    <h2 class="font-semibold text-base">${element.title}</h2>


                    <p class="font-normal text-[12px] text-[#64748B]">${element.description}</p>
                </section>



                <section class="px-4 pb-4 border-2 border-b-[#E4E4E7] border-x-white border-t-white flex gap-1 flex-wrap ">
                    

                ${element.labels.map(item=>(
                    item=="bug"
                    ?`<div class="bg-secondary-content text-[#EF4444] border-2 border-[#FECACA] text-[12px] inline-block py-1.5 px-2 rounded-[6.25rem] "><i class="fa-solid fa-bug"></i> BUG</div>`
                    :item=="help wanted"
                    ?`<div class="inline-block  text-[#D97706] bg-[#FFF8DB] border-[#FDE68A] border-2 rounded-full py-1.5 px-2  text-[12px]"><i class="fa-solid fa-life-ring"></i> HELP WANTED</div>`
                    :item=="enhancement"
                    ?`<div class="inline-block  text-[#00A96E] bg-[#DEFCE8] border-[#BBF7D0] border-2 rounded-full py-1.5 px-2  text-[12px]"><i class="fa-solid fa-wand-sparkles"></i> ENHANCEMENT</div>`
                    :item=="documentation"
                    ?`<div class="inline-block  text-[#475569] bg-[#F8FAFC] border-[#E2E8F0] border-2 rounded-full py-1.5 px-2  text-[12px]"><i class="fa-solid fa-book-open"></i> DOCUMENTATION</div>`
                    :`<div class="inline-block  text-[#7C3AED] bg-[#DDD6FE] border-[#F5F3FF] border-2 rounded-full py-1.5 px-2  text-[12px]"><i class="fa-solid fa-ranking-star"></i> GOOD FIRST ISSUE</div>`
    )).join("")}


                </section>
                <section class="text-[12px] font-normal text-[#64748B] p-4">
                    <p>#${element.id} by ${element.author}</p>
                    <p>${new Date(element.createdAt).toLocaleDateString("en-US")}</p>
                </section>
                `;

    document.getElementById("card-container").appendChild(singleCard);


    });

}