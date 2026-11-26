import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cg-button")
export class Button extends LitElement {
    static styles = css`
        button {
            width: 100%;
            font-size: inherit;
            text-align: center;

            background-color: inherit;
            color: inherit;

            border: 0;
            padding: var(--padding);
        }

        button:hover {
            background-color: #808080;
            cursor: pointer;
        }

        button.expand {
            height: 100%;
            border-left: var(--border);
            padding: 0 calc(var(--padding) * 2);
        }
    `;

    @property({ type: Boolean })
    expand: boolean = false;

    render() {
        return html`
            <button class="${this.expand ? "expand" : ""}">
                <slot></slot>
            </button>
        `;
    }
}