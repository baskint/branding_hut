defmodule BrandingHut.Repo.Migrations.CreateSparkActs do
  use Ecto.Migration

  def change do
    create table(:spark_acts) do
      add :act_date_time, :naive_datetime
      add :palavers, :integer
      add :yells, :integer
      add :messages, :integer
      add :jottings, :integer
      add :bounce_rate, :decimal
      add :click_thru_rate, :decimal
      add :cpa, :decimal
      add :view_through, :decimal

      timestamps()
    end
  end
end
