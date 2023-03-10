import { getAllMemes } from '../api/memes.js'
import { html, } from '../lib.js'


const profileTemplate = (memes) => html`
<!-- Profile Page ( Only for logged users ) -->
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src="/images/female.png">
        <div class="user-content">
            <p>Username: Mary</p>
            <p>Email: mary@abv.bg</p>
            <p>My memes count: 2</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
    ${memes.length == 0 ? html `<p class="no-memes">No memes in database.</p>` : memes.map()}
    </div>
</section>
`

const memeCard = (meme) => html` <div class="user-meme">
<p class="user-meme-title">Bad code can present some problems</p>
<img class="userProfileImage" alt="meme-img" src="/images/3.png">
<a class="button" href="#">Details</a>
</div>`

export async function profileView(ctx) {
    const memes = 
    ctx.render(profileTemplate(memes))
}