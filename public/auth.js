

document.addEventListener('DOMContentLoaded', function() {
    auth.onAuthStateChanged((user) => {
    if (user) {

        const nameid = localStorage.getItem('nameid');
        document.getElementById('login-name').innerText = nameid ?? user.email.slice(0,6);
        console.log("👋 Already logged in:", user.email);
        localStorage.setItem('useremail',user.email);



        // signout
        const unlist = document.getElementsByClassName('nav-bar-body_nav-menu')[0];
        const li = document.createElement('li');
        li.classList.add('nav-menu_items');
        li.innerHTML = `<a href="#"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a>`;
        unlist.append(li);
        const logout = document.getElementsByClassName('nav-menu_items')[10];
        logout.addEventListener('click', () => {
            signOut(auth);
        })

        // login non


        // login container hidden

        const loginpagecontainer4 = document.getElementsByClassName('loginpage-container')[0];
        loginpagecontainer4.style.display = "none";


        // login image hidden

        const loginimg = document.getElementsByClassName('app-login')[0];
        
       loginimg.onclick = function()
       {
        window.location.href = './accounts/accounts.html';  
       }


    } else {
        console.log("🟡 Not logged in");
        const loginpagecontainer = document.getElementsByClassName('loginpage-container')[0];
        loginpagecontainer.style.display = "block";


         // login image open

     
       

    }
});
})

