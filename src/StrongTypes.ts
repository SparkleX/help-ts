interface Product {
	name: string;
	price?: number;	
}

const a: Product = { name:"Apple" }

type StringArray = string[];

function example(): StringArray {
	const rt = ["must", "be", "string"];
	return rt
}

