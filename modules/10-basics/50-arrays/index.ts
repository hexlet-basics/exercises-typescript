// BEGIN
function filterAnagrams(anagram: string, anagrams: string[]): string[] {
  const standard = anagram.split('').sort().join('');
  return anagrams.filter((item) => item.split('').sort().join('') === standard);
}
// END

export default filterAnagrams;
