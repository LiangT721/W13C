<template>
    <div>
       <h2>Song List</h2>
       <button @click="toggleSelectMode">Muti Select</button>
       <div id="songlist">
          <songlist-song class="songs" v-for="song in list" v-bind:key="song.id" :song=song></songlist-song>
       </div>
       <button @click="moveToPlayList">Add to PlayList</button>
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
            disappear:true
        }
    },
    methods:{
        moveToPlayList: function(){
            console.log('list');
            this.$store.commit('selectListToPlayList');
        },
        toggleSelectMode: function(){
            let muti = document.getElementsByClassName('select');
                if(this.disappear === true){
                  for(let i = 0 ; i < muti.length; i++ ){
                     muti[i].style.display = "inline";
                     this.disappear = false;
                  }
                }else if(this.disappear === false){
                  for(let i = 0 ; i < muti.length; i++ ){
                     muti[i].style.display = "none";
                     this.disappear = true;
                  }
               } 
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
