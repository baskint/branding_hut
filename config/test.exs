import Config

# Configure your database
#
# The MIX_TEST_PARTITION environment variable can be used
# to provide built-in test partitioning in CI environment.
# Run `mix help test` for more information.
config :branding_hut, BrandingHut.Repo,
  username: "postgres",
  password: "postgres",
  hostname: "localhost",
  database: "branding_hut_test#{System.get_env("MIX_TEST_PARTITION")}",
  pool: Ecto.Adapters.SQL.Sandbox,
  pool_size: 10

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :branding_hut, BrandingHutWeb.Endpoint,
  http: [ip: {127, 0, 0, 1}, port: 4002],
  secret_key_base: "UtG1IvZTRhDUtXlORdxAKvVJsWWBgHDl8ZbGcwE3CgQKap3d864PwixapPE2I1Lv",
  server: false

# In test we don't send emails.
config :branding_hut, BrandingHut.Mailer, adapter: Swoosh.Adapters.Test

# Print only warnings and errors during test
# config :logger, level: :warn

# Initialize plugs at runtime for faster test compilation
config :phoenix, :plug_init_mode, :runtime

config :logger, :console,
  level: :info,  # Set the minimum log level to display (optional)
  format: "$time $metadata[$level] $message\n",
  metadata: [:module, :function, :line]
