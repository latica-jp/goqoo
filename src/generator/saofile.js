// @ts-check

/**
 * @type { import('sao').GeneratorConfig['prompts'] }
 */
const prompts = function prompts() {
  return [
    {
      type: 'input',
      name: 'name',
      message: 'Project name',
      default: this.outDirName,
    },
    {
      type: 'input',
      name: 'description',
      message: 'Project description',
    },
  ]
}

/**
 * @type { import('sao').GeneratorConfig['actions'] }
 */
const actions = function () {
  return [
    {
      type: 'add',
      files: '**',
      filters: {
        'src/apps/**': false,
      },
      // @ts-expect-error
      templateDir: this.opts.answers.templateDir,
    },
    {
      type: 'modify',
      files: 'package.json',
      handler: (data) => ({
        ...data,
        name: this.answers.name.toLowerCase(),
        description: this.answers.description,
      }),
    },
  ]
}

/**
 * @type { import('sao').GeneratorConfig }
 */
module.exports = {
  prompts,
  actions,
  async completed() {
    this.gitInit()
    await this.npmInstall()
    this.showProjectTips()
  },
}
