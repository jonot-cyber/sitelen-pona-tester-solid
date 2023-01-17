import { Component, JSX, onCleanup, onMount } from "solid-js";

const WordButton: Component<{word: string, number: number, answer: (guess: string) => void}> = (props) => {
    function keyListener(ev: KeyboardEvent) {
        if (ev.key === (props.number + 1).toString()) {
            props.answer(props.word)
        }
    }

    onMount(async () => {
        window.addEventListener("keypress", keyListener)
    })

    onCleanup(async () => {
        window.removeEventListener("keypress", keyListener)
    })

    return (
        <button onclick={() => {props.answer(props.word)}} class="border-4 border-black text-black bg-white flex p-2 m-2 flex-1 dark:bg-black dark:border-white dark:text-white">
            <span class="text-center text-4xl grow">{props.word}</span>
            <span>{props.number + 1}</span>
        </button>
    )
}

export default WordButton