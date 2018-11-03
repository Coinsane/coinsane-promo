# Coinsane Promo

## Quick start

```bash
  # Install
  git clone https://github.com/temadev/coinsane-promo.git
  cd coinsane-promo
  yarn
  # install flow typings for libraries (optional)
  flow-typed install
  # Development
  yarn dev
  # Build
  yarn build
  # Production
  yarn start
```

## What's inside?

### Client:

- **[Flow](https://flow.org/en/)** - static typing rocks!
- **[React 16](https://facebook.github.io/react/)** and **[Redux](http://redux.js.org/)**
- **SASS**, **[PostCSS](https://github.com/postcss/postcss)**, and **[styled-components](https://github.com/styled-components/styled-components)**.
- **[React-Router v4](https://github.com/ReactTraining/react-router)** + **[React-Router-Redux v5](https://github.com/reactjs/react-router-redux)**
- **[Redux-thunk](https://github.com/gaearon/redux-thunk)**, **[Redux-Devtools-Extension](https://github.com/zalmoxisus/redux-devtools-extension)** and **[redux-promise-middleware]()**
- **[isomorphic-fetch](https://github.com/matthew-andrews/isomorphic-fetch)**
- **[Semantic-ui-react](http://react.semantic-ui.com/)** - UI components.
- **[Lodash](https://lodash.com/)** - SUIR dependency.
- **[Store2](https://github.com/nbubna/store)** and **[js-cookie](https://github.com/js-cookie/js-cookie)** - LocalStorage and cookies.
- **[react-async-component](https://github.com/ctrlplusb/react-async-component)** - library for lazy-loading
- **[react-ga](https://github.com/react-ga/react-ga)** - advanced Google Analytics for React
- **[react-intl](https://github.com/yahoo/react-intl)** - i18n.
- **[immutable](https://facebook.github.io/immutable-js/)**, **[reselect](https://github.com/reactjs/reselect)** and **[normalizr](https://github.com/paularmstrong/normalizr)**

### Server:

* **[morgan](https://www.npmjs.com/package/morgan)** - request logger middleware.
* **[helmet](https://github.com/helmetjs/helmet)** - secure your Express app.
* **[cookie-parser](https://www.npmjs.com/package/cookie-parser)** - cookie parsing middleware.
* **[body-parser](https://github.com/expressjs/body-parser)** - body parsing middleware
* **[compression](https://github.com/expressjs/compression)** - compression middleware (gzip).
* **[raven](https://docs.sentry.io/clients/node/)** - Sentry for Node


### Webpack

* Latest Webpack with **HMR**
* Babel: `stage-0` and few known plugins.
* **[Eslint](https://github.com/eslint/eslint)** and Standard.js
* **[Offline-plugin](https://github.com/NekR/offline-plugin)**
* **[webpack-bundle-analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer)**
* **[compression-webpack-plugin](https://github.com/webpack-contrib/compression-webpack-plugin)**
* **[optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin)**
* **[autodll-webpack-plugin](https://github.com/asfktz/autodll-webpack-plugin)**
* **[optimize-js-plugin](https://github.com/vigneshshanmugam/optimize-js-plugin)**
* **[wepback-assets-manifest](https://www.npmjs.com/package/webpack-assets-manifest)**
* **[circular-dependency-plugin](https://github.com/aackerman/circular-dependency-plugin)**
* **[extract-text-webpack-plugin](https://github.com/webpack-contrib/extract-text-webpack-plugin)**
* **[copy-webpack-plugin](https://github.com/webpack-contrib/copy-webpack-plugin)**
### Other:

- **[Jest](https://facebook.github.io/jest/)** - testing framework.

## FAQ

#### Static assets?

`/static` folder + `url-loader`.
Everything in `/static/public/` is copied to `/dist/client` with _copy-webpack-plugin_.

#### Is it possible to change Webpack config?

Of course, config is intuitive! Webpack universality is inspired by Razzle. 

#### SSR?

Check `/src/server/ssr/`.

#### Code-splitting?

**[react-async-component](https://github.com/ctrlplusb/react-async-component)**.

#### Server-side data-fetching?

Using **[react-async-bootstrapper](https://github.com/ctrlplusb/react-async-bootstrapper)** - a wrapper around `react-tree-walker`. 

#### Theming?

Yes, with `styled-components'` `<ThemeProvider>` it's possible to specify a color theme.

#### Browser support

Without `react-intl`:
- Safari 7+
- IE 10+

## Environment variables

- `process.env.HOST (default: 'localhost')`: Application host. _Browser and Server._
- `process.env.PORT (default: 3000)`: Application port. _Browser and Server._
- `process.env.INSPECT_ENABLED (default: true)`: add `--inspect` arg to server in development. _Webpack only._
- `process.env.ANALYZE_BUNDLE (default: false)`: Run `webpack-bundle-analyzer` on production build. _Webpack _
- `process.env.GA_ID (default: false)`: Google analytics ID. If set, `react-ga` initialize itself inside >` container on `componentDidMount()`. _Browser only._
- `process.env.SENTRY_PUBLIC_DSN (default: false)`: Similar to `GA_ID`, but for [Sentry](https://sentry.io). _Browser only._
- `process.env.BROWSER`: Your environment. `true` - browser, `false` - Node.
> **NOTE:** Remember, you can't run code which uses browser global object in Node environment!
- `process.env.SENTRY_DSN (default: false)`: Sentry full(private) DSN.  _Server only._

## Semantic.UI + React = SUIR

> SUI = Semantic.UI  
> SUIR = Semantic-UI-React
> TL;DR: SUIR is great, but it lacks inline-styles.

### Good parts

1. Big UI library
2. Based on SUI: SUIR uses SUI CSS under the hood.
3. Modular: Import only what you use required components.

### Bad parts

1. Import of unused styles.
> It's possible to import only required components' styles. Check **`src/client/index.jsx`**.
> PurifyCss cannot help. Only browser-based tools probably could.

2. SUI styles are costly(548kb) and block rendering.
> It's possible to split SUI styles into several smaller chunks which could be downloaded faster.

## Contributing

> Have a question? Ask!

> Make sure you ask a right question.

PRs, issues, enhancements are always welcome.

### Author

Artem Kashin [dev.tema@gmail.com](mailto:dev.tema@gmail.com)

### LICENSE

Apache License 2.0
