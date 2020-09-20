<template>
    <div @click="getID">
        <p>{{ "NO:" + song.id }}</p>
        <p>{{ "Artist:" + song.artist }}</p>
        <p>{{ "Song Name:" + song.songName }}</p>
    </div>
</template>

<script>
export default {
    name: "songlist-song",
    props: {
        song:{
         type:Object,
         reuqired:true
        }
    },

    methods:{
        getID: function() {
           this.$store.commit('moveSong',this.song.id)
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
.songs{
    box-sizing: border-box ;
    padding: 10px 0 5px 60px;
    background-color: lightgreen;
    height: 70px;
}

.songs:nth-child(2n){
    background-color: lightskyblue;
}

</style>