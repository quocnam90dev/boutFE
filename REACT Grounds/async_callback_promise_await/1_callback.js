// Vấn đề
/*
bạn ko có số của Nam., bạn muốn xin số nam.. bạn gọi thằng khác hỏi số dt của nam
*/

// const xinSoDt = () => {
//   let soDt
//   console.log('goi diện cho thằng bạn: Cho tao xin số thằng nam')

//   console.log('Thang ban dang tim so thang nam')

//   // 1 giây nữa tao sẽ thực hiện lệnh ở trong setTimeout này
//   setTimeout(() => {
//     soDt = 123456
//     console.log('Day roi. da tìm dc số nam.')
//   }, 1000)


//   return soDt
// }

// const soDtDaXin = xinSoDt()

// console.log(soDtDaXin)

// Cách giải quyết sai

// const xinSoDt = (hamGoiLaiSaukhiTimRa) => {
//   let soDt
//   console.log('goi diện cho thằng bạn: Cho tao xin số thằng nam')

//   console.log('Thang ban dang tim so thang nam')

//   // 1 giây nữa tao sẽ thực hiện lệnh ở trong setTimeout này
//   setTimeout(() => {
//     soDt = 123456
//     console.log('Day roi. da tìm dc số nam.')
//     hamGoiLaiSaukhiTimRa(soDt)
//   }, 1000)

// }

// const sauKhiNhanDcSoDt = soDtDaNhan => console.log('day la so dt Nam: ', soDtDaNhan)

// xinSoDt(sauKhiNhanDcSoDt)

// van đề quá nhiều hàm gọi lại (callback functions)

const xinSoDt = (hamGoiLaiSaukhiTimRa) => {
  let soDt
  console.log('goi diện cho thằng bạn: Cho tao xin số thằng nam')

  console.log('Thang ban dang tim so thang nam')

  // 1 giây nữa tao sẽ thực hiện lệnh ở trong setTimeout này
  setTimeout(() => {
    soDt = 123456
    console.log('Day roi. da tìm dc số Nam.')
    hamGoiLaiSaukhiTimRa(soDt, goiChoNam)
  }, 1000)

}
const sacPin = (soDt, hamGoiLaiSaukhiSacPin) => {
  console.log(`Doi ti. sac Pin dã`)

  setTimeout(() => {
    console.log('Sac pin xong, bat dau goi cho Nam')
    hamGoiLaiSaukhiSacPin(soDt)
  }, 2000)
}
const goiChoNam = soDt => console.log('Dang nc v Nam sau khi goi vao so: ', soDt)

//
xinSoDt(sacPin)