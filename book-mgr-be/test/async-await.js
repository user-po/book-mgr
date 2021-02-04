// const request = (arg, fn) => {
//   setTimeout(() => {
//     console.log(arg);
//     fn(arg + 1);
//   }, 300);
// };
// request(1, (res) => {
//   request(res, (res1) => {
//     request(res1, (res2) => {
//       //回调地狱
//       console.log(res2);
//     });
//   });
// });

const request = (arg) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(arg);
      resolve(arg + 1);
    }, 300);
  });
};

request(1)
  .then((res1) => {
    return request(res1);
  })
  .then((res2) => {
    return request(res2);
  });
