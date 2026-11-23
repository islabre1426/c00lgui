import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cg-seperator")
export class Seperator extends LitElement {
    @property()
    vertical: boolean = false;

    render() {
        return html`
            <hr class="${this.vertical ? "vr" : ""}">
        `;
    }
}