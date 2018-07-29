<template>
  <article class="container">
    <section>
      <form id="search" class="my-3">
        <input class="w-100" name="query" v-model="searchQuery" placeholder="ゴミの名前を入力">
        <input type="text" name="dummy" style="display:none;">
      </form>
    </section>
    <section v-if="width < 769" v-cloak>
      <div class="list" v-cloack>
        <ul>
          <li v-for="(tab, index) in filteredData" :class="{'is-active': show == index}">
            <a @click.prevent="show = index">
              <font-awesome-icon icon="caret-right" class="fa-fw"/>
              {{tab.item}}
            </a>
          </li>
        </ul>
      </div>
      <div v-cloack>
        <transition name="fade-up" @click.native="navigate($event); alerts($event);">
          <div class="overlay"v-for="(tab, index) in filteredData" v-if="show == index" :key="index" @click.prevent="show = 99999">
            <ul v-for="(tab, index) in filteredData" v-if="show == index" :key="index" class="modalCard">
              <li></li>
              <li v-for="(tab, index) in filteredData" v-if="show == index" :key="index" v-html="tab.item"></li>
              <li v-for="(tab, index) in filteredData" v-if="show == index" :key="index" v-html="tab.type"></li>
              <li v-for="(tab, index) in filteredData" v-if="show == index" :key="index" v-html="tab.desc"></li>
              <li class="closeBtn" @click.prevent="show = 99999">
                <font-awesome-icon icon="window-close" class="fa-fw"/>
              </li>
            </ul>
          </div>
        </transition>
      </div>
    </section>
    <section v-else>
      <span class="icon">
         Scroll<font-awesome-icon icon="arrow-right" class="fa-fw"/>
      </span>
      <div v-if="width >= 769" class="table-wrap">
        <table class="table table-bordered mx-auto">
          <thead class="table-primary">
          <tr>
            <th>
              ゴミの種類
            </th>
            <th>
              区分
            </th>
            <th>
              収集に出す際の条件等
            </th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="entry in filteredData">
            <td v-for="key in columns">
              {{entry[key]}}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  </article>
</template>

<script>
import Json from "@/list.json";

export default {
  name: 'Index',
  columns: '',
  data: function () {
    return {
      show: 99999,
      width: window.innerWidth,
      searchQuery: '',
      columns: ['item', 'type', 'desc'],
      data: Json
    }
  },
  components: {},
  computed: {
    current () {
      return this.list.find(el => el.id === this.currentId) || {}
    },
    filteredData: function () {
      var filterKey = this.searchQuery && this.searchQuery.toLowerCase()
      var data = this.data
      if (filterKey) {
        data = data.filter(function (row) {
          return Object.keys(row).some(function (key) {
            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
          })
        })
      }
      return data
    }
  },
  filters: {
    capitalize: function (str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
  },
  methods: {
    navigate: function (e) {
      if (e.target.dataset.show) {
        e.preventDefault();
        this.show = e.target.dataset.show;
      }
    },
    alerts: function (e) {
      if (e.target.dataset.alert) {
        e.preventDefault();
        alert(e.target.dataset.alert);
      }
    }
  },
  head: {
    meta: [
      {name: 'description', content: '加古川市のゴミ分別が簡単に検索できるサイトです。燃えるゴミ・燃えないごみ・資源ごみなどがゴミの名前から検索することができます。'},
      {property: 'og:title', content: '加古川ゴミ分別アプリ'},
      {property: 'og:description', content: '加古川市のゴミ分別が簡単に検索できるサイトです。燃えるゴミ・燃えないごみ・資源ごみなどがゴミの名前から検索することができます。'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://awe-some.net/53410/'},
      {name: 'twitter:card', content: 'summary'}
    ]
  }
  ,
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import "~bootstrap/scss/bootstrap";

  $blue: #b8daff;
  $pink: #EDBCAE;
  $green: #B8D8D9;

  form {
    input {
      border: 1px solid $green;
      border-radius: 5px;
      max-width: 500px;
      height: 50px;
      font-size: 2rem;
      padding: 10px;

    }
  }

  .icon {
    font-size: 1.5rem;
    svg {
      vertical-align: middle;
      margin-bottom: 5px;
    }
    @include media-breakpoint-up(lg) {
      display: none;
    }
  }

  .table-wrap {
    overflow: scroll;
    white-space: nowrap;

    @include media-breakpoint-up(lg) {
      white-space: initial;
    }
    thead {
      th {
        &:nth-child(1) {
          width: 30%;
        }
        &:nth-child(2) {
          width: 20%;
        }
      }
    }
  }

  .list {
    ul {
      padding: 0;
      li {
        cursor: pointer;
        list-style: none;
        text-align: left;
        border-top: 1px solid $green;
        a {
          display: block;
          width: 100%;
          height: 100%;
          padding: 1rem 0;
          margin: -0.1rem 0;
        }
        &:hover {
          background: $pink;
        }
      }
    }

  }

  /* transaction */
  .overlay{
    background: rgba(255,255,255,.7);
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width:100%;
    height:100%;
  }
  .modalCard {
    background: $green;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 3rem;
    width: 85%;
    text-align: left;
    li {
      list-style: none;
    }

    .closeBtn {
      color: white;
      position: absolute;
      top: 0;
      right: 5px;
      font-size: 1.5rem;
    }
  }

  .fade-up-enter-active,
  .fade-up-leave-active {
    transition: all 0.3s ease-in-out;
  }

  .fade-up-enter,
  .fade-up-leave-to {
    opacity: 0;
  }

</style>
