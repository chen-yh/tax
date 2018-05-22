import * as types from './mutation-types'
const mutations = {
  [types.SET_BRAND] (state, brand) {
    state.brand = brand
  },
  [types.SET_PARENTBRAND] (state, parentBrand) {
    state.parentBrand = parentBrand
  },
  [types.SET_GOODSNUM] (state, goodsNum) {
    state.goodsNum = goodsNum
  },
  [types.SET_LOAN_DETAIL] (state, loanDetail) {
  	state.loanDetail = loanDetail
  },
  [types.SET_TAX_ALLINFO] (state, taxAllInfo) {
    state.taxAllInfo = taxAllInfo
  },
  [types.SET_FORMINFO] (state, formInfo) {
    state.formInfo = formInfo
  },
  [types.SET_TAX_ALLINFO2] (state, taxAllInfo2) {
    state.taxAllInfo2 = taxAllInfo2
  },
  [types.SET_BANKNAME] (state, bankNames) {
    state.bankNames = bankNames
  },
  [types.SET_REPAYMENT] (state, repayMents) {
    state.repayMents = repayMents
  },
  [types.SET_LOANINFO] (state, loanInfo) {
    state.loanInfo = loanInfo
  },
  [types.SET_REPAYINFO] (state, repayInfo) {
    state.repayInfo = repayInfo
  }
}
export default mutations
