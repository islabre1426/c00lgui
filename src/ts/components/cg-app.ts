import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cg-app")
export class App extends LitElement {
    static styles = css`
    :host {
        display: block;
        height: 100vh;
        background-color: var(--background-color, black);
    }
    `;

    render() {
        return html`
            <slot></slot>
        `
    }
}