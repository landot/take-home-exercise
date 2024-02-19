import { Header } from "../component/Header";
import { MainContent } from "../component/MainContent";


class GitHubRepositoryPage {
    header: Header;
    content: MainContent;

    constructor () {
        this.header = new Header();
        this.content = new MainContent();
    }
}

export default new GitHubRepositoryPage();
