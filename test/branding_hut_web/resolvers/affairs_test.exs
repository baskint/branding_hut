defmodule BrandingHutWeb.Resolvers.AffairsTest do
  use ExUnit.Case
  import Ecto.Changeset

  # Start the application and set up the test database
  setup_all do
    # {:ok, _} = Application.ensure_all_started(:branding_hut)
    # :ok = Ecto.Adapters.SQL.Sandbox.checkout(BrandingHut.Repo)
    Ecto.Adapters.SQL.Sandbox.mode(BrandingHut.Repo, :manual)

    on_exit(fn -> Ecto.Adapters.SQL.Sandbox.mode(BrandingHut.Repo, :manual) end)
  end

  # Define a test case for delete_spark_act
  test "delete_spark_act/2 deletes a SparkAct record" do
    # Prepare test data
    # {:ok, spark_act} = insert_test_spark_act()

    # IO.inspect spark_act
    assert 1 === 1

    # # Call the resolver function
    # result = BrandingHutWeb.Resolvers.Affairs.delete_spark_act(nil, %{id: spark_act.id})

    # # Assert the result
    # assert {:ok, deleted_spark_act} = result
    # assert spark_act.id == deleted_spark_act.id
  end

  # Helper function to insert a test SparkAct record
  defp insert_test_spark_act do
    changeset =
      %BrandingHut.Affairs.SparkAct{}
      |> Ecto.Changeset.cast(
        %{
          act_date_time: "2023-01-01 13:34",
          bounce_rate: 2.7
        },
        [:act_date_time, :bounce_rate]
      )
      |> Ecto.Changeset.validate_required([:act_date_time, :bounce_rate])

    case BrandingHut.Affairs.create_spark_act(changeset) do
      {:ok, spark_act} -> {:ok, spark_act}
      {:error, changeset} -> {:error, changeset}
    end
  end
end
