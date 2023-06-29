defmodule BrandingHutWeb.Schema.Affairs do
  use Absinthe.Schema.Notation
  import_types(Absinthe.Type.Custom)

  alias BrandingHutWeb.Resolvers

  @desc "A spark act"
  object :spark_act do
    field :id, :id
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

  object :post do
    field :id, :id
    field :title, :string
    field :body, :string
  end
end
