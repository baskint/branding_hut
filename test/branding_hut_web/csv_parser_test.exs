defmodule BrandingHutWeb.CSVParserTest do
  use ExUnit.Case, async: true
  require Logger

  alias BrandingHutWeb.CSVParser

  @valid_csv_headers ["act_date_time", "bounce_rate", "click_thru_rate", "cpa", "jottings", "messages", "palavers", "view_through", "yells"]
  @valid_csv_row ["2024-06-14T23:50:07.123Z", "0.5", "0.8", "10.5", "4", "30", "38", "0.8", "31"]

  describe "parse_csv/1" do
    test "correctly parses a valid CSV row" do
      expected_output = %{
        act_date_time: ~N[2024-06-14 23:50:07.123],
        bounce_rate: Decimal.new("0.5"),
        click_thru_rate: Decimal.new("0.8"),
        cpa: Decimal.new("10.5"),
        jottings: 4,
        messages: 30,
        palavers: 38,
        view_through: Decimal.new("0.8"),
        yells: 31
      }

      # Combine headers and data into CSV content
      csv_header = Enum.join(@valid_csv_row, ",") |> Kernel.<>("\n")
      csv_body = Enum.join(@valid_csv_row, ",") |> Kernel.<>("\n")
      csv_content = csv_header <> csv_body
      Logger.info("Test CSV content: #{inspect(csv_content)}")

      # IO.inspect CSVParser.parse_csv(csv_content)
      {:ok, [parsed_row]} = CSVParser.parse_csv(csv_content)
      assert parsed_row == expected_output
    end
  end
end
