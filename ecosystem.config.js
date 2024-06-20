module.exports = {
    apps: [
        {
            name: 'nextjs-app',
            script: 'npm',
            args: 'start',
            env: {
                NODE_ENV: 'production',
                NEXTAUTH_URL: "http://localhost:3000",
                MONGODB_URL1: "mongodb+srv://agrobd:Asif8377@agrobd.joapcha.mongodb.net/tolet?retryWrites=true&w=majority",
                MONGODB_URL: "mongodb://localhost:27017/to-let",
                Backend_Url: "http://localhost:5000",
                GOOGLE_CLIENT_ID: "441707191052-s41lla98eod25o081j37l4cscj8rgnob.apps.googleusercontent.com",
                GOOGLE_SECRATE_ID: "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",
                API_KEY: "AIzaSyDIoJxlZm-VtQTGEDLCCnFzHXEOpon-YIA"
            },
        },
    ],
};
