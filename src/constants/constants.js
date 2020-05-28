const sexMap = {
  0: "男",
  1: "女"
}

const regIdCar = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/;

const nations = [
  { value: 1, label: '汉族' },
  { value: 2, label: '蒙古族' },
  { value: 3, label: '回族' },
  { value: 4, label: '藏族' },
  { value: 5, label: '维吾尔族' },
  { value: 6, label: '苗族' },
  { value: 7, label: '彝族' },
  { value: 8, label: '壮族' },
  { value: 9, label: '布依族' },
  { value: 10, label: '朝鲜族' },
  { value: 11, label: '满族' },
  { value: 12, label: '侗族' },
  { value: 13, label: '瑶族' },
  { value: 14, label: '白族' },
  { value: 15, label: '土家族' },
  { value: 16, label: '哈尼族' },
  { value: 17, label: '哈萨克族' },
  { value: 18, label: '傣族' },
  { value: 19, label: '黎族' },
  { value: 20, label: '傈僳族' },
  { value: 21, label: '佤族' },
  { value: 22, label: '畲族' },
  { value: 23, label: '高山族' },
  { value: 24, label: '拉祜族' },
  { value: 25, label: '水族' },
  { value: 26, label: '东乡族' },
  { value: 27, label: '纳西族' },
  { value: 28, label: '景颇族' },
  { value: 29, label: '柯尔克孜族' },
  { value: 30, label: '土族' },
  { value: 31, label: '达翰尔族' },
  { value: 32, label: '么佬族' },
  { value: 33, label: '羌族' },
  { value: 34, label: '布朗族' },
  { value: 35, label: '撒拉族' },
  { value: 36, label: '毛南族' },
  { value: 37, label: '仡佬族' },
  { value: 38, label: '锡伯族' },
  { value: 39, label: '阿昌族' },
  { value: 40, label: '普米族' },
  { value: 41, label: '塔吉克族' },
  { value: 42, label: '怒族' },
  { value: 43, label: '乌孜别克族' },
  { value: 44, label: '俄罗斯族' },
  { value: 45, label: '鄂温克族' },
  { value: 46, label: '德昂族' },
  { value: 47, label: '保安族' },
  { value: 48, label: '裕固族' },
  { value: 49, label: '京族' },
  { value: 50, label: '塔塔尔族' },
  { value: 51, label: '独龙族' },
  { value: 52, label: '鄂伦春族' },
  { value: 53, label: '赫哲族' },
  { value: 54, label: '门巴族' },
  { value: 55, label: '珞巴族' },
  { value: 56, label: '基诺族' }]

const ownerTypeMap = {
  0: '自有房',
  1: '租客',
  2: '借住',
  3: '工作人员',
  9: '其他'
}

const houseStatusMap = {
  '0': '自住',
  '1': '出租',
  '2': '空置',
  "4": "异常"
}


export { sexMap, regIdCar, nations, ownerTypeMap,houseStatusMap }



