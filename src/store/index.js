import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        songList: [{
            id: 1,
            artist: "Cardi B, Bad Bunny & J Balvin",
            songName: "I Like It"
        }, {
            id: 2,
            artist: "Skibidi",
            songName: "Little Big"
        }, {
            id: 3,
            artist: "Kill This Love",
            songName: "BLACKPINK"
        }, {
            id: 4,
            artist: "God is a woman",
            songName: "Ariana Grande"
        }, {
            id: 5,
            artist: "Sushi",
            songName: "Merk & Kremont"
        }, {
            id: 6,
            artist: "High Hopes",
            songName: "Panic! at the Disco"
        }, {
            id: 7,
            artist: "Con Calma",
            songName: "Daddy Yankee"
        }, {
            id: 8,
            artist: "Rain Over Me",
            songName: "Pitbull"
        }, {
            id: 9,
            artist: "Policeman",
            songName: "Eva Simons"
        }, {
            id: 10,
            artist: "Bad Boy",
            songName: "Riton & Kah-Lo"
        }],
        playList: []
    },
    mutations: {
        moveSong: function(state, selectId) {
            for (let i = 0; i < state.songList.length; i++) {
                if (state.songList[i].id === selectId) {
                    state.playList.push(state.songList[i]);
                    state.songList.splice(i, 1);
                }
            }
        },
        moveSongBack: function(state, selectId) {
            for (let i = 0; i < state.playList.length; i++) {
                if (state.playList[i].id === selectId) {
                    state.songList.push(state.playList[i]);
                    state.playList.splice(i, 1);
                }
            }
        },
        songSorting: function(state) {
            function compare(a, b) {
                let songA = a.id;
                let songB = b.id;
                let comparision = 0;
                if (songA > songB) {
                    comparision = 1;
                } else if (songA < songB) {
                    comparision = -1;
                }
                return comparision
            }
            state.songList.sort(compare);
        }
    },
    actions: {

    },
    modules: {}
});