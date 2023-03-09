defmodule BrandingHutWeb.Schema do
  use Absinthe.Schema

  alias BrandingHutWeb.Schema
  alias BrandingHutWeb.Resolvers.Affairs

  import_types(Schema.Affairs)

  query do
    import_fields(:get_spark_acts)
  end

  # Define the input object type for creating a new `spark_act`
  input_object :create_spark_act_input do
    field :act_date_time, :naive_datetime
    field :bounce_rate, :decimal
    field :click_thru_rate, :decimal
    field :cpa, :decimal
    field :jottings, :integer
    field :messages, :integer
    field :palavers, :integer
    field :view_through, :decimal
    field :yells, :integer
  end

  # Define the mutation for creating a new `spark_act`
  mutation do
    field :create_spark_act, :spark_act do
      arg :input, non_null(:create_spark_act_input)

      resolve &Affairs.create_spark_act/3
    end
  end
end
