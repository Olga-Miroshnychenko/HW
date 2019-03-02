import { LoginComponent } from './components/login.component';
import { HomeComponent } from './components/home.component';
import { NotFoundComponent } from './components/notfound.component';
import { RegistionComponent } from './components/registion.component';

const routes = {
    '/': new HomeComponent(),
    '/login': new LoginComponent(),
    '**': new NotFoundComponent(),
    '/signup': new RegistionComponent(),


};

const router = () => {
    const container = document.querySelector('app-container');
    const url = location.hash.slice(1).toLowerCase() || '/';

    const component = routes[url] || routes['**'];
    container.innerHTML = component.render();
    component.afterRender();
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);



