#  Aplicação Swift Gamification

##  Arquivos Criados

O projeto completo foi criado com sucesso! Veja os arquivos:

```
CHG_JBS/
├── index.html                 # Página principal da aplicação
├── apresentacao.html          # Apresentação em slides (para converter em PDF)
├── README.md                  # Documentação completa
├── INSTRUCOES_PDF.md         # Instruções para gerar PDF
├── css/
│   └── style.css             # Todos os estilos (15KB+)
└── js/
    └── script.js             # Toda a lógica JavaScript (20KB+)
```


### Passo a passo:


### Login de Teste:
- **Email**: qualquer email (ex: teste@jbs.com.br)
- **Senha**: qualquer senha (ex: 123456)

> ⚠️ **Nota**: Como não há backend, o login aceita qualquer credencial válida.

##  Funcionalidades para Testar

### 1. Tela de Login
- ✅ Digite email e senha
- ✅ Clique em "Entrar"
- ✅ Teste o botão de mostrar/ocultar senha (ícone de olho)

### 2. Dashboard Principal
- ✅ Veja a Missão da Semana no topo
- ✅ Navegue pelas 3 trilhas de aprendizado
- ✅ Observe o Ranking da Equipe

### 3. Trilhas de Aprendizado
- ✅ Clique em qualquer trilha (Liderança, Inovação ou Ágil)
- ✅ Veja os módulos com diferentes status:
  - ✅ Concluído (verde)
  - 🔄 Em andamento (amarelo)
  - 🔒 Bloqueado (cinza)
- ✅ Clique em "Iniciar" nos módulos disponíveis

### 4. Menu Inferior
- 🏠 **Home**: Volta para o dashboard
- 🛤️ **Trilhas**: Seção de trilhas
- 🏆 **Missões**: Página de missões da equipe
- 👤 **Perfil**: Perfil do usuário com estatísticas

### 5. Recursos Interativos
- ✅ Animações suaves ao passar o mouse
- ✅ Transições entre páginas
- ✅ Notificações toast
- ✅ Design responsivo (teste redimensionando a janela!)

## 📱 Testar Responsividade

### No Chrome/Edge:
1. Pressione **F12** para abrir DevTools
2. Clique no ícone de dispositivo móvel (📱) ou pressione **Ctrl+Shift+M**
3. Selecione diferentes dispositivos:
   - iPhone 12 Pro
   - iPad
   - Galaxy S20
4. Observe como o layout se adapta!


### Editar Cores da Aplicação:

1. Abra `css/style.css`
2. No topo do arquivo, modifique as variáveis CSS:
```css
:root {
    --primary-color: #FF6B35;    /* Laranja principal */
    --secondary-color: #004E98;  /* Azul escuro */
    /* ... outras cores ... */
}
```

## Recursos Implementados

### HTML5
✅ Estrutura semântica
✅ Formulários com validação
✅ Acessibilidade (ARIA labels)
✅ Meta tags responsivas

### CSS3
✅ Flexbox e Grid Layout
✅ Animações e transições
✅ Media queries (responsivo)
✅ Variáveis CSS
✅ Gradientes e sombras

### Bootstrap 5
✅ Sistema de grid responsivo
✅ Componentes (cards, navbar, progress bars)
✅ Utilitários de espaçamento
✅ Sistema de breakpoints

### JavaScript ES6+
✅ Arrow functions
✅ Template literals
✅ LocalStorage para persistência
✅ Event listeners
✅ DOM manipulation
✅ Animações JavaScript
✅ Funções assíncronas

##  Dados de Teste Disponíveis

A aplicação vem com dados fictícios para demonstração:

### Trilhas:
- **Liderança**: 8 módulos (50% completo)
- **Inovação**: 6 módulos (33% completo)
- **Ágil**: 5 módulos (20% completo)

### Ranking:
1. João Santos - 3,200 pts
2. Maria Silva - 2,450 pts
3. Pedro Lima - 2,100 pts
4. Ana Costa - 1,850 pts

### Missões:
- Missão da Semana (Ativa)
- Inovação em Grupo (Concluída)
- Mentoria em Equipe (Em breve)

##  Troubleshooting

### A página não carrega os ícones?
- Verifique sua conexão com a internet
- Os ícones vêm do Font Awesome CDN

### O estilo não aparece?
- Verifique se os arquivos CSS e JS estão na pasta correta
- Confirme que a estrutura de pastas está mantida

### As animações não funcionam?
- Certifique-se de usar um navegador moderno (Chrome, Edge, Firefox)
- Limpe o cache do navegador (Ctrl+Shift+Del)

##  Entrega do Projeto

### Estrutura para entregar:

```
CHG_JBS.zip
├── index.html
├── apresentacao.pdf          
├── README.md
├── css/
│   └── style.css
└── js/
    └── script.js
```

### Checklist de Entrega:
- [ ] Todos os arquivos HTML, CSS e JS
- [ ] Apresentação em PDF com:
  - [ ] Nomes e RMs da equipe
  - [ ] Modelagem de dados
  - [ ] 3 Insights
- [ ] README.md com documentação
- [ ] Projeto testado e funcionando

##  Critérios Atendidos

✅ **HTML** - Estrutura semântica completa
✅ **CSS** - Estilos modernos e animações
✅ **Bootstrap** - Framework responsivo integrado
✅ **JavaScript** - Interatividade e dinamismo
✅ **Design Responsivo** - Mobile-first approach
✅ **UX/UI** - Interface intuitiva e atrativa




---

## 🎨 Logo Swift

A aplicação utiliza o logo oficial da Swift nos seguintes locais:
- ✅ Tela de login (200px)
- ✅ Navbar superior (40px)
- ✅ Apresentação em slides (80px)

Os arquivos de logo estão na pasta `images/`:
- `swift.svg` - Logo em formato SVG
- `swift-foods-logo.png` - Logo alternativo em PNG
