<script lang="ts">
    import { onMount } from 'svelte';

    const loginFormData = { email: '', password: '' };

    async function login(event?: Event) {
        if (event) {
            event.preventDefault();
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /.*/; // Adjust this regex to match your password requirements

        if (!loginFormData.email.match(emailRegex)) {
            alert('Invalid email');
            return;
        }

        if (!loginFormData.password.match(passwordRegex)) {
            alert('Invalid password');
            return;
        }

        try {
            const response = await loginApi(loginFormData);
            console.log('Login successful', response);
            // Handle successful login, e.g., navigate to another page or store user info
        } catch (error) {
            console.error('Error logging in', error);
            alert('Email failed: ' + (error as Error).message);
        }
    }

    async function loginApi(loginFormData: { email: string; password: string; }) { // Define the loginApi function
        const response = await fetch('/api/login', { // Send a POST request to the /api/login endpoint
            method: 'POST', // Use the POST method
            headers: { // Set the request headers
                'Content-Type': 'application/json' // Send the request body as JSON
            },
            body: JSON.stringify(loginFormData) // Convert the loginFormData object to a JSON string
        });

        if (!response.ok) { // Check if the response status is in the range 200-299
            throw new Error('Email failed'); // Throw an error to be caught in the catch block
        }

        return await response.json(); // Return the response body as a JSON object
    }
</script>

<div class="container"> <!-- Add a container div to center the login form -->
    <div id="login"> <!-- Add an id to style the login form -->
        <h2>Login</h2> <!-- Add a heading for the login form -->
        <form on:submit|preventDefault={login}> <!-- Add an event handler for the form submission -->
            <input type="email" bind:value={loginFormData.email} placeholder="Email" required /> <!-- Bind the email input to the loginFormData object -->
            <input type="password" bind:value={loginFormData.password} placeholder="Password" required /> <!-- Bind the password input to the loginFormData object -->
            <button type="submit">Login</button> <!-- Add a submit button to trigger the login function -->
        </form> <!-- Close the form element -->
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

    #login {
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
        background-color: #b56602;
    }
</style>
