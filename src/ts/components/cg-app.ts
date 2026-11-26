import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cg-app")
export class App extends LitElement {
    static styles = css`
        @font-face {
            font-family: "Source Sans 3";
            src: url("/src/fonts/SourceSans3-VariableFont_wght.ttf");
        }

        :host {
            --border-width: 0.3rem;
            --border: var(--border-width) solid red;
            --padding: 0.3rem;

            display: flex;
            height: 100vh;
            font-family: "Source Sans 3", sans-serif;
            font-size: 2rem;

            background-color: var(--background-color, black);
            color: var(--color, white);

            border: var(--border);
        }
    `;

    render() {
        return html`
            <slot></slot>
        `
    }
}