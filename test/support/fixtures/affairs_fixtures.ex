defmodule BrandingHut.AffairsFixtures do
  @moduledoc """
  This module defines test helpers for creating
  entities via the `BrandingHut.Affairs` context.
  """

  @doc """
  Generate a spark_act.
  """
  def spark_act_fixture(attrs \\ %{}) do
    {:ok, spark_act} =
      attrs
      |> Enum.into(%{
        act_date_time: ~N[2023-03-01 02:47:00],
        bounce_rate: "120.5",
        click_thru_rate: "120.5",
        cpa: "120.5",
        jottings: 42,
        messages: 42,
        palavers: 42,
        view_through: "120.5",
        yells: 42
      })
      |> BrandingHut.Affairs.create_spark_act()

    spark_act
  end
end
