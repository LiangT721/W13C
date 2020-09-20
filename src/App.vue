<template>
  <div id="app">
    <h1>Music PlayList</h1>
    <div id="playArea">
    <page-songlist></page-songlist>
    <page-playlist></page-playlist>
    </div>
  </div>
</template>

<script>

  import PageSonglist from './components/songList.vue'
  import PagePlaylist from './components/playList.vue'

export default {

  name: "App",
  components: {
    PageSonglist,
    PagePlaylist
  }
};
</script>

<style>
#playArea{
  display: grid;
  justify-items: center;
  align-items: start;
  grid-template-columns: 1fr 1fr;
}
h1{
  text-align: center;
  text-transform: uppercase;
}
</style>
