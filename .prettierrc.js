module.exports = {
  singleQuote: true,
  importOrder: [
    '^app/(.*)$',
    '^assets/(.*)$',
    '^components/(.*)$',
    '^constants/(.*)$',
    '^features/(.*)$',
    '^fixtures/(.*)$',
    '^hooks/(.*)$',
    '^utils/(.*)$',
    '^[.].*(?<!css)$',
    '.css$',
  ],
  experimentalBabelParserPluginsList: ['jsx'],
};
