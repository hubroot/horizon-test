<template>
  <div class="map">
    <h1 class="my-4">Map</h1>
    <div class="mapouter">
      <div id="gmap"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'map',

  mounted() {
    const location = new google.maps.LatLng(34.0694225, -6.7621869)

    const myOptions = {
      zoom: 15,
      center: location,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    const map = new google.maps.Map(document.getElementById('gmap'), myOptions)

    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: 'Where I live right now',
      animation: google.maps.Animation.DROP
    })
  }
}
</script>

<style lang="scss">
.map {
  .mapouter {
    position: relative;
    width: 100%;
  }
  #gmap {
    width: 100%;
    height: calc(100vh - 200px);
  }
}
</style>
