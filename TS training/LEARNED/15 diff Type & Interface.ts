// differences
// 1. Khai báo
  //Type aka Alias
  type Shape1 = {
    name: string
    color: string
  }
  // interface
  interface Shape1Interface {
    name: string
    color: string
  }

// 2. interface có thể merge còn type thì KHÔNG
  interface iShape1 {
    color: string
  }
  interface iShape1 {
    name: string
  }
  const circle1: iShape1 = {
    color: 'color 1',
    name: 'name 1'
  }

  // when use type #Duplicate identifier tShape1
  // type tShape1 = {
  //   name: string
  // }
  // type tShape1 = {
  //   color: string
  // }

type keys = 'color' | 'name'
type Shape = {
  [key in keys]:string
}

const Circle2:Shape = {
  name: 'Circle',
  color: 'res'
}

interface Shape3 {
  [key in keys]:string
}

type Tuple = [number, number]
interface ITuple {
}
[1,2,3] as Tuple
[1,2,3] as ITuple