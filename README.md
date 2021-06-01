# serverless-api

- Root URL: [https://qd01gt92w1.execute-api.us-east-1.amazonaws.com/](https://qd01gt92w1.execute-api.us-east-1.amazonaws.com/people/)

- Routes:
  - GET
    - /people &rarr; returns all objects
    - /people/{id} &rarr; returns one object by `id`
  - POST
    - /people &rarr; returns new saved object
  - PUT
    - /people/{id} &rarr; returns modified object
  - DELETE
    - /people/{id} &rarr; returns deletion confirmation

---

- Schema:

```json
{
    "name": "insert name here"
}
```

- An `id` will be generated automatically.