<template>
  <div class="aboutUs">
    <h1>{{ msg }}</h1>

    <ul>
      <li>
        <article>
          <img src="/static/profile/Hongyi.jpg" alt="Hong Yi">
        </article>
      </li>
      <li>
        <h2>Hongyi Liu,&nbsp&nbspPh.D KTH,  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspliuhongyi5566@gmail.com</h2>
      </li>
    </ul>
    <ul>
      <li>
        <article>
          <img src="/static/profile/taowan.jpg" alt="Tao Wan" height="200" width="200">
        </article>
      </li>
      <li>
        <h2>Tao Wan, Solution Architect, simonwantao@yahoo.com</h2>
      </li>
    </ul>
    <ul>
      <li>
        <article>
          <img src="/static/profile/JieWen.png" alt="Tao Wan" height="200" width="200">
        </article>
      </li>
      <li>
        <h2>Jie Wen, &nbsp&nbsp&nbsp&nbspM.Sc. Actuary,  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp wjroom@hotmail.com</h2>
      </li>
    </ul>
    <footer>
      <ul>
        <li><a href="https://vuejs.org" target="_blank">Idea</a></li>
        <li><a>About us</a></li>
        <li><a href="/demo">Demo</a></li>
      </ul>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'aboutUs',
    data () {
      return {
        msg: 'About us'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
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
