function simulateTask(isSuccess) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (isSuccess) {
        res("Task Complete !");
      } else {
        rej(new Error("Task Failure!"));
      }
    }, 2000);
  });
}

// simulateTask(false)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

async function runTask(isSuccess) {
  try {
    const result = await simulateTask(isSuccess);
    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

runTask(false);
