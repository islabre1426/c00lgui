import { css, html, LitElement } from "lit";
import { customElement, property, queryAssignedElements } from "lit/decorators.js";
import type { MainContent } from "./cgm-content";

@customElement("cg-main")
export class Main extends LitElement {
    static styles = css`
        :host {
            width: 800px;
            height: 100%;

            display: flex;
            flex-direction: column;
        }
    `;

    @property({ attribute: "first-page-name" })
    firstPageName: string = "";

    @queryAssignedElements({ selector: 'cgm-content:first-child' })
    firstPage!: Array<MainContent>

    render() {
        return html`
            <cgm-header first-page-name="${this.firstPageName}"></cgm-header>
            <slot @slotchange=${this.setFirstPageName}></slot>
        `;
    }

    setFirstPageName() {
        if (this.firstPage[0]) {
            this.firstPageName = this.firstPage[0].name;
        }
    }
}