import home from '@/view/home-ooway'
import oowayIndex from '@/view/ooway/ooway-index'
import oowayHome from '@/view/ooway/ooway-home'
 // 登录注册忘记密码
// import oowayLogin from '@/view/ooway/loginIn/login'
import oowayRegister from '@/view/ooway/loginIn/register'
import oowayForgetPassword from '@/view/ooway/loginIn/forgetPassword'
import oowayForgetPasswordTwo from '@/view/ooway/loginIn/forgetSecond'
import oowayForgetPasswordThree from '@/view/ooway/loginIn/forgetThird'
// import oowayForgetPasswordFour from '@/view/ooway/loginIn/sure' 
// 用户管理
import oowayUserManagement from '@/view/ooway/user-management/ooway-user-management'
import oowayUserManagementAdduser from '@/view/ooway/user-management/ooway-user-management-adduser'
import oowayUserManagementEdituser from '@/view/ooway/user-management/ooway-user-management-edituser'
// 角色管理
import oowayRoleManagement from '@/view/ooway/user-management/ooway-role-management'
import oowayRoleManagementEditor from '@/view/ooway/role-management/ooway-role-management-editor'
import oowayRoleManagementAddrole from '@/view/ooway/role-management/ooway-role-management-addrole'
// 利率设置
import oowayInterestRatesSet from '@/view/ooway/tax-rates-set/ooway-interest-rates-set'
// 利率定制
import ratesMyset from '@/view/ooway/tax-rates-set/rates-myset'
// 利率设置
import ratesSetEdit from '@/view/ooway/tax-rates-set/rates-set-edit'
// 我要放款// 放款审核
import loanList from '@/view/ooway/financial/o-loan-list'
// 财务放款
import goLoan from '@/view/ooway/financial/go-loan'
// 还款确认
import reciveAffirmList from '@/view/ooway/financial/o-recive-affirm-list'
// 确认还款审核
import reciveAffirm from '@/view/ooway/financial/o-recive-affirm'
// 还款列表
import reciveList from '@/view/ooway/financial/o-recive-list'
//
// 还款列表
import reciveInfo from '@/view/ooway/financial/o-recive-info'
// 外综服
// 外综服企业列表
import outCompanyList from '@/view/ooway/outside/o-company-list'
// 企业信息审核
import outCompanyAffirm from '@/view/ooway/outside/o-company-affirm'
// 企业信息查看
import outCompanyInfo from '@/view/ooway/outside/o-company-info'
// 企业信息编辑
import outCompanyEdit from '@/view/ooway/outside/o-company-edit'
// 外综退税融资申请
import outTaxList from '@/view/ooway/outside/o-tax-list'
// 外综退税融资申请详情
import outTaxInfo from '@/view/ooway/outside/o-tax-info'
// 放款还款明细
import oLoanDetail from '@/view/ooway/outside/o-loan-detail'
// 放款还款明细详情
import oLoanInfo from '@/view/ooway/outside/o-loan-Info'
//
//
// 工厂
// 工厂企业列表
import fCompanyList from '@/view/ooway/factory/f-company-list'
// 工厂企业信息审核
import fCompanyAffirm from '@/view/ooway/factory/f-company-affirm'
// 工厂企业信息查看
import fCompanyInfo from '@/view/ooway/factory/f-company-info'
// 工厂企业信息编辑
import fCompanyEdit from '@/view/ooway/factory/f-company-edit'
// 工厂退税融资申请
import fTaxList from '@/view/ooway/factory/f-tax-list'
// 工厂退税融资申请详情
import fTaxInfo from '@/view/ooway/factory/f-tax-info'
// 工厂退税明细
import fLoanDetail from '@/view/ooway/factory/f-loan-detail'
// 工厂退税详情
import fLoanInfo from '@/view/ooway/factory/f-loan-Info'
// 服务关系表
import server from '@/view/ooway/server'
// routes
const routes = [
    // 登录
    {
    path: '/',
    name: 'home',
    component: home,
    },
    {
    path: '/oowayIndex',
    name: '',
    component: oowayIndex,
    children: [
      {
        path: '/',
        name: 'oowayHome',
        component: oowayHome
      },
      // 用户管理
      {
        path: 'oowayUserManagement',
        name: 'oowayUserManagement',
        component: oowayUserManagement
      },
      // 添加用户
      {
        path: 'oowayUserManagementAdduser',
        name: 'oowayUserManagementAdduser',
        component: oowayUserManagementAdduser
      },
      // 编辑用户
      {
        path: 'oowayUserManagementEdituser',
        name: 'oowayUserManagementEdituser',
        component: oowayUserManagementEdituser
      },
      // 角色管理
      {
        path: 'oowayRoleManagement',
        name: 'oowayRoleManagement',
        component: oowayRoleManagement
      },
      // 编辑角色
      {
        path: 'oowayRoleManagementEditor',
        name: 'oowayRoleManagementEditor',
        component: oowayRoleManagementEditor
      },
      // 添加角色
      {
        path: 'oowayRoleManagementAddrole',
        name: 'oowayRoleManagementAddrole',
        component: oowayRoleManagementAddrole
      },
      // 利率设置
      {
        path: 'oowayInterestRatesSet',
        name: 'oowayInterestRatesSet',
        component: oowayInterestRatesSet
      },
      // 定制利率
      {
        path: 'ratesMyset',
        name: 'ratesMyset',
        component: ratesMyset
      },
      // 利率设置
      {
        path: 'ratesSetEdit',
        name: 'ratesSetEdit',
        component: ratesSetEdit
      },
      // 我要放款 放款审核
      {
        path: 'loanList',
        name: 'loanList',
        component: loanList
      },
      // 财务放款
      {
        path: 'goLoan',
        name: 'goLoan',
        component: goLoan
      },
      // 还款确认列表
      {
        path: 'reciveAffirmList',
        name: 'reciveAffirmList',
        component: reciveAffirmList
      },
      // 还款确认详情
      {
        path: 'reciveAffirm',
        name: 'reciveAffirm',
        component: reciveAffirm
      },
      //还款列表
      {
        path: 'reciveList',
        name: 'reciveList',
        component: reciveList
      },
      // 还款详情
      {
        path: 'reciveInfo',
        name: 'reciveInfo',
        component: reciveInfo
      },

      // 外综服
      // 外综服企业列表
      {
        path: 'outCompanyList',
        name: 'outCompanyList',
        component: outCompanyList
      },
      // 外综服企业信息审核
      {
        path: 'outCompanyAffirm',
        name: 'outCompanyAffirm',
        component: outCompanyAffirm
      },
      // 外综服企业信息展示查看
      {
        path: 'outCompanyInfo',
        name: 'outCompanyInfo',
        component: outCompanyInfo
      },
      // 外综服企业信息编辑
      {
        path: 'outCompanyEdit',
        name: 'outCompanyEdit',
        component: outCompanyEdit
      },
      // 外综服退税融资申请
      {
        path: 'outTaxList',
        name: 'outTaxList',
        component: outTaxList
      },
      // 外综服退税融资申请详情
      {
        path: 'outTaxInfo',
        name: 'outTaxInfo',
        component: outTaxInfo
      },
      // 放款还款明细
      {
        path: 'oLoanDetail',
        name: 'oLoanDetail',
        component: oLoanDetail
      },
      // 放款还款明细详情
      {
        path: 'oLoanInfo',
        name: 'oLoanInfo',
        component: oLoanInfo
      },
      // 外综服end
      //
      // 工厂
      // 工厂企业列表
      {
        path: 'fCompanyList',
        name: 'fCompanyList',
        component: fCompanyList
      },
      // 工厂企业信息审核
      {
        path: 'fCompanyAffirm',
        name: 'fCompanyAffirm',
        component: fCompanyAffirm
      },
      // 工厂企业信息展示查看
      {
        path: 'fCompanyInfo',
        name: 'fCompanyInfo',
        component: fCompanyInfo
      },
      // 工厂企业信息编辑
      {
        path: 'fCompanyEdit',
        name: 'fCompanyEdit',
        component: fCompanyEdit
      },
      // 工厂退税融资申请
      {
        path: 'fTaxList',
        name: 'fTaxList',
        component: fTaxList
      },
      // 工厂退税融资申请详情
      {
        path: 'fTaxInfo',
        name: 'fTaxInfo',
        component: fTaxInfo
      },
      // 退税明细
      {
        path: 'fLoanDetail',
        name: 'fLoanDetail',
        component: fLoanDetail
      },
      // 退税明细详情
      {
        path: 'fLoanInfo',
        name: 'fLoanInfo',
        component: fLoanInfo
      },
      // 服务关系表
      {
        path: 'server',
        name: 'server',
        component: server
      }
    ]
  }
]
export default routes
