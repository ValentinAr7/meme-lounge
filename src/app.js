import { page, render } from './lib.js'

const main = document.querySelector('main')

page(decorateContext);
page('/', () => console.log('home'));
page('/memes', () => console.log('catalog'));
page('/memes/:id', () => console.log('details'));
page('/edit/:id', () => console.log('edi'));
page('/login', () => console.log('login'));
page('/register', () => console.log('register'));
page('/create', () => console.log('create'));
page('/profile', () => console.log('profile'));


page.start()

function decorateContext(ctx, next) {
    ctx.render = renderMain;

    next()
}

function renderMain(templateResult) {

}