import $ from 'jquery';
import preact from 'preact';

import { WordListItem } from './list-item.es6';
import { DifficultySelector } from './selector.es6';


class WordList extends preact.Component {

    render({ analysis, selection, onSelectWord, onSelectDifficulty }) {
        const sortedWords =
            analysis.words.sort((a, b) => a.difficulty.value - b.difficulty.value);

        const wordsWithDifficulty =
            $.grep(sortedWords, (w) => w.difficulty.level === selection.difficulty)

        return <div class="word-list">
            <div class="media">
                <span class="title">
                    Words in '{ analysis.media.title }'
                </span>
            </div>

            <DifficultySelector
                selected={selection.difficulty}
                onSelect={onSelectDifficulty}
                words={sortedWords} />

            <div class="list">
                { $.map(wordsWithDifficulty, item =>
                    <WordListItem word={item} onSelectWord={onSelectWord} /> )}
            </div>
        </div>;
    }
}


export { WordList };
