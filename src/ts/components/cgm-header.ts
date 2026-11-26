import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cgm-header")
export class MainHeader extends LitElement {
    static styles = css`
        :host {
            text-align: center;
        }

        nav {
            display: grid;
            grid-template-columns: 1fr var(--border-width) 2fr var(--border-width) 1fr;

            border: var(--border);
            border-width: var(--border-width) 0;

            align-items: center;
        }

        div {
            padding: var(--padding);
        }
    `;

    @property({ attribute: "first-page-name" })
    firstPageName: string = "";

    render() {
        return html`
            <div id="title">${document.title}</div>

            <nav>
                <cg-button name="nav-prev">&lt;</cg-button>
                <cg-seperator vertical></cg-seperator>
                <span id="nav-indicator">${this.firstPageName}</span>
                <cg-seperator vertical></cg-seperator>
                <cg-button name="nav-next">&gt;</cg-button>
            </nav>
        `;
    }
}