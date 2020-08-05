<template>
  <div class="posts">
    <h1>Edit Post</h1>
      <div class="form">
        <div>
          <input type="text" name="title" placeholder="TITLE" v-model="title">
        </div>
        <div>
          <textarea rows="15" cols="15" placeholder="DESCRIPTION" v-model="description"></textarea>
        </div>
        <div>
          <button class="app_post_btn" @click="updatePost">Update</button>
        </div>
      </div>
  </div>
</template>

<script>
// import PostsService from '@/services/PostsService'
export default {
  name: 'editpost',
  data () {
    return {
      title: '',
      description: ''
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>
