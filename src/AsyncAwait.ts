
async function test():Promise<string> {
	//throw "test error";
	return "100";
}

async function run():Promise<string> {
	return test();
}

const p = run();
p.then(a=>{
	console.info(`done :${a}`);
}).catch(err=>{
	console.error("err");
}).finally(()=>{
	console.info("finally");
});