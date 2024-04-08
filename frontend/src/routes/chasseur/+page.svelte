<script lang="ts">
    let nom = '';
    let prénom = '';
    let email = '';
    let motdepasse = '';
    let emailConnexion = '';
    let numéropermisdechasser = '';
    let motdepasseConnexion = '';

    async function inscription(event?: Event) {
        if (event) {
            event.preventDefault();
        }

        // Validation des données avec des regex
        const nomRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/;
        const prénomRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const numéropermisdechasserRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
        const motdepasseRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

        if (!nom.match(nomRegex)) {
            alert("Nom invalide");
            return;
        }

        if (!prénom.match(prénomRegex)) {
            alert("Prénom invalide");
            return;
        }

        if (!email.match(emailRegex)) {
            alert("Email invalide");
            return;
        }

        if (!numéropermisdechasser.match(numéropermisdechasserRegex)) {
            alert("Numéro de permis de chasser invalide");
            return;
        }

        if (!motdepasse.match(motdepasseRegex)) {
            alert("Mot de passe invalide. Il doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre.");
            return;
        }

        const formData = {
            nom,
            prénom,
            email,
            numéropermisdechasser,
            motdepasse
        };
        // Vous pouvez maintenant envoyer formData à votre backend pour la logique d'inscription
        console.log("Inscription:", formData);
    }

    async function connexion(event?: Event) {
        if (event) {
            event.preventDefault();
        }

        // Validation des données avec des regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const motdepasseRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

        if (!emailConnexion.match(emailRegex)) {
            alert("Email de connexion invalide");
            return;
        }

        if (!motdepasseConnexion.match(motdepasseRegex)) {
            alert("Mot de passe de connexion invalide. Il doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre.");
            return;
        }

        const formData = {
            emailConnexion,
            motdepasseConnexion
        };
        // Vous pouvez maintenant envoyer formData à votre backend pour la logique de connexion
        console.log("Connexion:", formData);
    }
</script>
  
  <style>
    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background-color: #f0f2f5;
      font-family: Arial, sans-serif;
    }
  
    #inscription, #connexion {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin: 10px;
      width: 90%;
      max-width: 300px;
    }
  
    h2 {
      color: #d67b03;
      margin-bottom: 20px;
    }
  
    input {
      width: 100%;
      padding: 10px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: 1px solid #ddd;
    }
  
    button {
      width: 100%;
      padding: 10px;
      background-color: #d67b03;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  
    button:hover {
      background-color: #d67b03;
    }
  </style>
  
  <div class="container">
    <div id="inscription">
      <h2>Inscription</h2>
      <form on:submit={inscription}>
        <input type="text" bind:value={nom} placeholder="Nom" required>
        <input type="text" bind:value={prénom} placeholder="Prénom" required>
        <input type="email" bind:value={email} placeholder="Email" required>
        <input type="text" bind:value={numéropermisdechasser} placeholder="Numéro de permis de chasser" required>
        <input type="password" bind:value={motdepasse} placeholder="Mot de passe" required>
        <button type="submit">Inscription</button>
      </form>
    </div>
  
    <div id="connexion">
      <h2>Connexion</h2>
      <form on:submit={connexion}>
        <input type="email" bind:value={emailConnexion} placeholder="Email" required>
        <input type="password" bind:value={motdepasseConnexion} placeholder="Mot de passe" required>
        <button type="submit">Connexion</button>
      </form>
    </div>
  </div>
  