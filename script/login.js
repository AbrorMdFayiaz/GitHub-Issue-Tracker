document.getElementById("login-button").addEventListener("click" ,userLoginConfirmation);

function userLoginConfirmation(){
    const userGivenName=document.getElementById("username").value;
    const userGivenPassword=document.getElementById("password").value;

    // not actual
    const validUserName="admin";
    // console.log(userGivenName,userGivenPassword)
    const validPassword="admin123";

    if (userGivenName!==validUserName || userGivenPassword!==validPassword) {
        console.log("invalid");

        // showing a error message for invalid input using modal
        const modal=document.createElement("article");
        modal.id="modal";
        modal.innerHTML=`
<dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Error !</h3>
    <p class="py-4">Incorrect username or password given.</p>
    <p>Please give correct username and password.</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn btn-primary">Close</button>
      </form>
    </div>
  </div>
</dialog>
        `

    document.body.appendChild(modal);

modal.querySelector("#my_modal_5").showModal();

        return;
    } else {
        console.log("valid");
        window.location.assign("./index.html")
    }
}