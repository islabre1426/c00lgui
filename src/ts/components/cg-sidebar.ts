import { css, html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cg-sidebar")
export class Sidebar extends LitElement {
    static styles = css`
        :host {
            display: flex;
            width: 30%;

            border-left: var(--border);
        }

        #sidebar-main {
            height: 100%;
            width: 100%;

            display: flex;
            flex-direction: column;
        }
    `;

    render() {
        return html`
            <section id="sidebar-main">
                <slot></slot>
            </section>
            <cg-button expand>&gt;</cg-button>
        `;
    }
}