import { html } from '../lib.js'


const catalogTemplate = () => html `
`

export function catalogView(ctx){
    ctx.render(catalogTemplate())
}