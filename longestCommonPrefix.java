class Solution {
    public String longestCommonPrefix(String[] strs) {
        String repeatCommon = strs[0];
        
        for(int i = 0; i < strs.length; i++) {
            while(strs[i].indexOf(repeatCommon) != 0 ) {
                repeatCommon = repeatCommon.substring(0, repeatCommon.length() - 1);
            }
        }
        return repeatCommon;
    }
}
