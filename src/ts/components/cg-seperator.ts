import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cg-seperator")
export class Seperator extends LitElement {
    static styles = css`
        :host {
            height: 100%;
        }

        hr {
            border: 0;
            margin: 0;
        }

        hr.vr {
            border-right: var(--border);
            height: 100%;
        }
    `;

    @property({ type: Boolean })
    vertical: boolean = false;

    render() {
        return html`
            <hr class="${this.vertical ? "vr" : ""}">
        `;
    }
}