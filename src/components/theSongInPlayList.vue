<template>
<div>
    <input type="checkbox" class="select-remove" @click="multiRemove"  :class="{isDisappeared: isDisappeared}">
    <div @click="getIDBack">
        <p>{{ "NO:" + song.id }}</p>
        <p>{{ "Artist:" + song.artist }}</p>
        <p>{{ "Song Name:" + song.songName }}</p>
    </div>
    </div>
</template>

<script>
export default {
    name: "playlist-song",
    props: {
        song:{
         type:Object,
         reuqired:true
        }
    },
    methods:{
        getIDBack: function() {
            if(this.$store.state.disappear === true){
            this.$store.commit('moveSongBack',this.song.id);
            this.$store.commit('songSorting');
            }
        },
          multiRemove:function(){
            this.$store.commit('moveToRemoveList',this.song.id)
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
.playsongs{
     position: relative;
    box-sizing: border-box ;
    padding: 10px 0 5px 60px;
    background-color: lightgreen;
    height: 70px;
}

.playsongs:nth-child(2n){
    background-color: lightskyblue;
}
input{
    position: absolute;
    left: 20px;
    top: 25px;
    width: 20px;
    height: 20px;
}
.isDisappeared{
    display: none;
}

</style>