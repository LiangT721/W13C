<template>
   <div id="page-playlist">
       <h2>Play List</h2>
       <button @click="SelectAllRemove" id="select-all-play"  :class="{isDisappeared: isDisappeared}">All</button>
       <div id="playlist">   
          <playlist-song class="playsongs" v-for="song in plays" v-bind:key="song.id" :song=song>         
          </playlist-song>
       </div>
        <img @click="Remove" id="remove" src="../assets/left-arrow.png">
    </div>
</template>

<script>
import PlaylistSong from './theSongInPlayList.vue'
export default {
    components: {
      PlaylistSong
    },
    name: "page-playlist",

    data: function(){
        return {
            plays: this.$store.state.playList,
        }
    },
    methods:{
        Remove: function(){
            console.log('list');
            this.$store.commit('removeListToSongList');
             this.$store.commit('songSorting');
        },
        SelectAllRemove:function(){
            this.$store.commit('removeAll')
        }
    },
     computed:{
        isDisappeared: function(){
            return this.$store.state.disappear
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
#page-playlist{
    position: relative;
}
#playlist{
    margin-top: 20px;
    width: 40vw;
    height: 700px;
    background-color: rgba(135, 206, 250, 0.37);
    border-radius: 30px;
    overflow: hidden;
}
#select-all-play{
    /* display: none; */
    position:absolute;
    top:20px;
    left: 5px;
    /* display: none; */
    width: 50px;
    height: 30px;
    border-radius: 15px;
}
#remove{
    width: 12vw;
    height: 8vw;
    position: relative;
    top: 2vh;
    left: 14vw;
}
.isDisappeared{
    display: none;
}



</style>