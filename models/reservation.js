ar mongoose=require("mongoose");

var reservationSchema=new mongoose.Schema(
{
	screening_id :
	{
			type: mongoose.Schema.Types.ObjectId;
			ref: "screening"
		
	},
	reserved: Boolean,
	username: String
});

module.exports=mongoose.model("reservation",reservationSchema);