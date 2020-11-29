const withPlugins = require('next-compose-plugins');
const withImages = require('next-images');
const withReactSvg = require('next-react-svg');
const withFonts = require('nextjs-fonts');
// module.exports = withImages();

const path = require('path');

// module.exports = {webpack: (config) => {
//   config.module.rules.push(
//       {
//           test: /\.md$/,
//           loader: 'frontmatter-markdown-loader',
//           options: { mode: ['react-component'] }
//       }
//   )
//   return config;
// }}

// module.exports = {
//   env: {
//     NEXT_PUBLIC_MAILCHIMP_LIST_ID: process.env.NEXT_PUBLIC_MAILCHIMP_LIST_ID,
//     NEXT_PUBLIC_MAILCHIMP_API_KEY: process.env.NEXT_PUBLIC_MAILCHIMP_API_KEY,
//   },
//   }

module.exports = withPlugins([withImages({
  exclude: path.resolve(__dirname, './vectors'),
  webpack(config, options) {
    return config
  }
}),
withReactSvg({
  exclude: path.resolve(__dirname, './public'),
  include: path.resolve(__dirname, './vectors'),
  webpack(config, options) {
    return config
  }
}),
  withFonts,
  

]
)








// module.exports = {
//     webpack(config) {
//       config.module.rules.push({
//         test: /\.svg$/,
//         issuer: {
//           test: /\.(js|ts)x?$/,
//         },
//         use: ['@svgr/webpack'],
//       });
  
//       return config;
//     },
// };
  

// module.exports = withImages(withFonts(
//   {
//     webpack(config, options) {
//       config.module.rules.push({
//         exclude: path.resolve(__dirname, './vectors'),
//         test: /\.(png|jpg|gif)$/i,
//         issuer: {
//           test: /\.(js|ts)x?$/,
//         },
//         use: ['file-loader'],
//       });
  
//       return config;
//     },
//   }
// ));
