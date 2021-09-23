const getRepos = require('../local-requisitos/requisito4')

describe('requisito - 4', () => {
    test("Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.", async () => {
        const name = await getRepos(`https://api.github.com/orgs/tryber/repos`)
        expect(name).toContain("sd-01-week4-5-project-todo-list")
        expect(name).toContain("sd-01-week4-5-project-meme-generator")
    })
})