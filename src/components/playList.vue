<template>
   <div>
       <h2>Play List</h2>
       <div id="playlist">   
          <playlist-song class="playsongs" v-for="song in plays" v-bind:key="song.id" :song=song>         
          </playlist-song>
       </div>
    </div>
</template>

<script>
import PlaylistSong from './songInPlayList.vue'

export default {
    components: {
      PlaylistSong
    },
    name: "page-playlist",

    data: function(){
        return {
            plays: this.$store.state.playList,
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
h2{
    text-align: center;
    font-size: 2rem;
    text-transform: uppercase;
}
#playlist{
    width: 40vw;
    height: 700px;
    background-color: rgba(135, 206, 250, 0.37);
    border-radius: 30px;
    overflow: hidden;
}



</style>>