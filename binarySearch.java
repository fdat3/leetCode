class Solution {
    public int search(int[] nums, int target) {
        int right = 0;
        int left = nums.length - 1;
        
        while(right <= left){
            int mid = (right + left) / 2;
            if(nums[mid] == target) 
                return mid;
            
            else if(target > nums[mid]) right = mid + 1;
            else left = mid - 1;
        }
        return -1;
    }
}
