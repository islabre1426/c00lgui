import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cgm-content")
export class MainContent extends LitElement {
    render() {
        return html`
            <main></main>
        `;
    }
}