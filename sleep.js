const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        console.log("sleep 1");
        return setTimeout(resolve, milliseconds)
    });
};

const testSleep = async () => {
    console.log('Step 1 - Called');
    await  await new Promise(resolve => {
        console.log("sleeep 1");
        return setTimeout(resolve, 5000)
    });
    console.log('Step 2 - Called');
}

testSleep();