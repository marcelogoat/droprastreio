# 📦 Site de Rastreamento de Pedidos + Painel Admin

Sistema completo e autônomo para rastreamento de entregas em tempo real com painel administrativo integrado.

## 🔗 Acesso Rápido

- **Página Pública de Rastreio:** [http://localhost:3000/](http://localhost:3000/)
- **Painel Administrativo:** [http://localhost:3000/admin](http://localhost:3000/admin) (Login: `admin` | Senha: `pizza2024`)

---

## ⚙️ Funcionalidades do Painel Admin (`/admin`)

1. **Lançamento de Novos Rastreios:**
   - **Gerador automático de código:** Gera no padrão `BR...BZ` com 1 clique ou permite digitar código próprio.
   - **Dados do Cliente:** Nome completo e CPF.
   - **Produto e Quantidade:** Nome do item e quantidade enviada.
   - **Seleção de Tipo de Frete:** SEDEX Express, PAC Correios, Jadlog Express, Loggi Express, Total Express, Frete Prioritário, Frete Grátis com Seguro.
   - **Cidade de Origem (De onde sai):** Ex: *Curitiba / PR*.
   - **Cidade de Destino (Para onde vai):** Ex: *São Paulo / SP*.
   - **Status Inicial:** Em Trânsito, Objeto Postado, Saiu para Entrega, Entregue, etc.

2. **Gestão e Monitoramento:**
   - **Métricas em tempo real:** Total de envios, Em trânsito, Saiu para entrega e Entregues.
   - **Busca e Filtro instantâneo:** Pesquise por cliente, código, CPF, cidades ou filtre por status.
   - **Cópia rápida de código:** 1 clique no código para copiar para a área de transferência.

3. **Atualização de Status & Timeline:**
   - Altere o status de qualquer pacote a qualquer momento.
   - O sistema gera automaticamente novas etapas na linha do tempo para o cliente.

4. **Exclusão de Rastreios:**
   - Remova rastreios com confirmação em tempo real.

5. **Persistência de Dados:**
   - Todos os dados ficam salvos em `data/rastreios.json`.

---

## 👥 Tela Pública de Rastreio (`/`)

- Conectada diretamente ao banco de dados dos rastreios.
- O cliente pode consultar via **Código de Rastreio** ou **CPF**.
- Exibe o produto, destinatário, rota completa de envio (Origem ➔ Destino), tipo de frete e linha do tempo com datas formatadas.
- Download simulado de DANFE / Nota Fiscal eletrônica em PDF.
- Acesso rápido ao Painel Admin pelo cabeçalho ou rodapé.
