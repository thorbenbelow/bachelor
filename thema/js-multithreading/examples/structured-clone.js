class A {
  foo = "foo"
  bar() {
    console.log(this.foo)
  }
}

const a = new A()

const copy = structuredClone(a)

copy.bar()
