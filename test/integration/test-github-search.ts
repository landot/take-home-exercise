fixture(`A set of examples that illustrate how to use TestCafe API`)
    .page(`https://devexpress.github.io/testcafe/example/`);

test('Text typing basics', async t => {
    await t.expect(123).eql(123);
});