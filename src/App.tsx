import { Component, createSignal, For } from 'solid-js';

import wordlist from './wordlist';
import WordButton from './WordButton';

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

  function handleAnswer(guess: string) {
    if (guess === word()) {
      alert("Correct!")
    } else {
      alert(`Incorrect! The correct answer was ${word()}`)
    }

    setWord(randomWord())
  }

  return (
    <div class="h-screen flex flex-col bg-white dark:bg-black">
      <div class="grid justify-center content-center grow select-none">
        <p class="font-sitelen text-[40vh] md:text-[80vh] leading-none text-black dark:text-white">{word}</p>
      </div>
      <div class="flex w-full flex-col md:flex-row">
        <For each={generateList(word(), 4)}>{(word, number) =>
          <WordButton word={word} number={number()} answer={handleAnswer} />}
        </For>
      </div>
    </div>
  );
};

export default App;
