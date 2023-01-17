import { Component, For } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div class="h-screen flex flex-col">
      <div class="grid justify-center content-center grow select-none">
        <p class="font-sitelen text-[80vh] leading-none">toki</p>
      </div>
      <div class="flex w-full">
        <For each={["toki", "pona", "sitelen", "mu"]}>{(word, number) =>
          <button class="border-4 border-black flex p-2 m-2 flex-1">
            <span class="text-center text-4xl grow">{word}</span>
            <span>{number() + 1}</span>
          </button>}
        </For>
      </div>
    </div>
  );
};

export default App;
