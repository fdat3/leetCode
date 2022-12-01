class Solution {
    public int lengthOfLastWord(String s) {
        String trim = s.trim();
        
        int lastWord = trim.lastIndexOf(' ') + 1;
        
        return trim.length() - lastWord;
    }
}
