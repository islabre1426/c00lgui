import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cgm-content")
export class MainContent extends LitElement {
    static styles = css`
        :host {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        main {
            height: 100%;
        }
    `;

    @property()
    name: string = "";

    render() {
        return html`
            <main>
                <slot name="main"></slot>
            </main>

            <slot name="footer"></slot>
        `;
    }
}