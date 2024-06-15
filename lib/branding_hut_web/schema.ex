defmodule BrandingHutWeb.Schema do
  use Absinthe.Schema

  alias BrandingHutWeb.Schema
  alias BrandingHutWeb.Resolvers

  import_types(Schema.Affairs)

  query do
    @desc "Get all posts"
    field :posts, list_of(:post) do
      resolve(&Resolvers.Affairs.list_posts/3)
    end

    @desc """
    Get a list of spark acts
    """
    field :spark_acts, list_of(:spark_act) do
      arg(:sort_by, :string, description: "Field to sort by")
      arg(:sort_direction, :string, description: "Sort direction (asc or desc)")
      resolve(&Resolvers.Affairs.list_spark_acts/2)
    end
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

  input_object :update_spark_act_input do
    field(:act_date_time, :naive_datetime)
    field(:bounce_rate, :decimal)
    field(:click_thru_rate, :decimal)
    field(:cpa, :decimal)
    field(:jottings, :integer)
    field(:messages, :integer)
    field(:palavers, :integer)
    field(:view_through, :decimal)
    field(:yells, :integer)
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

    @desc "Delete a spark act"
    field :delete_spark_act, type: :boolean do
      arg :id, non_null(:id)

      resolve &Resolvers.Affairs.delete_spark_act/2
    end

    @desc "Update a spark act"
    field :update_spark_act, :spark_act do
      arg(:id, non_null(:id))
      arg(:attrs, non_null(:update_spark_act_input))

    resolve(&Resolvers.Affairs.update_spark_act/2)
    end

    @desc "Create a post"
    field :create_post, type: :post do
      arg(:title, non_null(:string))
      arg(:body, non_null(:string))

      resolve(&Resolvers.Affairs.create_post/3)
    end

    # field :upload_csv, :csv_result do
    #   arg :file, non_null(:upload)
    #   resolve &BrandingHutWeb.Resolvers.CSVUpload.upload/3
    # end
  end
end
