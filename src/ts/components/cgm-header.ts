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
            grid-template-columns: 1fr 0.3rem 2fr 0.3rem 1fr;

            border: var(--border);
            border-width: var(--border-width) 0;
        }

        div {
            margin: 0.15rem;
        }
    `;

    @property({ attribute: "app-name" })
    appName: string = "";

    @property({ attribute: "first-page-name" })
    firstPageName: string = "";

    render() {
        return html`
            <div id="title">${this.appName}</div>

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