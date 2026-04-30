import https from 'node:https';

const RESET  = '\x1b[0m';
const BOLD   = '\x1b[1m';
const DIM    = '\x1b[2m';
const CYAN   = '\x1b[36m';
const GREEN  = '\x1b[32m';
const YELLOW = '\x1b[33m';

const FALLBACK = {
  content: "A language that doesn't affect the way you think about programming is not worth knowing.",
  author:  'Alan Perlis',
};

function formatDate() {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric',
  }).format(new Date());
}

function fetchQuote() {
  return new Promise((resolve) => {
    const req = https.get('https://dummyjson.com/quotes/random', (res) => {
      let raw = '';
      res.on('data', (chunk) => { raw += chunk; });
      res.on('end', () => {
        try {
          const data = JSON.parse(raw);
          if (data.quote && data.author) resolve({ content: data.quote, author: data.author });
          else resolve(FALLBACK);
        } catch {
          resolve(FALLBACK);
        }
      });
    });

    req.setTimeout(5000, () => { req.destroy(); resolve(FALLBACK); });
    req.on('error', () => resolve(FALLBACK));
  });
}

async function main() {
  const quote = await fetchQuote();
  const bar   = DIM + '─'.repeat(60) + RESET;

  console.log();
  console.log(`${BOLD}${CYAN}Good morning, David!${RESET}`);
  console.log(`${GREEN}${formatDate()}${RESET}`);
  console.log();
  console.log(bar);
  console.log();
  console.log(`${YELLOW}"${quote.content}"${RESET}`);
  console.log(`${DIM}  — ${quote.author}${RESET}`);
  console.log();
}

main();
