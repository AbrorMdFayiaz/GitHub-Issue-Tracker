document.getElementById("card-container").addEventListener("click",modalShower)

function modalShower(event){
    console.log(event.target.closest("article"),50);
    const selectedCard=event.target.closest("article");
    const selectedId=Number(event.target.closest("article").id);
    console.log(event.target.closest("article"),selectedId);


    let card;


    fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${selectedId}`)
    .then(res=>res.json()).then(out=>{
        card=out;

        const modal=document.createElement("div");
        modal.innerHTML=`
        <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
   <div class="modal-box">
      <article>
    <h1 class="font-bold text-2xl mb-2 ">Fix broken image uploads</h1>
    <div class="flex items-center my-auto">
        <h2 class=" bg-[#00A96E] rounded-full inline-block p-2 text-[#FFFFFF] text-[12px]  font-medium">Opened</h2>&nbsp;
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
        <p class="text-[#64748B] text-base font-normal">The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.</p>
    </section>
    <section class="grid grid-cols-2 bg-base-300 rounded-lg p-4">
        <div class="space-y-2">
            <p class="text-base font-normal text-[#64748B]  ">Assignee:</p>
            <h3 class="font-semibold text-base">Fahim Ahmed</h3>
        </div>
        <div class="space-y-1.5">
            <p class="text-base font-normal text-[#64748B] ">Priority:</p>
            <h4 class=" inline-block text-[#FFFFFF] text-[12px] font-medium bg-[#EF4444] px-4 py-1.5 rounded-[100px] ">HIGH</h4>
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
        document.querySelector("#my_modal_5").showModal();
    })

}