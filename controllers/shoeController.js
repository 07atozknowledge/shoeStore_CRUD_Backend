const Shoe = require("../models/shoeModels");

const getShoes = async (req,res) => {
    const shoes = await Shoe.find();
    res.json(shoes);
}


const createShoe = (req,res) => {
    const { title, price , image } =  req.body;

    const shoe =  new Shoe({
        title,
        price,
        image
    });

    shoe.save();
    res.json(shoe);
};

const deleteShoe = async (req,res) => {
const deletedShoe = await Shoe.findByIdAndDelete(req.params.id);
res.json(deletedShoe);
}

const updateShoe = async (req,res) => {

    const { title, price , image } =  req.body;

    const updatedShoe = await Shoe.findById(req.params.id);

    updatedShoe.title = title;
    updatedShoe.price = price;
    updatedShoe.image = image;

    updatedShoe.save();

    res.json(updatedShoe);
    
}

exports.getShoes = getShoes;

exports.createShoe = createShoe;

exports.deleteShoe = deleteShoe;

exports.updateShoe = updateShoe;