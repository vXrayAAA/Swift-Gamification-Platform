# Swift Gamification Platform

## 📋 Sobre o Projeto

Plataforma de gamificação corporativa "Swift" desenvolvida para a JBS, com foco em engajamento de colaboradores através de trilhas de aprendizado, missões e sistema de pontuação.

## 🚀 Tecnologias Utilizadas

- **HTML5**: Estruturação semântica das páginas
- **CSS3**: Estilização e animações
- **Bootstrap 5.3**: Framework responsivo
- **JavaScript (ES6+)**: Interatividade e dinâmica
- **Font Awesome**: Ícones

## ✨ Funcionalidades

### 1. Sistema de Autenticação
- Login com email corporativo
- Opção de login com Google
- Recuperação de senha
- Validação de formulários

### 2. Dashboard Principal
- Missão da semana em destaque
- Trilhas de aprendizado disponíveis
- Ranking da equipe em tempo real
- Indicadores de progresso

### 3. Trilhas de Aprendizado
- **Trilha de Liderança**: 8 módulos
- **Trilha de Inovação**: 6 módulos
- **Metodologias Ágeis**: 5 módulos
- Sistema de progressão com módulos bloqueados/desbloqueados
- Pontuação por conclusão de módulos

### 4. Sistema de Missões
- Missões semanais
- Missões em equipe
- Status: Ativa, Concluída, Em breve
- Recompensas por conclusão

### 5. Perfil do Usuário
- Estatísticas pessoais
- Conquistas e badges
- Histórico de atividades
- Total de pontos acumulados

### 6. Ranking
- Visualização da posição no ranking
- Top performers da equipe
- Pontuação em tempo real

## 📱 Design Responsivo

O projeto foi desenvolvido com mobile-first approach:
- ✅ Desktop (1920px+)
- ✅ Laptop (1024px - 1919px)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (320px - 767px)

## 🎨 Paleta de Cores

```css
--primary-color: #FF6B35    /* Laranja principal */
--secondary-color: #004E98  /* Azul escuro */
--success-color: #28A745    /* Verde */
--warning-color: #FFC107    /* Amarelo */
--info-color: #17A2B8       /* Azul claro */
```

## 📂 Estrutura de Arquivos

```
CHG_JBS/
│
├── index.html              # Página principal
├── README.md              # Documentação
│
├── css/
│   └── style.css          # Estilos customizados
│
├── js/
│   └── script.js          # Lógica e interatividade
│
└── apresentacao/
    └── apresentacao.pdf   # Apresentação do projeto
```

## 🔧 Como Executar

1. Clone ou baixe o repositório
2. Abra o arquivo `index.html` em um navegador moderno
3. Ou utilize um servidor local:
   ```bash
   # Com Python 3
   python -m http.server 8000
   
   # Com Node.js (http-server)
   npx http-server
   ```

## 💡 Funcionalidades Interativas

### JavaScript Implementado:

1. **Sistema de Login**
   - Validação de formulários
   - Armazenamento local (LocalStorage)
   - Toggle de visualização de senha

2. **Navegação Dinâmica**
   - Single Page Application (SPA)
   - Navegação sem recarregar página
   - Breadcrumbs e histórico

3. **Trilhas e Módulos**
   - Carregamento dinâmico de conteúdo
   - Sistema de progresso
   - Desbloqueio progressivo

4. **Notificações**
   - Toast notifications
   - Feedback visual de ações
   - Animações suaves

5. **Pontuação**
   - Contador animado de pontos
   - Sistema de recompensas
   - Atualização em tempo real

## 🎯 Experiência do Usuário (UX)

### Princípios Aplicados:

- **Feedback Visual**: Todas as ações do usuário têm feedback imediato
- **Navegação Intuitiva**: Menu inferior fixo para acesso rápido
- **Microinterações**: Animações suaves e transições
- **Acessibilidade**: Suporte a navegação por teclado e leitores de tela
- **Performance**: Código otimizado e carregamento rápido

## 📊 Métricas de Engajamento

A plataforma monitora:
- Tempo gasto em cada módulo
- Taxa de conclusão de trilhas
- Frequência de acesso
- Progresso individual e da equipe

## 🔒 Segurança

- Validação de entrada de dados
- Proteção contra XSS
- Sanitização de conteúdo
- Gerenciamento seguro de sessões

## 📈 Melhorias Futuras

- [ ] Integração com backend (API REST)
- [ ] Sistema de notificações push
- [ ] Chat entre membros da equipe
- [ ] Vídeo-aulas integradas
- [ ] Sistema de badges e conquistas expandido
- [ ] Relatórios e analytics avançados
- [ ] Gamificação adicional (power-ups, desafios)
- [ ] PWA (Progressive Web App)

## 👥 Equipe de Desenvolvimento


- Nicolas Mantovani (RM: 562306) 
- Rafaela Alves (RM: 563377)
- Giovanni Assunção Wanderley (RM:558985)
- Othon Godoy (RM: 563437)
- Vinícius Branco (RM: 565389)

## 📝 Licença

Este projeto foi desenvolvido para fins educacionais como parte do curso da FIAP.

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto, entre em contato através do email nicolasmantovani@proton.me.

---

**Swift Gamification** - Transformando aprendizado em conquistas! 🚀
