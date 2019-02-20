function checkID (ID) {
  if (typeof ID !== 'string') return '非法字符串'
  var city = JSON.parse(JSON.stringify(cityData))
  var birthday = ID.substr(6, 4) + '/' + Number(ID.substr(10, 2)) + '/' + Number(ID.substr(12, 2))
  var d = new Date(birthday)
  var newBirthday = d.getFullYear() + '/' + Number(d.getMonth() + 1) + '/' + Number(d.getDate())
  var currentTime = new Date().getTime()
  var time = d.getTime()
  var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  var sum, i, residue
  sum = 0
  if (!/^\d{17}(\d|x)$/i.test(ID)) return '非法身份证'
  if (city[ID.substr(0, 2)] === undefined) return '非法地区'
  if (time >= currentTime || birthday !== newBirthday) return '非法生日'
  for (i = 0; i < 17; i++) {
    sum += ID.substr(i, 1) * arrInt[i]
  }
  residue = arrCh[sum % 11]
  if (residue !== ID.substr(17, 1)) return '非法身份证'
  return false
}