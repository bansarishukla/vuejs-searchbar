class Post {
  constructor(title, img) {
    this.title = title;
    this.img = img;
  }
}

const app = new Vue ({
  el: '#app',
  data: {
    search: '',
    postList : [
      new Post(
        'What You Need To Know About Css Variables',
        '1.jpg'
      ),
      new Post(
        'Freebie:4 Great Looking Pricing Tables',
        '2.jpg'
      ),
      new Post(
        'Interesting JavaScript and CSS Libraries',
        '3.jpg'
      ),
      new Post(
        'Quick Tip',
        '4.jpg'
      ),
      new Post(
        'Learn SQL  ',
        '6.jpg'
      ),

]
  },
  computed: {
    filteredList() {
      return this.postList.filter(post => {
        return post.title.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  }
})
