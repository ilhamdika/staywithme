const mongoose = require ("mongoose")
const { objectId } = mongoose.Schema;

const bookingSchema = new mongoose.Schema({
    bookingStartDate : {
        type : Date,
        required : true
    },
    bookingEndDate : {
        type : Date,
        required : true
    },
    invoice : {
        type : String,
        required : true
    },
    itemId : {
        _id : {
            type : objectId,
            ref : 'Item'
        },
        title : {
            type : String,
            required : true
        },
        price : {
            type : Number,
            required : true
        },
        duration : {
            type : Number,
            required : true
        }
    },
    total : {
        type : Number,
        required : true
    },
    memberId :{
        type : objectId,
        ref : 'Member'
    },
    bankId :{
        type : objectId,
        ref : 'Bank'
    },
    payments : {
        proofPayment : {
            type : String,
            required : true
        },
        bankFrom : {
            type : String,
            required : true
        },
        accountHolder : {
            type : String,
            required : true
        },
        imageUrl : {
            type : String,
            required : true
        },
        status : {
            type : String,
            required : true
        }
    }

   
})

module.exports = mongoose.model('Booking', bookingSchema)