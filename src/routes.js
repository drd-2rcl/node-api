const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  // Product.create({ 
  //   title: 'React Native',
  //   description: 'Build native apps with react',
  //   url: 'http://github.com/facebook/react-native'
  // })
  return res.send("Hello DUDE");
});

module.exports = routes;