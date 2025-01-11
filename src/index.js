const messages = [
  '✨ This is where the magic begins...',
  '✅ Code committed, success guaranteed.',
  '🤯 Version control... or version chaos?',
  '📂 COMMIT ALL THE FILES!',
  '🌍 Same mission as always: conquer the world (with code).',
  '🚀 Engines ready, prepare for liftoff.',
  "🌀 This commit is a hologram, don't trust it too much.",
  "🕵️‍♂️ I'll explain it when you're a senior dev.",
  '🐉 Here be dragons... or bugs.',
  '🔄 Reinventing the wheel, because why not.',
  "✨ This is not the commit message you're looking for, but it works.",
  '🦇 Batman! (this commit comes from the shadows).',
];

const funnyCommit = () => {
  const message = messages[Math.floor(Math.random() * messages.length)];
  console.log(`\x1b[34m${message}\x1b[89m]`);
};

module.exports = {
  funnyCommit,
};
