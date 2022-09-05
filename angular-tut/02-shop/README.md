# Shop project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Install JSON Server

  npm install -g json-server

### Create a db.json file with some data

```json
{
"posts": [
{ "id": 1, "title": "json-server", "author": "typicode" }
],
"comments": [
{ "id": 1, "body": "some comment", "postId": 1 }
],
"profile": { "name": "typicode" }
}
```

### Start JSON Server

  json-server --watch db.json

Now if you go to http://localhost:3000/posts/1, you'll get

  { "id": 1, "title": "json-server", "author": "typicode" }
