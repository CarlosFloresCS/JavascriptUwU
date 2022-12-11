import {cuadradoPromise} from './promise.js';
async function funcionAsincronaDeclarada() {
  try {
    console.log("Inicio Async Function");
    let obj = await cuadradoPromise(0);
    console.log(`Async function: ${obj.value}, ${obj.result}`);

    obj = await cuadradoPromise(1);
    console.log(`Async function: ${obj.value}, ${obj.result}`);
  } catch (error) {
    console.log(error);
  }
}

funcionAsincronaDeclarada();
