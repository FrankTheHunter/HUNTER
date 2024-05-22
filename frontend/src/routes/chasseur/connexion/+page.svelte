<script lang="ts">
    
const loginFormData = {email: '', password: ''};

    async function login(event?: Event) {
        if (event) {
            event.preventDefault();
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /.*/;

        if (!loginFormData.email.match(emailRegex)) {
            alert('Invalid email');
            return;
        }

        if (!loginFormData.password.match(passwordRegex)) {
            alert('Invalid password');
            return;
        }

        loginApi(loginFormData);
    }


	function loginApi(loginFormData: { email: string; password: string; }) {
		throw new Error("Function not implemented.");
	}
</script>

<div class="container">
    <div id="login">
        <h2>Login</h2>
        <form on:submit|preventDefault={login}>
            <input type="email" bind:value={loginFormData.email} placeholder="Email" required />
            <input type="password" bind:value={loginFormData.password} placeholder="Password" required />
            <button type="submit">Login</button>
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
        background-color: #d67b03;
    }
</style>
