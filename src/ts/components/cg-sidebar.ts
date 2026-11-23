import { html, LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("cg-sidebar")
export class Sidebar extends LitElement {
    render() {
        return html`
            <section id="sidebar-main">
                <slot></slot>
            </section>
            <button id="sidebar-button">&gt;</button>
        `;
    }
}