import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blog: {
      currentPost: {},
      currentUser: {},
      posts: [],
      users: [],
    },
  },
  mutations: {
    // инициализируем объект из ответов /users & /posts
    loadPosts(state, payload) {
      payload.map((post) => {
        state.blog.posts.push({
          body: post.body,
          id: post.id,
          title: post.title,
          userId: post.userId,
          username: "",
          comments: [],
        });
      });
      this.commit("loadUserName");
    },
    // подгружаем пользователей
    loadUsers(state, payload) {
      state.blog.users = payload;
    },
    // подгружаем комментарии к просматриваемому посту
    loadPostComments(state, payload) {
      state.blog.posts.map((post) => {
        if (post.id == payload.id) {
          post.comments = [...payload.data];
        }
      });
    },
    // подгружаем имена пользователей в посты
    loadUserName(state) {
      state.blog.posts.map(
        (post) =>
          (post.username = state.blog.users.find(
            (user) => user.id == post.userId
          ).username)
      );
    },
    // выбираем просматриваемый пост
    chooseCurrentPost(state, id) {
      this.dispatch("fetchComments", id);
      state.blog.currentPost = state.blog.posts.find((post) => post.id == id);
    },
    // выбираем просматриваемого пользователя
    chooseCurrentUser(state, id) {
      state.blog.currentUser = state.blog.users.find((user) => user.id == id);
    },
  },
  actions: {
    // запрашиваем пользователей и посты от апи
    async fetchData() {
      const {data: users} = await Axios.get("https://jsonplaceholder.typicode.com/users")
      this.commit("loadUsers", users);

      const {data: posts} = await Axios.get("https://jsonplaceholder.typicode.com/posts")
      this.commit("loadPosts", posts);
    },
    // запрашиваем по id комментарии к конкретному посту
    async fetchComments(_, id) {
      const {data: comments} = await Axios.get(
        "https://jsonplaceholder.typicode.com/posts/" + id + "/comments"
      )
      this.commit("loadPostComments", { data: comments, id: id })
    },
  },
  getters: {
    posts(state) {
      return state.blog.posts;
    },
    users(state) {
      return state.blog.users;
    },
    currentPost(state) {
      return state.blog.currentPost;
    },
    currentUser(state) {
      return state.blog.currentUser;
    },
  },
  modules: {},
});
