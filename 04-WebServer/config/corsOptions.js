//Cross Origin Resource Sharing
const whitelist = ['https://www.google.com'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSucessStatus: 200
}

module.exports = corsOptions;
