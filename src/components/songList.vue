<template>
    <div id="page-songlist">
       <h2>Song List</h2>
       <button @click="SelectAll" id="select-all">All</button>
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
            disappear:true
        }
    },
    methods:{
        moveToPlayList: function(){
            console.log('list');
            this.$store.commit('selectListToPlayList');
        },
        toggleSelectMode: function(){
            let multi = document.getElementsByClassName('select');
            let selectAll = document.getElementById('select-all');
                if(this.disappear === true){
                  selectAll.style.display = "inline";
                  for(let i = 0 ; i < multi.length; i++ ){
                     multi[i].style.display = "inline";
                     this.disappear = false;
                  }
                }else if(this.disappear === false){
                  selectAll.style.display = "none";
                  for(let i = 0 ; i < multi.length; i++ ){
                     multi[i].style.display = "none";
                     this.disappear = true;
                  }
               } 
        },
        SelectAll:function(){
            this.$store.commit('selectAll')
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
    display: none;
    position:absolute;
    top:20px;
    left: 5px;
    display: none;
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





</style>>
