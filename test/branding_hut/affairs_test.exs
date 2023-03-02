defmodule BrandingHut.AffairsTest do
  use BrandingHut.DataCase

  alias BrandingHut.Affairs

  describe "spark_acts" do
    alias BrandingHut.Affairs.SparkAct

    import BrandingHut.AffairsFixtures

    @invalid_attrs %{act_date_time: nil, bounce_rate: nil, click_thru_rate: nil, cpa: nil, jottings: nil, messages: nil, palavers: nil, view_through: nil, yells: nil}

    test "list_spark_acts/0 returns all spark_acts" do
      spark_act = spark_act_fixture()
      assert Affairs.list_spark_acts() == [spark_act]
    end

    test "get_spark_act!/1 returns the spark_act with given id" do
      spark_act = spark_act_fixture()
      assert Affairs.get_spark_act!(spark_act.id) == spark_act
    end

    test "create_spark_act/1 with valid data creates a spark_act" do
      valid_attrs = %{act_date_time: ~N[2023-03-01 02:47:00], bounce_rate: "120.5", click_thru_rate: "120.5", cpa: "120.5", jottings: 42, messages: 42, palavers: 42, view_through: "120.5", yells: 42}

      assert {:ok, %SparkAct{} = spark_act} = Affairs.create_spark_act(valid_attrs)
      assert spark_act.act_date_time == ~N[2023-03-01 02:47:00]
      assert spark_act.bounce_rate == Decimal.new("120.5")
      assert spark_act.click_thru_rate == Decimal.new("120.5")
      assert spark_act.cpa == Decimal.new("120.5")
      assert spark_act.jottings == 42
      assert spark_act.messages == 42
      assert spark_act.palavers == 42
      assert spark_act.view_through == Decimal.new("120.5")
      assert spark_act.yells == 42
    end

    test "create_spark_act/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Affairs.create_spark_act(@invalid_attrs)
    end

    test "update_spark_act/2 with valid data updates the spark_act" do
      spark_act = spark_act_fixture()
      update_attrs = %{act_date_time: ~N[2023-03-02 02:47:00], bounce_rate: "456.7", click_thru_rate: "456.7", cpa: "456.7", jottings: 43, messages: 43, palavers: 43, view_through: "456.7", yells: 43}

      assert {:ok, %SparkAct{} = spark_act} = Affairs.update_spark_act(spark_act, update_attrs)
      assert spark_act.act_date_time == ~N[2023-03-02 02:47:00]
      assert spark_act.bounce_rate == Decimal.new("456.7")
      assert spark_act.click_thru_rate == Decimal.new("456.7")
      assert spark_act.cpa == Decimal.new("456.7")
      assert spark_act.jottings == 43
      assert spark_act.messages == 43
      assert spark_act.palavers == 43
      assert spark_act.view_through == Decimal.new("456.7")
      assert spark_act.yells == 43
    end

    test "update_spark_act/2 with invalid data returns error changeset" do
      spark_act = spark_act_fixture()
      assert {:error, %Ecto.Changeset{}} = Affairs.update_spark_act(spark_act, @invalid_attrs)
      assert spark_act == Affairs.get_spark_act!(spark_act.id)
    end

    test "delete_spark_act/1 deletes the spark_act" do
      spark_act = spark_act_fixture()
      assert {:ok, %SparkAct{}} = Affairs.delete_spark_act(spark_act)
      assert_raise Ecto.NoResultsError, fn -> Affairs.get_spark_act!(spark_act.id) end
    end

    test "change_spark_act/1 returns a spark_act changeset" do
      spark_act = spark_act_fixture()
      assert %Ecto.Changeset{} = Affairs.change_spark_act(spark_act)
    end
  end
end
