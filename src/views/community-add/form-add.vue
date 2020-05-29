<template>
  <div class="form-bg">
    <van-form @submit="onSubmit">
      <van-field v-model="form.levelName"
        readonly
        @click="fleetShow = true"
        name="levelName"
        label="所属区域"
        placeholder="请选择所属区域"
        :rules="[{ required: true, message: '请选择所属区域' }]" />
      <van-field v-model="form.communityName"
        name="communityName"
        label="小区名称"
        placeholder="请选择小区名称"
        :rules="[{ required: true, message: '请选输入小区名称' }]" />
      <van-field readonly
        clickable
        name="calendar"
        v-model="form.calendar"
        label="修建时间"
        placeholder="点击选择修建时间"
        @click="showCalendar = true" />
      <van-field name="file"
        label="小区照片">
        <template #input>
          <van-uploader v-model="form.file"
            :after-read="afterRead"
            @delete="deleteFile" />
        </template>
      </van-field>
      <van-field readonly
        clickable
        v-model="form.address"
        label="绑定地址"
        placeholder="点击选择地址"
        @click="showPop = true" />
      <div style="margin: 30px 16px;">
        <van-row gutter="20">
          <van-col span="12">
            <van-button block
              type="info"
              native-type="submit">提交</van-button>
          </van-col>
          <van-col span="12">
            <van-button block
              plain
              type="default"
              native-type="button">取消</van-button>
          </van-col>
        </van-row>
      </div>
    </van-form>
    <van-calendar v-model="showCalendar"
      @confirm="onConfirm" />
    <van-popup closeable
      v-model="showPop"
      position="bottom"
      :style="{ height: '80%' }">
      <div class="pop-box">
        <h3 class="title">温馨提示:</h3>
        <div class="tips">
          <p>1、支持模糊搜索，关键字搜索；</p>
          <p>
            2、如果搜不到或无法确定你想要录入的地址，请通过民警公示中联系社区民警协助处理！
            （课点击下载名单查询所在社区负责人电话或联系户政大队谢警官：13688057073）【管理员名单！】
          </p>
        </div>
        <div>
          <van-search v-model="keyword"
            placeholder="青羊区"
            @search="search" />
          <van-list v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check="false">
            <van-cell v-for="item in list"
              :key="item.dmid"
              :title="item.dmmc"
              @click="selectThis(item)" />
          </van-list>
        </div>
      </div>
    </van-popup>
    <!-- <fleet-choose :show="true" :initFleetNum="fleetInfo.FleetNum"></fleet-choose> -->
    <fleet-choose :show="true" initFleetNum="00-025-002-001-003"></fleet-choose>
    
  </div>
</template>
<script>
import { queryDoorAddress } from "@/api/index";
import { mapState } from "vuex"
import { FleetChoose } from '@/components'

export default {
  name: "form-add",
  data() {
    return {
      form: {},
      showCalendar: false,
      showPop: false,
      keyword: "",
      list: [],
      loading: false,
      finished: false,
      pageNum: 1,
      pageSize: 10,
      files: [],

    };
  },
  computed: {
    ...mapState(["user","fleetInfo"])
  },
  methods: {
    afterRead(file) {
      this.files.push(file.file);
    },
    deleteFile(file, { index }) {
      this.files.splice(index, 1);
    },
    selectThis(item) {
      this.form.address = item.dmmc;
      this.form.addressId = item.dmid;
      this.showPop = false;
    },
    search(text) {
      this.finished = false;
      this.loading = false;
      this.list = [];
      this.pageNum = 1;
      this.onLoad();
    },
    onConfirm(date) {
      this.form.calendar = `${date.getFullYear()}-${date.getMonth() +
        1}-${date.getDate()}`;
      this.showCalendar = false;
    },
    onSubmit(form) {
      let formData = new FormData();
      for (let i = 0; i < this.files.length; i++) {
        formData.append("file", this.files[i]);
      }
      const { file, fleetNum, ...rest } = this.form;
      for (let key in rest) {
        formData.append(key, rest[key]);
      }

      formData.append("fleetNum", "00-001");
      formData.append("levelName", "安谱");
      formData.append("fleetId", this.user.FLEET_ID);
      this.$emit("submit", formData);
    },
    onLoad() {
      const params = {
        word: this.keyword
      };
      queryDoorAddress(params).then(res => {
        try {
          this.list = res.obj.list.data.records || [];
        } catch (error) {
          this.list = [];
        }
        this.loading = false;
        this.finished = true;
      });
    }
  },
  components: {
    FleetChoose
  }
};
</script>

<style scoped lang="less">
.form-bg {
  background: #fff;
  padding-bottom: 20px;
  .pop-box {
    padding: 16px 20px;
    .tips {
      margin-top: 20px;
      font-size: 14px;
      line-height: 24px;
      letter-spacing: 0px;
      color: #666666;
      p {
        margin-bottom: 0;
      }
    }
  }
  .pop-box /deep/ .van-search {
    padding: 10px 0;
  }
  .title {
    font-size: 18px;
    font-stretch: normal;
    letter-spacing: 0px;
    color: #2ac9f3;
  }
}
</style>