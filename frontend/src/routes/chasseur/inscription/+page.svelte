<script lang="ts">
    import {type RegistrationDto, registerApi } from '$lib/api/authentication';
    const formData: RegistrationDto = {
        name: '',
        firstName: '',
        email: '',
        password: '',
        loginEmail: '',
        huntingLicenseNumber: '',
        loginPassword: ''
    }

	async function register(event?: Event) {
		if (event) {
			event.preventDefault();
		}

		// Data validation with regex
		const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/;
		const firstNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const huntingLicenseNumberRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
		const passwordRegex = /.*/; // TODO find a good regexp

		if (!formData.name.match(nameRegex)) {
			alert('Invalid name');
			return;
		}

		if (!formData.firstName.match(firstNameRegex)) {
			alert('Invalid first name');
			return;
		}

		if (!formData.email.match(emailRegex)) {
			alert('Invalid email');
			return;
		}

		if (!formData.huntingLicenseNumber.match(huntingLicenseNumberRegex)) {
			alert('Invalid hunting license number');
			return;
		}

		if (!formData.password.match(passwordRegex)) {
			alert(
				'Invalid password. It must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.'
			);
			return;
		}

        registerApi(formData);
	}
</script>

<div class="container">
	<div id="registration">
		<h2>Registration</h2>
		<form on:submit|preventDefault={register}>
			<input type="text" bind:value={formData.name} placeholder="Name" required />
			<input type="text" bind:value={formData.firstName} placeholder="First Name" required />
			<input type="email" bind:value={formData.email} placeholder="Email" required />
			<input
				type="text"
				bind:value={formData.huntingLicenseNumber}
				placeholder="Hunting License Number"
				required
			/>
			<input type="password" bind:value={formData.password} placeholder="Password" required />
			<button type="submit">Register</button>
		</form>
	</div>
</div>

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

	#registration {
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

