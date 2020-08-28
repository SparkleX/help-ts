import fs from "fs";

async function callbackToAsync():Promise<any> {
	var p = new Promise( ( resolve, reject ) => {
		fs.readFile('/etc/passwd', {}, (err, data) => {
			if (err) {
				reject(err);
				return;
			}
			resolve(data);
		  });
	});
	return p;
}

