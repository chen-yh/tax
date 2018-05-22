<template>
 <div>
  <!--报关信息-->
         <h2 class="tit-hui">
           报关单信息
         </h2>
         <div class="company-info">
           <dl>
            <dt>合同号：</dt>
            <dd>{{auditInfo.contract}}</dd>
           </dl>
           <dl>
            <dt>报关单号：</dt>
            <dd>{{auditInfo.customsDecl}}</dd>
           </dl>
           <dl>
            <dt>报关单金额：</dt>
            <dd>{{auditInfo.declareSum}}  美元</dd>
           </dl>

          </div>
          <div class="company-info">
           <dl>
            <dt>海关放行状态：</dt>
            <dd>{{auditInfo.passState}}</dd>
           </dl>
           <dl>
            <dt>出口申报日期：</dt>
            <dd>{{auditInfo.declareTime | dateFormate}}</dd>
           </dl>
           <dl>
            <dt>委托出口企业名称：</dt>
            <dd>{{auditInfoAll.factoryInfo?auditInfoAll.factoryInfo.entName:auditInfoAll.entName}} </dd>
           </dl>
          </div>
          <!--报关商品-->
         <h2 class="tit-hui">
           报关商品信息
         </h2>
           <div v-for="d in auditInfoAll.ProductList"  class="bg-hui-info">
             <div class="company-info">
               <dl>
                <dt>出口商品名称：</dt>
                <dd>{{d.name}}</dd>
               </dl>
               <dl>
                <dt>出口商品HS编码：</dt>
                <dd>{{d.hsNumber}}</dd>
               </dl>
               <dl>
                <dt>退税率：</dt>
                <dd>{{d.rate}}%</dd>
               </dl>
              </div>
              <div class="company-info">
               <dl>
                <dt>商品单价：</dt>
                <dd>{{d.price}} 美元</dd>
               </dl>
               <dl>
                <dt>商品数量：</dt>
                <dd>{{d.quantity}}</dd>
               </dl>
               <dl>
                <dt>商品总价：</dt>
                <dd>{{d.totalPrice}} 元</dd>
               </dl>
              </div>
           </div>
         <!--结汇收汇信息-->
         <h2 class="tit-hui">
           结汇收汇信息
         </h2>
         <div class="company-info">
           <dl>
            <dt>结汇金额：</dt>
            <dd>{{auditInfo.settlement}}  美元</dd>
           </dl>
           <dl>
            <dt>收汇金额：</dt>
            <dd>{{auditInfo.earnings}}  美元</dd>
           </dl>
           <dl>
            <dt>退税总金额：</dt>
            <dd>{{auditInfo.refundTax}}  元</dd>
           </dl>
         </div>
         <!--发票信息-->
         <h2 class="tit-hui">
           发票信息
         </h2>
         <div class="bg-hui-info">
            <div class="company-info" v-for="v in auditInfoAll.InvoiceInfoList
