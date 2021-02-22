## Description

 A minimum reproduction project using Nestjs

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Access URL

- http://localhost:3000/endpointA/1
- http://localhost:3000/endpointA/2
- http://localhost:3000/endpointB

## Error

When access `http://localhost:3000/endpointA/1` terminal output error
```
_http_outgoing.js:535
    throw new ERR_HTTP_HEADERS_SENT('set');
    ^

Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
    at ServerResponse.setHeader (_http_outgoing.js:535:11)
    at ServerResponse.header (/Users/euclid/Projects/nestjs/node_modules/express/lib/response.js:771:10)
    at ServerResponse.send (/Users/euclid/Projects/nestjs/node_modules/express/lib/response.js:170:12)
    at done (/Users/euclid/Projects/nestjs/node_modules/express/lib/response.js:1008:10)
    at /Users/euclid/Projects/nestjs/node_modules/nunjucks/src/environment.js:41:5
    at RawTask.call (/Users/euclid/Projects/nestjs/node_modules/asap/asap.js:40:19)
    at flush (/Users/euclid/Projects/nestjs/node_modules/asap/raw.js:50:29)
    at processTicksAndRejections (internal/process/task_queues.js:79:11) {
  code: 'ERR_HTTP_HEADERS_SENT'
```
