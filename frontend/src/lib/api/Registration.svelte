<script lang="ts">	

export interface hunter {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	huntingLicenseNumber: string;
}
export let registrationData : hunter = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    huntingLicenseNumber: ""
};
let confirmationPassword: "";

let passwordMatch = false;

async function submit() {
        if (passwordMatch = registrationData.password === confirmationPassword) {
        try {
            const response = await fetch('http://localhost:3000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registrationData)
            });

            if (response.ok) {
               console.log('Registration successful');
            }   else { 
                console.error('Registration failed', response.statusText);
            }

            
        } catch (error) {
            console.error('Error during registration:', error);
            throw error;
        }
    }
}

	async function register(event?: Event) {
		console.log(FormData)
		if (event) {
			event.preventDefault();
		}

		// Data validation with regex
		const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/;
		const firstNameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/;
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		const huntingLicenseNumberRegex = /^\d{13}$/;
		const passwordRegex = /.; // TODO find a good regexp

		if (!FormData.lastName.match(nameRegex)) {
			alert('Invalid last name');
			return;
		}

		if (!FormData.firstName.match(firstNameRegex)) {
			alert('Invalid first name');
			return;
		}

		if (!FormData.email.match(emailRegex)) {
			alert('Invalid email');
			return;
		}

		if (!FormData.huntingLicenseNumber.match(huntingLicenseNumberRegex)) {
			alert('Invalid hunting license number');
			return;
		}

		if (!FormData.password.match(passwordRegex)) {
			alert(
				'Invalid password. It must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.'
			);
			return;
		}

        registerApi(FormData);
	
	}

</script>

<div class="container">
	<div id="registration">
	<h2>Registration</h2>
	<form on:submit={submit}>
		<input type="text" bind:value={registrationData.lastName} placeholder="Last Name" required />
		<input type="text" bind:value={registrationData.firstName} placeholder="First Name" required />
		<input type="email" bind:value={registrationData.email} placeholder="Email" required />
		<input type="text" bind:value={registrationData.huntingLicenseNumber} placeholder="Hunting License Number" required />
		<input type="password" bind:value={registrationData.password} placeholder="Password" required />
		<input type="password" bind:value={confirmationPassword} placeholder="Confirm Password" required />
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

