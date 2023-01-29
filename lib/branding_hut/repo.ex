defmodule BrandingHut.Repo do
  use Ecto.Repo,
    otp_app: :branding_hut,
    adapter: Ecto.Adapters.Postgres
end
