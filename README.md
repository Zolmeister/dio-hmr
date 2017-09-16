# Dio.js - Webpack Hot Reload Support

This project is a playground to try to get [webpack hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/) to work with dio.js

PRs welcome

### Install

```bash
yarn install
yarn link dio.js
```

### Run

```bash
yarn start
# http://localhost:8080
```

### Example Usage

  - Open chrome dev tools, network tab.
  - Edit `src/style.css` and save
    - Note how the update ocurres without reloading the page
  - Now.... try to figure out how to get it to work with `app.js` :wink:

### Other Web Framework Implementations

  - [React Hot Loader](https://github.com/gaearon/react-hot-loader)
  - [Vue Loader](https://github.com/vuejs/vue-loader)
  - [Elm Hot Loader](https://github.com/fluxxu/elm-hot-loader)
  - [Redux HMR](https://survivejs.com/webpack/appendices/hmr-with-react/#configuring-hmr-with-redux) (no loader)
  - [Angular HMR](https://github.com/AngularClass/angular-hmr) (no loader)
  - [Deku](https://github.com/anthonyshort/deku/blob/master/docs/advanced/hmr.md) (no loader)
