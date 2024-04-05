//2.4 Creating a simple Hello World Node.js program

// console.log("Hello World!");

//2.8 Creating HTTP Routes
export default function Hello(app) {
    app.get('/hello', (req, res) => {
        res.send('Life is good!')
    });
    app.get('/', (req, res) => {
        res.send('Welcome to Full Stack Development!')
    });
}
