let i1 = 0;
async function naiveApproach_1() {
    i1++;
    const ind = i1;
    console.log("Start", ind);
    const curTask = delay(Math.random() * 15000);
    await curTask;
    console.log("done!" + ind);
}
document.getElementById('btn1').addEventListener('click', naiveApproach_1);





let i2 = 0;
const tasks_2 = [];
async function naiveApproach_2() {
    i2++;
    const ind = i2;
    console.log("Start", ind);
    const curTask = delay(Math.random() * 15000);
    const prevTask = tasks_2[ind - 1];
    tasks_2[ind] = curTask;
    await prevTask;
    await curTask;
    delete tasks_2[ind - 1];
    console.log("done!" + ind);
}
document.getElementById('btn2').addEventListener('click', naiveApproach_2);






let i3 = 0;
const tasks_3 = [];
async function good_3() {
    i3++;
    const ind = i3;
    console.log("Start", ind);
    const curTask = delay(Math.random()* 15000);
    const curTaskAndPrevTask = Promise.all([
        curTask,
        tasks_3[ind - 1],
    ]);
    tasks_3[ind] = curTaskAndPrevTask;

    await curTaskAndPrevTask;

    delete tasks_3[ind - 1];
    console.log("done!" + ind);
}
document.getElementById('btn3').addEventListener('click', good_3);
