<template>
  <baidu-map
    class="map"
    :center="{lng: item.Lng, lat:item.Lat}"
    :zoom="15"
    style="width:900px; height:400px;"
  >
    <bm-marker
      :position="{lng:item.Lng, lat:item.Lat}"
      :dragging="true"
      animation="BMAP_ANIMATION_BOUNCE"
    >
      <bm-label
        content="我的位置在这里"
        :labelStyle="{color: 'red', fontSize : '24px'}"
        :offset="{width: -35, height: 30}"
      />
    </bm-marker>
  </baidu-map>
</template>

<script type="es6">
import { getBikesDetailUrl } from "../api/api";
import axios from "axios";
export default {
  data() {
    return {
      item: {
        Lng: 0,
        Lat: 0
      }
    };
  },
  mounted() {
    let bike = {
      Id: this.$route.params.Id
    };
    getBikesDetailUrl(bike).then(res => {
      this.item = res.data[0];
    });
  }
};
</script>