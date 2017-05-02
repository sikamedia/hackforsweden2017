<template>
  <div class="aboutUs">
    <h1>{{ msg }}</h1>
    <div>
    </div>
    <div>

    </div>
    <table id="team" align="center" cellspacing="10">
      <tr>
        <td>
          <article>
            <img src="/static/profile/Hongyi.jpg" alt="Hong Yi" height="200" width="200">
          </article>
        </td>
        <td><h2>Hongyi Liu, Ph.D KTH, liuhongyi5566@gmail.com</h2></td>
      </tr>
      <tr>
        <td>
          <article>
            <img src="/static/profile/taowan.jpg" alt="Tao Wan" height="200" width="200">
          </article>
        </td>
        <td><h2>Tao Wan, Solutions Architect, simonwantao@yahoo.com</h2></td>
      </tr>
      <tr>
        <td>
          <article>
            <img src="/static/profile/JieWen.png" alt="Tao Wan" height="200" width="200">
          </article>
        </td>
        <td><h2>Jie Wen, M.Sc. Actuary, wjroom@hotmail.com</h2></td>
      </tr>
    </table>
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

  table#team {
    border-collapse: separate;
    border-spacing: 0 20px;
    border: 0;
  }

  td {
    padding: 0 20px;
    text-align: left;
  }
</style>
