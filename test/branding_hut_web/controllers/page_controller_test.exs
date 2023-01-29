defmodule BrandingHutWeb.PageControllerTest do
  use BrandingHutWeb.ConnCase

  test "GET /", %{conn: conn} do
    conn = get(conn, "/")
    assert html_response(conn, 200) =~ "Welcome to Branding Hut!"
  end
end
