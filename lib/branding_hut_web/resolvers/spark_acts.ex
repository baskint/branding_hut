defmodule BrandingHutWeb.Resolvers.Affairs do
    alias BrandingHut.Affairs
  
    def list_spark_acts(_args, _context) do
      {:ok, Affairs.list_spark_acts()}
    end
end