import { Selector } from "testcafe";


export class MainContent {
    root: Selector;
    directoryFile: Selector;
    readme: Selector;

    constructor () {
        this.root = Selector('#repo-content-turbo-frame');
        this.directoryFile = this.root.find('.react-directory-row');
        this.readme = this.root.find('article.markdown-body');
    }
}
