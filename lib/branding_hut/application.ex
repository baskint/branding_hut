defmodule BrandingHut.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      BrandingHut.Repo,
      # Start the Telemetry supervisor
      BrandingHutWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: BrandingHut.PubSub},
      # Start the Endpoint (http/https)
      BrandingHutWeb.Endpoint
      # Start a worker by calling: BrandingHut.Worker.start_link(arg)
      # {BrandingHut.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: BrandingHut.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  @impl true
  def config_change(changed, _new, removed) do
    BrandingHutWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
