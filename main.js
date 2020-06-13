
Vue.component('searchresult',{
  props: ['info','start'],
  template: `
  <div>
  <table>
  <tr>
    <td>
      <img :src="info.data[start].images.fixed_height_small.url">
    </td>
    <td>
      <img :src="info.data[start+1].images.fixed_height_small.url">
    </td>
    <td>
      <img :src="info.data[start+2].images.fixed_height_small.url">
    </td>
    <td>
      <img :src="info.data[start+3].images.fixed_height_small.url">
    </td>
    <td>
      <img :src="info.data[start+4].images.fixed_height_small.url">
    </td>
    <td>
      <img :src="info.data[start+5].images.fixed_height_small.url">
    </td>
    </tr>
    <tr>
      <td>
        <img :src="info.data[start+6].images.fixed_height_small.url">
      </td>
      <td>
        <img :src="info.data[start+7].images.fixed_height_small.url">
      </td>
      <td>
        <img :src="info.data[start+8].images.fixed_height_small.url">
      </td>
      <td>
        <img :src="info.data[start+9].images.fixed_height_small.url">
      </td>
      <td>
        <img :src="info.data[start+10].images.fixed_height_small.url">
      </td>
      <td>
        <img :src="info.data[start+11].images.fixed_height_small.url">
      </td>
      </tr>
      <tr>
        <td>
          <img :src="info.data[start+12].images.fixed_height_small.url">
        </td>
        <td>
          <img :src="info.data[start+13].images.fixed_height_small.url">
        </td>
        <td>
          <img :src="info.data[start+14].images.fixed_height_small.url">
        </td>
        <td>
          <img :src="info.data[start+15].images.fixed_height_small.url">
        </td>
        <td>
          <img :src="info.data[start+16].images.fixed_height_small.url">
        </td>
        <td>
          <img :src="info.data[start+17].images.fixed_height_small.url">
        </td>
        </tr>
  </table>
  </div>
  `,
  data() {
    return {
      start: this.start
    }
  }
});

var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    cart: 0,
    url: "https://api.giphy.com/v1/gifs/search?limit=18&api_key=TQyiDHTqQ4yCwcVRXV0N8KUcoZKsO7tZ&q=",
    q: "",
    finUrl: "",
    start: 0,
    info: "",
    tabl: ""
  },
  methods: {
    searchGiphy: function(){
      var keyword = this.q.replace(" ","+")
    this.finUrl = this.url+keyword+"&offset="+this.start;
    const headers = {
            'Content-Type': 'text/html'
        };


    axios.get(this.finUrl,{headers})
    .then(response => (this.info = response.data));
  }

}
});
