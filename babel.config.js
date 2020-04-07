module.exports = {
  presets: ['@redwoodjs/core/config/babel-preset'],
  plugins: [
    [
      '@babel/plugin-transform-react-jsx',
      {
        pragma: 'h',
        //pragmaFrag: 'Fragment',
      },
    ],
  ],
}
