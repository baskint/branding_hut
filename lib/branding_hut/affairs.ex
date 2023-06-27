defmodule BrandingHut.Affairs do
  @moduledoc """
  The Affairs context.
  """

  import Ecto.Query, warn: false
  alias BrandingHut.Repo

  alias BrandingHut.Affairs.SparkAct
  alias BrandingHut.Affairs.Post

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
  def create_spark_act(attrs \\ %{}) do
    %SparkAct{}
    |> SparkAct.changeset(attrs)
    |> Repo.insert()
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

  def list_posts do
    Repo.all(Post)
  end

  def create_post(attrs \\ %{}) do
    %Post{}
    |> Post.changeset(attrs)
    |> Repo.insert()
  end
end
