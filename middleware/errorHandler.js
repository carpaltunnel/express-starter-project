const middleware = () => {
    return (err, req, res, next) => {
      console.error('ERROR');
      res.status(500).send('Something broke!');
    };
  }
  
  module.exports = middleware;