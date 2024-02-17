import { Selector } from "testcafe";

export default class GitHubRepository {
    name: Selector;

    constructor () {
        this.name = Selector('#blah');
    }
}