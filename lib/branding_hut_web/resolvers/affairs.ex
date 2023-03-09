defmodule BrandingHutWeb.Resolvers.Affairs do
  alias BrandingHut.Affairs
  # alias BrandingHut.Repo

  def list_spark_acts(_args, _context) do
    {:ok, Affairs.list_spark_acts()}
  end

  def create_spark_act(_, %{input: input}, _) do
    # Create a new `spark_act` with the given input
    spark_act = %Affairs.SparkAct{
      act_date_time: input.act_date_time,
      bounce_rate: input.bounce_rate,
      click_thru_rate: input.click_thru_rate,
      cpa: input.cpa,
      jottings: input.jottings,
      messages: input.messages,
      palavers: input.palavers,
      view_through: input.view_through,
      yells: input.yells
    }

    inserted = Affairs.create_spark_act(spark_act)
    # inserted
    # Persist the `spark_act` to the database using Ecto
    # {:ok, inserted} = Repo.insert(spark_act)

    IO.inspect(inserted)
    # Return the newly created `spark_act`
    inserted
  end
end
