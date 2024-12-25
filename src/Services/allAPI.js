import commonAPI from "./commonAPI";
import server_url from "./serviceUrl";


// api call for add video details , 

export const addVideoAPI=async(video)=>{
return await commonAPI("POST",`${server_url}/allVidideos`,video)
}


// api call for get videos

export const getVideoAPI=async()=>{
return await  commonAPI("GET",`${server_url}/allVidideos`,"")
}

// api call for delete videocard

export const deleteVideoAPI=async(videoId)=>{
return await  commonAPI("DELETE",`${server_url}/allVidideos/${videoId}`,{})
}
  
// api call for saving watch history

export const saveHistory=async(video)=>{
return await commonAPI("POST",`${server_url}/watchHistory`,video)
}
    
// get history api call

export const getAllHistory=async()=>{
return await  commonAPI("GET",`${server_url}/watchHistory`,"")
}
    
// delete history api call

export const deleteHistory=async(videoId)=>{
return await  commonAPI("DELETE",`${server_url}/watchHistory/${videoId}`,{})
}
      
// api call for add category

export const addCategoryAPI=async(categoryDetails)=>{
return await commonAPI("POST",`${server_url}/category`,categoryDetails)
}
    
// api cal for get all category

export const getCatecoryAPI=async()=>{
return await commonAPI("GET",`${server_url}/category`,"")
}

// delete api for category

export const deleteCategoryAPI=async(categoryId)=>{
return await  commonAPI("DELETE",`${server_url}/category/${categoryId}`,{})
}

// api call for getting single video 

export const getSingleVideoAPI=async(videoId)=>{
return await  commonAPI("GET",`${server_url}/allVidideos/${videoId}`,"")
}
    
// api for update category

export const updateCategoryAPI=async(categoryId,categoryDetails)=>{
return await commonAPI("PUT",`${server_url}/category/${categoryId}`,categoryDetails)
}
        
// api call for getting single category 

export const getSingleCategoryAPI=async(categoryId)=>{
return await  commonAPI("GET",`${server_url}/category/${categoryId}`,"")
}