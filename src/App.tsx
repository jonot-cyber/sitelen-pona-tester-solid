import { Component, createSignal, For } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import wordlist from './wordlist';

function randomWord(excluding?: string): string {
  const availableWords = wordlist.filter(word => word != excluding)
  return availableWords[Math.floor(Math.random() * availableWords.length)]
}

function generateList(word: string, count: number): string[] {
  let ret = []
  ret.push(word)
  for (let i = 0; i < count - 1; i++) {
    ret.push(randomWord(word))
  }
  shuffleArray(ret)
  return ret
}

function shuffleArray(list: string[]) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]]
  }
}

const App: Component = () => {
  const [word, setWord] = createSignal(randomWord());

  return (
    <div class="h-screen flex flex-col">
      <div class="grid justify-center content-center grow select-none">
        <p class="font-sitelen text-[80vh] leading-none">{word}</p>
      </div>
      <div class="flex w-full">
        <For each={generateList(word(), 4)}>{(word, number) =>
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
