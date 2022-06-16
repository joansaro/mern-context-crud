import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({
    cloud_name: 'davfyq492',
    api_key: '745636483163413',
    api_secret: "Wds0Z96fGt0Q4PUdAE-m3Bm06Gs"
})

export const uploadImage = async filePath => {
    return await cloudinary.uploader.upload(filePath, {
        folder: 'posts'
    })
}

export const deleteImage = async id =>{
    return await cloudinary.uploader.destroy(id)
}
