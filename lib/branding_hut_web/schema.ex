defmodule BrandingHutWeb.Schema do
  use Absinthe.Schema

  alias BrandingHutWeb.Schema

  import_types(Schema.Affairs)

  query do
    import_fields(:get_spark_acts)
  end
end
