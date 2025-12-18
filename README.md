# OWL Dashboard para Odoo 18

Um **dashboard interativo** para Odoo 18 usando **OWL** e **Chart.js**, com KPIs, gráficos reativos e filtros avançados.

---

## 🔹 Funcionalidades

- KPIs principais (Clientes, Usuários, Empresas)
- Gráfico dinâmico **Resumo Geral** usando Chart.js
- **Filtros de data** para atualizar métricas e gráfico
- **Loading skeletons** enquanto dados são carregados
- Exportação de gráfico em **PNG**
- Estilização responsiva e moderna de botões e inputs
- Suporte a **permissões e segurança** (acesso por grupo e multi-company)
- Arquitetura profissional:
  - Backend calcula métricas via RPC
  - Frontend reativo com OWL e props
  - Atualização de gráfico sem recriar componente

---

## 🔹 Tecnologias

- Odoo 18
- OWL (Odoo Web Library)
- Chart.js
- HTML, CSS, JS
- RPC para comunicação backend → frontend
- Python (métodos do modelo `owl.dashboard.metrics`)

---

## 🔹 Instalação

1. Clone este repositório para `addons` do Odoo:

```bash
git clone <repo_url> owl_dashboard
```

2. Atualize o __manifest__.py e confirme que assets e XML estão corretos.
3. Atualize a lista de módulos e instale OWL Dashboard via Odoo UI.
4. Recarregue o navegador com Ctrl+Shift+R para limpar cache.

---
## 🔹 Estrutura do módulo

owl_dashboard/
├── __init__.py
├── __manifest__.py
├── security/
│   ├── ir.model.access.csv
│   └── owl_dashboard_groups.xml
├── static/
│   ├── lib/chart/chart.umd.min.js
│   ├── src/css/dashboard.css
│   ├── src/js/chart_card.js
│   ├── src/js/dashboard.js
│   └── src/xml/
│       ├── dashboard.xml
│       └── chart_card.xml
├── models/
│   └── owl_dashboard_metrics.py

---
## 🔹 Como usar
1. Abra o menu OWL Dashboard (usuário com permissão)

2. Ajuste os filtros de data

3. Clique em Aplicar

4. Veja os KPIs e o gráfico atualizado dinamicamente

5. Clique em Exportar PNG para baixar o gráfico

---
## 🔹 Permissões
- Usuários devem estar no grupo OWL Dashboard User

- Admins podem ter grupo OWL Dashboard Manager com permissões expandidas

- Multi-company suportado via record rules

---
## 🔹 Próximos recursos
- Multi-gráficos por categoria

- Exportação para PDF

- Melhorias UX: Skeletons, Empty states, mensagens de erro

- Debounce nos filtros e otimização de performance

---
## 🔹 Contribuição
- Faça um fork do projeto

- Crie sua branch: git checkout -b feature/new-feature

- Commit suas alterações: git commit -m "Adiciona nova funcionalidade"

- Push para a branch: git push origin feature/nova-funcionalidade

- Abra um Pull Request

---
## 🔹 Licença
Este projeto é open-source, sob a licença MIT.


---

Se você quiser, posso criar **uma versão ainda mais enxuta e “visual GitHub-ready”** com **GIF ou screenshot de exemplo do dashboard**, badges de Odoo, OWL e Chart.js — isso deixa o repositório **profissional e atrativo**.  

Quer que eu faça essa versão também?
