import Vue from 'vue'
import Router from 'vue-router'
import realEstatePricePrediction from '@/components/StockholmHousePricePrediction'
import aboutUs from '@/components/aboutUs'
import PageNotFound from '@/components/PageNotFound'
import demo from '@/components/demo'
import LoanPrediction from '@/components/loan/LoanPrediction'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'real estate price prediction',
      component: realEstatePricePrediction
    },
    {
      path: '/about',
      name: 'about us',
      component: aboutUs
    },
    {
      path: '/demo',
      name: 'Demo',
      component: demo
    },
    {
      path: '/binary_prediction_demo',
      name: 'Prediction demo',
      component: LoanPrediction
    },
    { path: '*',
      name: 'Page Not Found',
      component: PageNotFound
    }
  ]
})
