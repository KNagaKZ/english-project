# Baige Beyond Borders — four-player edition

This is the restored version from before the chapter redesign. Open `index.html` in Chrome or Edge. All questions and activities are inside the game; no printing, installation, internet or backend is required.

## Play

1. Enter four participant names and select their horses and colours.
2. Click **Roll & ride**. The 3D dice tumbles in the centre of the board, shows its result and moves the horse that number of spaces.
3. Read the landing-space passage and answer its multiple-choice question.
4. Read the feedback, click **Continue to the board**, then **End turn**.

A correct answer earns 10 points and the category's passport stamp. Challenge spaces give 20 points; bonus spaces give 15 and an extra turn. Wrong answers show an explanation without points or a stamp. Each category can be stamped once. Correct answers still earn points when that category is already collected.

The original 48 questions cover Traditions, Music, National Games, History, Cuisine and Geography. There are eight questions per category, shuffled without repeating until that deck is exhausted. Each answer has one attempt. There are no chapter stages, sentence-building tasks or chapter-selection screens.

Special spaces reveal action cards: forward 2/3/5 spaces, backward 2/3, return to START, rival back 2, bonus turn and swap. Rival and swap actions require choosing and confirming another participant. Card movement does not open another question. Optional manual movement and teacher stamp corrections remain available.

## Winning and movement

Defaults: two laps and four unique category stamps. Configure lap and achievement goals, all-six-category requirements and teacher winner confirmation in Game setup. Points show learning progress; winning requires the configured laps and stamps.

The board has 36 spaces; START is space 1. Forward crossings from space 36 to START earn laps. Backward crossings never earn laps; optionally they subtract a lap, to a minimum of zero. Forward special-card lap counting is configurable. Return to START and swaps preserve lap counts. Swaps exchange positions only.

## Saving and undo

Complete game state saves locally when browser storage is available, including pending questions, points, stamps, positions, laps, bonus turns, decks and undo history. Refresh reopens a pending challenge. Browser settings and file location can affect local-file storage.

Undo restores the prior action, including both participants in a swap. A special-card effect and its completion status are restored together. Reset is undoable. Up to 150 actions are retained; changing setup starts a new game and clears history.

Restoration uses the earlier version's save key, so a saved game from before the chapter redesign can resume. Chapter-edition saves remain untouched and are not loaded into this version.

## Sources

No Word document was supplied, so the original document's rules remain unverified. The game follows the written requests and later instruction to include all questions on screen. The board reference image inspired the perimeter layout.

Cultural context was checked against [UNESCO's Dombra Kuy page](https://ich.unesco.org/en/RL/kazakh-traditional-art-of-dombra-kuy-00996), [UNESCO's yurt-making record](https://www.unesco.org/archives/multimedia/document-3669), [Kazakhstan's culture and cuisine page](https://www.gov.kz/article/64578?lang=en), and [Kazakhstan's Baige information](https://www.gov.kz/memleket/entities/mfa-london/press/news/details/807594?lang=ru). Questions, passages and illustrations are original; icons use system emoji. There are no external assets or network calls.

## Publishing

Upload `index.html` and this README to `knaga-kz/english-project`. In Settings → Pages, choose your branch and the root folder. Only `index.html` is required to play. Test scripts and preview images are optional.

## Verification

The restored game passed 290 checks in both Chrome and Edge, with no runtime errors. These included all 48 question answers, single-answer stamps, original winning conditions, special-card undo, saved-game reload, dice movement, reset, projector fit and mobile sizing.

`verify-restored.cjs` covers the restored 48 answer keys, single-answer stamps, original victory rules, every board landing, all special cards and undo, saved challenges after refresh, dice movement, reset and layouts. `verify-dice.cjs` checks the six 3D face orientations and matching movement. Tests use the development machine's bundled Playwright path and are not needed to play.

