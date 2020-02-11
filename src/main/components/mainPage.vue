<template>
  <div class="game">
    <figure class="item"
            v-for="(game, index) in list"
            :key="index">
      <figcaption class="title"
                  @click="open">
        <img :src="require(`@/assets/texts/${game.text}`)"
             :alt="game.name">
      </figcaption>
      <img class="img"
           :src="require(`@/assets/images/${game.cover}`)"
           :alt="game.name"
           @click="run(game)">
    </figure>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    computed: mapState({
      list: (state) => state.Games.list,
      site: (state) => state.Games.site,
    }),

    methods: {
      run(game) {
        alert(game.name);
      },

      open() {
        nw.Shell.openExternal(this.site);
      },
    },
  };
</script>

<style scoped>
  .game {
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/src/main/assets/images/bg.png');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
  }
  .item {
    cursor: pointer;
    margin: 20px;
  }
  .title {
    text-align: center;
    color: red;
    font-weight: bold;
    font-size: 20px;
    font-family: monospace;
  }
  .img {
    margin-top: 10px;
    transition: transform .5s;
  }
  .item:hover .img {
    transform: scale(1.2);
  }
</style>
