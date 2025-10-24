 function padLeft(content,count=2,padStr="0"){
            count=count||2
            padStr=padStr||"0"
            return content.toString().padStart(count,padStr)
        }