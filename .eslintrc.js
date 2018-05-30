// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    node: true,
    es6: true,
    browser: true,
    jest:true
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-b-strongly-recommended-improving-readability
  extends: ['plugin:vue/strongly-recommended', 'airbnb-base'],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  rules: {
    'vue/max-attributes-per-line': [1, {
      'singleline': 1,
      'multiline': {
        'max': 1,
        'allowFirstLine': true
      }
    }],
    'vue/v-on-style': [1,'longform'], // example: v-on:click
    'vue/v-bind-style': [1,'longform'], // example: v-bind:item
    'vue/html-quotes': [1, 'double'],
    'vue/html-closing-bracket-newline': [1, {
      'singleline': 'never',
      'multiline': 'never'
    }],
    'import/no-unresolved': [
      "error",
      {
        "ignore": [ '@' ]
      }
    ],
    'linebreak-style': 'off',
    'func-names': 'off',
    'func-style': 'off',
    'max-len': ['error', 140],
    'arrow-parens': [
      'error',
      'as-needed'
    ],
    'comma-dangle': [
      'error',
      'never'
    ],
    'no-use-before-define': ['error', 'nofunc'],
    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for vuex state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
