const dotProduct = (nums1, nums2) => {
   let product = 0;
   for (let i = 0; i < nums1.length; i++){
    product += nums1[i] * nums2[i];
   }
   return product;
}

nums1 = [1,0,0,2,3]
nums2 = [0,3,0,4,0]

console.log("Vetor Escalar: " + dotProduct(nums1, nums2))