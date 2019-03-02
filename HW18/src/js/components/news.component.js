import { ActiveRoute } from '../core/active-route.service';
import { AuthService3 } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { Routing } from '../core/routing.service';



export class NewsComponent {
    constructor() {
        this._activeRoute = new ActiveRoute();
        this._authService3 = new AuthService3();
        this._userService = new UserService();

        this._authUserId = this._authService3.userId;
        this._activeUserId = this._activeRoute.parseRequestURL().id;
        this._user;
        this._routing = new Routing();
    }
    async beforeRender() {
        this._user = await this._authService3.getUser(this._authUserToken);
        console.log(this._user);
    }
    //     if (this._authService.token) {
    //         this._routing.navigate(`/users/${this._authService.userId}`);
    //     }
    // }
    render() {
        return `
        
        <img  src="${this._user.my_images[0]}" >
        
    `;
    }

    afterRender() {
        document.images[0].addEventListener('load', (e) => {
            e.preventDefault();
            const img = e.target.elements['img'].value;
            this._authService3.getUser(token)
                .then((response) => {
                    console.log(response);
                })
                .catch((err) => {
                    console.log(err);
                });
        });
    }
}
