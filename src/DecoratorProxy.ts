
export function proxy(data?: string) {
	console.debug("proxy registed " + data);
	return function (target: object, propertyKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
		descriptor.value = async function (param: any): Promise<any> {
			console.debug("proxy executed")
			return null;
		};
		return descriptor;
	};
}

class Test {
	@proxy("hello")
	public invoke() {
		console.debug("never here");
	};
}

const test = new Test();
test.invoke();