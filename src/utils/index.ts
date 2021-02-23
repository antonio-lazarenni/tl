function print(title: string, info: string | undefined) {
  // eslint-disable-next-line
    console.log(
    `%c ${title} %c ${info} %c`,
    'background: #f26d21; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
    'background: #009eed; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
    'background:transparent'
  );
}

export function printBuildInfo() {
  print('Version', process.env.REACT_APP_VERSION);
  print('Branch', process.env.REACT_APP_GIT_BRANCH);
  print('Commit', process.env.REACT_APP_GIT_COMMIT);
  print('Build Time', process.env.REACT_APP_BUILD_TIME);
}

const offset = 127397;
const A = 65;
const Z = 90;

export function emojiFromIso(country: String) {
  const f = country.toUpperCase().codePointAt(0) || 0;
  const s = country.toUpperCase().codePointAt(1) || 0;

  if (country.length !== 2 || f > Z || f < A || s > Z || s < A) {
    return '🌐';
  }

  return String.fromCodePoint(f + offset) + String.fromCodePoint(s + offset);
}
