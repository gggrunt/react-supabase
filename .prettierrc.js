module.exports = {
    arrowParens: 'always',
    endOfLine: 'lf',
    printWidth: 80,
    semi: false,
    singleQuote: true,
    tabWidth: 4,
    trailingComma: 'all',
    overrides: [
        {
            files: '*.yaml',
            options: {
                tabWidth: 2,
            },
        },
    ],
}
