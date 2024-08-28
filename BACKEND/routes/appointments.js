const router = require("express").Router();
let Appointment = require("../models/appointment");


//Create Class..
router.route("/add").post((req,res)=>{

    const doctor = req.body.doctor;
    const date = req.body.date;
    const patientname = req.body.patientname;
    const age = Number(req.body.age);
    const gender = req.body.gender;
    const nic = req.body.nic;
    const phone = Number(req.body.phone);
    const email = req.body.email;


    const newAppointment = new Appointment({
        doctor,
        date,
        patientname ,
        age,
        gender,
        nic, 
        phone,
        email

    })

    newAppointment.save().then(()=>{
        res.json(" Added")
    }).catch((err)=>{
        console.log(err);
    })

})

//Read..
router.route("/").get((req,res)=>{

    Appointment.find().then((appointment)=>{
        res.json(appointment)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/table").get((req,res)=>{

    Appointment.find().then(()=>{
        res.json(appointment)
    }).catch((err)=>{
        console.log(err)
    })
})

//Update Class..
/*router.route("/update/:id").put(async (req, res) => {
    let classId = req.params.id;
    const {classname, grade, date, time, link} = req.body;

    const updateClass = {
        classname,
        grade,
        date,
        time,
        link
    }

    const update = await Class.findByIdAndUpdate(classId, updateClass)
    .then(() => {
    res.status(200).send({status: "Class Updated"})
}).catch((err) => {
    console.log(err);
    res.status(500).send({status: "Error with updating data", error: err.message});
})   
}) */

//Delete Class..
router.route("/delete/:id").delete(async (req, res) => {
    let appointmentId = req.params.id;

    await Appointment.findByIdAndDelete(appointmentId)
    .then(() => {
        res.status(200).send({status: "Class Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete class", error: err.message});
    })
})

//Read Class..
/*router.route("/get/:id").get(async (req, res) => {
    let classId = req.params.id;
    const user = await Class.findById(classId)
    .then((user) => {
         res.status(200).send({status: "Class fetched", user: user})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get class", error: err.message});
    })
})  */

router.route("/get/:id").get(async (req, resp) => {
    let result = await Appointment.findById({_id:req.params.id})
    
    if(result){
        resp.send(result)
    }else{
        resp.send({"result":"No Record Found."})
    }
})  

router.route("/update/:id").put(async (req, resp) => {
    let result = await Appointment.findByIdAndUpdate({_id:req.params.id},{$set: req.body})
    
   resp.send(result)
})  

module.exports = router;