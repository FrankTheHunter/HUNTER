<!-- <script lang="ts">
	import registration from '$lib/api/registration.svelte';
</script>

<Registration />
 -->
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
    interface Hunter {
        email: string;
        password: string;
        firstname: string;
        lastname: string;
        licenseNumber: string;
    }

    let registrationData: Hunter = {
		licenseNumber: "",
    lastname: "",
    firstname: "",
    email: "",
    password: ""
    };

    let confirmationPassword = "";

    /* const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s-]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const huntingLicenseNumberRegex = /^\d{13}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; */

    async function register(event: Event) {
        event.preventDefault();

        /* if (!registrationData.lastName.match(nameRegex)) {
            alert('Invalid last name');
            return;
        }

        if (!registrationData.firstName.match(nameRegex)) {
            alert('Invalid first name');
            return;
        }

        if (!registrationData.email.match(emailRegex)) {
            alert('Invalid email');
            return;
        }

        if (!registrationData.huntingLicenseNumber.match(huntingLicenseNumberRegex)) {
            alert('Invalid hunting license number');
            return;
        }

        if (!registrationData.password.match(passwordRegex)) {
            alert('Invalid password. It must contain at least 8 characters, one uppercase letter, one lowercase letter, and one number.');
            return;
        }

        if (registrationData.password !== confirmationPassword) {
            alert('Passwords do not match');
            return;
        } */

        try {
            const response = await fetch('http://localhost:5173/hunters_registered/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registrationData)
            });
			console.log('response :' + response);
            if (response.ok) {
                console.log('Registration successful');
            } else {
                console.error('Registration failed', response.statusText);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            throw error;
        }
    }
</script>

<div class="container">
    <div id="registration">
        <h2>Registration</h2>
        <form on:submit|preventDefault={register}>
            <input type="text" bind:value={registrationData.lastname} placeholder="Last Name" required />
            <input type="text" bind:value={registrationData.firstname} placeholder="First Name" required />
            <input type="email" bind:value={registrationData.email} placeholder="Email" required />
            <input type="text" bind:value={registrationData.licenseNumber} placeholder="Hunting License Number" required />
            <input type="password" bind:value={registrationData.password} placeholder="Password" required />
        	<!--<input type="password" bind:value={confirmationPassword} placeholder="Confirm Password" required />-->
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
        background-color: #c76a02;
    }
</style>


