<template>
  <div id="app">
    <transition name="fade">
    <h1 v-if="show" v-on:click="show = !show">Music PlayList</h1>
    </transition>
     <button @click="changeToggle" id="multi">Multi Select</button>
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
  },
  data: function(){
        return {
            disappear:true,
            appear:this.$store.state.appeared,
            show:true
        }
  },
  methods:{
       changeToggle: function(){
         this.$store.commit('changeDisappear')
       }

  },
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

#multi{
  position: absolute;
  right: 10vw;
  top: 1.5rem;
  width: 80px;
  height: 40px;
  border-radius: 25px;
  border: none;
  background-color: rgba(173, 216, 230, 0.397);
  box-shadow: 1px 1px 0 1px grey;
}

</style>
