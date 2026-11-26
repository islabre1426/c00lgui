import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cgm-footer")
export class Footer extends LitElement {
    static styles = css`
        footer {
            border-top: var(--border);
            display: grid;
            grid-template-columns: 1fr var(--border-width) 1fr;
        }
    `;

    render() {
        return html`
            <footer>
                <cg-button>Button</cg-button>
                <cg-seperator vertical></cg-seperator>
                <cg-button>Button</cg-button>
            </footer>
        `;
    }
}