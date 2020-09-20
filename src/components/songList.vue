<template>
    <div>
       <h2>Song List</h2>
       <div id="songlist">
          <songlist-song class="songs" v-for="song in list" v-bind:key="song.id" :song=song>        
          </songlist-song>
       </div>
    </div>
</template>

<script>
import SonglistSong from './songInList.vue'

export default {
    components: {
      SonglistSong
    },
    name: "page-songlist",
    props: {
        song:{
         type:Object,
         reuqired:true
        }
    },
    data: function(){
        return {
            list: this.$store.state.songList,
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
#songlist{
    width: 40vw;
    height: 700px;
    background-color: rgba(135, 206, 250, 0.37);
    border-radius: 30px;
    overflow: hidden;  
}



</style>>
