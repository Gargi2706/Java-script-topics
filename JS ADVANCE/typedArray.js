//typed array : provide efficient way to handle binary data
//creating array by length
let array = new Int16Array(4);
console.log(array);

//from normal array
let array1 = new Int8Array([14,40,800]);
console.log(array1);

let buffer = new ArrayBuffer(8);
let array2 = new Int32Array(buffer);

let b= new Int8Array(3);
b[0]= 5;
b[1] = 4;
b[2] = 2;
console.log(b);

// properties & method : arr.length = number of elements
                       // arr.byteLength = byte used
                       // arr.byteOffset = offset  from buffer start(where tha memory starts)
                       // rr.buffer = reference to arraybuffer

 let a = new Int8Array(1);
 a[0] = 300;
 console.log(a[0]); //44  not clamped (300 % 256)

 let arr = new Uint8ClampedArray(1);
 arr[0]= 300;
 console.log(arr[0]); // 255 - clamped

 //fill() = changesll the elements in typed array to a value
 let c= new Int8Array(4);
 c.fill(100);
 console.log(c);


 //array buffer
const myBuf = new ArrayBuffer(6);
const view = new Int8Array(myBuf);
view[1] = 89;
view[2] = 12;
view[0] = 22;
console.log(view);

const view1 = new Int8Array(6); // wihtout array buffer
view1[1] = 89;
view1[2] = 12; 
view1[0] = 22;
console.log(view1);

const myBuffer = new ArrayBuffer(4);
let d = new Int8Array(myBuffer);
let e = new Int8Array(myBuffer);
d[0]=21;
d[1]=44;
e[0]=11;
e[1]=66;
console.log(d);
console.log(e);


//dataview : read and write different datatypes from the arraybuffer
let buffeer = new ArrayBuffer(6);
let view2 = new DataView(buffeer);
view2.setUint32(0);
view2.setFloat32(0,65);
console.log(view2.getFloat32(0));
console.log(view2.getUint32(1));