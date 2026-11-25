import { mkdirSync, writeFileSync } from 'node:fs';
const O = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(O, { recursive: true });
// Entry: exactly 100 words — a villain monologue where the tiredness
// lives in the deflections (the chair, the lost keys, the nap), not in
// a plain statement that he is weary. He still has a scheme and a history.
writeFileSync(O + '/entry.txt', "Heroes. Sit down — no, not the throne, the other chair, the one that does not squeak. I conquered seven kingdoms before breakfast, and breakfast was three hundred years ago. The prophecy says a child of light will end me. Wonderful. Let them. I'll leave the door unlocked — I changed the locks twice, lost both keys, and the minions unionised about the stairs. My grand scheme? Honestly? A nap. A dark, uninterrupted nap, and a kingdom that runs itself. But first, the monologue. It is in the contract. So: tremble, mortal. Tremble quietly. Some of us have a schedule.");
