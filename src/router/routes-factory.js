import home from '@/view/home-factory'
import factory from '@/view/factory/f-index'
import fHome from '@/view/factory/f-home'

// import factoryLoginIn from '@/view/factory/loginIn/login'
import factoryRegister from '@/view/factory/loginIn/register'
import factoryForgetPassword from '@/view/factory/loginIn/forgetPassword'
import factoryForgetPasswordTwo from '@/view/factory/loginIn/forgetSecond'
import factoryForgetPasswordThree from '@/view/factory/loginIn/forgetThird'
import factoryForgetPasswordFour from '@/view/factory/loginIn/sure'
// 公司信息
import fCompany from '@/view/factory/company/f-company'
// 编辑公司信息
import fCompanyEdit from '@/view/factory/company/f-company-edit'
// 退税明细
import fLoanDetail from '@/view/factory/my/f-loan-detail'
// 退税明细详情
import fLoanDetailInfo from '@/view/factory/my/f-loan-detail-info'
// 出口明细
import fOutDetail from '@/view/factory/my/f-out-detail'
// 退税申请
import taxRefund from '@/view/factory/tax/tax-refund'
// 退税申请1
import aplication1 from '@/view/factory/tax/aplication-1'
// 退税申请2
import aplication2 from '@/view/factory/tax/aplication-2'
// 退税申请3
import aplication3 from '@/view/factory/tax/aplication-3'
// 退税申请预览
import aplicationInfo from '@/view/factory/tax/aplication-info'
// 外综服
import myUser from '@/view/factory/my/myUser'
// 外综服详情
import myUserDetailInfo from '@/view/factory/my/myUser-detail-info'
// routes
const routes = [
    {
    path: '/',
    name: 'home',
    component: home
    },
    {
    path: '/factory',
    name: '',
    component: factory,
    children: [
      {
        path: '/',
        name: 'fHome',
        component: fHome
      },
      {
        path: 'factoryRegister',
        name: 'factoryRegister',
        component: factoryRegister
      },
      {
        path: 'factoryForgetPassword',
        name: 'factoryForgetPassword',
        component: factoryForgetPassword
      },
      {
        path: 'factoryForgetPasswordTwo',
        name: 'factoryForgetPasswordTwo',
        component: factoryForgetPasswordTwo
      },
      {
        path: 'factoryForgetPasswordThree',
        name: 'factoryForgetPasswordThree',
        component: factoryForgetPasswordThree
      },
      {
        path: 'factoryForgetPasswordFour',
        name: 'factoryForgetPasswordFour',
        component: factoryForgetPasswordFour 
      },
      // 企业信息
      {
        path: 'fCompany',
        name: 'fCompany',
        component: fCompany
      },
      // 编辑企业信息
      {
        path: 'fCompanyEdit',
        name: 'fCompanyEdit',
        component: fCompanyEdit
      },
      // 退税明细
      {
        path: 'fLoanDetail',
        name: 'fLoanDetail',
        component: fLoanDetail
      },
      // 退税明细详情
      {
        path: 'fLoanDetailInfo',
        name: 'fLoanDetailInfo',
        component: fLoanDetailInfo
      },
      // 出口明细
      {
        path: 'fOutDetail',
        name: 'fOutDetail',
        component: fOutDetail
      },
      // 退税申请
      {
        path: 'taxRefund',
        name: 'taxRefund',
        component: taxRefund
      },
      // 退税申请1
      {
        path: 'aplication1',
        name: 'aplication1',
        component: aplication1
      },
      // 退税申请2
      {
        path: 'aplication2',
        name: 'aplication2',
        component: aplication2
      },
      // 退税申请3
      {
        path: 'aplication3',
        name: 'aplication3',
        component: aplication3
      },
      // 退税申请详情
      {
        path: 'aplicationInfo',
        name: 'aplicationInfo',
        component: aplicationInfo
      },
      // 外综服
      {
        path: 'myUser',
        name: 'myUser',
        component: myUser
      },
      // 外综服详情
      {
        path: 'myUserDetailInfo',
        name: 'myUserDetailInfo',
        component: myUserDetailInfo
      }
    ]
  }
]
export default routes
