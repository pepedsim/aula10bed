// Servidor Express - Projeto #24: Pizzaria Forno a Lenha
require('dotenv').config();
const express = require('express');
const supabase = require('./src/config/supabaseClient');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3024;

app.get('/api/pizzaria/status', (req, res) => {
    res.status(200).json({
        projeto_numero: 24,
        sistema: "Pizzaria Forno a Lenha",
        categoria: "Gastronomia",
        tabela_conectada: process.env.TABELA_ALVO || "fornadas_pedidos",
        parametro_ambiente: process.env.FORNO_OPERACIONAL || "NAPOLI_FORNO_24",
        ponte_supabase_ativa: Boolean(supabase && supabase.rest),
        cofre_env_protegido: Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_KEY)
    });
});

app.listen(PORT, () => {
    console.log(`🚀 [PROJETO #24] Pizzaria Forno a Lenha rodando em http://localhost:${PORT}/api/pizzaria/status`);
});