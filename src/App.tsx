import { useState } from 'react';
import './App.css';
import Graph from './components/Graph';
import Header from './components/Header';
import { BarParams } from './components/Bar';

function App() {
  const randomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const randomArray = () => {
    return [...Array(50)].map((e, i) => {
      return {
        value: Math.floor(Math.random() * 500),
        color: randomColor()
      }
    });
  }

  const [array, setArray] = useState<Array<BarParams>>(randomArray());
  const [disabled, setDisabled] = useState<boolean>(false);

  const execute = (algorithm: string) => {
    setDisabled(true);
    if(algorithm === "insertion") {
      insertionSort().then(() => {
        setDisabled(false);
      });
    } else if(algorithm === "quick") {
      quickSort().then(() => {
        setDisabled(false);
      });
    } else if(algorithm === "selection") {
      console.log("here")
      selectionSort().then(() => {
        setDisabled(false);
      })
    }
  }

  const randomize = () => {
    setArray(randomArray());
  }

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const insertionSort = async () => {
    let newArray = [...array];
    console.log(newArray);
    for(let i = 1; i < newArray.length; i++) {
      let key = newArray[i].value;
      let j = i - 1;
      while(j >= 0 && newArray[j].value > key) {
        let temp = newArray[j];
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = temp;
        j = j - 1
        setArray([...newArray]);
        await sleep(100);
      }
    }
  }

  const selectionSort = async () => {
    let newArray = [...array];
    console.log(newArray);
    for(let i = 0; i < newArray.length - 1; i++) {
      let min = newArray[i].value;
      let minIndex = i;
      for(let j = i + 1; j < newArray.length; j++) {
        if(min > newArray[j].value) {
          min = newArray[j].value;
          minIndex = j;
        }
      }

      let temp = newArray[i];
      newArray[i] = newArray[minIndex];
      newArray[minIndex] = temp;
      setArray([...newArray]);
      await sleep(100);
    }
  }

  const quickSort = async () => {
    let newArray = [...array];
    await quickSortRecursion(newArray, 0, newArray.length - 1);
  }
  const quickSortRecursion = async (array: Array<BarParams>, low: number, high: number) => {
    if(low < high) {
      let partitionIndex = await parition(array, low, high);
      quickSortRecursion(array, low, partitionIndex - 1);
      quickSortRecursion(array, partitionIndex + 1, high);
    }
  }
  const parition = async (array: Array<BarParams>, low: number, high: number) => {
    let pivot = array[high].value;
    let i = low - 1;

    for(let j = low; j <= high - 1; j++) {
      if(array[j].value < pivot) {
        i += 1;

        let temp = array[j];
        array[j] = array[i];
        array[i] = temp;
        setArray([...array]);
        await sleep(100);
      }

      let temp = array[i + 1];
      array[i + 1] = array[high];
      array[high] = temp;
      setArray([...array]);
      await sleep(100);
    }
    return i + 1;
  }

  return (
    <div>
      <Header onExecute={execute} onRandomize={randomize} disabled={disabled} />
      <Graph values={array} />
    </div>
  );
}

export default App;
