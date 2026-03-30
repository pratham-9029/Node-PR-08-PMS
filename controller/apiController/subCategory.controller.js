
import fs from "fs";
import subCategoryModel from "../../models/subCategoryModel.js";

export const createSubCategory = async (req, res) => {
    try {
        req.body.image = req.file.path;
        const product = await subCategoryModel.create(req.body);
        return res.json(product);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

export const getAllSubCategory = async (req, res) => {
    try {
        const products = await subCategoryModel.find({});
        return res.json(products);
    } catch (error) {
        return res.json({ error: error.message });
    }
}

// export const deleteSubCategory = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const dltProduct = await subCategoryModel.findByIdAndDelete(id);
//         return res.json(dltProduct);
//     } catch (error) {
//         return res.json({ error: error.message });
//     }
// }

export const updateSubCategory = async (req, res) => {
    try {
        const { id } = req.params;

        if (req.file) {
            req.body.image = req.file.path;
        }

        const update = await subCategoryModel.findByIdAndUpdate(id, req.body);
        fs.unlinkSync(update.image);

        return res.json({ message: "success" });
    } catch (error) {
        return res.json({ error: error.message })
    }
}