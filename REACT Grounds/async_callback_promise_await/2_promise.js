const xinSoDt = () => {
  console.log('Goi dien cho thang ban, cho tao xin số thằng Nam')
  console.log('Dang tim...')

  /*
  new Promise((resolve, reject) => {}): lời hứa
  có thể làm dc hoặc là ko làm dc
  */
  const thaotacTimKiem = new Promise((resolve, reject) => {
    let daTimThay

    setTimeout(() => {
      daTimThay = true

      if (daTimThay) {
        soDt = 123456
        console.log(`Day roi. so của nó là ${soDt}`)
        resolve(soDt) // hoàn thành lời hứa
      } else {
        reject(`Tao ko có số thằng Nam`) // ko hoàn thành lời hứa
      }
    }, 1000);
  })

  return thaotacTimKiem
}

// Sạc Pin
const sacPin = (soDt) => {
  console.log('Doi tí sạc pin cái.')
  let chayPin

  const thaoTacSacPin = new Promise((resolve, reject) => {
    setTimeout(() => {
      chayPin = true

      if (!chayPin) {
        console.log('sac day Pin, bắt đầu gọi NAM')
        resolve(soDt)
      } else {
        reject('chay pin rồi ko gọi dc')
      }
    }, 1500);
  })
  return thaoTacSacPin
}

const goiChoNam = (soDt) =>
  console.log('Dang nc v Nam qua số dt:', soDt)

xinSoDt()
  .then(soDt => {
    sacPin(soDt)
      .then(soDt => goiChoNam(soDt))
      .catch(err1 => console.log(err1))
  })
  .catch(err => console.log(err))