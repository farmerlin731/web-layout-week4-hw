var a =[];

for (var i=0;i<11;i++){
    // console.log(i);
    a[i] = function(){console.log(i)};
}

a[2]();
a[3]();
a[4]();

console.log(a[2]);
// console.log(`template: ${i}`);