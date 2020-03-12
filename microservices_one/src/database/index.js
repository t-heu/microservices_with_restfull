const mongoose = require('mongoose');

// Iniciar conexão com o banco de dados.
mongoose.connect('mongodb://semana:semana@cluster0-shard-00-00-qezcp.mongodb.net:27017,cluster0-shard-00-01-qezcp.mongodb.net:27017,cluster0-shard-00-02-qezcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});