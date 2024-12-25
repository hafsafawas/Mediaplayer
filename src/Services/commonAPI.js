import axios from "axios";


const commonAPI=async(httpMethod,url,reqBody)=>{

    const reqConfig={

        method:httpMethod,
        // key and value are same then 
        // url:url,
        url, 
        data:reqBody

    }

    return await axios(reqConfig).then(res=>{
        return res 
    }).catch(err=>{
        return err
    })

}

export default commonAPI