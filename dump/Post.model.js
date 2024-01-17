const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    location: {
        type: String,
        required: true
    },
    duration: Number, // yo diría que el baremo sean dias para hacerlo algo uniforme
    distance: Number, // en km
    typeOfRoadtrip:{
        type: String,
        enum:['Escape trip', 'Spa trip', 'Honeymoon', 'Cultural']
    },
    activities:{
        type: [String],
    }, 
    itinerary:[{
        day: {
            location: String,
            description: String,
            images: [String], // esto tendrá que configurarse con cloudinary
        }
    }],
    createdBy: {
            type: Schema.Type.ObjectId,
            ref: "User"
    },

    comments: [{
        type: Schema.Type.ObjectId,
        ref: "Comment"
    }],

}, {
    timestamps: true
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
