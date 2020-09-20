<template>
    <div>
        <input class="select" type="checkbox" @click="mutiSelect">
        <div @click="getID">
        <p>{{ "NO:" + song.id }}</p>
        <p>{{ "Artist:" + song.artist }}</p>
        <p>{{ "Song Name:" + song.songName }}</p>
        </div>
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
    data: function(){
        return{
            // Appear: this.$store.State.Appear
        }
    },
    methods:{
        getID: function() {
           this.$store.commit('moveSong',this.song.id)
        },
        mutiSelect:function(){
            this.$store.commit('moveToSelectList',this.song.id)
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
    position: relative;
    box-sizing: border-box ;
    padding: 10px 0 5px 60px;
    background-color: lightgreen;
    height: 70px;
}
input{
    display: none;
    position: absolute;
    left: 20px;
    top: 25px;
    width: 20px;
    height: 20px;
}
/* .mutiAppear{
    display: inline;
} */
.songs:nth-child(2n){
    background-color: lightskyblue;
}

</style>