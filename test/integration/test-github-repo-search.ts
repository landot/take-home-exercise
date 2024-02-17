import { expectedDescription, expectedLicense, parentProjectName, projectName } from "../constant/test-data";
import GitHubApiUtil from "../util/github-api-util";
import page from "../page-object/github-repository";

fixture('Get first "create-react-app" search result and navigate to repo').beforeEach(async (t) => {
    const githubAPI = new GitHubApiUtil();
    const response = await githubAPI.getRepositorySearchResults('create-react-app');
    t.ctx.firstRepo = response.items[0];
    await t.navigateTo(t.ctx.firstRepo.html_url);
});

test('Verify first result data and repo page loads', async (t) => {
    // API Assertions
    await t
        .expect(t.ctx.firstRepo.description)
        .eql(expectedDescription)
        .expect(t.ctx.firstRepo.license)
        .eql(expectedLicense);

    // UI Assertions
    await t
        // verify parent project and project text in header
        .expect(page.header.parentProjectLink.visible)
        .ok()
        .expect(page.header.parentProjectLink.innerText)
        .eql(parentProjectName)
        .expect(page.header.projectLink.visible)
        .ok()
        .expect(page.header.projectLink.innerText)
        .eql(projectName)
        // verify files and readme
        .expect(page.content.directoryFile.visible)
        .ok()
        .expect(page.content.directoryFile.count)
        .gt(0)
        .expect(page.content.readme.visible)
        .ok()
});
