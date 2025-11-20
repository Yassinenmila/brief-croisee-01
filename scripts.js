const unwork = document.querySelector("#un-staff");
const newstf = document.querySelector("#add-staff");
const add = document.querySelector(".btn");
const conf = document.querySelector("#conference");
const res = document.querySelector("#reception");
const arch = document.querySelector("#archive");
const sct = document.querySelector("#securite");
const pers = document.querySelector("#personnel");
const srv = document.querySelector("#serveur");
const workers = JSON.parse(localStorage.getItem("workers")) || [];
if (workers.length === 0) {
    unwork.innerHTML = `
    <p style="color:gray" id="message">No Workers Added</p>
    `;
} else {
    aff();
}

// ajoutement des workers dans un tableau des object contenent des information
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
                        <option value="Reception">Réceptionniste</option>
                        <option value="Techniciens">Techniciens IT</option>
                        <option value="securite">Agent de sécurité</option>
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
        localStorage.setItem("workers", JSON.stringify(workers));
        aff();
        formpopup.remove();
    })
})
// info afficher d'un worker clicker dessus en format de popup
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
                            <span><strong>Telephone :</strong> ${worker.tel}</span>
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
function aff() {
    const msg = document.querySelector("#message");
    if (msg) { msg.remove() };
    unwork.innerHTML = "";
    workers.forEach(ele => {
        const wk = document.createElement('div');
        wk.classList.add('profil');
        wk.dataset.id = ele.id;
        wk.dataset.role = ele.role;

        wk.innerHTML = `
        <div class="img">
                    <img src="${ele.photo}">
                </div>
                <div class="nam">
                    <h2>${ele.nom}</h2>
                    <span>${ele.role}</span>
                </div>
        `;
        unwork.appendChild(wk);
    });
}
conf.addEventListener("click",()=>{
    const data = JSON.parse(localStorage.getItem("workers")) || [];
    if(data.some(d=>d.role ==="Manager"|| d.role ==="securite"||d.role==="Techniciens" || d.role==="Reception"||d.role==="Menage")){
        const filt =data.filter((d)=>d.role ==="Manager"|| d.role ==="securite"||d.role==="Techniciens" || d.role==="Reception"||d.role==="Menage");
        afichages(filt);

    }else{
        alert("no worker allowed here !!");
    }
})
res.addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("workers")) || [];
    if (data.length!==0) {
        const filt = data.filter((d) => d.role === "Réceptionniste"|| d.role==="Manager");
        afichages(filt);
    } else {
        alert("no worker allowed here !!");
    }
})
arch.addEventListener("click",()=>{
    const data = JSON.parse(localStorage.getItem("workers")) || [];
    if(data.some(d=>d.role ==="Manager"|| d.role ==="securite"||d.role==="Techniciens" || d.role==="Reception")){
        const filt = data.filter((d) => d.role ==="Manager"|| d.role ==="securite"||d.role==="Techniciens" || d.role==="Reception");
        afichages(filt);
    } else {
        alert("no worker allowed here !!");
    }
})
sct.addEventListener("click",()=>{
    const data = JSON.parse(localStorage.getItem("workers")) || [];
    if(data.some(d=>d.role === "Menage"||d.role==="securite"|| d.role==="Manager")){
        const filt = data.filter((d)=>d.role === "Menage"||d.role==="securite"|| d.role==="Manager")        
        afichages(filt);
    } else {
        alert("no worker allowed here !!");
    }
})
pers.addEventListener("click",()=>{
    const data = JSON.parse(localStorage.getItem("workers")) || [];
    if(data.some(d=>d.role==="Manager"|| d.role==="Menage")){
        const filt=data.filter((d)=>d.role==="Manager"|| d.role==="Menage");
        afichages(filt);
    } else {
        alert("no worker allowed here !!");
    }
})
srv.addEventListener("click",()=>{
    const data = JSON.parse(localStorage.getItem("workers")) || [];
    if(data.some(d=>d.role==="Techniciens"|| d.role==="Manager")){
        const filt = data.filter((d)=>d.role==="Techniciens"|| d.role==="Manager")
        afichages(filt);
    }else{
        alert("no worker allowed here !!");
    }
})



function afichages(filt){
    const addpopup = document.createElement('div');
        addpopup.classList.add('popup');
        addpopup.innerHTML = `
            <div class="popup-cont">
                <h1> workers allowed</h1>
                <div id="employ"></div>
                <button class="close">close</button>
            </div>
        `;
        document.body.appendChild(addpopup);
        filt.forEach(ele => {
            const wk = document.createElement('div');
            wk.classList.add('profil');
            wk.dataset.id = ele.id;
            wk.dataset.role = ele.role;

            wk.innerHTML = `
        <div class="img">
                    <img src="${ele.photo}">
                </div>
                <div class="nam">
                    <h2>${ele.nom}</h2>
                    <span>${ele.role}</span>
                </div>
                
        `;
            document.querySelector("#employ").appendChild(wk);
        });
        addpopup.querySelector(".close").addEventListener("click", () => {
            addpopup.remove();
        })
}
/* <div class="buttons">
                    <button class="adding">+</button>
                    <button class="remove">X</button>
                </div> */