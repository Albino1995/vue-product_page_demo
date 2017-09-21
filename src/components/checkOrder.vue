<template>
  <div>
    <thisDialog :is-show="isShowCheckDialog" @on-close="checkStatus">
      请检查你的支付状态！
      <div class="button" @click="checkStatus">
        支付成功
      </div>
      <div class="button" @click="checkStatus">
        支付失败
      </div>
    </thisDialog>
    <thisDialog :is-show="isShowSuccessDialog" @on-close="toOrderList">
      购买成功！
    </thisDialog>
    <thisDialog :is-show="isShowFailDialog" @on-close="toOrderList">
      购买失败！
    </thisDialog>
  </div>
</template>

<script>
import Dialog from './base/dialog'
export default {
  components: {
    thisDialog: Dialog
  },
  props: {
    isShowCheckDialog: {
      type: Boolean,
      default: false
    },
    orderId: {
      type: [String, Number]
    }
  },
  data () {
    return {
      isShowSuccessDialog: false,
      isShowFailDialog: false
    }
  },
  methods: {
    checkStatus () {
      this.$http.post('/api/checkOrder', {
        orderId: this.orderId
      })
      .then(() => {
        this.isShowSuccessDialog = true
        this.$emit('on-close-check-dialog')
      }, () => {
        this.isShowFailDialog = true
        this.$emit('on-close-check-dialog')
      })
    },
    toOrderList () {
      this.$router.push({path: '/order-list'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
