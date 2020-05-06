module.exports = {
  extends: [
    'airbnb-base',
    'plugin:promise/recommended'
  ],
  plugins: [
    'promise'
  ],
  parser: 'babel-eslint',
  rules: {
    'arrow-parens': [2, 'always'],
    'arrow-body-style': [0, 'as-needed'],
    'arrow-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    camelcase: [0],
    'comma-dangle': [2, 'never'],
    curly: [2],
    'function-paren-newline': [0],
    'guard-for-in': [0],
    'implicit-arrow-linebreak': [0],
    'no-confusing-arrow': [0],
    'import/no-cycle': [0],
    'import/prefer-default-export': [0],
    'lines-between-class-members': [0],
    'no-await-in-loop': [0],
    'no-console': [
      2,
      {
        allow: ['log', 'info', 'warn', 'error']
      }
    ],
    'no-constant-condition': [
      2,
      {
        checkLoops: false
      }
    ],
    'no-continue': [0],
    'no-else-return': [0],
    'no-multi-spaces': [0],
    'no-param-reassign': [0],
    'no-plusplus': [0],
    'no-shadow': [0],
    'no-restricted-syntax': [2, 'never'],
    'no-underscore-dangle': [0],
    'no-use-before-define': [0],
    'object-curly-newline': [
      0,
      {
        multiline: true
      }
    ],
    'object-curly-spacing': [2, 'never'],
    'space-before-function-paren': [2, 'always'],
    'class-methods-use-this': [0],
    'spaced-comment': [0]
  },
  overrides: [
    {
      files: ['**/*.test.js'],
      rules: {
        'prefer-arrow-callback': 0,
        'func-names': 0,
        'no-loop-func': 0
      }
    }
  ],
  globals: {
    describe: true,
    it: true
  },
  env: {
    node: true,
    mocha: true
  }
};
