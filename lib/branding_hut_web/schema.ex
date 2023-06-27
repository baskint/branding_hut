defmodule BrandingHutWeb.Schema do
  use Absinthe.Schema

  alias BrandingHutWeb.Schema
  alias BrandingHutWeb.Resolvers

  import_types(Schema.Affairs)

  query do
    import_fields(:get_spark_acts)

    @desc "Get all posts"
    field :posts, list_of(:post) do
      resolve(&Resolvers.Affairs.list_posts/3)
    end

    # @desc "Get a spark act"
    # field :spark_act, 
  end

  # Define the input object type for creating a new `spark_act`
  input_object :create_spark_act_input do
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

  # Define the mutation for creating a new `spark_act`
  mutation do
    @desc "Create a spark act"
    field :create_spark_act, :spark_act do
      arg(:id, :integer)
      arg(:act_date_time, non_null(:naive_datetime))
      arg(:bounce_rate, :decimal)
      arg(:click_thru_rate, :decimal)
      arg(:cpa, :decimal)
      arg(:jottings, :integer)
      arg(:messages, :integer)
      arg(:palavers, :integer)
      arg(:view_through, :decimal)
      arg(:yells, :integer)

      resolve(&Resolvers.Affairs.create_spark_act/3)
    end

    @desc "Create a post"
    field :create_post, type: :post do
      arg(:title, non_null(:string))
      arg(:body, non_null(:string))

      resolve(&Resolvers.Affairs.create_post/3)
    end

    @desc "Delete a spark act"
    field :delete_spark_act, type: :boolean do
      arg :id, non_null(:id)

      resolve &Resolvers.Affairs.delete_spark_act/2
    end
  end
end
