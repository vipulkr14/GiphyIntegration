var app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    cart: 0,
    url: "http://api.giphy.com/v1/gifs/search?limit=18&api_key=TQyiDHTqQ4yCwcVRXV0N8KUcoZKsO7tZ&q=",
    q: "",
    finUrl: "",
    start: 0
  },
  methods: {
    searchGiphy: function(){
      var keyword = this.q.replace(" ","+")
    this.finUrl = this.url+keyword+"&offset="+this.start;
    this.start+=18
    return finUrl
  }
}
})
