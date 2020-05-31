<template>
  <div>
    <top-header rightText="实有添加" rightIcon="friends-o"></top-header>
    <div class="main">
      <h2 class="block__title">个人信息</h2>
      <van-form @submit="onSubmit">
        <van-field name="file" :rules="[{ required: true, message: '请上传头像' }]" label="头像">
          <template #input>
            <van-uploader :multiple="false" v-model="form.file" :max-count="1" />
          </template>
        </van-field>
        <van-field
          v-model="form.name"
          name="name"
          label="姓名"
          placeholder="请输入姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="form.IdNum"
          name="IdNum"
          label="身份证"
          placeholder="请输入身份证"
          :rules="[{ required: true,pattern: regIdCar, message: '请输入正确格式的身份证' }]"
        />
        <van-field name="radio" :rules="[{ required: true, message: '请选择性别' }]" label="性别">
          <template #input>
            <van-radio-group v-model="form.sex" direction="horizontal">
              <van-radio :name="0">男</van-radio>
              <van-radio :name="1">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <van-field
          v-model="form.phoneNum"
          name="phoneNum"
          label="联系方式"
          placeholder="请输入联系方式"
          :rules="[{ required: true, message: '请输入联系方式' }]"
        />

        <van-field
          readonly
          clickable
          name="nationalCode"
          :value="form.nationalText"
          label="民族"
          placeholder="点击选择民族"
          @click="showPicker = true"
          :rules="[{ required: true, message: '请选择民族' }]"
        />
        <van-field
          v-model="form.address"
          name="address"
          readonly
          clickable
          @click="showPop = true"
          label="居住地址"
          placeholder="请选择居住地址"
          :rules="[{ required: true, message: '选择居住地址' }]"
        />
        <van-field
          v-model="form.communityName"
          name="communityName"
          label="小区名称"
          placeholder="请输入小区名称"
          :rules="[{ required: true, message: '请输入小区名称' }]"
        />
        <van-field
          v-model="form.unit"
          name="unit"
          label="小区单元"
          placeholder="请输入小区单元"
          :rules="[{ required: true, message: '请输入小区单元' }]"
        />
        <van-field
          clickable
          @click="showPicker2 = true"
          name="ownerTypeText"
          v-model="form.ownerTypeText"
          label="住房类型"
          placeholder="请选择住房类型"
          :rules="[{ required: true, message: '请选择住房类型' }]"
        />
        <van-field
          v-model="form.domicile"
          name="domicile"
          label="户籍地址"
          placeholder="请输入户籍地址"
          :rules="[{ required: true, message: '请输入户籍地址' }]"
        />

        <div style="margin: 30px 16px;">
          <van-row gutter="20">
            <van-col span="12">
              <van-button block type="info" native-type="submit">提交</van-button>
            </van-col>
            <van-col span="12">
              <van-button block plain type="default" native-type="button" @click="$router.go(-1)">取消</van-button>
            </van-col>
          </van-row>
        </div>
      </van-form>
    </div>
    <van-popup v-model="showPicker" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns"
        @confirm="onConfirm"
        value-key="label"
        @cancel="showPicker = false"
      />
    </van-popup>
    <van-popup closeable v-model="showPop" position="bottom" :style="{ height: '80%' }">
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
          <van-search v-model="keyword" placeholder="青羊区" @search="search" />
          <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check="false"
          >
            <van-cell
              v-for="item in list"
              :key="item.dmid"
              :title="item.dmmc"
              @click="selectThis(item)"
            />
          </van-list>
        </div>
      </div>
    </van-popup>
    <van-popup v-model="showPicker2" position="bottom">
      <van-picker
        show-toolbar
        :columns="columns2"
        @confirm="onConfirm2"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import { Header } from "@/components";
import { sexMap, regIdCar, nations } from "@/constants/constants";
import { mapState } from "vuex";
import {
  insertPopulationHis,
  updateCollectPopulationHis,
  queryDoorAddress
} from "@/api/index";

export default {
  name: "population-edit",
  data() {
    return {
      regIdCar: regIdCar,
      showPicker: false,
      columns: nations,
      form: {
        file: [],
        houseId: 0,
        ...this.$route.query
      },
      showPop: false,
      keyword: "",
      list: [],
      finished: false,
      loading: false,

      showPicker2: false
    };
  },
  computed: {
    ...mapState(["user","ownerTypeMap"]),
    columns2() {
      return Object.values(this.ownerTypeMap || {})
    },
  },
  created() {
    if (this.$route.query.photoUrl) {
      this.form.file.push({
        url: photoUrl
      });
    }
    let code = this.$route.query.nationalCode;
    if (code) {
      let _index = nations.findIndex(a => a.value == code);
      if (_index > -1) {
        this.form.nationalText = nations[_index].label;
      }
    }
  },
  methods: {
    onConfirm2(value, index) {
      this.form.ownerTypeText = value
      Object.entries(this.ownerTypeMap).forEach(a => {
        if (a[1] === value) {
          this.form.ownerType = a[0]
        }
      })
      this.showPicker2 = false
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
    onLoad() {
      const params = {
        word: this.keyword
      };
      queryDoorAddress(params).then(res => {
        try {
          let list = res.obj.list.data.records || [];
          this.list = [...this.list, ...list];
        } catch (error) {
          this.list = [];
        }
        this.loading = false;
        this.finished = true;
      });
    },
    onConfirm(obj, index) {
      this.form.nationalText = obj.label;
      this.form.nationalCode = obj.value;
      this.showPicker = false;
    },
    onSubmit(values) {
      const { file, ...rest } = this.form;
      let submitKeys = [
        "name",
        "IdNum",
        "phoneNum",
        "sex",
        "ownerType",
        "nationalCode",
        "houseId",
        "communityId",
        "address",
        "addressId",
        "domicile"
      ];
      let formData = new FormData();
      submitKeys.forEach(key => {
        formData.append(key, rest[key]);
      });
      if (file[0].file) {
        formData.append("file", file[0].file);
      }
      formData.append("fleetId", this.user.FLEET_ID);
      if (this.$route.query.id) {
        // 说明是编辑接口
        updateCollectPopulationHis(formData).then(
          res => {
            this.$toast("操作成功");
          },
          err => {
            console.log(err);
          }
        );
        return;
      }
      // 新增
      insertPopulationHis(formData).then(
        res => {
          this.$toast("操作成功");
          console.log(res);
        },
        err => {
          this.$toast.fail("提交失败");
          console.log(err);
        }
      );
    }
  },
  components: {
    topHeader: Header
  }
};
</script>

<style scoped lang="less">
.block__title {
  margin: 0;
  padding: 20px 16px 16px;
  color: rgba(69, 90, 100, 0.6);
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
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
.title-block {
  font-size: 14px;
  font-weight: 500;
  color: rgba(51, 51, 51, 1);
  line-height: 48px;
  padding-left: 14px;
}
</style>