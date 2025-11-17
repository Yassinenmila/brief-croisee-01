const sidelist = [];
const unwork = document.querySelector("#un-staff");
const newstf = document.querySelector("#add-staff");
const add = document.querySelector("#btn");

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
})