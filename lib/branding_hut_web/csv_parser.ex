defmodule BrandingHutWeb.CSVParser do
  alias NimbleCSV.RFC4180, as: CSV
  require Logger

  def parse_csv(content) do
    Logger.info("Parsing CSV content: #{inspect(content)}")
    
    content
    |> CSV.parse_string(skip_headers: true)
    |> Enum.map(fn row ->
      Logger.info("Parsed row: #{inspect(row)}")
      
      [act_date_time, bounce_rate, click_thru_rate, cpa, jottings, messages, palavers, view_through, yells] = row
      
      %{
        act_date_time: parse_naive_datetime(act_date_time),
        bounce_rate: Decimal.new(bounce_rate),
        click_thru_rate: Decimal.new(click_thru_rate),
        cpa: Decimal.new(cpa),
        jottings: String.to_integer(jottings),
        messages: String.to_integer(messages),
        palavers: String.to_integer(palavers),
        view_through: Decimal.new(view_through),
        yells: String.to_integer(yells)
      }
    end)
    |> then(&{:ok, &1})
  rescue
    _ -> {:error, :invalid_csv}
  end

  defp parse_naive_datetime(datetime_string) do
    datetime_string
    |> NaiveDateTime.from_iso8601!()
  end
end
