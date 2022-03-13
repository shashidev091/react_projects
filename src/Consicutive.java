import java.lang.*;

class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int total = 0;
        int count = 0;
        
        for(int i = 0; i< nums.length; i++) {
            if(nums[i] == 0){
                count = 0;
            } else {
                count++;
                total = Math.max(total, count);
            }
        }
        return total;
    }

    public static void main(String args[]) {
        Solution sol = new Solution();
        int[] nums = {1, 0, 1, 1, 1, 0, 1};
        System.out.println(sol.findMaxConsecutiveOnes(nums));
    }
}