<template>
  <div id="app">
    <h1>Music PlayList</h1>
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
        }
  },
  methods:{
       changeToggle: function(){
         this.$store.commit('changeDisappear')
        //  this.$store.commit('toggleSelectMode')
       }
    // toggleSelectMode: function(){
    //   console.log("dsdasd")
    //         let multi = document.getElementsByClassName('select');
    //         let multiRemove = document.getElementsByClassName('select-remove');
    //         let selectAll = document.getElementById('select-all');
    //         let removeAll = document.getElementById('select-all-play');
    //             if(this.disappear === true){
    //               selectAll.style.display = "inline";
    //               removeAll.style.display = "inline";
    //               for(let i = 0 ; i < multi.length; i++ ){
    //                  multi[i].style.display = "inline";
    //               }
    //               for(let i = 0 ; i < multiRemove.length; i++ ){
    //                  multiRemove[i].style.display = "inline";
    //               }
    //                  this.disappear = false;
    //             }else if(this.disappear === false){
    //               selectAll.style.display = "none";
    //               removeAll.style.display = "none";
    //               for(let i = 0 ; i < multi.length; i++ ){
    //                  multi[i].style.display = "none";
    //               }
    //               for(let i = 0 ; i < multiRemove.length; i++ ){
    //                  multiRemove[i].style.display = "none";
    //               }
    //                  this.disappear = true;
    //            } 
    //     },
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
