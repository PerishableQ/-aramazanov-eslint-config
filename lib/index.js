"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'jsdoc',
        'react',
        'react-hooks',
        'import',
        'jsx-a11y',
        'sonarjs',
        'optimize-regex',
        'promise'
    ],
    extends: [
        'airbnb',
        'airbnb-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended',
        'plugin:sonarjs/recommended',
        'plugin:optimize-regex/recommended',
        'plugin:promise/recommended'
    ],
    rules: {
        /**
         * rule is aimed at eliminating unused variables, functions, and function parameters
         */
        '@typescript-eslint/no-unused-vars': "warn" /* Setting.WARN */,
        /**
         * Require explicit return and argument types on exported functions' and classes' public class methods.
         *
         * Explicit types for function return values and arguments makes it clear to any calling code what is the module boundary's input and output.
         * Adding explicit type annotations for those types can help improve code readability.
         * It can also improve TypeScript type checking performance on larger codebases
         */
        '@typescript-eslint/explicit-module-boundary-types': "off" /* Setting.OFF */,
        /**
         * Disallow require statements except in import statements
         */
        '@typescript-eslint/no-var-requires': "error" /* Setting.ERROR */,
        /**
         * This rule is aimed at maintaining code consistency and improving code readability by encouraging use of the
         * dot notation style whenever possible. As such, it will warn when it encounters an unnecessary use of square-bracket notation.
         *
         * Examples of incorrect code for this rule:
         *
         * /*eslint dot-notation: "error"
         *
         * var x = foo["bar"];
         *
         * Examples of correct code for this rule:
         *
         * /*eslint dot-notation: "error"
         *
         * var x = foo.bar;
         *
         * var x = foo[bar]
         */
        'dot-notation': "off" /* Setting.OFF */,
        '@typescript-eslint/dot-notation': ["warn" /* Setting.WARN */],
        /**
         * TypeScript allows placing explicit public, protected, and private accessibility modifiers in front of class members.
         * The modifiers exist solely in the type system and just server to describe who is allowed to access those members.
         *
         * Leaving off accessibility modifiers makes for less code to read and write. Members are public by default.
         */
        '@typescript-eslint/explicit-member-accessibility': "off" /* Setting.OFF */,
        '@typescript-eslint/indent': 'off',
        /**
         * Disallow empty functions
         *
         * Empty functions can reduce readability because readers need to guess whether it’s intentional or not. So writing
         * a clear comment for empty functions is a good practice.
         *
         * function foo() {
         *     // do nothing.
         * }
         */
        'no-empty-function': "off" /* Setting.OFF */,
        '@typescript-eslint/no-empty-function': "off" /* Setting.OFF */,
        /**
         * The any type in TypeScript is a dangerous "escape hatch" from the type system. Using any disables many type
         * checking rules and is generally best used only as a last resort or when prototyping code. This rule reports
         * on explicit uses of the any keyword as a type annotation.
         *
         * TypeScript's --noImplicitAny compiler option prevents an implied any, but doesn't prevent any from being explicitly used the way this rule does.
         */
        '@typescript-eslint/no-explicit-any': "error" /* Setting.ERROR */,
        /**
         * TypeScript is able to infer the types of parameters, properties, and variables from their default or initial values.
         * There is no need to use an explicit : type annotation on one of those constructs initialized to a boolean, number, or string.
         * Doing so adds unnecessary verbosity to code -making it harder to read- and in some cases can prevent TypeScript
         * from inferring a more specific literal type (e.g. 10) instead of the more general primitive type (e.g. number)
         */
        '@typescript-eslint/no-inferrable-types': "error" /* Setting.ERROR */,
        // Prefer the newer ES6-style imports over require()
        '@typescript-eslint/no-require-imports': "error" /* Setting.ERROR */,
        /**
         * Disallow the use of variables before they are defined
         *
         * In JavaScript, prior to ES6, variable and function declarations are hoisted to the top of a scope, so it’s possible
         * to use identifiers before their formal declarations in code. This can be confusing and some believe it is best
         * to always declare variables and functions before using them.
         *
         * In ES6, block-level bindings (let and const) introduce a “temporal dead zone” where a ReferenceError will be
         * thrown with any attempt to access the variable before its declaration.
         */
        'no-use-before-define': "off" /* Setting.OFF */,
        '@typescript-eslint/no-use-before-define': "off" /* Setting.OFF */,
        /**
         * TypeScript historically allowed a form of code organization called "custom modules" (module Example {}), later renamed to "namespaces" (namespace Example).
         *
         * Namespaces are an outdated way to organize TypeScript code. ES2015 module syntax is now preferred (import/export).
         *
         * For projects still using custom modules / namespaces, it's preferred to refer to them as namespaces. This rule reports when the module keyword is used instead of namespace.
         *
         * This rule does not report on the use of TypeScript module declarations to describe external APIs (declare module 'foo' {}).
         *
         * Examples
         * ❌ Incorrect
         * module Example {}
         * ✅ Correct
         * namespace Example {}
         *
         * declare module 'foo' {}
         */
        '@typescript-eslint/prefer-namespace-keyword': "off" /* Setting.OFF */,
        /**
         * Enforce the consistent use of either backticks, double, or single quotes
         *
         * JavaScript allows you to define strings in one of three ways: double quotes, single quotes, and backticks (as of ECMAScript 6). For example:
         *
         * var double = "double";
         * var single = 'single';
         * var backtick = `backtick`;    // ES6 only
         *
         * Each of these lines creates a string and, in some cases, can be used interchangeably. The choice of how to
         * define strings in a codebase is a stylistic one outside of template literals (which allow embedded of expressions to be interpreted).
         *
         * Many codebases require strings to be defined in a consistent manner.
         */
        quotes: "off" /* Setting.OFF */,
        '@typescript-eslint/quotes': ["error" /* Setting.ERROR */, 'single', { avoidEscape: true }],
        /**
         * Spacing around type annotations improves readability of the code. Although the most commonly used style
         * guideline for type annotations in TypeScript prescribes adding a space after the colon, but not before it,
         * it is subjective to the preferences of a project. For example:
         *
         * // with space after, but not before (default if no option is specified)
         * let foo: string = "bar";
         *
         * // with no spaces
         * let foo:string = "bar";
         *
         * // with space before and after
         * let foo : string = "bar";
         *
         * // with space before, but not after
         * let foo :string = "bar";
         *
         * // with spaces before and after the fat arrow (default if no option is specified)
         * type Foo = (string: name) => string;
         *
         * // with no spaces between the fat arrow
         * type Foo = (string: name)=>string;
         *
         * // with space after, but not before the fat arrow
         * type Foo = (string: name)=> string;
         *
         * // with space before, but not after the fat arrow
         * type Foo = (string: name) =>string;
         */
        '@typescript-eslint/type-annotation-spacing': "error" /* Setting.ERROR */,
        /**
         * Enforce consistent brace style for blocks
         *
         * function foo() {
         *   return true;
         * }
         *
         * if (foo) {
         *   bar();
         * }
         *
         * if (foo) {
         *   bar();
         * } else {
         *   baz();
         * }
         */
        'brace-style': ["error" /* Setting.ERROR */, '1tbs'],
        /**
         * Require or disallow trailing commas
         *
         * Trailing commas in object literals are valid according to the ECMAScript 5 (and ECMAScript 3!) spec. However,
         * IE8 (when not in IE8 document mode) and below will throw an error when it encounters trailing commas in JavaScript.
         *
         * var foo = {
         *     bar: "baz",
         *     qux: "quux",
         * };
         *
         *  var foo = {
         * -    bar: "baz",
         * -    qux: "quux"
         * +    bar: "baz"
         *  };
         */
        'comma-dangle': ["error" /* Setting.ERROR */, 'always-multiline'],
        /**
         * Enforce consistent brace style for all control statements
         *
         * JavaScript allows the omission of curly braces when a block contains only one statement. However, it is
         * considered by many to be best practice to never omit curly braces around blocks, even when they are optional,
         * because it can lead to bugs and reduces code clarity. So the following:
         *
         * if (foo) foo++;
         *
         * Can be rewritten as:
         *
         * if (foo) {
         *     foo++;
         * }
         */
        curly: ["error" /* Setting.ERROR */, 'all'],
        /**
         * Require default cases in switch statements
         *
         * Some code conventions require that all switch statements have a default case, even if the default case is empty, such as:
         *
         * switch (foo) {
         *     case 1:
         *         doSomething();
         *         break;
         *
         *     case 2:
         *         doSomething();
         *         break;
         *
         *     default:
         *     // do nothing
         * }
         */
        'default-case': "error" /* Setting.ERROR */,
        /**
         * Require the use of === and !==
         *
         * It is considered good practice to use the type-safe equality operators === and !== instead of their regular counterparts == and !=.
         */
        eqeqeq: ["error" /* Setting.ERROR */, 'smart'],
        /**
         * Disallow specified identifiers
         */
        'id-blacklist': [
            'off',
            'any',
            'Number',
            'number',
            'String',
            'string',
            'Boolean',
            'boolean',
            'Undefined',
            'undefined'
        ],
        /**
         * Reports invalid alignment of JSDoc block asterisks.
         */
        'jsdoc/check-alignment': "error" /* Setting.ERROR */,
        /**
         * Reports invalid padding inside JSDoc blocks.
         *
         * Ignores parts enclosed in Markdown "code block"'s. For example, the following description is not reported:
         *
         * /**
         *  * Some description:
         *  * ```html
         *  * <section>
         *  *   <title>test</title>
         *  * </section>
         *  * ```
         *  *\
         */
        'jsdoc/check-indentation': "error" /* Setting.ERROR */,
        /**
         * Enforces a consistent padding of the block description.
         */
        'jsdoc/newline-after-description': "error" /* Setting.ERROR */,
        /**
         * Enforce a maximum line length
         *
         * Very long lines of code in any language can be difficult to read. In order to aid in readability and
         * maintainability many coders have developed a convention to limit lines of code to X number of characters (traditionally 80 characters).
         */
        'max-len': ["error" /* Setting.ERROR */, {
                code: 120, 'ignoreComments': true,
                'ignoreTrailingComments': true,
                'ignoreUrls': true,
                'ignoreStrings': true,
                'ignoreTemplateLiterals': true,
                'ignoreRegExpLiterals': true
            }],
        /**
         * Disallow bitwise operators
         *
         * The use of bitwise operators in JavaScript is very rare and often & or | is simply a mistyped && or ||, which will lead to unexpected behavior.
         *
         * var x = y | z;
         */
        'no-bitwise': "warn" /* Setting.WARN */,
        /**
         * Disallow the use of arguments.caller or arguments.callee
         *
         * The use of arguments.caller and arguments.callee make several code optimizations impossible. They have been
         * deprecated in future versions of JavaScript and their use is forbidden in ECMAScript 5 while in strict mode.
         *
         * function foo() {
         *     var callee = arguments.callee;
         * }
         */
        'no-caller': "error" /* Setting.ERROR */,
        /**
         * Disallow the use of eval()
         *
         * JavaScript’s eval() function is potentially dangerous and is often misused. Using eval() on untrusted code
         * can open a program up to several different injection attacks. The use of eval() in most contexts can be
         * substituted for a better, alternative approach to a problem.
         */
        'no-eval': "error" /* Setting.ERROR */,
        /**
         * Disallow new operators with the String, Number, and Boolean objects
         *
         * There are three primitive types in JavaScript that have wrapper objects: string, number, and boolean. These are
         * represented by the constructors String, Number, and Boolean, respectively. The primitive wrapper types are
         * used whenever one of these primitive values is read, providing them with object-like capabilities such as methods.
         * Behind the scenes, an object of the associated wrapper type is created and then destroyed, which is why you
         * can call methods on primitive values, such as:
         *
         * var text = "Hello world".substring(2);
         */
        'no-new-wrappers': "error" /* Setting.ERROR */,
        /**
         * Disallow trailing whitespace at the end of lines
         *
         * Sometimes in the course of editing files, you can end up with extra whitespace at the end of lines. These
         * whitespace differences can be picked up by source control systems and flagged as diffs, causing frustration
         * for developers. While this extra whitespace causes no functional issues, many code conventions require that
         * trailing spaces be removed before check-in.
         */
        'no-trailing-spaces': "error" /* Setting.ERROR */,
        /**
         * Require let or const instead of var
         */
        'no-var': "error" /* Setting.ERROR */,
        /**
         * Enforce the consistent use of the radix argument when using parseInt()
         *
         * When using the parseInt() function it is common to omit the second argument, the radix, and let the function
         * try to determine from the first argument what type of number it is. By default, parseInt() will autodetect
         * decimal and hexadecimal (via 0x prefix). Prior to ECMAScript 5, parseInt() also autodetected octal literals,
         * which caused problems because many developers assumed a leading 0 would be ignored.
         *
         * This confusion led to the suggestion that you always use the radix parameter to parseInt() to eliminate
         * unintended consequences. So instead of doing this:
         *
         * var num = parseInt("071");      // 57
         *
         * Do this:
         *
         * var num = parseInt("071", 10);  // 71
         */
        radix: "error" /* Setting.ERROR */,
        /**
         * Enforce consistent spacing after the // or /* in a comment
         *
         * Some style guides require or disallow a whitespace immediately after the initial // or /* of a comment.
         * Whitespace after the // or /* makes it easier to read text in comments. On the other hand, commenting out
         * code is easier without having to put a whitespace right after the // or /*.
         */
        'spaced-comment': ["error" /* Setting.ERROR */, 'always', { markers: ['/'] }],
        /**
         * Enforce that class methods utilize this
         *
         * If a class method does not use this, it can sometimes be made into a static function. If you do convert the
         * method into a static function, instances of the class that call that particular method have to be converted
         * to a static call as well (MyClass.callStaticMethod())
         */
        'class-methods-use-this': "off" /* Setting.OFF */,
        /**
         * Require return statements to either always or never specify values
         *
         * Unlike statically-typed languages which enforce that a function returns a specified type of value, JavaScript
         * allows different code paths in a function to return different types of values.
         *
         * A confusing aspect of JavaScript is that a function returns undefined if any of the following are true:
         *
         * it does not execute a return statement before it exits
         * it executes return which does not specify a value explicitly
         * it executes return undefined
         * it executes return void followed by an expression (for example, a function call)
         * it executes return followed by any other expression which evaluates to undefined
         * If any code paths in a function return a value explicitly but some code path do not return a value explicitly,
         * it might be a typing mistake, especially in a large function. In the following example:
         *
         * a code path through the function returns a Boolean value true
         * another code path does not return a value explicitly, therefore returns undefined implicitly
         * function doSomething(condition) {
         *     if (condition) {
         *         return true;
         *     } else {
         *         return;
         *     }
         * }
         */
        'consistent-return': "off" /* Setting.OFF */,
        /**
         * Disallow specified syntax
         *
         * JavaScript has a lot of language features, and not everyone likes all of them. As a result, some projects
         * choose to disallow the use of certain language features altogether. For instance, you might decide to disallow
         * the use of try-catch or class, or you might decide to disallow the use of the in operator.
         *
         * Rather than creating separate rules for every language feature you want to turn off, this rule allows you to
         * configure the syntax elements you want to restrict use of. These elements are represented by their ESTree
         * node types. For example, a function declaration is represented by FunctionDeclaration and the with statement
         * is represented by WithStatement. You may find the full list of AST node names you can use on GitHub and use
         * AST Explorer with the espree parser to see what type of nodes your code consists of.
         *
         * You can also specify AST selectors to restrict, allowing much more precise control over syntax patterns.
         */
        'no-restricted-syntax': "off" /* Setting.OFF */,
        /**
         * This rule enforces consistent use of semicolons after statements.
         */
        '@typescript-eslint/semi': ["error" /* Setting.ERROR */, 'never'],
        /**
         * Enforce consistent spacing inside braces
         *
         * While formatting preferences are very personal, a number of style guides require or disallow spaces between
         * curly braces in the following situations:
         *
         * // simple object literals
         * var obj = { foo: "bar" };
         *
         * // nested object literals
         * var obj = { foo: { zoo: "bar" } };
         *
         * // destructuring assignment (EcmaScript 6)
         * var { x, y } = y;
         *
         * // import/export declarations (EcmaScript 6)
         * import { foo } from "bar";
         * export { foo };
         */
        'object-curly-spacing': ["error" /* Setting.ERROR */, 'always'],
        /**
         * Require or disallow padding lines between statements
         *
         * This rule requires or disallows blank lines between the given 2 kinds of statements. Properly blank lines help developers to understand the code.
         *
         * For example, the following configuration requires a blank line between a variable declaration and a return statement:
         *
         * function foo() {
         *     var a = 1;
         *
         *     return a;
         * }
         */
        'padding-line-between-statements': [
            "error" /* Setting.ERROR */,
            { 'blankLine': 'always', 'prev': ['const', 'let', 'var'], 'next': '*' },
            { 'blankLine': 'any', 'prev': ['const', 'let', 'var'], 'next': ['const', 'let', 'var'] },
            { 'blankLine': 'always', 'prev': '*', 'next': 'return' },
            { 'blankLine': 'always', 'prev': '*', 'next': 'break' }
        ],
        /**
         * Enforce a convention in the order of require() / import statements
         *
         * With the groups option set to ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"] the order is as shown in the following example:
         *
         * // 1. node "builtin" modules
         * import fs from 'fs';
         * import path from 'path';
         * // 2. "external" modules
         * import _ from 'lodash';
         * import chalk from 'chalk';
         * // 3. "internal" modules
         * // (if you have configured your path or webpack to handle your internal paths differently)
         * import foo from 'src/foo';
         * // 4. modules from a "parent" directory
         * import foo from '../foo';
         * import qux from '../../foo/qux';
         * // 5. "sibling" modules from the same or a sibling's directory
         * import bar from './bar';
         * import baz from './bar/baz';
         * // 6. "index" of the current directory
         * import main from './';
         * // 7. "object"-imports (only available in TypeScript)
         * import log = console.log;
         * // 8. "type" imports (only available in Flow and TypeScript)
         * import type { Foo } from 'foo';
         */
        'import/order': [
            "error" /* Setting.ERROR */, {
                'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always'
            }
        ],
        /**
         * Some file resolve algorithms allow you to omit the file extension within the import source path. For example
         * the node resolver (which does not yet support ESM/import) can resolve ./foo/bar to the absolute path
         * /User/someone/foo/bar.js because the .js extension is resolved automatically by default in CJS. Depending on
         * the resolver you can configure more extensions to get resolved automatically.
         *
         * In order to provide a consistent use of file extensions across your code base, this rule can enforce or
         * disallow the use of certain file extensions.
         */
        'import/extensions': ["error" /* Setting.ERROR */, {
                'ts': 'never',
                'tsx': 'never',
                'svg': 'always',
                'png': 'always',
                'json': 'always'
            }],
        /**
         * In exporting files, this rule checks if there is default export or not.
         */
        'import/prefer-default-export': "off" /* Setting.OFF */,
        /**
         * Forbid the import of external modules that are not declared in the package.json's dependencies, devDependencies,
         * optionalDependencies, peerDependencies, or bundledDependencies. The closest parent package.json will be used.
         * If no package.json is found, the rule will not lint anything. This behavior can be changed with the rule option
         * packageDir. Normally ignores imports of modules marked internal, but this can be changed with the rule option
         * includeInternal. Type imports can be verified by specifying includeTypes.
         *
         * Modules have to be installed for this rule to work.
         */
        'import/no-extraneous-dependencies': "off" /* Setting.OFF */,
        /**
         * Disallow file extensions that may contain JSX
         */
        'react/jsx-filename-extension': ["error" /* Setting.ERROR */, { extensions: ['.tsx', '.jsx'] }],
        /**
         * Enforce a defaultProps definition for every prop that is not a required prop
         *
         * This rule aims to ensure that any non-required prop types of a component has a corresponding defaultProps value.
         * One advantage of defaultProps over custom default logic in your code is that defaultProps are resolved by React
         * before the PropTypes typechecking happens, so typechecking will also apply to your defaultProps. The same also
         * holds true for stateless functional components: default function parameters do not behave the same as defaultProps
         * and thus using defaultProps is still preferred.
         */
        'react/require-default-props': "off" /* Setting.OFF */,
        /**
         * Disallow JSX prop spreading
         *
         * Enforces that there is no spreading for any JSX attribute. This enhances readability of code by being more
         * explicit about what props are received by the component. It is also good for maintainability by avoiding passing
         * unintentional extra props and allowing react to emit warnings when invalid HTML props are passed to HTML elements.
         */
        'react/jsx-props-no-spreading': "off" /* Setting.OFF */,
        /**
         * Disallow reassigning function parameters
         *
         * Assignment to variables declared as function parameters can be misleading and lead to confusing behavior, as
         * modifying function parameters will also mutate the arguments object. Often, assignment to function parameters
         * is unintended and indicative of a mistake or programmer error.
         *
         * This rule can be also configured to fail when function parameters are modified. Side effects on parameters
         * can cause counter-intuitive execution flow and make errors difficult to track down.
         */
        'no-param-reassign': ["error" /* Setting.ERROR */, {
                props: true,
                ignorePropertyModificationsFor: [
                    'state'
                ]
            }],
        /**
         * Static HTML elements do not have semantic meaning. This is clear in the case of <div> and <span>. It is less
         * so clear in the case of elements that seem semantic, but that do not have a semantic mapping in the accessibility
         * layer. For example <a>, <big>, <blockquote>, <footer>, <picture>, <strike> and <time> -- to name a few -- have
         * no semantic layer mapping. They are as void of meaning as <div>.
         *
         * The WAI-ARIA role attribute confers a semantic mapping to an element. The semantic value can then be expressed
         * to a user via assistive technology.
         *
         * In order to add interactivity such as a mouse or key event listener to a static element, that element must be
         * given a role value as well.
         */
        'jsx-a11y/no-static-element-interactions': "off" /* Setting.OFF */,
        /**
         * Enforce a specific function type for function components
         *
         * This rule is aimed to enforce consistent function types for function components. By default it prefers function
         * declarations for named components and function expressions for unnamed components.
         *
         * Examples of correct code for this rule:
         *
         * // only function declarations for named components
         * // [2, { "namedComponents": "function-declaration" }]
         * function Component (props) {
         *   return <div />;
         * }
         *
         * // only function expressions for named components
         * // [2, { "namedComponents": "function-expression" }]
         * const Component = function (props) {
         *   return <div />;
         * };
         *
         * // only arrow functions for named components
         * // [2, { "namedComponents": "arrow-function" }]
         * const Component = (props) => {
         *   return <div />;
         * };
         *
         * // only function expressions for unnamed components
         * // [2, { "unnamedComponents": "function-expression" }]
         * function getComponent () {
         *   return function (props) {
         *     return <div />;
         *   };
         * }
         *
         * // only arrow functions for unnamed components
         * // [2, { "unnamedComponents": "arrow-function" }]
         * function getComponent () {
         *   return (props) => {
         *     return <div />;
         *   };
         * }
         */
        'react/function-component-definition': ["error" /* Setting.ERROR */, {
                'namedComponents': 'arrow-function',
                'unnamedComponents': 'arrow-function'
            }],
        /**
         * Enforce consistent line breaks after opening and before closing braces
         *
         * This rule requires or disallows a line break between { and its following token, and between } and its
         * preceding token of object literals or destructuring assignments.
         */
        'object-curly-newline': "off" /* Setting.OFF */,
        /**
         * Arrow functions have two syntactic forms for their function bodies. They may be defined with a block body
         * (denoted by curly braces) () => { ... } or with a single expression () => ..., whose value is implicitly returned.
         */
        'arrow-body-style': "off" /* Setting.OFF */,
        /**
         * Require one JSX element per line
         *
         * This option limits every line in JSX to one expression each.
         * Note: The fixer will insert line breaks between any expression that are on the same line.
         */
        'react/jsx-one-expression-per-line': "off" /* Setting.OFF */,
        /**
         * Require returning inside each then() to create readable and reusable Promise chains
         *
         * Ensure that inside a then() you make sure to return a new promise or value.
         * See http://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html (rule #5) for more info on why that's a good idea.
         *
         * We also allow someone to throw inside a then() which is essentially the same as return Promise.reject().
         */
        'promise/always-return': "off" /* Setting.OFF */,
        /**
         * Disallow all tabs
         *
         * Some style guides don’t allow the use of tab characters at all, including within comments.
         */
        "no-tabs": "off" /* Setting.OFF */,
        /**
         * When using JSX, <a /> expands to React.createElement("a"). Therefore the React variable must be in scope.
         *
         * If you are using the @jsx pragma this rule will check the designated variable and not the React one.
         */
        "react/react-in-jsx-scope": "off" /* Setting.OFF */,
        "indent": ["error" /* Setting.ERROR */, 4],
        "react/jsx-indent": ["error" /* Setting.ERROR */, 4],
        "react/jsx-indent-props": ["error" /* Setting.ERROR */, 4],
        /**
         * Enforce consistent linebreak style
         *
         * When developing with a lot of people all having different editors, VCS applications and operating systems it
         * may occur that different line endings are written by either of the mentioned (might especially happen when
         * using the windows and mac versions of SourceTree together).
         *
         * The linebreaks (new lines) used in windows operating system are usually carriage returns (CR) followed by a
         * line feed (LF) making it a carriage return line feed (CRLF) whereas Linux and Unix use a simple line feed (LF).
         * The corresponding control sequences are "\n" (for LF) and "\r\n" for (CRLF).
         *
         * Many versioning systems (like git and subversion) can automatically ensure the correct ending. However to
         * cover all contingencies, you can activate this rule.
         */
        "linebreak-style": ["error" /* Setting.ERROR */, "windows"],
        /**
         * Enforce naming conventions for everything across a codebase.
         *
         * Enforcing naming conventions helps keep the codebase consistent, and reduces overhead when thinking about how
         * to name a variable. Additionally, a well-designed style guide can help communicate intent, such as by enforcing
         * all private properties begin with an _, and all global-level constants are written in UPPER_CASE.
         */
        "@typescript-eslint/naming-convention": [
            "warn", {
                "selector": "default",
                "format": ["camelCase", "PascalCase", "UPPER_CASE"]
            }
        ],
        /**
         * Disallow variable declarations from shadowing variables declared in the outer scope
         *
         * Shadowing is the process by which a local variable shares the same name as a variable in its containing scope. For example:
         *
         * var a = 3;
         * function b() {
         *     var a = 10;
         * }
         *
         * In this case, the variable a inside of b() is shadowing the variable a in the global scope. This can cause
         * confusion while reading the code and it’s impossible to access the global variable.
         */
        "no-shadow": "off" /* Setting.OFF */,
        "@typescript-eslint/no-shadow": "error" /* Setting.ERROR */,
        /**
         * Duplicated string literals make the process of refactoring error-prone, since you must be sure to update all
         * occurrences. On the other hand, constants can be referenced from many places, but only need to be updated in a single place.
         */
        "sonarjs/no-duplicate-string": "off" /* Setting.OFF */,
        /**
         * Warn if an element uses an Array index in its key.
         *
         * The key is used by React to identify which items have changed, are added, or are removed and should be stable.
         *
         * It's a bad idea to use the array index since it doesn't uniquely identify your elements. In cases where the array
         * is sorted or an element is added to the beginning of the array, the index will be changed even though the element
         * representing that index may be the same. This results in unnecessary renders.
         */
        "react/no-array-index-key": "off" /* Setting.OFF */,
        /**
         * Enforce onmouseover/onmouseout are accompanied by onfocus/onblur. Coding for the keyboard is important for users
         * with physical disabilities who cannot use a mouse, AT compatibility, and screenreader users.
         */
        "jsx-a11y/mouse-events-have-key-events": "off" /* Setting.OFF */
    },
    settings: {
        'import/resolver': {
            'typescript': {}
        }
    }
};
module.exports = config;
//# sourceMappingURL=index.js.map