">
             
             <dl>
              <dt>开票日期：</dt>
              <dd>{{v.createTime | dateFormate}}</dd>
             </dl>
             <dl>
              <dt>发票号码：</dt>
              <dd>{{v.invoiceNumber}}</dd>
             </dl>
             <dl>
              <dt>发票金额：</dt>
              <dd>{{v.invoiceMoney}}</dd>
             </dl>
            </div>
        </div>
        <div class="bg-hui-info">
            <div class="company-info">
              <dl>
              <dt>发票代码：</dt>
              <dd>{{auditInfo.invoiceCode}}</dd>
             </dl>
              <dl>
              <dt>发票数量：</dt>
              <dd>{{auditInfo.invoiceQuantity}}</dd>
             </dl>
             <dl>
              <dt>发票总金额：</dt>
              <dd>{{auditInfo.totalInvoice}}</dd>
             </dl>
            </div>
          </div>
          <!--票据信息-->
          <h2 class="tit-hui">
           票据信息
         </h2>
         <div class="piaoju">
          <dl>
           <dt>报关单：</dt>
           <dd>
            <div class="pic1"><img :src="auditInfo.customsDeclImg"></div>
            <!-- <div class="btn-file">
              <div class="s-radio">
                <div>是否与报关单一致</div>
              <div>
                <label><input type="radio" name="">  &nbsp;一致 &nbsp;&nbsp;</label>
              </div>
              <div>
                <label><input type="radio" name="">  &nbsp;不一致</label>
              </div>
              </div>
            </div> -->
           </dd>
          </dl>
          <dl>
           <dt>收汇凭证：</dt>
           <dd>
            <div class="pic2"><img :src="auditInfo.earningsImg"></div>
            <!-- <div class="btn-file">
              <div class="s-radio">
                <div>是否与海关收汇凭证一致</div>
              <div>
                <label><input type="radio" name="">  &nbsp;一致 &nbsp;&nbsp;</label>
              </div>
              <div>
                <label><input type="radio" name="">  &nbsp;不一致</label>
              </div>
              </div>
            </div> -->
           </dd>
          </dl>
          <dl>
           <dt>结汇凭证：</dt>
           <dd>
            <div class="pic2"><img :src="auditInfo.transferImg"></div>
            <!-- <div class="btn-file">
              <div class="s-radio">
                <div>是否与海关结汇凭证一致</div>
              <div>
                <label><input type="radio" name="">  &nbsp;一致 &nbsp;&nbsp;</label>
              </div>
              <div>
                <label><input type="radio" name="">  &nbsp;不一致</label>
              </div>
              </div>
            </div> -->
           </dd>
          </dl>
          <dl>
           <dt>发票：</dt>
           <dd class="fapiao">
            <div class="pic3">
              <!-- <img :src="taxAllInfo2.receiptImg"> -->
              <span  v-for="i in receiptImgss">
                <img :src="i">
              </span>
            </div>
            <!-- <div class="btn-file" style="margin-top:30px;">
              <div class="s-radio">
                <div>是否与海关发票一致</div>
              <div>
                <label><input type="radio" name="">  &nbsp;一致 &nbsp;&nbsp;</label>
              </div>
              <div>
                <label><input type="radio" name="">  &nbsp;不一致</label>
              </div>
              </div>
            </div> -->
           </dd>
          </dl>
         </div>
         <div>
           <p>数据统计信息</p>
           <tables-tit-more :tablesData="applyData">
             <dd slot="datas">
              <div>{{auditInfo.contract}}</div>
              <div><span v-if="auditInfo.financingProject==1">退税融资</span></div>
              <!-- <div>{{loanDetail}}</div> -->
              <div>{{auditInfo.declareSum}}  元</div>
              <div>{{auditInfo.declareTime | dateFormate}}</div>
              <!-- <div>{{auditInfo.entName}}</div> -->
              
               <div>{{auditInfo.financing}}  元</div>
              <div>{{auditInfo.createTime | dateFormate}}</div>
             <!--  <div>{{auditInfo.loanTime?(auditInfo.loanTime | dateFormate): '暂无'}}</div>
              <div >{{auditInfo.expireTime?(auditInfo.expireTime | dateFormate):'暂无'}}</div>-->
              <div>{{auditInfo.loanPeriod}} 个月</div>
              <div>{{auditInfo.costPlatform }} 元</div>
            </dd>
           </tables-tit-more>
         </div>
         <div class="operate">
           <div class="btn-zi btn-zi-big" @click="auditYes()">审核通过</div>
           <div class="btn-orange btn-zi-big" @click="auditNo()">审核未通过</div>
         </div>

    <el-dialog
        title="审核不通过原因"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose" :label-width="formLabelWidth">
        <div class="dialog-int">
          <h2>*  以下报关单信息不符</h2>
          <label><input type="checkbox" name="check" v-model="check" value="所在省份"> 合同号不符</label>
          <label><input type="checkbox" name="check" v-model="check" value="所在城市"> 报关单号不符</label>
          <label><input type="checkbox" name="check" v-model="check" value="企业名称"> 报关单金额不符</label>
          <label><input type="checkbox" name="check" v-model="check" value="上一年度出口规模"> 海关放行状态不符</label>
          <label><input type="checkbox" name="check" v-model="check" value="上一年度退税金额"> 出口申报日期不符</label>
          <label><input type="checkbox" name="check" v-model="check" value="海关出口等级"> 委托出口企业名称不符</label>
          <h2>*  报关单商品信息不符</h2>
          <label><input type="checkbox" name="check" v-model="check" value="开户行信息"> 出口商品名称不符</label>
          <label><input type="checkbox" name="check" v-model="check" value="银行账户"> 出口商品HS编码不符</label>
          <label><input type="checkbox" name="check" v-model="check" value="商品总价"> 商品总价不符</label>

          <h2>*  以下收汇结汇信息不符</h2>
          <label><input type="checkbox" name="check" v-model="check" value="结汇金额"> 结汇金额不符</label>
          <label><input type="checkbox" name="check" v-model="check" value="收汇金额"> 收汇金额不符</label>
          <label><input type="checkbox" name="check" v-model="check" value="退税总金额"> 退税总金额不符</label>
          <h2>*  发票信息不符</h2>
          <label><input type="checkbox" name="check" v-model="check" value="发票代码"> 发票代码不符</label>
          <label><input type="checkbox" name="check" v-model="check" value="发票数量"> 发票数量不符</label>
          <label><input type="checkbox" name="check" v-model="check" value="发票总金额"> 发票总金额不符</label>

          <h2>*  票据信息不符</h2>
          <label><input type="checkbox" name="check" v-model="check" value="与报关单不一致"> 与报关单不一致</label>
          <label><input type="checkbox" name="check" v-model="check" value="与海关收汇凭证不一致"> 与海关收汇凭证不一致</label>
          <label><input type="checkbox" name="check" v-model="check" value="与海关结汇凭证不一致"> 与海关结汇凭证不一致</label>
          <label><input type="checkbox" name="check" v-model="check" value="与海关发票不一致"> 与海关发票不一致</label>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="getReson()">确 定</el-button>
        </span>
      </el-dialog>
 </div>
