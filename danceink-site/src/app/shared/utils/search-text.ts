/**
 * Prepares text for forgiving search: lowercase, Greek accents and diaeresis removed
 * (πρωινά -> πρωινα, Ϊ -> ι) and final sigma folded (ς -> σ), so visitors can type
 * without accents or in capitals and still match.
 */
export function normalizeForSearch(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/ς/g, 'σ');
}

/**
 * True when every word of the query appears somewhere in the text. Longer words are
 * matched without their last letters, so different endings of a Greek word still match
 * (τιμη finds τιμές, κοστος finds κοστίζουν).
 */
export function matchesQuery(text: string, query: string): boolean {
  const haystack = normalizeForSearch(text);
  return normalizeForSearch(query)
    .split(/\s+/)
    .filter(Boolean)
    .every((word) => haystack.includes(stem(word)));
}

/** Drops the ending of longer words, always keeping at least 4 letters so short stems don't match everything. */
function stem(word: string): string {
  if (word.length >= 6) {
    return word.slice(0, -2);
  }
  return word.length === 5 ? word.slice(0, -1) : word;
}
