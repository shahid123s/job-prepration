  let nums = [1,2,3,4]
  
  
  const left = [];
    const right = [];

    let product = 1
    for(let i = 0 ; i < nums.length; i++){
        left.push(product);
        product *= nums[i];
    }

    product = 1 ;
    for(let i = nums.length -1 ; i >= 0 ; i-- ) {
        right[i] = product;
        product *= nums[i];
    }
    let out = []
    for(let i = 0 ; i < nums.length ; i ++){
        out.push(right[i] * left[i])
    }


    console.log(out)