alias BrandingHut.Affairs

act_data = [
  %{
    act_date_time: ~N[2023-02-07 04:17:00],
    bounce_rate: 1.2,
    click_thru_rate: 1.3,
    cpa: 0.5,
    jottings: 45,
    messages: 13,
    palavers: 78,
    view_through: 0.9,
    yells: 110345
  },
  %{
    act_date_time: ~N[2023-02-07 04:17:00],
    bounce_rate: 1.5,
    click_thru_rate: 1.6,
    cpa: 0.7,
    jottings: 13,
    messages: 18,
    palavers: 42,
    view_through: 1.8,
    yells: 83959
  },
  %{
    act_date_time: ~N[2023-02-08 04:17:00],
    bounce_rate: 1.2,
    click_thru_rate: 1.4,
    cpa: 0.5,
    jottings: 13,
    messages: 18,
    palavers: 88,
    view_through: 0.95,
    yells: 67053
  }
]


Enum.each(act_data, fn(data) ->
  Affairs.create_spark_act(data)
end)