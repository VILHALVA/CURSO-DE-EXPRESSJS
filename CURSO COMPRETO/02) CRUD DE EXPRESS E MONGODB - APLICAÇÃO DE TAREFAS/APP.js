const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Configurando o parser para o corpo das solicitações (para analisar JSON)
app.use(bodyParser.json());

// Conectar ao banco de dados MongoDB
mongoose.connect('mongodb://localhost/minha-base-de-dados', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Definindo um modelo de dados para Tarefa
const Tarefa = mongoose.model('Tarefa', {
  nome: String,
  descricao: String
});

// Rota para criar uma nova tarefa (Create)
app.post('/tarefas', async (req, res) => {
  try {
    const tarefa = new Tarefa(req.body);
    await tarefa.save();
    res.status(201).json(tarefa);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Rota para listar todas as tarefas (Read)
app.get('/tarefas', async (req, res) => {
  const tarefas = await Tarefa.find();
  res.json(tarefas);
});

// Rota para atualizar uma tarefa por ID (Update)
app.put('/tarefas/:id', async (req, res) => {
  try {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(tarefa);
  } catch (err) {
    res.status(404).json({ error: 'Tarefa não encontrada' });
  }
});

// Rota para excluir uma tarefa por ID (Delete)
app.delete('/tarefas/:id', async (req, res) => {
  try {
    await Tarefa.findByIdAndDelete(req.params.id);
    res.json({ message: 'Tarefa excluída com sucesso' });
  } catch (err) {
    res.status(404).json({ error: 'Tarefa não encontrada' });
  }
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor Express está rodando na porta ${port}`);
});
