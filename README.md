# BrandingHut

To start your Branding Hut server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Start Phoenix endpoint with `mix phx.server` or inside IEx with `iex -S mix phx.server`

Now you can visit [`localhost:4004`](http://localhost:4004) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

  * Official website: https://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Forum: https://elixirforum.com/c/phoenix-forum
  * Source: https://github.com/phoenixframework/phoenix


### To create new mutation on spark act table, use this:
```
mutation {
  createSparkAct(
    actDateTime: "2022-03-09T12:34:56Z",
    bounceRate: 0.5,
    clickThruRate: 0.7,
    cpa: 100.0,
    jottings: 10,
    messages: 20,
    palavers: 30,
    viewThrough: 0.8,
    yells: 40
  ){
    id
    actDateTime
    bounceRate
    clickThruRate
    cpa
    jottings
    palavers
    viewThrough
    yells
  }
}
```