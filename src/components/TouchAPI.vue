<template>
<div class="jumbotron">
  <p>{{ msg }}</p>
  <button type="button"
          class="btn btn-primary"
          v-on:click="touchAPI()"
          name="button">Touch API</button>
</div>
</template>

<script>
import axios from 'axios';

const path = 'http://localhost:5000/API/path/to/touch';

export default {
  name: 'TouchAPI',
  data() {
    return {
      msg: 'Did you touch the api?',
    };
  },
  methods: {
    touchAPI() {
      // eslint-disable-next-line
      axios.get(path)
        .then((res) => {
          this.msg = res.data;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.error(error)
        });
    },
  },
  created() {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
button{
  margin: auto;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
