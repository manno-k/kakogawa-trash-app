<template>
  <nav>
    <form id="search">
      Search <input name="query" v-model="searchQuery">
      <input type="text" name="dummy" style="display:none;">
    </form>
    <table>
      <thead>
      <tr>
        <th v-for="key in columns">
          {{ key | capitalize }}
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
  </nav>
</template>

<script>
export default {
  name: 'Index',
  columns: '',

  data: function () {
    return {
      searchQuery: '',
      columns: ['name', 'power'],
      data: [
        {name: 'Chuck Norris', power: Infinity},
        {name: 'Bruce Lee', power: 9000},
        {name: 'Jackie Chan', power: 7000},
        {name: 'Jet Li', power: 8000}
      ]
    }
  },
  computed: {
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
  methods: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  nav {
  }

  form {
    input {
      max-width: 500px;
      height: 30px;
      font-size: 2rem;
      padding: 10px;
    }
  }
</style>
