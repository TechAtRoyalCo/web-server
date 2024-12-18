import mongoose from 'mongoose';

const TransactionModelSchema = new mongoose.Schema({
    CID: String,
    NetAmt: Number,
    Y: Number,
    M: Number,
    D:Number,
    ProductList:Array,
    Credit:Number
});

export default mongoose.model('Transaction', TransactionModelSchema);
