<template>
    <div @click="getIDBack">
        <p>{{ "NO:" + song.id }}</p>
        <p>{{ "Artist:" + song.artist }}</p>
        <p>{{ "Song Name:" + song.songName }}</p>
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
            this.$store.commit('moveSongBack',this.song.id);
            this.$store.commit('songSorting');
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
    box-sizing: border-box ;
    padding: 10px 0 5px 60px;
    background-color: lightgreen;
    height: 70px;
}

.playsongs:nth-child(2n){
    background-color: lightskyblue;
}

</style>