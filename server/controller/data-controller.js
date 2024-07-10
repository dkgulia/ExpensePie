import postModel from "../model/model.js";

export const addData = async (request, response) => {
    const data = request.body;

    const newData = new postModel(data);

    try {
        await newData.save();
        response.status(201).json(newData);
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}

export const getData = async (request, response) => {
    try {
        const data = await postModel.find({});
        response.status(201).json(data);
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}

// export const 