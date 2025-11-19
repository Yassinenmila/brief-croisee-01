const unwork = document.querySelector("#un-staff");
const newstf = document.querySelector("#add-staff");
const add = document.querySelector(".btn");
const conf = document.querySelector("#conference");
const res = document.querySelector("#reception");
const arch = document.querySelector("#archive");
const sct = document.querySelector("#securite");
const pers = document.querySelector("#personnel");
const srv = document.querySelector("#serveur");
const workers = [];

newstf.addEventListener("click", () => {
    const formpopup = document.createElement('div');
    formpopup.classList.add('popup');
    formpopup.innerHTML = `

    <div class="popup-cont">
            <h1>New Worker</h1>
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
                <button class="close">close</button>
            </div>
    </div>
    
    `;
    document.body.appendChild(formpopup);
    formpopup.querySelector(".close").addEventListener("click", () => {
        formpopup.remove();
    })
    formpopup.querySelector("#submit").addEventListener("click", () => {
        const nom = formpopup.querySelector("#name").value;
        const role = formpopup.querySelector("#role").value;
        const pic = formpopup.querySelector("#photo").value;
        const email = formpopup.querySelector("#email").value;
        const tel = formpopup.querySelector("#tel").value;
        const debut = formpopup.querySelector("#date1").value;
        const fin = formpopup.querySelector("#date2").value;

        workers.push({
            "id": Date.now(),
            "nom": nom,
            "role": role,
            "photo": pic,
            "email": email,
            "tel": tel,
            "experience": [{
                "date_debut": debut,
                "date_fin": fin
            }]

        })
        const nwk = document.createElement('div');
        nwk.classList.add('profil');
        nwk.dataset.id = workers[workers.length - 1].id;
        nwk.dataset.role=workers[workers.length - 1].role;
        nwk.innerHTML = `
        <div class="img">
                    <img src="${pic}">
                </div>
                <div class="nam">
                    <h2>${nom}</h2>
                    <span>${role}</span>
                </div>
        `;
        unwork.appendChild(nwk);
        formpopup.remove();
    })
})
unwork.addEventListener("click", (e) => {
    const cart = e.target.closest('.profil');
    const infopopup = document.createElement('div');
    infopopup.classList.add('popup');
    if (!cart) { return };
    const id = Number(cart.dataset.id);
    const worker = workers.find(w => w.id === id);
    infopopup.innerHTML = ``;
    infopopup.innerHTML = `
                <div class="popup-cont">
                    <div class="info-worker">
                        <img src="${worker.photo}" alt="worker picture">
                        <h4>${worker.nom}</h4>
                        <div class="show">
                            <span><strong>Role :</strong> ${worker.role}</span>
                            <span><strong>Email :</strong> ${worker.email}</span>
                            <span><strong>Telephone :<strong> ${worker.tel}</span>
                        </div>
                    </div>
                    <button class="close">close</button>
                </div>
                `;
    document.body.appendChild(infopopup);
    infopopup.querySelector(".close").addEventListener("click", () => {
        infopopup.remove();
    })

})
conf.addEventListener("click", ()=>{
    const addpopup = createElement('div');
    addpopup.classList.add('popup');

})




