defmodule BrandingHutWeb.Resolvers.CSVUpload do
  alias BrandingHutWeb.CSVParser

  def upload(_parent, %{file: %Plug.Upload{path: path}}, _resolution) do
    {:ok, file_content} = File.read(path)
    parsed_data = CSVParser.parse_csv(file_content)
    {:ok, %{data: parsed_data}}
  end
end
