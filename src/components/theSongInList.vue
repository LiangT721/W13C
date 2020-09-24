<template>
    <div :id='"song" + song.id' class="songs">
        <input class="select" type="checkbox" @click="multiSelect"  :class="{isDisappeared: isDisappeared}">
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
    methods:{
        getID: function() {
            if(this.$store.state.disappear === true){
           this.$store.commit('moveSong',this.song.id)
        //    this.$store.dispatch('animationAdd',this.song.id, )
            }
        },
        multiSelect:function(){
            this.$store.commit('moveToSelectList',this.song.id)
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
.songs{
    position: relative;
    box-sizing: border-box ;
    padding: 10px 0 5px 60px;
    background-color: lightgreen;
    height: 70px;
    transition: all 0.5s linear;

}
input{
    /* display: none; */
    position: absolute;
    left: 20px;
    top: 25px;
    width: 20px;
    height: 20px;
}
/* .multiAppear{
    display: inline;
} */
.songs:nth-child(2n){
    background-color: lightskyblue;
}
.isDisappeared{
    display: none;
}

</style>