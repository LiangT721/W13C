<template>
    <div id="page-songlist">
       <h2>Song List</h2>
       <button @click="SelectAll" id="select-all" :class="{isDisappeared: isDisappeared}">All</button>
       <div id="songlist">
          <songlist-song class="songs" v-for="song in list" v-bind:key="song.id" :song=song></songlist-song>
       </div>
       <img @click="moveToPlayList" id="add" src="../assets/right-arrow.png">
    </div>
</template>

<script>
import SonglistSong from './theSongInList'

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
    },
    methods:{
        moveToPlayList: function(){
            console.log('list');
            this.$store.commit('selectListToPlayList');
        },

        SelectAll:function(){
            this.$store.commit('selectAll')
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
#page-songlist{
    position: relative;
}
#songlist{
    margin-top: 20px;
    width: 40vw;
    height: 700px;
    background-color: rgba(135, 206, 250, 0.37);
    border-radius: 30px;
    overflow: hidden;  
}
#select-all{
    position:absolute;
    top:20px;
    left: 5px;
    width: 50px;
    height: 30px;
    border-radius: 15px;
}
#add{
    width: 12vw;
    height: 8vw;
    position: relative;
    top: 2vh;
    left: 14vw;
}
.isDisappeared{
    display: none;
}






</style>>
