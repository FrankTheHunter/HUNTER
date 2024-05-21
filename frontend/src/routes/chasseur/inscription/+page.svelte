<!-- <script lang="ts">
  let firstName = '';
  let lastName = '';
  let email = '';
  let password = '';
  let loginEmail = '';
  let huntingLicenseNumber = '';
  let loginPassword = '';
  
  async function signUp(event?: Event) {
      if (event) {
          event.preventDefault();
      }
      const firstNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/;
      const lastNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const huntingLicenseNumberRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

      if (!firstName.match(firstNameRegex)) {
          alert("Invalid first name");
          return;
      }

      if (!lastName.match(lastNameRegex)) {
          alert("Invalid last name");
          return;
      }

      if (!email.match(emailRegex)) {
          alert("Invalid email");
          return;
      }

      if (!huntingLicenseNumber.match(huntingLicenseNumberRegex)) {
          alert("Invalid hunting license number");
          return;
      }

      if (!password.match(passwordRegex)) {
          alert("Invalid password. It must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit.");
          return;
      }
      const formData = {
          firstName,
          lastName,
          email,
          huntingLicenseNumber,
          password
      };

      console.log("Sign-Up:", formData);
  }
  async function signIn(event?: Event) {
      if (event) {
          event.preventDefault();
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

      if (!loginEmail.match(emailRegex)) {
          alert("Invalid login email");
          return;
      }

      if (!loginPassword.match(passwordRegex)) {
          alert("Invalid login password. It must contain at least 8 characters, one uppercase letter, one lowercase letter, and one digit.");
          return;
      }

      const formData = {
          loginEmail,
          loginPassword
      };

      console.log("Sign-In:", formData);
  }
</script>
 -->
 <script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	
	import { fetchData } from '$lib/utils';

	let errorMessages: string[] = [];
	let showErrors = false;

	

	const postForm = async () => {
		
		// Check password match
		if (formData.password !== formData.passwordValidation) {
			errorMessages.push('Les mots de passe ne correspondent pas.');
		}

		try {
			const data = await fetchData('POST', formData);
			// Send if connected in local storage for icon display
			console.log('data :' + data);
			// Redirect to login page
			goto('/chasseur/connexion');
		} catch (error) {
			showErrors = true;
			const message:any = (error as any).cause;
			errorMessages.push(message);
		}
	};

	// Form data object
	let formData = {
		licenseNumber: '',
		firstname: '',
        lastname: '',
		email: '',
		password: '',
		passwordValidation: ''
		
	};
	console.log('formData :' + formData);
	// On component mount, check if there are errors to show
	onMount(() => {
		if (errorMessages.length > 0) {
			showErrors = true;
		}
		console.log('errorMessages :' + formData);
	});

	
</script>

<div class="main">
	<div class="form-container">
		<form on:submit|preventDefault={postForm}>
			<label for="lastName">Prénom :</label>
			<input
				type="text"
				id="lastName"
				bind:value={formData.lastname}
				title="Le prénom doit contenir entre 2 et 30 caractères alphabétiques."
			/>

			<label for="firstName">Nom :</label>
			<input
				type="text"
				id="firstname"
				bind:value={formData.firstname}
				title="Le nom doit contenir entre 2 et 30 caractères alphabétiques."
			/>

			<label for="email">Email :</label>
			<input
				type="email"
				id="email"
				bind:value={formData.email}
				title="Entrez une adresse email valide."
			/>

			<label for="password"> Mot de passe :</label>

			<div class="password">
				<input
					type="password"
					id="password"
					bind:value={formData.password}
					title="Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre."
				/>
				
			</div>

			<label for="passwordValidation">Confirmation mot de passe :</label>
			<div class="password">
				<input
					type="password"
					id="passwordValidation"
					bind:value={formData.passwordValidation}
					title="Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre."
				/>
				
			</div>

			<label for="siret"> N° de SIRET :</label>
			<input
				type="text"
				id="licenseNumber"
				bind:value={formData.licenseNumber}
				title="Le numéro de liscence doit être composé de 14 chiffres."
			/>

			{#if showErrors && errorMessages.length > 0}
				<div class="error-container">
					{#each errorMessages as message (message)}
						<p class="error">{message}</p>
					{/each}
				</div>
			{/if}

			<button class="submit" type="submit"> Soumettre </button>
			<div class="login">
				<a href="/chasseur/connexion"><p>Vous avez déjà un compte?</p></a>
			</div>
		</form>
	</div>
</div>