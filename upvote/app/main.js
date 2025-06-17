
const upvoteApp = {
  data(){
    return{
      submissions: Seed.submissions
    }
  }, 
  computed:{
    sortedSubmissions(){
      return this.submissions.sort((a, b) => {
        return b.vote - a.vote
      })
    }
  }
};

Vue.createApp(upvoteApp).mount('#app')