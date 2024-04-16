<script lang="ts">
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
