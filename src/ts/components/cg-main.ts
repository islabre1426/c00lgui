import { css, html, LitElement } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("cg-main")
export class Main extends LitElement {
    static styles = css`
        :host {
            width: 70%;

            display: flex;
            flex-direction: column;
        }
    `;

    @property({ attribute: "app-name" })
    appName: string = "";

    @property({ attribute: "first-page-name" })
    firstPageName: string = "";

    render() {
        return html`
            <cgm-header app-name="${this.appName}" first-page-name="${this.firstPageName}"></cgm-header>
            <slot></slot>
        `;
    }
}