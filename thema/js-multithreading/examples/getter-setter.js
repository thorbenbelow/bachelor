class A {
  _foo = "foo"
  get foo() {
    return this._foo
  }

  set foo(f) {
    this._foo = f
  }
}

const a = new A()

console.log(Object.getOwnPropertyNames(a))
console.log(a.foo)
a.foo = "b"
console.log(a.foo)
