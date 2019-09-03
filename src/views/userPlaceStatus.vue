<template>
  <div style="padding:10px;">
    <div style="width:100%;height:400px;" id="userChart"></div>
  </div>
</template>

<style>
</style>


<script type="es6">
import { getUserDataUrl } from "../api/api";
import echarts from "echarts";

export default {
  data() {
    return {
      item: [],
      charLine: null
    };
  },
  methods: {
    getUserCharts() {
      getUserDataUrl().then(res => {
        this.item = res.data;
        this.drawLineData();
      });
    },
    drawLineData() {
      this.charLine = echarts.init(document.getElementById("userChart"));
      this.charLine.setOption({
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["武汉", "上海", "广州", "深圳", "长沙", "郑州", "北京"],
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            name: "直接访问",
            type: "bar",
            barWidth: "60%",
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      });
    }
  },
  mounted() {
    this.getUserCharts();
  }
};
</script>