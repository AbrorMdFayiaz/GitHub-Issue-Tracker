document.getElementById("card-container").addEventListener("click",modalShower)

function modalShower(event){
    console.log(event.target.closest("article"),50);
    const selectedCard=event.target.closest("article");
    const selectedId=Number(event.target.closest("article").id);
    console.log(event.target.closest("article"),selectedId);


    let card;


    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${selectedId}`)
    .then(res=>res.json()).then(card=>{

        const modal=document.createElement("div");
        modal.innerHTML=`
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
   <div class="modal-box">
      <article>
    <h1 class="font-bold text-2xl mb-2 ">${card.data.title}</h1>
    <div class="flex items-center my-auto">


    ${card.data.status=="open"
        ?`<h2 class=" bg-[#00A96E] rounded-full inline-block p-2 text-[#FFFFFF] text-[12px]  font-medium">${card.data.status=="open"?"Opened":"Closed"}</h2>&nbsp;`
        :`<h2 class=" bg-[#A855F7] rounded-full inline-block p-2 text-[#FFFFFF] text-[12px]  font-medium">Closed</h2>&nbsp;`
    }

        <i class="fa-solid fa-circle text-[4px] text-[#64748B]"></i>&nbsp;
        <span class="text-[#64748B] text-[12px]">Opened by ${card.data.assignee}</span>&nbsp;
        <i class="fa-solid fa-circle text-[4px] text-[#64748B]"></i>&nbsp;
        <span class="text-[#64748B] text-[12px]">${new Date(card.data.createdAt).toLocaleDateString("en-US")}</span>
    </div>
    <section class="p-5  space-y-5 ">
        <section class=" pb-4  flex gap-1 flex-wrap ">
        ${card.data.labels.map(item=>(
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
    <section>
    <p class="text-[#64748B] text-base font-normal">${card.data.description}</p>
    </section>
    <section class="grid grid-cols-2 bg-base-300 rounded-lg p-4">
    <div class="space-y-2">
    <p class="text-base font-normal text-[#64748B]  ">Assignee:</p>
    <h3 class="font-semibold text-base">${card.data.assignee}</h3>
    </div>
    <div class="space-y-1.5">
    <p class="text-base font-normal text-[#64748B]">Priority:</p>
    
    ${card.data.priority=="high"
        ?`<h4 class=" inline-block text-[#FFFFFF] text-[12px] font-medium bg-[#EF4444] px-4 py-1.5 rounded-[100px] ">HIGH</h4>`
        :card.data.priority=="medium"?
        `<h4 class=" inline-block text-[#FFFFFF] text-[12px] font-medium bg-[#F59E0B] px-4 py-1.5 rounded-[100px] ">MEDIUM</h4>`
        :`<h4 class=" inline-block text-[#FFFFFF] text-[12px] font-medium bg-[#9CA3AF] px-4 py-1.5 rounded-[100px] ">LOW</h4>`}
        
        </div>
        </section>
        </article>
        <div class="modal-action">
        <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-primary">Close</button>
        </form>
        </div>
        </div>
        </dialog>
        `
        
        
        document.getElementById("modal-container").innerHTML="";
        document.getElementById("modal-container").appendChild(modal);
        modal.querySelector("#my_modal_5").showModal();
    })
    
}
//     <div class="bg-secondary-content text-[#EF4444] text-[12px] border-2 border-[#FECACA] inline-block py-1.5 px-7  rounded-[6.25rem] "><i class="fa-solid fa-bug"></i> BUG</div>
// <div class="bg-secondary-content text-[#EF4444] text-[12px] border-2 border-[#FECACA] inline-block py-1.5 px-7  rounded-[6.25rem] "><i class="fa-solid fa-bug"></i> BUG</div>