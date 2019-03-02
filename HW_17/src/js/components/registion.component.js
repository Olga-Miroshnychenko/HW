import { AuthService2 } from './../services/auth.service';

export class RegistionComponent {
  constructor() {
    this._authService2 = new AuthService2();
  }
  render() {
    return `
        <div class="auth-wrap d-flex mt-5">
            <div class="auth-form col col-6 mx-auto my-auto">
                <h3>SignUp to Social.</h3>
                <p class="text-secondary">Enter your information to signup your Social account.</p>
                <form name="loginForm" novalidate>
                    <div class="form-group">
                        <input type="email" class="form-control form-control-sm" id="email" placeholder="name@example.com" required data-pattern="^\S+@[a-z]+\.[a-z]+$">
                        <input type="password" class="form-control form-control-sm" id="password" placeholder="password" required data-pattern="\S+">
                        <input type="text" class="form-control form-control-sm" id="first_name" placeholder="Your Name" >
                        <input type="text" class="form-control form-control-sm" id="last_name" placeholder="Your Last Name">
                        <input type="text" class="form-control form-control-sm" id="nickname" placeholder="Your Nickname">
                        <input type='text' class="form-control form-control-sm" id='date_of_birth_day' placeholder="Day">
                        <input type='text' class="form-control form-control-sm" id='date_of_birth_year' placeholder="Year">
                        <input type="text" class="form-control form-control-sm" id="country" placeholder="Your Country">
                        <input type="tel" class="form-control form-control-sm" id="phone" placeholder="Your number">
                        <input type='text' class="form-control form-control-sm" id="city" placeholder="Your city">
                        <input type='text' class="form-control form-control-sm" id='gender_orientation' placeholder="Your gender">
                        <input type='text' class="form-control form-control-sm" id='date_of_birth_month' placeholder="Month">   
                 <div class="d-flex mt-5">
                            <button type="submit" class="btn btn-primary btn-sm">SignUp</button>
                        </div>
                    </div>
                </form>
            </div>
            <!-- /.auth-form -->
            <div class="auth-bg col col-6">
            </div>
            <!-- /.auth-bg -->
        </div>
        <!-- /.auth-wrap -->
        `;
  }
  afterRender() {
    document.forms['loginForm'].addEventListener('submit', (e) => {
      e.preventDefault();
      const email = e.target.elements['email'].value;
      const password = e.target.elements['password'].value;
      const first_name = e.target.elements['first_name'].value;
      const nickname = e.target.elements['nickname'].value;
      const last_name = e.target.elements['last_name'].value;
      const phone = e.target.elements['phone'].value;
      const gender_orientation = e.target.elements['gender_orientation'].value;
      const city = e.target.elements['city'].value;
      const country = e.target.elements['country'].value;
      const date_of_birth_day = e.target.elements['date_of_birth_day'].value;
      const date_of_birth_month = e.target.elements['date_of_birth_month'].value
      const date_of_birth_year = e.target.elements['date_of_birth_year'].value;
      if (!email || !password) return;
      this._authService2.registion(email, password, nickname, first_name, last_name, phone, gender_orientation, city, country, date_of_birth_day, date_of_birth_month, date_of_birth_year)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }
}
