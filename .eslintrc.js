module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/typescript/recommended',
        '@vue/prettier',
        '@vue/prettier/@typescript-eslint'
    ],
    plugins: ['prettier'],
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'prettier/prettier': 'error'
    },
    overrides: [
        {
            files: ['**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)'],
            env: {
                mocha: true
            }
        }
    ]
};

// module.exports = {
//     env: {
//       browser: true,
//       es6: true,
//     },
//     extends: ['eslint:recommended', 'plugin:vue/essential'],
//     globals: {
//       Atomics: 'readonly',
//       SharedArrayBuffer: 'readonly',
//       uni: true,
//       wx: true,
//       require: true,
//       process: true,
//       getApp: true,
//       getCurrentPages: true,
//       gioGlobal: true,
//       Component: true,
//       requirePlugin: true,
//       exports: true,
//       define: true,
//       global: true,
//     },
//     parserOptions: {
//       ecmaVersion: 2018,
//       sourceType: 'module',
//     },
//     plugins: ['vue'],
//     rules: {
//       'linebreak-style': ['off', 'windows'],
//       // 单引号
//       quotes: ['error', 'single'],
//       // js部分不要分号
//       semi: [0, 'always'],
//       'no-undef': 'off',
//       // Vue 风格
//       // 指令缩写
//       'vue/v-bind-style': ['error', 'shorthand'],
//       'vue/v-on-style': ['error', 'shorthand'],
//       // 组件/实例的选项的顺序
//       'vue/order-in-components': [
//         'error',
//         {
//           order: [
//             'el',
//             'name',
//             'parent',
//             'functional',
//             ['delimiters', 'comments'],
//             ['components', 'directives', 'filters'],
//             'extends',
//             'mixins',
//             'inheritAttrs',
//             'model',
//             ['props', 'propsData'],
//             'data',
//             'computed',
//             'watch',
//             'LIFECYCLE_HOOKS',
//             'onLoad',
//             'onReady',
//             'onShow',
//             'onHide',
//             'onUnload',
//             'methods',
//             ['template', 'render'],
//             'renderError',
//           ],
//         },
//       ],
//       // 元素/组件特性，属性的顺序
//       'vue/attributes-order': [
//         'error',
//         {
//           order: [
//             'DEFINITION', // e.g. 'is', 'v-is'
//             'LIST_RENDERING', // e.g. 'v-for item in items'
//             'CONDITIONALS', // e.g. 'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
//             'RENDER_MODIFIERS', // e.g. 'v-once', 'v-pre'
//             'GLOBAL', // e.g. 'id'
//             'UNIQUE', // e.g. 'ref', 'key'
//             'SLOT', // e.g. 'v-slot', 'slot'.
//             'TWO_WAY_BINDING', // e.g. 'v-model'
//             'OTHER_DIRECTIVES', // e.g. 'v-custom-directive'
//             'OTHER_ATTR', // e.g. 'custom-prop="foo"', 'v-bind:prop="foo"', ':prop="foo"'
//             'EVENTS', // e.g. '@click="functionCall"', 'v-on="event"'
//             'CONTENT', // e.g. 'v-text', 'v-html'
//           ],
//         },
//       ],
//     },
//     overrides: [
//       {
//         files: ['*.vue'],
//         rules: {
//           indent: 'off',
//         },
//       },
//     ],
//   }
