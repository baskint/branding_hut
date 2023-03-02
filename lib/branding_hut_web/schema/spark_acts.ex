defmodule BrandingHutWeb.Schema.Affairs do
    use Absinthe.Schema.Notation
    import_types Absinthe.Type.Custom
  
    alias BrandingHutWeb.Resolvers

    # field :act_date_time, :naive_datetime
    # field :bounce_rate, :decimal
    # field :click_thru_rate, :decimal
    # field :cpa, :decimal
    # field :jottings, :integer
    # field :messages, :integer
    # field :palavers, :integer
    # field :view_through, :decimal
    # field :yells, :integer
  
    @desc "A spark act"
    object :spark_act do
      field :id, :id
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
  
    object :get_spark_acts do
      @desc """
      Get a list of spark acts
      """
  
      field :spark_acts, list_of(:spark_act) do
        resolve(&Resolvers.Affairs.list_spark_acts/2)
      end
    end
  end