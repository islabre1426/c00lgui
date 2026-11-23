import { html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cgm-header")
export class MainHeader extends LitElement {
    @property()
    title: string = "";

    @property({ attribute: "first-page-name" })
    firstPageName: string = "";

    render() {
        return html`
            <span id="title">${this.title}</span>

            <nav>
                <button id="nav-prev">&lt;</button>
                <cg-seperator vertical>
                <span id="nav-indicator">${this.firstPageName}</span>
                <cg-seperator vertical>
                <button id="nav-next">&gt;</button>
            </nav>
        `;
    }
}