
export const uploadImage = async (req, res) => {
    console.log(req.files)
    return res.status(200).json('Upload ảnh thành công!');
}