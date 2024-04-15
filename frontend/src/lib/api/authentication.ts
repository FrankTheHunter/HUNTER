export type RegistrationDto = {
	name: string,
	firstName: string,
	email: string,
	password: string,
	loginEmail: string,
	huntingLicenseNumber: string,
	loginPassword: string,
}

export const registerApi = (registrationData: RegistrationDto) => {
    console.log('TODO implement the fetch logic', registrationData);
    // TODO
}
