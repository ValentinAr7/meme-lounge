import { createMeme, getMemeById } from '../api/memes.js';
import { html } from '../lib.js'


const editTemplate = (meme, onSubmit) => html`
<section id="edit-meme">
<form @click=${onSubmit}id="edit-form">
    <h1>Edit Meme</h1>
    <div class="container">
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title .value=${meme.title}">
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description .value=${meme.description}">
                Programming is often touted as a smart and lucrative career path.
                It's a job that (sometimes) offers flexibility and great benefits.
                But it's far from sunshine and Nyan Cat rainbows. The hours are long.
                The mistakes are frustrating. And your eyesight is almost guaranteed to suffer.
                These memes cover most of the frustration (and funny moments) of programming.
                At least we can laugh through the pain. 
            </textarea>
        <label for="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl}>
        <input type="submit" class="registerbtn button" value="Edit Meme">
    </div>
</form>
</section>
`

export async function editView(ctx) {
    const meme = getMemeById(ctx.params.id)
    ctx.render(editTemplate(onSubmit))

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target)

    //     const meme = {
    //         title: formData.get('title'),
    //         description: formData.get('description'),
    //         imageUrl: formData.get('imageUrl')
    //     }

    //     if (meme.title == '' || meme.description == '' || meme.imageUrl == '') {
    //         return alert('All fields are requiered')
    //     }


    //     await createMeme(meme)
    //     event.target.reset()
    //     ctx.page.redirect('/memes')
    }

}