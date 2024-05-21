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
let confirmationPassword: string = ""; // Add missing type declaration

let passwordMatch = false;

async function submit() {
    if (passwordMatch = registrationData.password === confirmationPassword) {
        try {
            const response = await fetch('http://localhost:3000/chasseur/inscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registrationData)
            });

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
}

export const loginApi = async (loginData: { email: string, password: string }) => {
    try {
        const response = await fetch('http://localhost:3000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(loginData)
        });

        if (!response.ok) {
            throw new Error(`Login API request failed with status ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error('Error during login:', error);
        throw error;
    }
}
