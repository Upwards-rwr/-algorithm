// 349. 两个数组的交集
// 给定两个数组 nums1 和 nums2 ，返回 它们的交集 。输出结果中的每个元素一定是 唯一 的。我们可以 不考虑输出结果的顺序 。
// 示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
// 示例 2：

// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
// 解释：[4,9] 也是可通过的


function intersection(nums1: number[], nums2: number[]): number[] {
    let res = []
    for(let i = 0;i < nums1.length;i++){
        for(let j = 0;j < nums2.length;j++){
            if(nums1[i] === nums2[j]){
                res.push(nums1[i])
                console.log(res)
            }
        }
    }
    return Array.from(new Set(res));

};