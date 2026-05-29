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
    <h1 class="font-bold text-2xl mb-2 ">${card.title}</h1>
    <div class="flex items-center my-auto">


    ${card.status=="open"
        ?`<h2 class=" bg-[#00A96E] rounded-full inline-block p-2 text-[#FFFFFF] text-[12px]  font-medium">${card.status=="open"?"Opened":"Closed"}</h2>&nbsp;`
        :`<h2 class=" bg-[#A855F7] rounded-full inline-block p-2 text-[#FFFFFF] text-[12px]  font-medium">Closed</h2>&nbsp;`
    }

        <i class="fa-solid fa-circle text-[4px] text-[#64748B]"></i>&nbsp;
        <span class="text-[#64748B] text-[12px]">Opened by Fahim Ahmed</span>&nbsp;
        <i class="fa-solid fa-circle text-[4px] text-[#64748B]"></i>&nbsp;
        <span class="text-[#64748B] text-[12px]">22/02/2026</span>
    </div>
    <section class="p-5 space-y-5">
        <section>
            <div class="bg-secondary-content text-[#EF4444] text-[12px] border-2 border-[#FECACA] inline-block py-1.5 px-7  rounded-[6.25rem] "><i class="fa-solid fa-bug"></i> BUG</div>
        <div class="bg-secondary-content text-[#EF4444] text-[12px] border-2 border-[#FECACA] inline-block py-1.5 px-7  rounded-[6.25rem] "><i class="fa-solid fa-bug"></i> BUG</div>
        </section>
    <section>
        <p class="text-[#64748B] text-base font-normal">${card.description}</p>
    </section>
    <section class="grid grid-cols-2 bg-base-300 rounded-lg p-4">
        <div class="space-y-2">
            <p class="text-base font-normal text-[#64748B]  ">Assignee:</p>
            <h3 class="font-semibold text-base">Fahim Ahmed</h3>
        </div>
        <div class="space-y-1.5">
            <p class="text-base font-normal text-[#64748B]">Priority:</p>

            ${card.priority=="high"
                ?`<h4 class=" inline-block text-[#FFFFFF] text-[12px] font-medium bg-[#EF4444] px-4 py-1.5 rounded-[100px] ">HIGH</h4>`
                :card.priority=="medium"?
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

        document.getElementById("card-container").appendChild(modal);
        modal.querySelector("#my_modal_5").showModal();
    })

}