import mongoose from 'mongoose';

const subscriptionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter the name'],
        trim: true,
        minLength: 2,
        maxLength: 100,
    },
    price: {
        type: Number,
        required: [true, 'Please enter the price'],
        min: [0, 'Price must be at least 0'],
    },
    currency: {
        type: String,
        minLength: 3,
        maxLength: 3,
        uppercase: true,
        trim: true,
        enum: ['BRL', 'USD', 'EUR', 'JPY', 'GBP'],
        default: 'BRL',
    },
    frequency: {
        type: String,
        enum: ['daily', 'weekly', 'monthly', 'yearly'],
        default: 'monthly',
    },
    category: {
        type: String,
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    paymentMethod: {
        type: String,
        trim: true,
        minLength: 2,
        maxLength: 50,
    },
    status: {
        type: String,
        enum: ['active', 'paused', 'canceled'],
        default: 'active',
    },
    startDate: {
        type: Date,
        required: [true, 'Please enter the start date'],
        validate: {
            validator: function (value) {
                return value <= new Date();
            },
            message: 'Start date must be in the past',
        }
    },
    renewalDate: {
        type: Date,
        required: [true, 'Please enter the renewal date'],
        validate: {
            validator: function (value) {
                return value >= this.startDate;
            },
            message: 'Renewal date must be after the start date',
        }
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        index: true,
    },
}, { timestamps: true });

// Pre-save hook to auto-set renewalDate and update status
subscriptionSchema.pre('save', function (next) {
    // Only if renewalDate is not manually set
    if (!this.renewalDate) {
        const start = new Date(this.startDate);

        switch (this.frequency) {
            case 'daily':
                start.setDate(start.getDate() + 1);
                break;
            case 'weekly':
                start.setDate(start.getDate() + 7);
                break;
            case 'monthly':
                start.setMonth(start.getMonth() + 1);
                break;
            case 'yearly':
                start.setFullYear(start.getFullYear() + 1);
                break;
        }

        this.renewalDate = start;
    }

    if (this.renewalDate < new Date()) {
        this.status = 'canceled';
    }

    next(); // ✅ important to proceed
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);
export default Subscription;
