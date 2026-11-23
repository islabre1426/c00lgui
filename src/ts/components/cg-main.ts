import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cg-main")
export class Main extends LitElement {
    render() {
        return html`
            <cgm-header></cgm-header>
            <slot></slot>
        `;
    }
}