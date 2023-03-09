defmodule BrandingHutWeb.Resolvers.Affairs do
  alias BrandingHut.Affairs

  def list_spark_acts(_args, _context) do
    {:ok, Affairs.list_spark_acts()}
  end

  def create_spark_act(_, args, _) do
   Affairs.create_spark_act(args)
  end

  def list_posts(_parent, _args, _resolution) do
    {:ok, Affairs.list_posts()}
  end

  def create_post(_, args, _) do
    Affairs.create_post(args)
  end
end
