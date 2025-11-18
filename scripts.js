const unwork = document.querySelector("#un-staff");
const newstf = document.querySelector("#add-staff");
const add = document.querySelector(".btn");
const workers =[];

newstf.addEventListener("click", () => {
    const popup = document.createElement('div');
    popup.classList.add('popup');
    popup.innerHTML = `

    <div class="popup-cont">
            <h1>New Worker</h1>
            <div></div>
            <form>
            <div class="inputs">
            <label for="name">Nom :</label>
            <input type="text" id="name" placeholder="Entre Votre Nom">
            </div>
                <div class="inputs">
                    <label for="role">Role :</label>
                    <select name="role" id="role">
                        <option value="Autres">Autres</option>
                        <option value="Réceptionniste">Réceptionniste</option>
                        <option value="Techniciens">Techniciens IT</option>
                        <option value="Agent">Agent de sécurité</option>
                        <option value="Manager">Manager</option>
                        <option value="Menage">Menage</option>
                    </select>
                </div>
                <div class="inputs">
                    <label for="photo">Photo :</label>
                    <input type="url" id="photo" placeholder="Entre Votre Photo(URL)">
                </div>
                <div class="inputs">
                    <label for="email">Email :</label>
                    <input type="text" id="email" placeholder="Entrer Votre Email">
                </div>
                <div class="inputs">
                    <label for="tel">Tel :</label>
                    <input type="text" id="tel" placeholder="+2126XXXXXXXXX">
                </div>
                <div class="exper">
                <label for="experience1">Date début experience :</label>
                <input type="date" id="date1">
                <label for="experience2">Date fin experience :</label>
                <input type="date" id="date2">
                </div>
            </form>
            <div class="btn-s">
                <button id="submit" type="submit">Valider</button>
                <button id="close">close</button>
            </div>
    </div>
    
    `;
    document.body.appendChild(popup);
    document.querySelector("#close").addEventListener("click", () => {
        popup.remove();
    })
    document.querySelector("#submit").addEventListener("click", ()=>{
        const nom =document.querySelector("#name").value;
        const role = document.querySelector("#role").value;
        const pic = document.querySelector("#photo").value;
        const email = document.querySelector("#email").value;
        const tel = document.querySelector("#tel").value;
        const debut = document.querySelector("#date1").value;
        const fin = document.querySelector("#date2").value;
        
        workers.push({
            "id":Date.now(),
            "nom":nom,
            "role":role,
            "photo":pic,
            "email":email,
            "tel":tel,
            "experience":[{
                "date_debut":debut,
                "date_fin":fin
            }]

        })
        const nwk = document.createElement('div');
        nwk.classList.add('profil');
        nwk.dataset.id=workers[workers.length-1].id;
        nwk.innerHTML=`
        <div class="img">
                    <img src="${pic}">
                </div>
                <div class="nam">
                    <h2>${nom}</h2>
                    <span>${role}</span>
                </div>
        `;
        unwork.appendChild(nwk);
        const profil = document.querySelector(".profil");
        profil.addEventListener("click",(e)=>{
            const cart = e.target.closest('.profil');
            if(cart){
                const id = Number(cart.dataset.id);
                const worker= workers.find(w=>w.id===id);
                console.log(worker);
            }
        })
        popup.remove()
    })
})


                