defmodule BrandingHut.Affairs do
  @moduledoc """
  The Affairs context.
  """

  import Ecto.Query, warn: false
  alias BrandingHut.Repo

  alias BrandingHut.Affairs.SparkAct

  @doc """
  Returns the list of spark_acts.

  ## Examples

      iex> list_spark_acts()
      [%SparkAct{}, ...]

  """
  def list_spark_acts do
    Repo.all(SparkAct)
  end

  @doc """
  Gets a single spark_act.

  Raises `Ecto.NoResultsError` if the Spark act does not exist.

  ## Examples

      iex> get_spark_act!(123)
      %SparkAct{}

      iex> get_spark_act!(456)
      ** (Ecto.NoResultsError)

  """
  def get_spark_act!(id), do: Repo.get!(SparkAct, id)

  @doc """
  Creates a spark_act.

  ## Examples

      iex> create_spark_act(%{field: value})
      {:ok, %SparkAct{}}

      iex> create_spark_act(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  # def create_spark_act(attrs \\ %{}) do
  #   %SparkAct{}
  #   |> SparkAct.changeset(attrs)
  #   |> Repo.insert()
  # end

  def create_spark_act(sa) do
    # changeset = SparkAct.changeset(%SparkAct{}, args)

    case Repo.insert!(sa,
      on_conflict: :nothing
    ) do
      {:ok, spark_act} -> spark_act
      {:error, _changeset} -> "cannot create record"
      # spark_act -> spark_act
    end
    # second way...
    # %Device{stat: []}
    # |> Ecto.Changeset.change(args)
    # |> Ecto.Changeset.unique_constraint(:name)
    # |> Repo.insert
    # |> case do
    #   {:ok, device} -> device
    #   {:error, _} -> Repo.get_by!(Device, name: args.name)
    # end

  end

  @doc """
  Updates a spark_act.

  ## Examples

      iex> update_spark_act(spark_act, %{field: new_value})
      {:ok, %SparkAct{}}

      iex> update_spark_act(spark_act, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_spark_act(%SparkAct{} = spark_act, attrs) do
    spark_act
    |> SparkAct.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a spark_act.

  ## Examples

      iex> delete_spark_act(spark_act)
      {:ok, %SparkAct{}}

      iex> delete_spark_act(spark_act)
      {:error, %Ecto.Changeset{}}

  """
  def delete_spark_act(%SparkAct{} = spark_act) do
    Repo.delete(spark_act)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking spark_act changes.

  ## Examples

      iex> change_spark_act(spark_act)
      %Ecto.Changeset{data: %SparkAct{}}

  """
  def change_spark_act(%SparkAct{} = spark_act, attrs \\ %{}) do
    SparkAct.changeset(spark_act, attrs)
  end
end
