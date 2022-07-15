# moviestcybers
# How to configure?

## In case you don't have Docker

The application requires execute the "npm i(nstall)" command (it's assumed that the system has Node.js LTS)
to install dependencies and "npm run dev".

## In case you have Docker

From the project's root:

```
 docker build -t triplecyber .
```

also you can run the image with the following command.

```
 docker run --rm -it -p 5173:5173 tryplecyber
```

and you can access the application at the following address:
`
 http://localhost:5173
`

from the browser.
