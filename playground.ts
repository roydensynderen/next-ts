interface Person {
  name: string,
  age: number
}

// type Person = {
//   name: string,
//   age: number
// }

export default function play() {
  const name = 'R'
  const age = 28
  const person = {
    name: 'D',
    age: 22
  }

  console.log('hello world')

  function logPersonInfo(name: string, age: number) {

    const info = `Name: ${name}, Age: ${age}`
    console.log(info)

    return info
  }

  function logPersonInfo2(person: Person) {

    const info = `Name: ${person.name}, Age: ${person.age}`
    console.log(info)

    return info
  }

  logPersonInfo(name, age)
  logPersonInfo2(person)
}