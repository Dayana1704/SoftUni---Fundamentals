function manipulate(nums, input) {


    for (let i = 0;i<=input.length-1; i++) {
        let token = input[i].split(" ");
        let command = token[0];
        let index = Number(token[1]);
        let element = Number(token[2]);
        switch (command) {
            case "add":
                nums.splice(index, 0, element);
                break;
            case "addMany":
                let firstIndex = Number(token[1]);
                token.splice(0, 2);
                for (let i = 0; i <= token.length - 1; i++) {
                    nums.splice(firstIndex + Number(i), 0, token[i]);
                }
                break;
            case "contains":
                
                console.log(nums.indexOf(index));
                break;
            case "remove":
                nums.splice(index, 1);
                break;
            case "shift":
                for (let j = 0; j <= index - 1; j++) {
                    let shifted = nums.shift();
                    nums.push(shifted);
                }
                break;
            case "sumPairs":
                if (nums.length % 2 !== 0) {
                    nums.push(0);
                }
                let resArr = [];
                for (let k = 0; k <= nums.length - 1; k += 2) {
                    let sum = 0;
                    sum += Number(nums[k]) + Number(nums[k + 1]);
                    resArr.push(sum);
                }
                nums = resArr;
                break;
            case "print":
                console.log(`[ ${nums.join(", ")} ]`);

        }
    }

}