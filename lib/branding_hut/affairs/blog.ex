defmodule BrandingHut.Affairs.Post do
  use Ecto.Schema
  import Ecto.Changeset

  schema "posts" do
    field :title, :string
    field :body, :string

    timestamps()
  end

  def changeset(post, attrs) do
    post
    |> cast(attrs, [
      :title,
      :body
    ])
  end
end
