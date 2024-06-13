defmodule BrandingHutWeb.CSVUploadController do
  use BrandingHutWeb, :controller

  alias BrandingHut.Repo
  alias BrandingHut.Affairs.SparkAct
  alias BrandingHutWeb.CSVParser, as: CSV

  def upload(conn, %{"file" => %Plug.Upload{path: path}}) do
    with {:ok, content} <- File.read(path),
         {:ok, records} <- CSV.parse_csv(content) do
      Enum.each(records, fn record ->
        %{
          act_date_time: act_date_time,
          bounce_rate: bounce_rate,
          click_thru_rate: click_thru_rate,
          cpa: cpa,
          jottings: jottings,
          messages: messages,
          palavers: palavers,
          view_through: view_through,
          yells: yells
        } = record

        %SparkAct{}
        |> SparkAct.changeset(%{
          act_date_time: act_date_time,
          bounce_rate: bounce_rate,
          click_thru_rate: click_thru_rate,
          cpa: cpa,
          jottings: jottings,
          messages: messages,
          palavers: palavers,
          view_through: view_through,
          yells: yells
        })
        |> Repo.insert()
      end)

      conn
      |> put_status(:ok)
      |> json(%{message: "File uploaded and processed successfully"})
    else
      _ ->
        conn
        |> put_status(:bad_request)
        |> json(%{error: "Failed to process file"})
    end
  end
end
