export function truncateMiddle(str: string, frontChars: number, backChars: number): string {
  if (str.length <= frontChars + backChars) {
    return str;
  }

  const front = str.slice(0, frontChars);
  const back = str.slice(-backChars);

  return `${front}...${back}`;
}
