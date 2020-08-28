import "reflect-metadata";

export function proxy(data?: string) {
	console.debug("proxy registed " + data);
	return function (target: object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
		Reflect.defineMetadata("method:" + propertyKey, data, target);
		return descriptor;
	};
}

class Test {
	@proxy("hello")
	public invoke() {
		console.debug("ok");
	};
}

let result = Reflect.getMetadata("method:invoke", Test.prototype);
console.debug(result);