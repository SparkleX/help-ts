let object: any = {a:1, b:2}
for(const key in object) {
	console.debug(`${key} - ${object[key]}`)
}
console.debug(`---`)
object = ['a','b']
for(const key in object) {
	console.debug(`${key} - ${object[key]}`)
}

console.debug(`---`)
object = ['a','b']
for(const a of object) {
	console.debug(`${a}`)
}
console.debug(`---`)
object = {a:1, b:2}
for (const [key, value] of Object.entries(object)) {
	console.log(`${key} - ${value}`);
  }