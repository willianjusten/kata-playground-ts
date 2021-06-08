module.exports = (plop) => {
  plop.setGenerator('kata', {
    description: 'Create a kata',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your kata exercise name? Without spaces and symbols.',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/{{name}}/index.ts',
        templateFile: 'templates/index.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/{{name}}/README.md',
        templateFile: 'templates/README.md.hbs',
      },
      {
        type: 'add',
        path: '../src/{{name}}/test.ts',
        templateFile: 'templates/test.ts.hbs',
      },
    ],
  })
}
