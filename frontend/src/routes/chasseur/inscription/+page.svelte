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

	interface FormData {
		licenseNumber: string;
		firstname: string;
		lastname: string;
		email: string;
		password: string;
		passwordValidation: string;
	}

	let formData: FormData = {
		licenseNumber: '',
		firstname: '',
		lastname: '',
		email: '',
		password: '',
		passwordValidation: ''
	};

	const postForm = async () => {
		// Clear previous errors
		errorMessages = [];

		// Check password match
		if (formData.password !== formData.passwordValidation) {
			errorMessages.push('Les mots de passe ne correspondent pas.');
		}

		if (errorMessages.length > 0) {
			showErrors = true;
			return;
		}

		try {
			const data = await fetchData('POST', formData);
			console.log('data:', data);
			// Redirect to login page
			goto('/chasseur/connexion');
		} catch (error) {
			showErrors = true;
			const message = (error as Error).message || 'Une erreur est survenue';
			errorMessages.push(message);
		}
	};

	onMount(() => {
		if (errorMessages.length > 0) {
			showErrors = true;
		}
		console.log('Component mounted, formData:', formData);
	});
</script>

<div class="main">
	<div class="form-container">
		<form on:submit|preventDefault={postForm}>

			<label for="lastname">Nom :</label>
			<input
				type="text"
				id="lastname"
				bind:value={formData.lastname}
				title="Le nom doit contenir entre 2 et 30 caractères alphabétiques."
			/>

			<label for="firstname">Prénom :</label>
			<input
				type="text"
				id="firstname"
				bind:value={formData.firstname}
				title="Le prénom doit contenir entre 2 et 30 caractères alphabétiques."
			/>

			<label for="email">Email :</label>
			<input
				type="email"
				id="email"
				bind:value={formData.email}
				title="Entrez une adresse email valide."
			/>

			<label for="password">Mot de passe :</label>
			<input
				type="password"
				id="password"
				bind:value={formData.password}
				title="Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre."
			/>

			<label for="passwordValidation">Confirmation mot de passe :</label>
			<input
				type="password"
				id="passwordValidation"
				bind:value={formData.passwordValidation}
				title="Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule et un chiffre."
			/>

			{#if showErrors && errorMessages.length > 0}
				<div class="error-container">
					{#each errorMessages as message (message)}
						<p class="error">{message}</p>
					{/each}
				</div>
			{/if}

			<button class="submit" type="submit">Soumettre</button>
			<div class="login">
				<a href="/chasseur/connexion"><p>Vous avez déjà un compte?</p></a>
			</div>
		</form>
	</div>
</div>

<style>
	.main {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: #f0f2f5;
		font-family: Arial, sans-serif;
	}

	.form-container {
		background-color: white;
		padding: 20px;
		border-radius: 5px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		width: 90%;
		max-width: 400px;
	}

	label {
		display: block;
		margin-bottom: 5px;
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
		background-color: #bf6a03;
	}

	.error-container {
		margin-bottom: 10px;
	}

	.error {
		color: red;
		margin: 5px 0;
	}

	.login {
		text-align: center;
		margin-top: 10px;
	}

	.login a {
		color: #d67b03;
		text-decoration: none;
	}
</style>
