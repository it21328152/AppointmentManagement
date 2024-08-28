const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const appointmentSchema = new Schema({

    doctor : {
        type : String,
        required: true
    },
    date : {
        type : String,
        required: true
    },
    patientname : {
        type : String,
        required: true
    },
    age : {
        type : Number,
        required: true
    },
    gender : {
        type : String,
        required: true
    },
    nic : {
        type : String,
        required: true
    },
    phone : {
        type : Number,
        required: true
    },
    email : {
        type : String,
        required: true
    }


})

const Appointment = mongoose.model("Appointment",appointmentSchema);
module.exports = Appointment;