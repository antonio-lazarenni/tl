
# Lokalise Practical Task
## Install
### Install dependencies
```shell
yarn
```
Run server
```shell
yarn api
```
Run Web App
```shell
yarn start
```

## Highlights:
- Instead of using mock data, I decided to take advantage of Lokalise's public API to populate the App, at the same time I used Lokalise as a service to translate my App's UI. "Lokaliception"
- I tried something new in using Lokalise service, and instead of downloading the translation files, I requested those translations from the API at the build-time (See the file...)(Probably gonna make a blog post about it).
- For styling, I used Theme UI, because, in my opinion, it is the superior solution for style systems.
- Also, take look at the server-side, never seen an express.js app so slim, before.
- During the implementation of the modal component I came to an idea to embed the component inside of a custom hook, it allows me to use it anywhere in the app, without coupling.
- Additionally, I had implemented Color Mode Switcher and Language Switcher.
- For state management, I use Redux with RTK that provides me a solid and consistent code.

## Some notes:
While using your public API I found some inconsistencies.
e.x. Some entities of the language had different property names.



