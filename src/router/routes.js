import home from '@/view/home'
import outindex from '@/view/outside/out-index'
import outhome from '@/view/outside/out-home'
// 登录注册
// import outLoginIn from '@/view/outside/loginIn/login'
import outRegister from '@/view/outside/loginIn/register'
import outForgetPassword from '@/view/outside/loginIn/forgetPassword'
import outForgetPasswordTwo from '@/view/outside/loginIn/forgetSecond'
import outForgetPasswordThree from '@/view/outside/loginIn/forgetThird'
// import outForgetPasswordFour from '@/view/outside/loginIn/sure'
// 企业信息
import outCompany from '@/view/outside/company/out-company'
// 编辑企业信息
import outCompanyEdit from '@/view/outside/company/out-company-edit'
// 更改密码三步
import outChangePasswords from '@/view/outside/company/out-change-passwords'
import outChangePasswordsTwo from '@/view/outside/company/out-change-passwords-two'
import outChangePasswordsThree from '@/view/outside/company/out-change-passwords-three'
// 账户管理
// 创建子账户
import outCreatAccount from '@/view/outside/account-management/out-create-account'
// 管理子账户
import outManagementSubAccount from '@/view/outside/account-management/out-management-sub-account'
// 编辑子账户
import outEditAccount from '@/view/outside/account-management/out-edit-account'
// 管理员账户登录
// import outLoginIn from '@/view/outside/account-management/out-loginIn'
// 我的账号
// 授信额度
import outCredit from '@/view/outside/my/out-credit'
// 借贷明细
import outLoanDetail from '@/view/outside/my/out-loan-detail'
// 借贷明细详情
import loanDetailInfo from '@/view/outside/my/out-loan-detail-info'
// 出口明细
import outOutDetail from '@/view/outside/my/out-out-detail'
// 出口明细详情
import outDetailInfo from '@/view/outside/my/out-out-detail-info'
// 财务操作
// 我要还款
import outRepayment from '@/view/outside/financial/out-repayment'
// 去还款
import goRepayment from '@/view/outside/financial/go-repayment'
// 我要还款详情
import outRepaymentInfo from '@/view/outside/financial/out-repayment-info'
// 融资确认列表
import financingAffirmList from '@/view/outside/financial/out-financing-affirm-list'
// 融资确认
import financingAffirm from '@/view/outside/financial/out-financing-affirm'
// 收款确认列表
import outReciveList from '@/view/outside/financial/out-recive-list'
// 收款确认
import reciveAffirm from '@/view/outside/financial/out-recive-affirm'
// 收款详情
import reciveInfo from '@/view/outside/financial/out-recive-info'
// 平台对账
import outAccount from '@/view/outside/financial/out-account'
// 还款列表
import repayList from '@/view/outside/financial/repay-list'
// 平台对账详情
import outAccountInfo from '@/view/outside/financial/out-account-info'
// 退税融资
// 退税融资
import taxRefund from '@/view/outside/tax/tax-refund'
// 申请1
import outApplication1 from '@/view/outside/tax/application-1'
// 申请2
import outApplication2 from '@/view/outside/tax/application-2'
// 申请3
import outApplication3 from '@/view/outside/tax/application-3'
// 退税融资更多列表页
import refundList from '@/view/outside/tax/refund-list'
// 申请预览详情
import outApplicationInfo from '@/view/outside/tax/application-info'
// 出口企业退税申请
import outAuditingList from '@/view/outside/tax/out-auditing-list'
// 出口企业退税申请审核
import outAuditingInfo from '@/view/outside/tax/out-auditing-info'
// 我的客户
import myUser from '@/view/outside/user/myuser'
// 查看客户详情
import myUserDetail from '@/view/outside/user/myuser-detail'
// 新增我的客户
import addMyUser from '@/view/outside/user/myuser-add'
// 编辑我的客户
import editMyUser from '@/view/outside/user/myuser-edit'
// routes
const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/outForgetPassword',
    name: 'outForgetPassword',
    component: outForgetPassword
  },
  {
    path: '/outForgetPasswordTwo',
    name: 'outForgetPasswordTwo',
    component: outForgetPasswordTwo
  },
  {
    path: '/outForgetPasswordThree',
    name: 'outForgetPasswordThree',
    component: outForgetPasswordThree
  },
  {
    path: '/outRegister',
    name: 'outRegister',
    component: outRegister
  },
  // // 外综服
  {
    path: '/outindex',
    name: '',
    component: outindex,
    children: [
      {
        path: '/',
        name: 'outhome',
        component: outhome
        // path: '/',
        // name: 'outLoginIn',
        // component: outLoginIn
      },
      // {
      //   path: 'outForgetPasswordFour',
      //   name: 'outForgetPasswordFour',
      //   component: outForgetPasswordFour
      // },
      
      // 企业信息
      {
        path: 'outCompany',
        name: 'outCompany',
        component: outCompany
      },
      // 编辑企业信息
      {
        path: 'outCompanyEdit',
        name: 'outCompanyEdit',
        component: outCompanyEdit
      },
      // 修改密码一步
      {
        path: 'outChangePasswords',
        name: 'outChangePasswords',
        component: outChangePasswords
      },
      // 修改密码二步
      {
        path: 'outChangePasswordsTwo',
        name: 'outChangePasswordsTwo',
        component: outChangePasswordsTwo
      },
      // 修改密码三步
      {
        path: 'outChangePasswordsThree',
        name: 'outChangePasswordsThree',
        component: outChangePasswordsThree
      },
      // 账户管理
      // 创建子账户
      {
        path: 'outCreatAccount',
        name: 'outCreatAccount',
        component: outCreatAccount
      },
      // 管理子账户
      {
        path: 'outManagementSubAccount',
        name: 'outManagementSubAccount',
        component: outManagementSubAccount
      },
      // 编辑子账户
      {
        path: 'outEditAccount',
        name: 'outEditAccount',
        component: outEditAccount
      },
      // // 超级账户登录
      // {
      //   path: 'outLoginIn',
      //   name: 'outLoginIn',
      //   component: outLoginIn
      // },
      // 授信额度
      {
        path: 'outCredit',
        name: 'outCredit',
        component: outCredit
      },
      // 借贷明细
      {
        path: 'outLoanDetail',
        name: 'outLoanDetail',
        component: outLoanDetail
      },
      // 借贷明细详情
      {
        path: 'loanDetailInfo',
        name: 'loanDetailInfo',
        component: loanDetailInfo
      },
      // 出口明细
      {
        path: 'outOutDetail',
        name: 'outOutDetail',
        component: outOutDetail
      },
      // 出口明细详情
      {
        path: 'outDetailInfo',
        name: 'outDetailInfo',
        component: outDetailInfo
      },
      // 我要还款goRepayment
      {
        path: 'outRepayment',
        name: 'outRepayment',
        component: outRepayment
      },
      // 去还款
      {
        path: 'goRepayment',
        name: 'goRepayment',
        component: goRepayment
      },
      // 还款详情
      {
        path: 'outRepaymentInfo',
        name: 'outRepaymentInfo',
        component: outRepaymentInfo
      },
      // 还款列表
      {
        path: 'repayList',
        name: 'repayList',
        component: repayList
      },
      // 融资确认列表
      {
        path: 'financingAffirmList',
        name: 'financingAffirmList',
        component: financingAffirmList
      },
      // 融资确认
      {
        path: 'financingAffirm',
        name: 'financingAffirm',
        component: financingAffirm
      },
      // 收款确认列表reciveAffirm
      {
        path: 'outReciveList',
        name: 'outReciveList',
        component: outReciveList
      },
      // 收款确认
      {
        path: 'reciveAffirm',
        name: 'reciveAffirm',
        component: reciveAffirm
      },
       // 收款确认详情
      {
        path: 'reciveInfo',
        name: 'reciveInfo',
        component: reciveInfo
      },
      // 平台对账
      {
        path: 'outAccount',
        name: 'outAccount',
        component: outAccount
      },
      // 平台对账详情
      {
        path: 'outAccountInfo',
        name: 'outAccountInfo',
        component: outAccountInfo
      },
      // 退税融资
      {
        path: 'taxRefund',
        name: 'taxRefund',
        component: taxRefund
      },
      // 退税融资申请1
      {
        path: 'outApplication1',
        name: 'outApplication1',
        component: outApplication1
      },
      // 退税融资申请2
      {
        path: 'outApplication2',
        name: 'outApplication2',
        component: outApplication2
      },
      // 退税融资申请3
      {
        path: 'outApplication3',
        name: 'outApplication3',
        component: outApplication3
      },
       // 退税融资更多列表页
      {
        path: 'refundList',
        name: 'refundList',
        component: refundList
      },
      // 退税融资申请-预览详情
      {
        path: 'outApplicationInfo',
        name: 'outApplicationInfo',
        component: outApplicationInfo
      },
      // 出口企业退税申请
      {
        path: 'outAuditingList',
        name: 'outAuditingList',
        component: outAuditingList
      },
      // 出口企业退税申请审核
      {
        path: 'outAuditingInfo',
        name: 'outAuditingInfo',
        component: outAuditingInfo
      },
      // 我的客户
      // 我的客户
      {
        path: 'myUser',
        name: 'myUser',
        component: myUser
      },
      {
        path: '/myUserDetail',
        name: 'myUserDetail',
        component: myUserDetail
      },
      // 新增我的客户
      {
        path: 'addMyUser',
        name: 'addMyUser',
        component: addMyUser
      },
      // 编辑我的客户
      {
        path: 'editMyUser',
        name: 'editMyUser',
        component: editMyUser
      }
    ]
  }
]
export default routes
