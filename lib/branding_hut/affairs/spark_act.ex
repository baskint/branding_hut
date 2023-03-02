defmodule BrandingHut.Affairs.SparkAct do
  use Ecto.Schema
  import Ecto.Changeset

  schema "spark_acts" do
    field :act_date_time, :naive_datetime
    field :bounce_rate, :decimal
    field :click_thru_rate, :decimal
    field :cpa, :decimal
    field :jottings, :integer
    field :messages, :integer
    field :palavers, :integer
    field :view_through, :decimal
    field :yells, :integer

    timestamps()
  end

  @doc false
  def changeset(spark_act, attrs) do
    spark_act
    |> cast(attrs, [
      :act_date_time,
      :palavers,
      :yells,
      :messages,
      :jottings,
      :bounce_rate,
      :click_thru_rate,
      :cpa,
      :view_through
    ])
    |> validate_required([
      :act_date_time,
      :palavers,
      :yells,
      :messages,
      :jottings,
      :bounce_rate,
      :click_thru_rate,
      :cpa,
      :view_through
    ])
  end
end
