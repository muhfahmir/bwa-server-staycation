const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const bookingSchema = mongoose.Schema({
  bookingStartDate: {
    type: Date,
    required: true,
  },
  bookingEndDate: {
    type: Date,
    required: true,
  },
  invoice: {
    type: String,
    required: true,
  },
  // country: {
  //   type: String,
  //   default: "Indonesia",
  // },
  itemId: {
    _id: {
      type: ObjectId,
      ref: "Item",
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  total: {
    type: Number,
    required: true,
  },
  memberId: {
    type: ObjectId,
    ref: "Member",
  },
  bankId: {
    type: ObjectId,
    ref: "Bank",
  },
  payments: {
    proofPayment: {
      type: String,
      required: true,
    },
    bankFrom: {
      type: String,
      required: true,
    },
    accountHolder: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: "Proses",
    },
  },
});

module.exports = mongoose.model("Booking", bookingSchema);
