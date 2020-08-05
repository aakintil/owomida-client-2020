import Vue from 'vue'
import Router from 'vue-router'
import Transactions from '@/components/Transactions'
import Payments from '@/components/Payments'
import TransactionDetail from '@/components/TransactionDetail'
import addpost from '@/components/AddPost'
import editpost from '@/components/EditPost'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Transactions',
      component: Transactions
    },
    {
      path: '/payments',
      name: 'Payments',
      component: Payments
    },
    {
      path: '/posts/add',
      component: addpost,
      name: 'addpost'
    },
    {
      path: '/posts/:id/edit',
      component: editpost,
      name: 'editpost'
    },
    {
      path: '/transactionDetail/:id',
      component: TransactionDetail,
      name: 'transactionDetail'
    }
  ]
})
