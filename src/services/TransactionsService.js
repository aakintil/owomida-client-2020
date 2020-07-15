import Api from '@/services/Api'

export default {
  fetchTransactions (params) {
    let url = ''
    if (params === undefined) {
      url = '/'
    } else {
      url = params
    }
    console.log('inside fetchTransactions ', url)
    return Api().get(url)
  },

  fetchPosts () {
    return Api().get('posts')
  },

  addPost (params) {
    return Api().post('add_post', params)
  },

  updatePost (params) {
    return Api().put('posts/' + params.id, params)
  },

  getPost (params) {
    return Api().get('post/' + params.id)
  },

  deletePost (id) {
    return Api().delete('posts/' + id)
  }
}