</template>
<script type="text/javascript">
import tablesTitMore from './tables-tit-more'
export default({
  props: ['applyData', 'auditInfo', 'auditInfoAll', 'receiptImgss'],
  data () {
    return {
      reason: '',
      dialogVisible: false,
      formLabelWidth: '600px',
      check: []
    }
  },
  components: {
    tablesTitMore
  },
  watch: {
    check: function (val, oldVal) {
      this.reason = val.join(',')
      console.log(this.reason)
    }
  },
  methods: {
    // 审核通过
    auditYes () {
      let params = {
        'id': this.$route.query.id,
        'verifyResult': 1,
        'reason': ''
      }
      this.$http.post('/api/ooway/refundapply/validate', params)
        .then(res => {
          if (res.data.status === 200) {
            this.$router.push({
              name: 'oowayHome'
            })
          } else {
            window.alert(res.data.msg)
            this.$router.push({
              name: 'outTaxList'
            })
          }
        })
    },
    // 审核不通过
    auditNo () {
      this.dialogVisible = true
    },
    //审核不通过接口
    getReson (reson) {
      let _this = this
      let params = {
        'id': this.$route.query.id,
        'verifyResult': 0,
        'reason': this.reason
      }
      this.$http.post('/api/ooway/refundapply/validate', params)
        .then(res => {
          if (res.data.status === 200) {
            _this.$message({
              type: 'success',
              message: '审核通过成功!'
            })
            this.$router.push({
              name: 'oowayHome'
            })
          } else {
            _this.$message({
              type: 'success',
              message: '审核通过成功!'
            })
          }
        })
        this.dialogVisible = false
    },
    // 弹窗
    handleClose(done) {
      let _this = this
        this.$confirm('确认关闭？')
          .then(_ => {
            done()
          })
          .catch(_ => {})
      }
  }
})
</script>
<style type="text/css" scoped>
 @import '../../assets/css/detail.css';
   .s-radio{
    line-height:30px;
  }
  .s-radio div{
    margin:5px 0;
  }
  .btn-orange{
    margin-left:80px;
  }
.company-info dl dt{
  line-height: 34px;
}
</style>
