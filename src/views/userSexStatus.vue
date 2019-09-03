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
        title: {
          text: "用户男女比例统计",
          x: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: ["男生", "女生"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: this.item,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
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