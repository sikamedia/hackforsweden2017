<template>
  <div id='app'>
    <header>
      <nav>
        <ul>
          <li v-for="menu in menus">
            <a v-if="menu.value === 'Idea'" href="https://youtu.be/yAIg6c0ug1k" target="_blank">Idea</a>
            <router-link v-if="menu.value !== 'Idea'" :to="menu.link">{{menu.value}}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <img src="./assets/hack_logo.png">
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
        menus: [
          {link: 'https://youtu.be/yAIg6c0ug1k', value: 'Idea'},
          {link: '/about', value: 'About us'},
          {link: '/demo', value: 'Demo'},
          {link: '/binary_prediction_demo', value: 'Prediction Demo'}
        ]
      }
    },
    methods: {
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  nav {
    background-color: #333;
    border: 1px solid #333;
    color: #fff;
    display: block;
    margin: 0;
    overflow: hidden;
  }
  nav ul{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  nav ul li {
    margin: 0;
    display: inline-block;
    list-style-type: none;
    transition: all 0.2s;
  }

  nav > ul > li > a {
    color: #aaa;
    display: block;
    line-height: 2em;
    padding: 0.5em 2em;
    text-decoration: none;

  }

  nav li > ul{
    display : none;
    margin-top:1px;
    background-color: #bbb;

  }

  nav li > ul li{
    display: block;
  }

  nav  li > ul li a {
    color: #111;
    display: block;
    line-height: 2em;
    padding: 0.5em 2em;
    text-decoration: none;
  }

  nav li:hover {
    background-color: #666;
  }
  nav li:hover > ul{
    position:absolute;
    display : block;
  }
  nav li > ul > li ul  {
    display: none;
    background-color: #888;
  }
  nav li > ul > li:hover > ul  {
    position:absolute;
    display : block;
    margin-left:100%;
    margin-top:-3em;
  }

</style>
