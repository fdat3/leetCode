class Solution {
    public int searchInsert(int[] nums, int target) {
        for(int i = 0, length = nums.length; i < length; i++) 
		{
			if(nums[i] == target || target < nums[i]) 
			{
				return i;
			}
		}
		return nums.length;
    }
}
