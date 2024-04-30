export interface RegistrationOptions {
	email: string;
	password: string;
	firstName: string;
	lastName: string;
	huntingLicenseNumber: string;
}

export const registerApi = async (registrationData: RegistrationOptions) => {
    try {
        const response = await fetch('http://localhost:8080/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(registrationData)
        });

        if (!response.ok) {
            throw new Error(`Registration API request failed with status ${response.status}`);
        }

        return response.json();
    } catch (error) {
        console.error('Error during registration:', error);
        throw error;
    }
}

export const loginApi = async (loginData: { email: string, password: string }) => {
    try {
        const response = await fetch('/login', {
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