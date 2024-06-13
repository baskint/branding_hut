defmodule BrandingHutWeb.Router do
  use BrandingHutWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_live_flash
    plug :put_root_layout, {BrandingHutWeb.LayoutView, :root}
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :graphql do
    plug :accepts, ["json"]
  end

  pipeline :api do
    plug :accepts, ["json"]
    # Add other plugs needed for your API
  end

  scope "/api", BrandingHutWeb do
    pipe_through :api

    post "/upload_csv", CSVUploadController, :upload
  end

  scope "/api" do
    pipe_through :graphql

    # Merge schemas directly using Absinthe functions
    forward "/", Absinthe.Plug, schema: BrandingHutWeb.Schema
  end

  if Mix.env() == :dev do
    forward "/graphiql", Absinthe.Plug.GraphiQL, schema: BrandingHutWeb.Schema
  end

  scope "/", BrandingHutWeb do
    pipe_through :browser

    get "/", PageController, :index
    get "/main", PageController, :index
    # get("/*path", PageController, :index)
  end

  if Mix.env() in [:dev, :test] do
    import Phoenix.LiveDashboard.Router

    scope "/" do
      pipe_through :browser

      live_dashboard "/dashboard", metrics: BrandingHutWeb.Telemetry
    end
  end

  if Mix.env() == :dev do
    scope "/dev" do
      pipe_through :browser

      forward "/mailbox", Plug.Swoosh.MailboxPreview
    end
  end
end
