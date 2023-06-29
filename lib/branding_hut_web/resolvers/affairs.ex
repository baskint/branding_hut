defmodule BrandingHutWeb.Resolvers.Affairs do
  alias BrandingHut.Affairs

  def list_spark_acts(%{sort_by: sort_by, sort_direction: sort_direction}, _context) do
    args = %{sort_by: sort_by, sort_direction: sort_direction}

    {:ok, Affairs.list_spark_acts(args)}
  end

  def create_spark_act(_, args, _) do
    Affairs.create_spark_act(args)
  end

  # Resolver for the get_spark_act endpoint
  def get_spark_act(_, %{id: id}) do
    case Affairs.get_spark_act!(id) do
      spark_act ->
        {:ok, spark_act}

      _ ->
        {:error, "SparkAct not found"}
    end
  end

  def delete_spark_act(%{id: id}, _info) do
    case Affairs.get_spark_act!(id) do
      nil -> {:ok, false}
      sa -> {:ok, maybe_delete_sa(sa)}
    end
    {:ok, true}
  end

  def update_spark_act(%{id: id, attrs: attrs}, _info) do
    case Affairs.get_spark_act!(id) do
      nil ->
        {:error, "SparkAct not found"}

      spark_act ->
        case Affairs.update_spark_act(spark_act, attrs) do
          {:ok, updated_spark_act} ->
            {:ok, updated_spark_act}

          {:error, changeset} ->
            {:error, changeset}
        end
    end
  end

  def list_posts(_parent, _args, _resolution) do
    {:ok, Affairs.list_posts()}
  end

  def create_post(_, args, _) do
    Affairs.create_post(args)
  end

  defp maybe_delete_sa(sa) do
    Affairs.delete_spark_act sa
    true
  end
end
