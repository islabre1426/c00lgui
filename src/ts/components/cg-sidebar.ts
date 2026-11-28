import { css, html, LitElement } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { getCurrentWindow, LogicalSize } from "@tauri-apps/api/window";

@customElement("cg-sidebar")
export class Sidebar extends LitElement {
    static styles = css`
        :host {
            display: flex;
        }

        #sidebar-main {
            height: 100%;
            width: 100%;

            display: none;
            flex-direction: column;

            border-left: var(--border);
        }

        #sidebar-main.expand {
            display: flex;
        }
    `;

    @property({ type: Boolean })
    expand: boolean = false;

    @query("#sidebar-main")
    sidebarMain!: HTMLElement;

    render() {
        return html`
            <section id="sidebar-main" class="${this.expand ? "expand" : ""}">
                <slot></slot>
            </section>
            <cg-button expand @click=${this.handleSidebar}>
                ${this.expand ? "<" : ">"}
            </cg-button>
        `;
    }

    async handleSidebar() {
        this.expand = !this.expand;
        await this.resizeWindow();
        this.expandSidebar();
    }

    expandSidebar() {
        if (this.expand) {
            this.sidebarMain.style.width = "400px";
        } else {
            this.sidebarMain.style.width = "0px";
        }
    }

    async resizeWindow() {
        const currentWindow = getCurrentWindow();

        const newSize = new LogicalSize(
            800 + (this.expand ? (+ 400) : (0)),
            600
        )

        await currentWindow.setSize(newSize);
    }

    async getCurrentWindowSize() {
        const currentWindow = getCurrentWindow();
        const size = await currentWindow.innerSize();
        const logical = size.toLogical(await currentWindow.scaleFactor());

        return logical
    }
}