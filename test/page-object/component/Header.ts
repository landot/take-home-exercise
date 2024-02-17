import { Selector } from "testcafe";


export class Header {
    root: Selector;
    parentProjectLink: Selector;
    projectLink: Selector;

    constructor () {
        this.root = Selector('#repository-container-header');
        this.parentProjectLink = this.root.find('.author');
        this.projectLink = this.root.find('strong[itemprop="name"]');
    }
}
