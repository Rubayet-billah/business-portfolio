/** @type {import('@commitlint/types').UserConfig} */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      1,
      'always',
      ['web', 'api', 'dashboard', 'config', 'types', 'sdk', 'ui', 'repo', 'deps', 'ci'],
    ],
  },
};
