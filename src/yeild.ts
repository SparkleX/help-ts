
async function  setAutoCommit():Promise<void>{
    console.debug('setAutoCommit');
}
async function  commit():Promise<void>{
    console.debug('commit');
}
async function transaction(callback: any):Promise<void> {
    await setAutoCommit();
    callback();
    await commit()
}


function  callback() {
    console.debug('callback');
    //console.debug('callback continue');
}

function  *callback1() {
    yield transaction(callback)
}
var point = callback1();

async function setAutoCommitFake():Promise<void>{
    console.debug('setAutoCommitFake');
    var a = point.next();
    console.log(a);
    return a.value;

}

async function commitFake():Promise<void>{
    //console.log(point.next());
    console.debug('commitFake');
}
async function main():Promise<void>{
    //await transaction(callback);
    setAutoCommitFake().then((x)=>{
        console.log("...");
        console.log(point.next());
    
    
        console.debug("end");
    });


}

main();