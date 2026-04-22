window.DA = {

  // ╔══════════════════════════════════════════════════════╗
  // ║            FUNDAMENTOS DA INFORMATICA                ║
  // ╚══════════════════════════════════════════════════════╝

  "O que e Informatica": {
    icon: "💻",
    color: "#4a85f0",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">💻</div>
    <h1 class="notion-title">O que é Informática</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Fundamentos</span>
      <span class="meta-tag tag-g">Conceitos Básicos</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Definição</div>
    <div class="lex-expandable-item">Informática é o estudo do <strong>tratamento automatizado da informação</strong> por meio de computadores.</div>
    <div class="lex-expandable-item">Todo sistema informatizado é formado por três elementos essenciais: <strong>Hardware, Software e Peopleware</strong>.</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">🖥️ Hardware</div>
      <div class="lex-expandable-item">Parte <strong>física</strong> do computador.</div>
      <div class="lex-expandable-item">Componentes que podemos <strong>tocar e ver</strong>.</div>
      <div class="lex-expandable-item">Ex: CPU, teclado, monitor, HD, placa-mãe, mouse.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">💾 Software</div>
      <div class="lex-expandable-item">Parte <strong>lógica</strong> — programas e instruções.</div>
      <div class="lex-expandable-item">Controla e instrui o hardware.</div>
      <div class="lex-expandable-item">Não tem forma física — não pode ser tocado.</div>
      <div class="lex-expandable-item">Ex: Windows, Word, Chrome, antivírus.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">👤 Peopleware</div>
      <div class="lex-expandable-item">O elemento <strong>humano</strong> do sistema.</div>
      <div class="lex-expandable-item">Quem <strong>usa, opera e programa</strong> o computador.</div>
      <div class="lex-expandable-item">Terceiro elemento essencial — sem usuário, o sistema está incompleto.</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Hardware = físico (toca) &nbsp;|&nbsp; Software = programa (não toca) &nbsp;|&nbsp; Peopleware = usuário
  </div>
</div>`
  },

  "Tipos de Computadores": {
    icon: "🖥️",
    color: "#38bdf8",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🖥️</div>
    <h1 class="notion-title">Tipos de Computadores</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Hardware</span>
      <span class="meta-tag tag-g">Classificação</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">🖥️ Desktop</div>
      <div class="lex-expandable-item">Computador de <strong>mesa</strong>.</div>
      <div class="lex-expandable-item">Uso <strong>fixo</strong>, não portátil.</div>
      <div class="lex-expandable-item">Mais potente, expansível e de fácil manutenção.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">💻 Notebook / Ultrabook</div>
      <div class="lex-expandable-item"><strong>Portátil</strong> — todos os componentes integrados.</div>
      <div class="lex-expandable-item">Possui bateria interna para uso sem tomada.</div>
      <div class="lex-expandable-item">Ultrabook = versão mais fina, leve e com SSD.</div>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">📱 Tablet</div>
      <div class="lex-expandable-item">Tela <strong>sensível ao toque</strong> (touchscreen).</div>
      <div class="lex-expandable-item">Muito portátil, uso leve e multimídia.</div>
      <div class="lex-expandable-item">Sistema operacional móvel (Android ou iOS).</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">🖧 Servidor</div>
      <div class="lex-expandable-item">Muito potente e robusto.</div>
      <div class="lex-expandable-item">Fornece <strong>serviços</strong> para outros computadores na rede.</div>
      <div class="lex-expandable-item">Funciona 24h por dia, 7 dias por semana ininterruptamente.</div>
      <div class="lex-expandable-item">Ex: servidores web, de arquivos, de e-mail, de banco de dados.</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🧠 Mainframe</div>
    <div class="lex-expandable-item">Extremamente poderoso, de grande porte físico.</div>
    <div class="lex-expandable-item">Usado por <strong>bancos, governos e grandes empresas</strong>.</div>
    <div class="lex-expandable-item">Processa enormes volumes de dados simultâneos.</div>
    <div class="lex-expandable-item">Alta disponibilidade e confiabilidade — praticamente não para.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📷 Exemplos de Computadores</div>
    <div class="lex-cols">
      <div class="lex-section-container">
        <div class="img-box"><img src="./imagens/pc.jpg" alt="Desktop"></div>
      </div>
      <div class="lex-section-container">
        <div class="img-box"><img src="./imagens/notebook.jpg" alt="Notebook"></div>
      </div>
    </div>
    <div class="lex-cols">
      <div class="lex-section-container">
        <div class="img-box"><img src="./imagens/tablete.jpg" alt="Tablet"></div>
      </div>
      <div class="lex-section-container">
        <div class="img-box"><img src="./imagens/servidor.jpg" alt="Servidor"></div>
      </div>
    </div>
    <div class="lex-cols">
      <div class="lex-section-container">
        <div class="img-box"><img src="./imagens/Mainframe.jpg" alt="Mainframe"></div>
      </div>
    </div>
  </div>
</div>`
  },

  "Funcionamento do Computador": {
    icon: "⚙️",
    color: "#a78bfa",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">⚙️</div>
    <h1 class="notion-title">Funcionamento do Computador</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Entrada · Processamento · Saída</span>
      <span class="meta-tag tag-gold">Conceito Essencial</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Ciclo Básico de Processamento (IPO)</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>Entrada (Input)</strong> — dados inseridos pelo usuário (digitação, clique, voz)</div>
      <div class="lex-expandable-item"><strong>Processamento</strong> — CPU processa, interpreta e calcula os dados</div>
      <div class="lex-expandable-item"><strong>Saída (Output)</strong> — resultado exibido ou enviado ao usuário</div>
      <div class="lex-expandable-item"><strong>Armazenamento</strong> — dados salvos em HD/SSD/memória para uso futuro</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Exemplo prático:</strong> Teclado (entrada) → CPU (processamento) → Monitor (saída) → HD (armazenamento)
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Linguagem do Computador — Sistema Binário</div>
    <div class="lex-expandable-item">O computador só entende <strong>0 e 1</strong> (desligado / ligado).</div>
    <div class="lex-expandable-item">Chamada de: <strong>linguagem binária</strong> ou linguagem de máquina.</div>
    <div class="lex-expandable-item">Todo dado (texto, imagem, vídeo) é convertido para binário.</div>
    <div class="lex-expandable-item">
      <div class="binary-example">
        <strong>Exemplo:</strong>
        <div class="binary-row">A = 01000001</div>
        <div class="binary-row">B = 01000010</div>
        <div class="binary-row">C = 01000011</div>
      </div>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">bit</div>
      <div class="lex-expandable-item">Menor unidade de dados possível.</div>
      <div class="lex-expandable-item">Valor: <strong>0 ou 1</strong> (ligado ou desligado).</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">byte</div>
      <div class="lex-expandable-item">Conjunto de <strong>8 bits</strong>.</div>
      <div class="lex-expandable-item">Unidade básica de armazenamento.</div>
      <div class="lex-expandable-item">Representa 1 caractere (ex: a letra A).</div>
    </div>
  </div>
</div>`
  },

  // ╔══════════════════════════════════════════════════════╗
  // ║                    HARDWARE                          ║
  // ╚══════════════════════════════════════════════════════╝

  "Perifericos": {
    icon: "🖱️",
    color: "#22c55e",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🖱️</div>
    <h1 class="notion-title">Periféricos</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Entrada · Saída · Misto</span>
      <span class="meta-tag tag-g">Dispositivos Externos</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">🔵 Periféricos de Entrada</div>
      <div class="lex-expandable-item">Enviam dados <strong>para</strong> o computador.</div>
      <div class="lex-expandable-item">• Teclado</div>
      <div class="lex-expandable-item">• Mouse</div>
      <div class="lex-expandable-item">• Scanner</div>
      <div class="lex-expandable-item">• Webcam</div>
      <div class="lex-expandable-item">• Microfone</div>
      <div class="lex-expandable-item">• Leitor de código de barras</div>
      <div class="lex-expandable-item">• Mesa digitalizadora</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">🟢 Periféricos de Saída</div>
      <div class="lex-expandable-item">Enviam dados <strong>para</strong> o usuário.</div>
      <div class="lex-expandable-item">• Monitor</div>
      <div class="lex-expandable-item">• Impressora simples</div>
      <div class="lex-expandable-item">• Fone de ouvido</div>
      <div class="lex-expandable-item">• Caixa de som</div>
      <div class="lex-expandable-item">• Projetor</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">🟡 Entrada e Saída (Misto)</div>
      <div class="lex-expandable-item">Enviam <strong>E</strong> recebem dados.</div>
      <div class="lex-expandable-item">• Pendrive</div>
      <div class="lex-expandable-item">• HD externo / SSD externo</div>
      <div class="lex-expandable-item">• Impressora multifuncional</div>
      <div class="lex-expandable-item">• Modem</div>
      <div class="lex-expandable-item">• Tela touchscreen</div>
      <div class="lex-expandable-item">• Placa de rede</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha!</strong> Impressora simples = <strong>saída</strong> &nbsp;|&nbsp; Impressora multifuncional (com scanner) = <strong>entrada e saída</strong>
  </div>
</div>`
  },

  "CPU — Processador": {
    icon: "🧠",
    color: "#f59e0b",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🧠</div>
    <h1 class="notion-title">CPU — Processador</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-gold">Cérebro do Computador</span>
      <span class="meta-tag tag-b">ULA · UC · Registradores</span>
        </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">O que é a CPU?</div>
    <div class="lex-expandable-item">CPU (Central Processing Unit) = <strong>cérebro</strong> do computador.</div>
    <div class="lex-expandable-item">Responsável por: cálculos, comparações, decisões lógicas e execução de programas.</div>
    <div class="lex-expandable-item">É o componente principal — sem CPU o computador <strong>não funciona</strong>.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📷 CPU</div>
    <div class="img-box">
      <img src="./imagens/cpu.jpg" alt="CPU">
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">ULA — Unidade Lógica e Aritmética</div>
      <div class="lex-expandable-item">Realiza <strong>cálculos e comparações</strong>.</div>
      <div class="lex-expandable-item">Operações aritméticas: soma, subtração, multiplicação, divisão.</div>
      <div class="lex-expandable-item">Operações lógicas: maior que, menor que, igual, E, OU, NÃO.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">UC — Unidade de Controle</div>
      <div class="lex-expandable-item"><strong>Controla e coordena</strong> o funcionamento da CPU.</div>
      <div class="lex-expandable-item">Busca, decodifica e executa instruções dos programas.</div>
      <div class="lex-expandable-item">Gerencia a comunicação com memória e periféricos.</div>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Registradores</div>
      <div class="lex-expandable-item">Memórias <strong>ultra rápidas</strong> dentro da própria CPU.</div>
      <div class="lex-expandable-item">Guardam dados temporários no processamento imediato.</div>
      <div class="lex-expandable-item">São a memória mais rápida de todo o computador.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">📷 ULA</div>
      <div class="img-box">
        <img src="./imagens/Ula.png" alt="ULA">
      </div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Clock do Processador</div>
    <div class="lex-expandable-item">Medido em <strong>MHz ou GHz</strong>.</div>
    <div class="lex-expandable-item">3 GHz = 3 bilhões de ciclos de processamento por segundo.</div>
    <div class="lex-expandable-item">Quanto maior o clock → mais rápido o processador.</div>
    <div class="lex-expandable-item"><strong>Overclock</strong> = aumentar a velocidade além do padrão de fábrica (risco de superaquecimento).</div>
    <div class="lex-expandable-item">Processadores modernos têm múltiplos <strong>núcleos (cores)</strong> para executar tarefas em paralelo.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Cache do Processador</div>
    <div class="lex-expandable-item">Memória ultra rápida <strong>dentro</strong> do processador.</div>
    <div class="lex-expandable-item">Armazena dados e instruções usados com frequência para acelerar o acesso.</div>
    <div class="lex-expandable-item"><strong>L1</strong> (mais rápida, menor capacidade) → <strong>L2</strong> → <strong>L3</strong> (maior, um pouco mais lenta)</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Ordem de velocidade (do mais rápido ao mais lento):</strong><br>
    Registrador &gt; Cache L1 &gt; Cache L2 &gt; Cache L3 &gt; RAM &gt; SSD &gt; HD
  </div>
</div>`
  },

  "Placa-mae e Chipset": {
    icon: "🔌",
    color: "#14b8a6",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🔌</div>
    <h1 class="notion-title">Placa-mãe e Chipset</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-teal">Motherboard</span>
      <span class="meta-tag tag-b">Ponte Norte · Ponte Sul</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Placa-mãe (Motherboard)</div>
    <div class="lex-expandable-item">É a <strong>placa principal</strong> do computador.</div>
    <div class="lex-expandable-item">Liga e integra todos os componentes: CPU, RAM, HD/SSD, placa de vídeo, USB, rede.</div>
    <div class="lex-expandable-item">Define quais tipos de processador e memória são compatíveis.</div>
    <div class="lex-expandable-item">Sem placa-mãe → <strong>nada funciona</strong>.</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Chipset — Ponte Norte</div>
      <div class="lex-expandable-item">Gerencia componentes de <strong>alta velocidade</strong>.</div>
      <div class="lex-expandable-item">Liga: <strong>CPU, RAM e placa de vídeo (PCIe)</strong>.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Chipset — Ponte Sul</div>
      <div class="lex-expandable-item">Gerencia componentes de <strong>menor velocidade</strong>.</div>
      <div class="lex-expandable-item">Liga: <strong>USB, HD, SATA, teclado, mouse, rede, BIOS</strong>.</div>
    </div>
  </div>

  <div class="callout">
    <span class="callout-icon">📌</span>
    Em PCs modernos, <strong>Ponte Norte e Ponte Sul</strong> são integradas em um único chipset ou incorporadas à própria CPU.
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Slots e Conectores da Placa-mãe</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>Socket</strong> — encaixe do processador (CPU)</div>
        <div class="lex-section-title">Exemplo de Imagem</div>
  <div class="img-box">
    <img src="./imagens/soket.png" >
  </div>
      <div class="lex-expandable-item"><strong>DIMM</strong> — slots de memória RAM</div>
          <div class="lex-section-title">Exemplo de Imagem</div>
  <div class="img-box">
    <img src="./imagens/dim.png" >
  </div>
      <div class="lex-expandable-item"><strong>PCIe</strong> — placa de vídeo e dispositivos de expansão</div>
          <div class="lex-section-title">Exemplo de Imagem</div>
  <div class="img-box">
    <img src="./imagens/pcie.jpg" >
  </div>
      <div class="lex-expandable-item"><strong>SATA</strong> — HD e SSD convencionais</div>
          <div class="lex-section-title">Exemplo de Imagem</div>
  <div class="img-box">
    <img src="./imagens/sata.webp" >
  </div>
      <div class="lex-expandable-item"><strong>M.2</strong> — SSD NVMe (muito rápido)</div>
         <div class="lex-section-title">Exemplo de Imagem</div>
  <div class="img-box">
    <img src="./imagens/m.2.png" >
  </div>
      <div class="lex-expandable-item"><strong>USB</strong> — periféricos externos</div>
        <div class="lex-section-title">Exemplo de Imagem</div>
  <div class="img-box">
    <img src="./imagens/usb.png" >
  </div>
      </div>
  </div>
</div>`
  },

  "BIOS, UEFI e Firmware": {
    icon: "⚡",
    color: "#6366f1",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">⚡</div>
    <h1 class="notion-title">BIOS, UEFI e Firmware</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Inicialização do Sistema</span>
      <span class="meta-tag tag-gold">POST · Boot · Secure Boot</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">BIOS (Basic Input/Output System)</div>
      <div class="lex-expandable-item">Programa <strong>gravado na memória ROM da placa-mãe</strong>.</div>
      <div class="lex-expandable-item">Primeira coisa executada ao ligar o computador.</div>
      <div class="lex-expandable-item">Realiza o <strong>POST</strong> (Power On Self Test) — teste automático dos componentes.</div>
      <div class="lex-expandable-item">Verifica: CPU, memória RAM, teclado, vídeo.</div>
      <div class="lex-expandable-item">Interface simples (texto), tecnologia da década de 1970.</div>
      <div class="lex-expandable-item">Limitação: suporte a disco de no máximo <strong>2 TB</strong>.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">UEFI (Unified Extensible Firmware Interface)</div>
      <div class="lex-expandable-item"><strong>Substituto moderno</strong> da BIOS em computadores atuais.</div>
      <div class="lex-expandable-item">Interface gráfica com suporte a mouse.</div>
      <div class="lex-expandable-item">Inicialização <strong>muito mais rápida</strong> que a BIOS.</div>
      <div class="lex-expandable-item">Suporte a discos maiores que 2 TB (tabela de partição GPT).</div>
      <div class="lex-expandable-item"><strong>Secure Boot</strong> — impede o boot de sistemas operacionais não autorizados, protegendo contra malwares no boot.</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Firmware</div>
    <div class="lex-expandable-item">Software <strong>gravado permanentemente</strong> dentro do hardware.</div>
    <div class="lex-expandable-item">Não se perde ao desligar o equipamento (não volátil).</div>
    <div class="lex-expandable-item">Controla o funcionamento básico do dispositivo.</div>
    <div class="lex-expandable-item">Exemplos: BIOS, UEFI, firmware de roteador, impressora, HD, SSD.</div>
    <div class="lex-expandable-item"><strong>Firmware = software do hardware</strong> (parte lógica embutida no componente físico).</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> BIOS = antigo (máx. 2 TB, texto) &nbsp;|&nbsp; UEFI = moderno (Secure Boot, gráfico) &nbsp;|&nbsp; Firmware = software permanente no hardware
  </div>
</div>`
  },

  "Memorias — RAM e ROM": {
    icon: "💾",
    color: "#10b981",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">💾</div>
    <h1 class="notion-title">Memórias — RAM e ROM</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-g">Volátil · Não Volátil</span>
      <span class="meta-tag tag-b">Conceito Essencial</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">RAM — Memória Principal</div>
      <div class="lex-expandable-item">Random Access Memory = memória de acesso aleatório.</div>
      <div class="lex-expandable-item">Guarda programas e dados <strong>em uso no momento</strong>.</div>
      <div class="lex-expandable-item"><strong>Volátil</strong> — perde todo o conteúdo ao desligar o computador.</div>
      <div class="lex-expandable-item">Rápida, temporária e diretamente acessada pela CPU.</div>
      <div class="lex-expandable-item">Ex: ao abrir o Word, ele é carregado do HD para a RAM para execução.</div>
      <div class="lex-expandable-item">Quanto mais RAM → mais programas podem ser executados simultaneamente.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">ROM — Memória Permanente</div>
      <div class="lex-expandable-item">Read Only Memory = memória somente de leitura.</div>
      <div class="lex-expandable-item"><strong>Não volátil</strong> — mantém os dados ao desligar.</div>
      <div class="lex-expandable-item">Armazena: BIOS, UEFI e Firmware do sistema.</div>
      <div class="lex-expandable-item">Tipos:</div>
      <div class="lex-expandable-item">• <strong>PROM</strong> — gravada uma única vez pelo fabricante</div>
      <div class="lex-expandable-item">• <strong>EPROM</strong> — apagada por luz ultravioleta e regravada</div>
      <div class="lex-expandable-item">• <strong>EEPROM</strong> — apagada e regravada eletricamente (mais moderna)</div>
    </div>
  </div>

  <div class="img-box">
    <img src="./imagens/mmy vs rom.avif" >
  </div>



  <div class="lex-section-container">
    <div class="lex-section-title">Memória Volátil × Não Volátil</div>
    <div class="lex-cols">
      <div class="lex-section-container">
        <div class="lex-section-title">Volátil — perde ao desligar</div>
        <div class="lex-expandable-item">RAM</div>
        <div class="lex-expandable-item">Cache (L1, L2, L3)</div>
        <div class="lex-expandable-item">Registradores</div>
      </div>
      <div class="lex-section-container">
        <div class="lex-section-title">Não Volátil — mantém dados</div>
        <div class="lex-expandable-item">HD / SSD</div>
        <div class="lex-expandable-item">ROM (BIOS/UEFI)</div>
        <div class="lex-expandable-item">Pendrive / Cartão SD</div>
        <div class="lex-expandable-item">CD / DVD</div>
        <div class="lex-expandable-item">Fita magnética</div>
      </div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Ordem de velocidade (do mais rápido ao mais lento):</strong><br>
    Registrador &gt; Cache L1 &gt; Cache L2 &gt; Cache L3 &gt; RAM &gt; SSD &gt; HD
  </div>
</div>`
  },

  "HD, SSD e Armazenamento": {
    icon: "🗄️",
    color: "#f472b6",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🗄️</div>
    <h1 class="notion-title">HD, SSD e Armazenamento</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Armazenamento Permanente</span>
      <span class="meta-tag tag-gold">HD · SSD · NVMe</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">HD — Hard Disk Drive</div>
      <div class="lex-expandable-item">Armazenamento <strong>magnético</strong> com partes mecânicas móveis.</div>
      <div class="lex-expandable-item">Disco físico que gira (5.400 a 7.200 RPM).</div>
      <div class="lex-expandable-item">Mais barato por GB — ideal para grandes volumes.</div>
      <div class="lex-expandable-item">Mais lento — limitado pela velocidade mecânica.</div>
      <div class="lex-expandable-item">Faz barulho durante operação.</div>
      <div class="lex-expandable-item">Mais frágil — sensível a quedas e impactos físicos.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">SSD — Solid State Drive</div>
      <div class="lex-expandable-item">Armazenamento <strong>eletrônico</strong> (chips de memória flash NAND).</div>
      <div class="lex-expandable-item">5 a 10 vezes mais rápido que o HD.</div>
      <div class="lex-expandable-item">Silencioso — sem partes móveis.</div>
      <div class="lex-expandable-item">Mais resistente a impactos e vibrações.</div>
      <div class="lex-expandable-item">Mais caro por GB em relação ao HD.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">SSD NVMe (Non-Volatile Memory Express)</div>
      <div class="lex-expandable-item">Usa interface <strong>PCIe</strong> via slot M.2 na placa-mãe.</div>
      <div class="lex-expandable-item">O mais rápido de todos — velocidades de 3.000 a +7.000 MB/s.</div>
      <div class="lex-expandable-item">Ideal para PCs de alto desempenho, workstations e servidores.</div>
      <div class="lex-expandable-item">SSD SATA (comum) vs SSD NVMe (ultrarrápido).</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Ordem de velocidade:</strong> HD &lt; SSD SATA &lt; SSD NVMe (PCIe)
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Unidades de Medida de Armazenamento</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>bit</strong> = menor unidade (0 ou 1)</div>
      <div class="lex-expandable-item"><strong>byte</strong> = 8 bits</div>
      <div class="lex-expandable-item"><strong>KB (kilobyte)</strong> = 1.024 bytes</div>
      <div class="lex-expandable-item"><strong>MB (megabyte)</strong> = 1.024 KB</div>
      <div class="lex-expandable-item"><strong>GB (gigabyte)</strong> = 1.024 MB</div>
      <div class="lex-expandable-item"><strong>TB (terabyte)</strong> = 1.024 GB</div>
      <div class="lex-expandable-item">Sequência maior: <strong>PB → EB → ZB → YB</strong></div>
    </div>
  </div>
</div>`
  },

  // ╔══════════════════════════════════════════════════════╗
  // ║          SOFTWARE E SISTEMAS OPERACIONAIS            ║
  // ╚══════════════════════════════════════════════════════╝

  "Software — Tipos e Exemplos": {
    icon: "📦",
    color: "#4a85f0",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">📦</div>
    <h1 class="notion-title">Software — Tipos e Exemplos</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Sistema Operacional</span>
      <span class="meta-tag tag-g">Aplicativos · Utilitários</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">🔹 Sistema Operacional (SO)</div>
      <div class="lex-expandable-item">Controla o hardware e gerencia todos os recursos do computador.</div>
      <div class="lex-expandable-item">Intermediário entre o usuário e o hardware.</div>
      <div class="lex-expandable-item">Exemplos: <strong>Windows, Linux, Android, iOS, macOS</strong>.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">🔹 Aplicativos / Softwares de Usuário</div>
      <div class="lex-expandable-item">Programas que o usuário executa diretamente para realizar tarefas.</div>
      <div class="lex-expandable-item">Rodam <strong>sobre</strong> o sistema operacional.</div>
      <div class="lex-expandable-item">Exemplos: <strong>Word, Excel, Chrome, WhatsApp, Photoshop</strong>.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">🔹 Utilitários</div>
      <div class="lex-expandable-item">Auxiliam na manutenção, otimização e segurança do sistema.</div>
      <div class="lex-expandable-item">Exemplos: antivírus, desfragmentador de disco, gerenciador de arquivos, backup.</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Barramento</div>
    <div class="lex-expandable-item">Caminho (trilha elétrica) por onde os dados trafegam internamente na placa-mãe.</div>
    <div class="lex-expandable-item">Tipos: <strong>barramento de dados, de endereço e de controle</strong>.</div>
    <div class="lex-expandable-item">Barramento mais largo = mais rápido (32 bits, 64 bits).</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Hardware = físico &nbsp;|&nbsp; Software = programa que roda no hardware &nbsp;|&nbsp; SO = intermediário entre os dois
  </div>
</div>`
  },

  "Sistemas Operacionais — Conceitos": {
    icon: "🪟",
    color: "#6366f1",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🪟</div>
    <h1 class="notion-title">Sistemas Operacionais — Conceitos</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Kernel · Driver · Codec</span>
      <span class="meta-tag tag-gold">Conceitos Essenciais</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">O que é um Sistema Operacional?</div>
    <div class="lex-expandable-item">Software responsável por <strong>gerenciar o hardware</strong> e fornecer serviços aos programas.</div>
    <div class="lex-expandable-item">É a camada de software que fica entre o hardware e os aplicativos do usuário.</div>
    <div class="lex-expandable-item">Exemplos: <strong>Windows 10/11, Linux, Android, iOS, macOS</strong>.</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Kernel (Núcleo)</div>
      <div class="lex-expandable-item">É o <strong>núcleo central</strong> do sistema operacional.</div>
      <div class="lex-expandable-item">Gerencia diretamente o hardware (CPU, memória, dispositivos).</div>
      <div class="lex-expandable-item">Controla processos, memória, sistema de arquivos e comunicação.</div>
      <div class="lex-expandable-item">É a parte mais importante e fundamental do SO.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Driver (Controlador)</div>
      <div class="lex-expandable-item">Programa que permite ao SO <strong>se comunicar com um dispositivo</strong>.</div>
      <div class="lex-expandable-item">Cada hardware precisa de um driver específico.</div>
      <div class="lex-expandable-item">Exemplos: driver de impressora, placa de vídeo, placa de som.</div>
      <div class="lex-expandable-item">Sem o driver correto → dispositivo não funciona.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Codec</div>
      <div class="lex-expandable-item">Programa que <strong>codifica e decodifica</strong> arquivos de mídia.</div>
      <div class="lex-expandable-item">Necessário para reproduzir áudios e vídeos em determinados formatos.</div>
      <div class="lex-expandable-item">Exemplos: H.264, MP3, AAC, HEVC (H.265).</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Kernel = núcleo do SO &nbsp;|&nbsp; Driver = ponte entre SO e hardware &nbsp;|&nbsp; Codec = tradutor de arquivos de mídia
  </div>
</div>`
  },

  "Windows 10 e 11": {
    icon: "🪟",
    color: "#0ea5e9",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🪟</div>
    <h1 class="notion-title">Windows 10 e 11</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Funcionalidades</span>
      <span class="meta-tag tag-gold">Atalhos · Recursos</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Funcionalidades Principais</div>
    <div class="lex-expandable-item"><strong>Explorador de Arquivos</strong> — ferramenta para gerenciar pastas, diretórios e arquivos do computador.</div>
    <div class="lex-expandable-item"><strong>Lixeira</strong> — arquivos excluídos vão primeiro para a lixeira (podem ser recuperados). Usar <strong>Shift + Delete</strong> exclui permanentemente, sem passar pela lixeira.</div>
    <div class="lex-expandable-item"><strong>Barra de Tarefas</strong> — é possível fixar programas nela para acesso rápido.</div>
    <div class="lex-expandable-item"><strong>OneDrive</strong> — armazenamento em nuvem integrado ao Windows; permite backup automático e sincronização de arquivos entre dispositivos.</div>
    <div class="lex-expandable-item"><strong>Área de Trabalho</strong> — contém ícones de atalho e papel de parede. Ferramentas de configuração ficam no <strong>Painel de Controle</strong> ou em <strong>Configurações</strong>.</div>
    <div class="lex-expandable-item"><strong>Bibliotecas</strong> — organizam pastas de diferentes locais em um único grupo virtual (ex: Documentos, Imagens, Músicas, Vídeos).</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Extensões de Arquivo</div>
    <div class="lex-expandable-item">Por padrão, extensões <strong>não são exibidas</strong> no Windows.</div>
    <div class="lex-expandable-item">Para ativar: Explorador de Arquivos → Exibir → Extensões de nome de arquivo.</div>
    <div class="lex-expandable-item">Exemplos: .docx (Word), .xlsx (Excel), .pdf, .exe (programa), .mp4 (vídeo).</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Símbolos Proibidos em Nomes de Arquivo</div>
    <div class="lex-expandable-item">Não são permitidos nos nomes de arquivos e pastas no Windows:</div>
    <div class="lex-expandable-item"><strong>? &nbsp; " &nbsp; / &nbsp; \ &nbsp; &lt; &nbsp; &gt; &nbsp; * &nbsp; | &nbsp; :</strong></div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Atalhos de Teclado Essenciais</div>
    <div class="lex-cols">
      <div class="lex-section-container">
        <div class="lex-expandable-item"><strong>Ctrl + C</strong> — Copiar</div>
        <div class="lex-expandable-item"><strong>Ctrl + V</strong> — Colar</div>
        <div class="lex-expandable-item"><strong>Ctrl + X</strong> — Recortar</div>
        <div class="lex-expandable-item"><strong>Ctrl + Z</strong> — Desfazer</div>
        <div class="lex-expandable-item"><strong>Ctrl + A</strong> — Selecionar tudo</div>
      </div>
      <div class="lex-section-container">
        <div class="lex-expandable-item"><strong>Ctrl + Shift + Esc</strong> — Gerenciador de Tarefas</div>
        <div class="lex-expandable-item"><strong>Shift + Esc</strong> — Gerenciador do navegador</div>
        <div class="lex-expandable-item"><strong>Shift + Delete</strong> — Excluir permanentemente</div>
        <div class="lex-expandable-item"><strong>Windows + D</strong> — Mostrar área de trabalho</div>
        <div class="lex-expandable-item"><strong>Alt + F4</strong> — Fechar programa</div>
      </div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha!</strong> Shift + Delete <strong>NÃO</strong> vai para a lixeira — exclui de forma permanente e imediata!
  </div>
</div>`
  },

  "Linux — Comandos Essenciais": {
    icon: "🐧",
    color: "#f97316",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🐧</div>
    <h1 class="notion-title">Linux — Comandos Essenciais</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Terminal · CLI</span>
      <span class="meta-tag tag-gold">GNOME · KDE</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">O que é o Linux?</div>
    <div class="lex-expandable-item">Sistema operacional de <strong>código aberto (open source)</strong>.</div>
    <div class="lex-expandable-item">Muito usado em servidores, programação, sistemas embarcados e ambientes corporativos.</div>
    <div class="lex-expandable-item">Distribuições populares: Ubuntu, Debian, Fedora, CentOS, Mint.</div>
    <div class="lex-expandable-item">Permite escolher o <strong>ambiente gráfico</strong>: GNOME, KDE, XFCE, entre outros.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Ambientes Gráficos (Desktop Environment)</div>
    <div class="lex-expandable-item"><strong>GNOME</strong> — moderno, limpo, padrão do Ubuntu.</div>
    <div class="lex-expandable-item"><strong>KDE (Plasma)</strong> — altamente personalizável, visual rico.</div>
    <div class="lex-expandable-item"><strong>XFCE</strong> — leve, ideal para computadores mais antigos.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Comandos Essenciais no Terminal</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>ls</strong> — lista arquivos e diretórios do diretório atual</div>
      <div class="lex-expandable-item"><strong>ls -l</strong> — lista com detalhes: permissões, tamanho, data. <em>Não mostra ocultos.</em></div>
      <div class="lex-expandable-item"><strong>ls -la</strong> — lista detalhada <em>incluindo arquivos ocultos</em> (iniciados com ponto)</div>
      <div class="lex-expandable-item"><strong>cd</strong> — muda de diretório (Change Directory)</div>
      <div class="lex-expandable-item"><strong>pwd</strong> — mostra o diretório atual de trabalho (Print Working Directory). <strong>NÃO</strong> é usado para trocar senha.</div>
      <div class="lex-expandable-item"><strong>cp</strong> — copia arquivos e diretórios</div>
      <div class="lex-expandable-item"><strong>cp -v</strong> — copia mostrando o que está sendo copiado (verbose)</div>
      <div class="lex-expandable-item"><strong>mv</strong> — move ou renomeia arquivos/diretórios</div>
      <div class="lex-expandable-item"><strong>rm</strong> — remove/apaga arquivos</div>
      <div class="lex-expandable-item"><strong>mkdir</strong> — cria um novo diretório</div>
      <div class="lex-expandable-item"><strong>whoami</strong> — mostra lista de usuários conectados.</div>
      <div class="lex-expandable-item"><strong>passwd</strong> — altera a senha do usuário</div>
      <div class="lex-expandable-item"><strong>chmod</strong> — altera permissões de arquivos/diretórios</div>
      <div class="lex-expandable-item"><strong>sudo</strong> — executa comandos com privilégios de administrador (superusuário)</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha!</strong> <code>pwd</code> mostra o diretório atual — <strong>NÃO troca senha</strong>. Para trocar senha use <code>passwd</code>.
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha!</strong> <code>whoami</code> mostra o usuário atual — <strong>NÃO lista usuários conectados</strong>. Para isso use <code>who</code> ou <code>w</code>.
  </div>
</div>`
  },

  // ╔══════════════════════════════════════════════════════╗
  // ║            INTERNET E NAVEGADORES                    ║
  // ╚══════════════════════════════════════════════════════╝

  "Internet e Navegadores": {
    icon: "🌐",
    color: "#14b8a6",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🌐</div>
    <h1 class="notion-title">Internet e Navegadores</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-teal">HTTP · HTTPS · URL · HTML</span>
      <span class="meta-tag tag-b">Chrome · Firefox · Edge · Tor</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Conceitos Fundamentais</div>
    <div class="lex-expandable-item"><strong>WWW</strong> (World Wide Web) — sistema de páginas e documentos interligados acessados pela internet.</div>
    <div class="lex-expandable-item"><strong>URL</strong> (Uniform Resource Locator) — endereço completo de um recurso na internet. Ex: <code>https://google.com.br</code></div>
    <div class="lex-expandable-item"><strong>HTML</strong> (HyperText Markup Language) — linguagem de marcação usada para criar e estruturar páginas web.</div>
    <div class="lex-expandable-item"><strong>Porta padrão HTTP</strong> = 80 ou 8080 &nbsp;|&nbsp; <strong>Porta padrão HTTPS</strong> = 443</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">HTTP × HTTPS</div>
      <div class="lex-expandable-item"><strong>HTTP</strong> — sem criptografia. Dados trafegam em texto aberto. <strong>Inseguro</strong>.</div>
      <div class="lex-expandable-item"><strong>HTTPS</strong> — com criptografia SSL/TLS. Dados protegidos. <strong>Seguro</strong>.</div>
      <div class="lex-expandable-item">O "S" do HTTPS significa <strong>Secure</strong> (seguro).</div>
      <div class="lex-expandable-item">Prova ama cobrar isso — saiba distinguir!</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Navegadores (Browsers)</div>
      <div class="lex-expandable-item">Programas usados para <strong>acessar e exibir</strong> páginas web.</div>
      <div class="lex-expandable-item"><strong>Chrome e Edge</strong> — ambos baseados no projeto de código aberto <strong>Chromium</strong>.</div>
      <div class="lex-expandable-item"><strong>Firefox</strong> — código aberto; possui recurso nativo de <strong>Pocket</strong> (lista de leitura).</div>
      <div class="lex-expandable-item"><strong>Tor</strong> — acessa a <strong>Dark Web</strong> (sites .onion); oferece anonimato na rede.</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Tipos de Web</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>Surface Web</strong> — sites indexados por mecanismos de busca (Google, Bing). A parte "visível" da internet.</div>
      <div class="lex-expandable-item"><strong>Deep Web</strong> — conteúdo não indexado (e-mail, banco online, sistemas corporativos, portais privados). A maioria da internet está aqui.</div>
      <div class="lex-expandable-item"><strong>Dark Web</strong> — parte da Deep Web acessada com o navegador <strong>Tor</strong>; oferece anonimato e pode hospedar conteúdos ilegais.</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Navegação Anônima (Privada / InPrivate)</div>
    <div class="lex-expandable-item">Ao ativar o modo anônimo, o navegador <strong>não salva</strong>: histórico, cookies, cache, formulários e senhas.</div>
    <div class="lex-expandable-item"><strong>NÃO torna o usuário anônimo na internet</strong> — o provedor de internet (ISP) e os sites visitados ainda podem rastrear o acesso.</div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Atenção!</strong> A Dark Web em si <strong>não é crime</strong>, mas pode hospedar conteúdos e atividades ilegais. Modo anônimo ≠ anonimato na internet.
  </div>
</div>`
  },

  "Dados de Navegacao e Cookies": {
    icon: "🍪",
    color: "#f59e0b",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🍪</div>
    <h1 class="notion-title">Dados de Navegação e Cookies</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Cache · Cookies · Histórico</span>
      <span class="meta-tag tag-gold">Privacidade e Desempenho</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Cache</div>
      <div class="lex-expandable-item">Armazena <strong>cópias locais</strong> de arquivos de sites (imagens, scripts, CSS).</div>
      <div class="lex-expandable-item">Objetivo: <strong>acelerar o carregamento</strong> em visitas futuras ao mesmo site.</div>
      <div class="lex-expandable-item">São arquivos temporários que podem ser apagados a qualquer momento.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Cookies</div>
      <div class="lex-expandable-item">Pequenos <strong>arquivos de texto</strong> salvos no computador pelo site.</div>
      <div class="lex-expandable-item">Armazenam: preferências do usuário, login, carrinho de compras, sessão ativa.</div>
      <div class="lex-expandable-item">São considerados <strong>dados sensíveis / pessoais</strong> (privacidade).</div>
      <div class="lex-expandable-item">Podem ser usados para rastrear o comportamento de navegação.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Histórico</div>
      <div class="lex-expandable-item">Lista de todos os <strong>sites acessados</strong> com data e hora.</div>
      <div class="lex-expandable-item">Permite retornar a páginas visitadas anteriormente.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Favoritos / Marcadores</div>
      <div class="lex-expandable-item">Salva atalhos para sites que o usuário deseja acessar facilmente depois.</div>
      <div class="lex-expandable-item">Atalho para adicionar favorito: <strong>Ctrl + D</strong>.</div>
    </div>
  </div>

  <div class="lex-section-container">
    <span class="lex-label blue">O que o Modo Anônimo <u>não salva</u></span>
    <div class="lex-expandable-item">• Histórico de navegação</div>
    <div class="lex-expandable-item">• Cookies e dados de sites</div>
    <div class="lex-expandable-item">• Cache</div>
    <div class="lex-expandable-item">• Dados de formulários e senhas</div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Importante!</strong> Mesmo no modo anônimo, o provedor de internet e os sites <strong>ainda podem ver sua atividade</strong>. O modo anônimo só protege dados salvos <em>localmente no computador</em>.
  </div>
</div>`
  },

  "Correio Eletronico — E-mail": {
    icon: "📧",
    color: "#6366f1",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">📧</div>
    <h1 class="notion-title">Correio Eletrônico — E-mail</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">SMTP · POP3 · IMAP</span>
      <span class="meta-tag tag-gold">Webmail · Cliente de E-mail</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Webmail</div>
      <div class="lex-expandable-item">Acesso ao e-mail <strong>via navegador</strong>, sem instalar programa.</div>
      <div class="lex-expandable-item">Mensagens ficam <strong>armazenadas no servidor</strong>.</div>
      <div class="lex-expandable-item">Exemplos: <strong>Gmail</strong>, <strong>Outlook.com</strong>, Yahoo Mail.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Cliente de E-mail</div>
      <div class="lex-expandable-item">Programa <strong>instalado no computador</strong>.</div>
      <div class="lex-expandable-item">Pode baixar e apagar mensagens do servidor (modo POP3).</div>
      <div class="lex-expandable-item">Exemplos: <strong>Microsoft Outlook</strong>, Thunderbird, Evolution.</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Campos do E-mail</div>
    <div class="lex-expandable-item"><strong>Para (To)</strong> — destinatário principal da mensagem.</div>
    <div class="lex-expandable-item"><strong>Cc (Com Cópia)</strong> — destinatários secundários; todos os destinatários <em>conseguem ver</em> quem está no Cc.</div>
    <div class="lex-expandable-item"><strong>Cco (Com Cópia Oculta / Bcc)</strong> — destinatários ocultos; <em>ninguém sabe</em> quem está no Cco (exceto o próprio).</div>
    <div class="lex-expandable-item"><strong>Assunto</strong> — título resumido da mensagem.</div>
    <div class="lex-expandable-item"><strong>Anexo</strong> — arquivo enviado junto ao e-mail.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Protocolos de E-mail</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>SMTP</strong> — envio de e-mails. Portas: <strong>25</strong> (padrão) ouㅤ<strong> 587</strong> (com segurança).</div>
      <div class="lex-expandable-item"><strong>POP3</strong> — recebimento; <strong>baixa e removeㅤ</strong> mensagens do servidor. Porta: <strong>110</strong>.</div>
      <div class="lex-expandable-item"><strong>IMAP</strong> — recebimento; <strong>mantém cópia no servidor</strong>; sincroniza entre dispositivos. Porta: <strong>143</strong>.</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Spam e Phishing</div>
    <div class="lex-expandable-item"><strong>Spam</strong> — e-mail não solicitado e indesejado, geralmente com propagandas ou conteúdo malicioso.</div>
    <div class="lex-expandable-item"><strong>Phishing</strong> — e-mail ou mensagem falsa que tenta enganar o usuário para roubar dados pessoais, senhas e informações bancárias.</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> SMTP = envio &nbsp;|&nbsp; POP3 = recebe e apaga do servidor &nbsp;|&nbsp; IMAP = recebe e mantém no servidor
  </div>
</div>`
  },

  // ╔══════════════════════════════════════════════════════╗
  // ║              REDES DE COMPUTADORES                   ║
  // ╚══════════════════════════════════════════════════════╝

  "Topologia de Redes": {
    icon: "🕸️",
    color: "#0891b2",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🕸️</div>
    <h1 class="notion-title">Topologia de Redes</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Estrela · Barramento · Anel</span>
      <span class="meta-tag tag-gold">Layout Físico e Lógico</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">O que é Topologia de Rede?</div>
    <div class="lex-expandable-item">É o <strong>layout físico ou lógico</strong> da rede — a forma como os dispositivos estão conectados entre si.</div>
    <div class="lex-expandable-item">Define como os dados trafegam e como uma falha afeta a rede.</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">⭐ Estrela (Star) — Mais usada</div>
      <div class="lex-expandable-item">Todos os dispositivos conectados a um <strong>ponto central</strong> (switch ou hub).</div>
      <div class="lex-expandable-item">Dispositivos centrais: Hub, Switch ou Roteador.</div>
      <div class="lex-expandable-item">✅ Mais usada atualmente.</div>
      <div class="lex-expandable-item">✅ Fácil manutenção e adição de dispositivos.</div>
      <div class="lex-expandable-item">✅ Falha em um dispositivo <strong>não</strong> afeta os demais.</div>
      <div class="lex-expandable-item">❌ Se o ponto central falhar → <strong>toda a rede para</strong>.</div>

<div class="lex-section-container">
  <div class="lex-section-title">Exemplo de Imagem</div>
  <div class="img-box">
    <img src="./imagens/topologia estrela.jpg">
  </div></div>

    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">🔵 Barramento (Bus)</div>
      <div class="lex-expandable-item">Todos os dispositivos conectados a um <strong>único cabo principal</strong> (backbone).</div>
      <div class="lex-expandable-item">✅ Simples e barato para implementar.</div>
      <div class="lex-expandable-item">❌ Colisões de dados são comuns.</div>
      <div class="lex-expandable-item">❌ Se o cabo principal quebrar → <strong>toda a rede para</strong>.</div>
      <div class="lex-expandable-item">Pouco usada atualmente.</div>
      <div class="lex-section-container">
  <div class="lex-section-title">Exemplo de Imagem</div>
  <div class="img-box">
    <img src="./imagens/barramet.png">
  </div></div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">🔵 Anel (Ring)</div>
      <div class="lex-expandable-item">Dispositivos conectados em <strong>círculo fechado</strong>.</div>
      <div class="lex-expandable-item">Comunicação em sequência (de nó em nó).</div>
      <div class="lex-expandable-item">Pode ser unidirecional. Usa <strong>token</strong> para controlar o envio de dados.</div>
      <div class="lex-expandable-item">✅ Organização do tráfego — evita colisões.</div>
      <div class="lex-expandable-item">❌ Falha em um ponto ou cabo pode afetar toda a rede.</div>
        <div class="lex-section-title">Exemplo de Imagem</div>
  <div class="img-box">
    <img src="./imagens/anel.jpg">
  </div></div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Estrela = mais usada, ponto central &nbsp;|&nbsp; Barramento = cabo único, barato &nbsp;|&nbsp; Anel = círculo, token
  </div>
</div>`
  },

  "Tipos de Rede": {
    icon: "🗺️",
    color: "#0284c7",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🗺️</div>
    <h1 class="notion-title">Tipos de Rede — LAN, MAN, WAN</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Abrangência Geográfica</span>
      <span class="meta-tag tag-g">Internet · Intranet · VPN</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Classificação por Abrangência Geográfica</div>
    <div class="lex-list">
<div class="lex-expandable-item"><strong>PAN</strong> (Personal Area Network) — rede pessoal, poucos metros. 
Ex: Bluetooth (fone sem fio), NFC (pagamento por aproximação), smartwatch, teclado sem fio.</div>

<div class="lex-expandable-item"><strong>LAN</strong> (Local Area Network) — rede local. 
Ex: Wi-Fi residencial, rede de escritório, computadores de uma escola, impressora compartilhada.</div>

<div class="lex-expandable-item"><strong>WLAN</strong> (Wireless Local Area Network) — LAN sem fio. 
Ex: roteadores Wi-Fi, hotspots, internet sem fio de casa.</div>

<div class="lex-expandable-item"><strong>CAN</strong> (Campus Area Network) — rede de campus. 
Ex: universidades, hospitais, grandes escolas com vários prédios conectados.</div>

<div class="lex-expandable-item"><strong>MAN</strong> (Metropolitan Area Network) — rede metropolitana. 
Ex: provedores de internet de uma cidade, redes urbanas, sistemas públicos conectados.</div>

<div class="lex-expandable-item"><strong>WAN</strong> (Wide Area Network) — rede de grande alcance. 
Ex: Internet, redes bancárias, empresas multinacionais, comunicação entre países.</div>

<div class="lex-expandable-item"><strong>SAN</strong> (Storage Area Network) — rede de armazenamento. 
Ex: data centers, servidores de backup, armazenamento em nuvem.</div>

<div class="lex-expandable-item"><strong>VPN</strong> (Virtual Private Network) — rede privada virtual. 
Ex: acesso remoto ao trabalho, conexão segura via internet.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Classificação por Quem Usa (Abrangência Lógica)</div>
    <div class="lex-expandable-item"><strong>Internet</strong> — rede pública, global, acessível a todos. Utiliza o protocolo <strong>TCP/IP</strong>.</div>
    <div class="lex-expandable-item"><strong>Intranet</strong> — rede <strong>privada</strong> de uma organização. Acesso restrito a colaboradores. Usa tecnologias da Internet internamente.</div>
    <div class="lex-expandable-item"><strong>Extranet</strong> — extensão da intranet para <strong>usuários externos autorizados</strong> (clientes, fornecedores, parceiros). Acessada via Internet com controle de acesso.</div>
    <div class="lex-expandable-item"><strong>VPN</strong> (Virtual Private Network) — cria um <strong>túnel criptografado</strong> sobre a internet para acessar uma rede privada com segurança. Usada para home office e acesso remoto seguro.</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Internet = pública &nbsp;|&nbsp; Intranet = privada (interna) &nbsp;|&nbsp; Extranet = intranet + externos &nbsp;|&nbsp; VPN = túnel seguro
  </div>
</div>`
  },

  "Equipamentos de Rede": {
    icon: "🔧",
    color: "#7c3aed",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🔧</div>
    <h1 class="notion-title">Equipamentos de Rede</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Hub · Switch · Roteador · Modem</span>
      <span class="meta-tag tag-gold">MAC Address · Access Point</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Hub — Concentrador</div>
      <div class="lex-expandable-item">Envia os dados recebidos para <strong>todos os dispositivos</strong> da rede (broadcast).</div>
      <div class="lex-expandable-item">Considerado "burro" — não sabe para quem mandar.</div>
      <div class="lex-expandable-item">Gera muito tráfego desnecessário. Praticamente obsoleto.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Switch — Comutador</div>
      <div class="lex-expandable-item">Envia os dados <strong>apenas para o dispositivo de destino</strong> correto.</div>
      <div class="lex-expandable-item">Usa o endereço <strong>MAC</strong> para identificar os dispositivos.</div>
      <div class="lex-expandable-item">Inteligente e eficiente — base das redes LAN modernas.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Roteador — Router</div>
      <div class="lex-expandable-item">Interliga <strong>redes diferentes</strong> (ex: LAN e Internet).</div>
      <div class="lex-expandable-item">Direciona o tráfego de dados pelas melhores rotas disponíveis.</div>
      <div class="lex-expandable-item">Distribui internet entre dispositivos (Wi-Fi e cabo).</div>
      <div class="lex-expandable-item">Pode usar rede <strong>mesh</strong> para ampliar cobertura.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Modem</div>
      <div class="lex-expandable-item"><strong>Modula e demodula</strong> sinais para transmissão pela linha telefônica, fibra ou cabo.</div>
      <div class="lex-expandable-item">Converte sinal digital (computador) ↔ sinal analógico (rede do provedor).</div>
      <div class="lex-expandable-item">Faz a conexão do computador ou roteador com o provedor de internet (ISP).</div>
    </div> 

<div style="width: 100%;">
  <div class="lex-section-title">Exemplos</div>
  <br>
  <img src="./imagens/Router-hub-switch-modem.webp" alt="Router hub switch modem">
</div>
<br>

   <div class="lex-section-container">
  <div class="lex-section-title">Placa de Rede (NIC)</div>
  <div class="lex-expandable-item">Conecta o computador à rede (via cabo Ethernet ou Wi-Fi).</div>
  <div class="lex-expandable-item">Possui um endereço <strong>MAC Address</strong> (Media Access Control).</div>
  <div class="lex-expandable-item">MAC = identificação <strong>física</strong> da interface, geralmente única e definida pelo fabricante (48 bits em hexadecimal).</div>
  <div class="lex-expandable-item">O endereço <strong>IP é lógico</strong> (pode mudar); o MAC é físico (normalmente fixo, mas pode ser alterado por software em alguns casos).</div>
</div>

<div class="lex-section-container">
  <div class="lex-section-title">Access Point (AP)</div>
  <div class="lex-expandable-item">Dispositivo que fornece acesso à rede <strong>Wi-Fi</strong>.</div>
  <div class="lex-expandable-item">Permite que dispositivos sem fio se conectem à rede cabeada.</div>
  <div class="lex-expandable-item">Pode operar integrado ao roteador ou como equipamento separado.</div>
  <div class="lex-expandable-item">Conectado ao switch ou roteador por cabo (Ethernet).</div>
</div>

<div class="lex-section-container">
  <div class="lex-section-title">Backbone</div>
  <div class="lex-expandable-item">Rede principal de <strong>alta velocidade</strong> que interliga redes menores.</div>
  <div class="lex-expandable-item">Responsável por transportar grandes volumes de dados entre diferentes segmentos de rede.</div>
  <div class="lex-expandable-item">Utiliza tecnologias de alta capacidade, como <strong>fibra óptica</strong>.</div>
  <div class="lex-expandable-item">Exemplo: infraestrutura central de provedores de internet e grandes empresas.</div>
</div>

<div style="width: 100%;">
  <div class="lex-section-title">Exemplos</div>
  <br>
  <img src="./imagens/Backbone.webp" alt="Backbone">
</div>

</div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha!</strong> Hub = envia para todos &nbsp;|&nbsp; Switch = envia só para o destino &nbsp;|&nbsp; Roteador = conecta redes diferentes. Confundir os três é pegadinha clássica.
  </div>
</div>`
  },

  "Meios de Transmissao": {
    icon: "📡",
    color: "#0f766e",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">📡</div>
    <h1 class="notion-title">Meios de Transmissão</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Cabeado · Wireless</span>
      <span class="meta-tag tag-gold">Fibra · UTP · Wi-Fi · Bluetooth</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Meios Cabeados (Guiados)</div>

  <div class="lex-cols">

    <!-- PAR TRANÇADO -->
    <div class="lex-section-container">
      <div class="lex-section-title">Cabo Par Trançado (UTP e STP)</div>

      <div class="lex-expandable-item">
        Composto por <strong>pares de fios de cobre trançados</strong>, reduzindo interferências eletromagnéticas.
      </div>

      <div class="lex-expandable-item">
        <strong>UTP (Unshielded Twisted Pair):</strong> sem blindagem, mais barato e mais utilizado.
      </div>

      <div class="lex-expandable-item">
        <strong>STP (Shielded Twisted Pair):</strong> com blindagem, maior proteção contra interferências.
      </div>

      <div class="lex-expandable-item">
        Conector padrão: <strong>RJ-45</strong>.
      </div>

      <div class="lex-expandable-item">
        Utilizado em redes <strong>Ethernet</strong> (10 Mbps a 10 Gbps).
      </div>

      <div class="lex-expandable-item">
        Categorias: <strong>Cat5e, Cat6, Cat6a, Cat7</strong>.
      </div>

      <div class="lex-expandable-item">
        Distância máxima recomendada: <strong>100 metros</strong>.
      </div>
<div class="lex-section-container">
  <div class="lex-section-title">Exemplo de Imagem</div>

  <div class="img-box">
    <img src="./imagens/cabo.webp">
  </div></div>


    </div>

    <!-- FIBRA ÓPTICA -->
    <div class="lex-section-container">
      <div class="lex-section-title">Fibra Óptica</div>

      <div class="lex-expandable-item">
        Transmite dados por <strong>pulsos de luz</strong>, não sinais elétricos.
      </div>

      <div class="lex-expandable-item">
        <strong>Altíssima velocidade</strong> (1 Gbps, 10 Gbps ou mais).
      </div>

      <div class="lex-expandable-item">
        Ideal para <strong>longas distâncias</strong> e uso em <strong>backbones</strong> e provedores (ISPs).
      </div>

      <div class="lex-expandable-item">
        <strong>Imune a interferências eletromagnéticas</strong>.
      </div>

      <div class="lex-expandable-item">
        Mais cara e mais sensível na instalação.
      </div>

      <div class="lex-expandable-item">
        <strong>Monomodo (Single-mode):</strong> núcleo ~10 µm, usa laser, distâncias acima de 10 km.
      </div>

      <div class="lex-expandable-item">
        <strong>Multimodo (Multi-mode):</strong> núcleo 50–62,5 µm, usa LED, até ~2 km.
      </div>
      <div class="lex-section-container">
  <div class="lex-section-title">Exemplo de Imagem</div>

  <div class="img-box">
    <img src="./imagens/CABO FRBRA.webp">
  </div></div>
    </div>

    <!-- COAXIAL -->
    <div class="lex-section-container">
      <div class="lex-section-title">Cabo Coaxial</div>

      <div class="lex-expandable-item">
        Composto por <strong>condutor central de cobre</strong>, isolante, blindagem metálica e capa externa.
      </div>

      <div class="lex-expandable-item">
        Muito usado em redes antigas (<strong>Ethernet 10Base2</strong>) e ainda em <strong>TV a cabo</strong>.
      </div>

      <div class="lex-expandable-item">
        Suporta <strong>distâncias médias</strong> e velocidade moderada.
      </div>

      <div class="lex-expandable-item">
        Pode sofrer interferência se mal blindado.
      </div>

      <div class="lex-expandable-item">
        Conectores comuns: <strong>BNC</strong> (redes antigas) e <strong>RG6</strong> (TV).
      </div>

      <div class="lex-expandable-item">
        Pouco utilizado em redes modernas de computadores.
      </div>
      <div class="lex-section-container">
  <div class="lex-section-title">Exemplo de Imagem</div>

  <div class="img-box">
    <img src="./imagens/coxial.jpg">
  </div></div>
    </div>

  </div>
</div>

    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Meios Sem Fio (Wireless / Não Guiados)</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>Infravermelho (IRDA)</strong> — curtíssima distância (centímetros), necessita de linha de visão direta.</div>
      <div class="lex-expandable-item"><strong>NFC</strong> (Near Field Communication) — centímetros de alcance. Usado em pagamentos por aproximação.</div>
      <div class="lex-expandable-item"><strong>Bluetooth</strong> — alcance de alguns metros (~10-100m). Conecta headsets, teclados, mouse, celulares.</div>
      <div class="lex-expandable-item"><strong>Wi-Fi</strong> — rede local sem fio. Decenas a centenas de metros. Padrões 802.11.</div>
      <div class="lex-expandable-item"><strong>Satélite</strong> — longas distâncias globais. Alta latência. Usado em locais remotos sem infraestrutura.</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Padrões Wi-Fi</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>802.11n (Wi-Fi 4)</strong> — até ~600 Mbps. Frequências: 2,4 GHz e 5 GHz.</div>
      <div class="lex-expandable-item"><strong>802.11ac (Wi-Fi 5)</strong> — até ~6 Gbps. Frequência: 5 GHz.</div>
      <div class="lex-expandable-item"><strong>802.11ax (Wi-Fi 6)</strong> — até ~9,6 Gbps. Baixa latência, eficiente em ambientes com muitos dispositivos.</div><div class="lex-expandable-item">Frequência <strong>2,4 GHz</strong> — maior alcance, mais interferência, menor velocidade.</div>
    <div class="lex-expandable-item">Frequência <strong>5 GHz</strong> — menor alcance, menos interferência, maior velocidade.</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Fibra Monomodo = longa distância &nbsp;|&nbsp; Fibra Multimodo = curta distância &nbsp;|&nbsp; 2,4 GHz = alcance &nbsp;|&nbsp; 5 GHz = velocidade
  </div>
</div>`
  },






  "Modelos TCP-IP e OSI": {
    icon: "🌐",
    color: "#0ea5e9",
    aprendizado: `
<div class="lex-block">

  <div class="notion-header">
    <div class="notion-icon">🌐</div>
    <h1 class="notion-title">TCP/IP (5 Camadas) vs OSI</h1>
  </div>

  <!-- SEÇÃO TCP/IP -->
  <div class="lex-section-container">
    <div class="lex-section-title">TCP/IP (Modelo 5 Camadas) — Padrão Atual</div>
    
    <div class="lex-list">
      <div class="lex-list-item">
        <strong>5. Aplicação</strong><br>
        🔹 Função: Interface direta com o usuário e serviços de rede.<br>
        🔹 Protocolos: HTTP, HTTPS, FTP, DNS, SMTP, SSH.<br>
        🔹 PDU: Dados / Mensagem.
      </div>

      <div class="lex-list-item">
        <strong>4. Transporte</strong><br>
        🔹 Função: Comunicação fim-a-fim e controle de fluxo/erro.<br>
        🔹 Protocolos: <strong>TCP</strong> (Confiável) e <strong>UDP</strong> (Rápido).<br>
        🔹 PDU: Segmento (TCP) ou Datagrama (UDP).<br>
        🔹 Identificação: Portas (origem/destino).
      </div>

      <div class="lex-list-item">
        <strong>3. Rede (ou Internet)</strong><br>
        🔹 Função: Endereçamento lógico e roteamento de pacotes.<br>
        🔹 Protocolos: IP (IPv4/IPv6), ICMP, ARP.<br>
        🔹 PDU: Pacote.<br>
        🔹 Dispositivo: <strong>Roteador</strong>.
      </div>

      <div class="lex-list-item">
        <strong>2. Enlace</strong><br>
        🔹 Função: Detecção de erros físicos e controle de acesso ao meio.<br>
        🔹 Endereço: <strong>MAC Address</strong>.<br>
        🔹 PDU: Quadro (Frame).<br>
        🔹 Dispositivos: Switch, Placa de Rede (NIC).
      </div>

      <div class="lex-list-item">
        <strong>1. Física</strong><br>
        🔹 Função: Transmissão de bits brutos sobre o meio físico.<br>
        🔹 Exemplos: Cabos UTP, Fibra Óptica, Wi-Fi.<br>
        🔹 PDU: Bits.<br>
        🔹 Dispositivos: Hub, Repetidores.
      </div>
    </div>

    <!-- IMAGEM TCP/IP --> <br>
    <div class="img-container">
      <span class="img-caption">Esquema Visual TCP/IP</span>
      <div class="img-box">
        <img src="imagens/tcp.png" alt="Diagrama TCP/IP">
      </div>
    </div>
  </div>

  <!-- SEÇÃO OSI -->
  <div class="lex-section-container">
    <div class="lex-section-title">Modelo OSI (7 Camadas) — Teórico</div>

    <div class="lex-list">
      <div class="lex-list-item"><strong>7. Aplicação:</strong> Interface e software final.</div>
      <div class="lex-list-item"><strong>6. Apresentação:</strong> Tradução, compressão e criptografia (SSL/TLS).</div>
      <div class="lex-list-item"><strong>5. Sessão:</strong> Gerenciamento de diálogo entre aplicações.</div>
      <div class="lex-list-item"><strong>4. Transporte:</strong> Conexão fim-a-fim e correção de erros.</div>
      <div class="lex-list-item"><strong>3. Rede:</strong> Seleção do melhor caminho (roteamento).</div>
      <div class="lex-list-item"><strong>2. Enlace:</strong> Organização de bits em quadros e controle de fluxo.</div>
      <div class="lex-list-item"><strong>1. Física:</strong> Especificações mecânicas e elétricas do meio.</div>
    </div>

    <!-- IMAGEM OSI --> <br>
    <div class="img-container">
      <span class="img-caption">Referência Teórica OSI</span>
      <div class="img-box">
        <img src="imagens/osi.png" alt="Diagrama OSI">
      </div>
    </div>
  </div>

  <!-- PORTAS IMPORTANTES -->
  <div class="lex-section-container">
    <div class="lex-section-title">Portas e Protocolos Cruciais</div>
    <div class="lex-list grid-2">
      <div class="lex-list-item">🌐 <strong>80/443:</strong> HTTP/HTTPS</div>
      <div class="lex-list-item">🔐 <strong>22:</strong> SSH</div>
      <div class="lex-list-item">📁 <strong>21:</strong> FTP</div>
      <div class="lex-list-item">🌍 <strong>53:</strong> DNS</div>
      <div class="lex-list-item">📧 <strong>25/110/143:</strong> E-mail</div>
      <div class="lex-list-item">⚙ <strong>67/68:</strong> DHCP</div>
    </div>
  </div>

  <!-- COMPARATIVO RÁPIDO -->
  <div class="lex-section-container">
    <div class="lex-section-title">Diferenciais Críticos</div>
    <div class="lex-expandable-item">
      <strong>TCP vs UDP:</strong> O TCP garante a entrega (confiável), enquanto o UDP prioriza a velocidade (streaming/jogos).<br>
      <strong>Encapsulamento:</strong> Os dados descem as camadas ganhando cabeçalhos (headers); ao subir, eles são desencapsulados.
    </div>
  </div>

  <!-- BIZU DE PROVA -->
  <div class="callout callout-gold">
    💡 <strong>RESUMO PARA DECORAR:</strong><br>
    • No <strong>TCP/IP</strong> (5 cam.), as camadas 5-6-7 do OSI são unificadas em <strong>Aplicação</strong>.<br>
    • Camada 2 (Enlace) usa <strong>MAC</strong>; Camada 3 (Rede) usa <strong>IP</strong>; Camada 4 (Transporte) usa <strong>PORTAS</strong>.
  </div>

</div>
`
  },





  "TCP vs UDP": {
    icon: "🔁",
    color: "#4f46e5",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🔁</div>
    <h1 class="notion-title">TCP vs UDP</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Protocolos de Transporte</span>
      <span class="meta-tag tag-gold">Confiável vs Rápido</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">TCP — Transmission Control Protocol</div>
      <div class="lex-expandable-item"><strong>Confiável</strong> — garante que os dados chegaram.</div>
      <div class="lex-expandable-item">Estabelece conexão antes de enviar (handshake de 3 vias).</div>
      <div class="lex-expandable-item">Ordena os pacotes corretamente.</div>
      <div class="lex-expandable-item">Confirma o recebimento — reenvia se necessário.</div>
      <div class="lex-expandable-item">Mais lento que o UDP.</div>
      <div class="lex-expandable-item">Usado em: <strong>HTTP/HTTPS, FTP, SMTP, POP3, IMAP, SSH</strong>.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">UDP — User Datagram Protocol</div>
      <div class="lex-expandable-item"><strong>Rápido</strong> — não garante entrega.</div>
      <div class="lex-expandable-item">Sem conexão prévia — envia sem estabelecer sessão.</div>
      <div class="lex-expandable-item">Não confirma recebimento e não reenvia pacotes perdidos.</div>
      <div class="lex-expandable-item">Muito mais rápido que o TCP.</div>
      <div class="lex-expandable-item">Aceita pequenas perdas de dados.</div>
      <div class="lex-expandable-item">Usado em: <strong>VoIP, DNS, Streaming, jogos online, videoconferência</strong>.</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> TCP = confiável, lento, garante entrega &nbsp;|&nbsp; UDP = rápido, sem garantia, tempo real<br>
    Para e-mail e sites use TCP; para vídeo chamada e jogos use UDP.
  </div>
</div>`
  },

  "Protocolos de Rede": {
    icon: "📋",
    color: "#0284c7",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">📋</div>
    <h1 class="notion-title">Protocolos de Rede</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">HTTP · FTP · DNS · DHCP · SSH</span>
      <span class="meta-tag tag-gold">Portas Importantes</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Protocolos Web</div>
    <div class="lex-expandable-item"><strong>HTTP</strong> — transferência de páginas web. Porta <strong>80</strong>. Sem criptografia.</div>
    <div class="lex-expandable-item"><strong>HTTPS</strong> — HTTP com criptografia (SSL/TLS). Porta <strong>443</strong>. Seguro.</div>
    <div class="lex-expandable-item">Métodos HTTP: <strong>GET</strong> (buscar dados), <strong>POST</strong> (enviar dados), <strong>PUT</strong> (atualizar), <strong>DELETE</strong> (excluir).</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Protocolos de Arquivos e Rede</div>
    <div class="lex-expandable-item"><strong>FTP</strong> (File Transfer Protocol) — transferência de arquivos. Porta <strong>20</strong> (dados) e <strong>21</strong> (controle).</div>
    <div class="lex-expandable-item"><strong>DNS</strong> (Domain Name System) — traduz nomes de domínio (google.com) em endereços IP. Usa <strong>UDP</strong>. Porta <strong>53</strong>.</div>
    <div class="lex-expandable-item"><strong>DHCP</strong> (Dynamic Host Configuration Protocol) — distribui endereços IP <strong>automaticamente</strong> para dispositivos na rede.</div>
    <div class="lex-expandable-item"><strong>SSH</strong> (Secure Shell) — acesso remoto seguro a servidores e computadores. Porta <strong>22</strong>. Usa criptografia.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Portas de Rede — Resumo para Prova</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>HTTP</strong> = porta 80</div>
      <div class="lex-expandable-item"><strong>HTTPS</strong> = porta 443</div>
      <div class="lex-expandable-item"><strong>FTP</strong> = portas 20 (dados) e 21 (controle)</div>
      <div class="lex-expandable-item"><strong>SSH</strong> = porta 22</div>
      <div class="lex-expandable-item"><strong>DNS</strong> = porta 53 (UDP)</div>
      <div class="lex-expandable-item"><strong>SMTP</strong> = porta 25 (ou 587 com segurança)</div>
      <div class="lex-expandable-item"><strong>POP3</strong> = porta 110</div>
      <div class="lex-expandable-item"><strong>IMAP</strong> = porta 143</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> DNS = traduz nome em IP &nbsp;|&nbsp; DHCP = distribui IP automático &nbsp;|&nbsp; SSH = acesso remoto seguro
  </div>
</div>`
  },

  "Endereçamento IP — IPv4 e IPv6": {
    icon: "🌐",
    color: "#0891b2",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🌐</div>
    <h1 class="notion-title">Endereçamento IP — IPv4 e IPv6</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">IPv4 · IPv6</span>
      <span class="meta-tag tag-gold">Identificação na Rede</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">O que é Endereço IP?</div>
    <div class="lex-expandable-item">IP (Internet Protocol) = endereço lógico que <strong>identifica um dispositivo na rede</strong>.</div>
    <div class="lex-expandable-item">É dinâmico — pode ser alterado (ao contrário do MAC, que é fixo).</div>
    <div class="lex-expandable-item">Pode ser público (visível na internet) ou privado (somente na rede local).</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">IPv4</div>
      <div class="lex-expandable-item">4 grupos de números separados por ponto.</div>
      <div class="lex-expandable-item">Cada grupo: valores de <strong>0 a 255</strong>.</div>
      <div class="lex-expandable-item">Total: <strong>32 bits</strong>.</div>
      <div class="lex-expandable-item">Suporta ~4,3 bilhões de endereços.</div>
      <div class="lex-expandable-item"><strong>Exemplo:</strong> 192.168.25.2 &nbsp;|&nbsp; 10.0.0.1</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">IPv6</div>
      <div class="lex-expandable-item">8 grupos de valores hexadecimais separados por dois-pontos.</div>
      <div class="lex-expandable-item">Total: <strong>128 bits</strong>.</div>
      <div class="lex-expandable-item">Endereços praticamente ilimitados.</div>
      <div class="lex-expandable-item">Criado para <strong>substituir o IPv4</strong> (que está esgotado).</div>
      <div class="lex-expandable-item">Muito usado em IoT, redes modernas e provedores.</div>
      <div class="lex-expandable-item"><strong>Exemplo:</strong> 9813:F3B6:ABFC:0000:0000:0000:0000:7B1C</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Conceitos Relacionados</div>
    <div class="lex-expandable-item"><strong>Host</strong> — qualquer dispositivo conectado e identificado na rede (computador, smartphone, impressora).</div>
    <div class="lex-expandable-item"><strong>Nó</strong> — ponto de conexão na rede (pode ser qualquer dispositivo ou equipamento).</div>
    <div class="lex-expandable-item"><strong>IP Privado</strong> — usado somente dentro da rede local (ex: 192.168.x.x, 10.x.x.x).</div>
    <div class="lex-expandable-item"><strong>IP Público</strong> — identificação na internet, único no mundo.</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> IPv4 = 32 bits, números decimais, 4 grupos &nbsp;|&nbsp; IPv6 = 128 bits, hexadecimal, 8 grupos &nbsp;|&nbsp; IP = lógico (muda) &nbsp;|&nbsp; MAC = físico (fixo)
  </div>
</div>`
  },

  // ╔══════════════════════════════════════════════════════╗
  // ║              SEGURANÇA DA INFORMAÇÃO                 ║
  // ╚══════════════════════════════════════════════════════╝

  "Seguranca da Informacao — CIDAN": {
    icon: "🔐",
    color: "#ef4444",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🔐</div>
    <h1 class="notion-title">Segurança da Informação — CIDAN</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Princípios Fundamentais</span>
      <span class="meta-tag tag-gold">Muito cobrado em prova!</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Pilares da Segurança — CIDAN</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>Confidencialidade</strong> — acesso apenas a quem tem permissão (sigilo). Garantido por criptografia.</div>
      <div class="lex-expandable-item"><strong>Integridade</strong> — dado não pode ser alterado sem autorização. Garantido por função Hash e assinatura digital.</div>
      <div class="lex-expandable-item"><strong>Disponibilidade</strong> — sistema deve estar acessível quando necessário. Garantido por backups e redundância.</div>
      <div class="lex-expandable-item"><strong>Autenticidade</strong> — garantia de que o usuário é quem diz ser. Feita por senhas, biometria, certificados.</div>
      <div class="lex-expandable-item"><strong>Não Repúdio</strong> — autor não pode negar que realizou determinada ação. Garantido por assinatura digital.</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Ativos de Informação</div>
    <div class="lex-expandable-item">São todos os elementos que têm valor para a organização e precisam ser protegidos:</div>
    <div class="lex-expandable-item">• <strong>Dados</strong> — informações brutas, sem contexto</div>
    <div class="lex-expandable-item">• <strong>Informações</strong> — dados organizados e com significado</div>
    <div class="lex-expandable-item">• <strong>Conhecimento</strong> — informações aplicadas na prática</div>
    <div class="lex-expandable-item">• Sistemas, servidores, aplicações, pessoas</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Principais Tipos de Ameaças</div>
    <div class="lex-expandable-item">• <strong>Malwares</strong> — vírus, ransomware, trojan, spyware...</div>
    <div class="lex-expandable-item">• <strong>Ataques externos</strong> — DDoS, invasão, spoofing...</div>
    <div class="lex-expandable-item">• <strong>Pessoas (erro humano)</strong> — engenharia social, phishing, descuido...</div>
    <div class="lex-expandable-item">• <strong>Eventos físicos</strong> — enchentes, incêndios, queda de energia...</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Principais Ameaças</div>
      <div class="lex-expandable-item">Vírus e malwares</div>
      <div class="lex-expandable-item">Ataques de hackers</div>
      <div class="lex-expandable-item">Engenharia social</div>
      <div class="lex-expandable-item">Desastres físicos</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Proteções Essenciais</div>
      <div class="lex-expandable-item">Antivírus / antimalware</div>
      <div class="lex-expandable-item">Firewall</div>
      <div class="lex-expandable-item">Backup regular</div>
      <div class="lex-expandable-item">Atualização do sistema</div>
      <div class="lex-expandable-item">2FA (autenticação em dois fatores)</div>
      <div class="lex-expandable-item">Senhas alfanuméricas fortes</div>
      <div class="lex-expandable-item">Biometria</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> C = sigilo &nbsp;|&nbsp; I = não alterar &nbsp;|&nbsp; D = acesso garantido &nbsp;|&nbsp; A = quem é você &nbsp;|&nbsp; N = não pode negar
  </div>
</div>`
  },

  "Ataques Virtuais": {
    icon: "⚔️",
    color: "#dc2626",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">⚔️</div>
    <h1 class="notion-title">Ataques Virtuais</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Spoofing · DDoS · Phishing</span>
      <span class="meta-tag tag-gold">Muito cobrado em prova!</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Spoofing (Falsificação)</div>
      <div class="lex-expandable-item">Fingir ser outra entidade ou pessoa.</div>
      <div class="lex-expandable-item">Pode ser: IP falso, e-mail falso, site falso, identidade falsa.</div>
      <div class="lex-expandable-item">Objetivo: enganar sistemas e usuários.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">DDoS (Distributed Denial of Service)</div>
      <div class="lex-expandable-item">Ataque de <strong>negação de serviço distribuído</strong>.</div>
      <div class="lex-expandable-item">Múltiplos computadores (botnet) enviam requisições simultâneas ao alvo.</div>
      <div class="lex-expandable-item">Resultado: servidor sobrecarregado, lento ou fora do ar.</div>
      <div class="lex-expandable-item">Objetivo: tirar o serviço do ar, não roubar dados.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Phishing (Pescaria)</div>
      <div class="lex-expandable-item">Golpe via <strong>e-mail, SMS ou link falso</strong> que imita site/empresa legítima.</div>
      <div class="lex-expandable-item">Objetivo: roubar senhas, dados bancários e informações pessoais.</div>
      <div class="lex-expandable-item">Forma de <strong>engenharia social</strong>.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Engenharia Social</div>
      <div class="lex-expandable-item">Manipulação <strong>psicológica</strong> do usuário para obter informações confidenciais.</div>
      <div class="lex-expandable-item">Não exige hacking técnico — explora a confiança humana.</div>
      <div class="lex-expandable-item">Ex: se passar por técnico de TI para obter senha.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Força Bruta (Brute Force)</div>
      <div class="lex-expandable-item">Tentativa e erro sistemático de senhas e combinações.</div>
      <div class="lex-expandable-item">Ferramentas automatizadas testam milhões de combinações por segundo.</div>
      <div class="lex-expandable-item">Objetivo: descobrir a senha correta.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Sniffer (Farejador)</div>
      <div class="lex-expandable-item">Ferramenta que <strong>intercepta e analisa</strong> o tráfego de rede.</div>
      <div class="lex-expandable-item">Captura pacotes de dados em trânsito na rede.</div>
      <div class="lex-expandable-item">Pode roubar senhas e informações não criptografadas.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Pharming</div>
      <div class="lex-expandable-item">Ataca o serviço <strong>DNS</strong> para redirecionar o usuário.</div>
      <div class="lex-expandable-item">Mesmo digitando o endereço correto, o usuário vai para um site falso.</div>
      <div class="lex-expandable-item">Mais sofisticado que o phishing — não precisa de clique em link.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Defacement (Pichação)</div>
      <div class="lex-expandable-item">Invasão e <strong>alteração visual</strong> de um site.</div>
      <div class="lex-expandable-item">Substitui o conteúdo original por mensagens do invasor.</div>
      <div class="lex-expandable-item">Geralmente motivação política ou vaidade do hacker.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Scareware (Software Assustador)</div>
      <div class="lex-expandable-item">Exibe <strong>avisos falsos</strong> de vírus ou problemas no computador.</div>
      <div class="lex-expandable-item">Tenta assustar o usuário para que ele compre um "antivírus falso" ou instale malware.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Hoax (Boato)</div>
      <div class="lex-expandable-item">Mensagens falsas e alarmistas enviadas em massa.</div>
      <div class="lex-expandable-item">Correntes, pirâmides, notícias falsas (fake news) via e-mail ou redes sociais.</div>
      <div class="lex-expandable-item">Objetivo: enganar e manipular usuários.</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> DDoS = tirar do ar &nbsp;|&nbsp; Phishing = enganar para roubar dados &nbsp;|&nbsp; Pharming = DNS falso &nbsp;|&nbsp; Sniffer = espionagem de rede
  </div>
</div>`
  },

  "Malwares — Tipos de Pragas Virtuais": {
    icon: "🦠",
    color: "#f59e0b",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🦠</div>
    <h1 class="notion-title">Malwares — Tipos de Pragas Virtuais</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-gold">Muito cobrado em provas</span>
      <span class="meta-tag tag-b">Segurança da Informação</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">O que é Malware?</div>
    <div class="lex-expandable-item"><strong>Malware</strong> = <strong>Malicious Software</strong> (Software Malicioso).</div>
    <div class="lex-expandable-item">Qualquer programa criado com a intenção de <strong>invadir, danificar ou explorar sistemas</strong>.</div>
    <div class="lex-expandable-item">Pode infectar computadores, celulares, servidores e redes inteiras.</div>
    <div class="lex-expandable-item">Objetivos: roubar senhas, espionar usuários, destruir arquivos, controlar sistemas remotamente, obter dinheiro.</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Vírus</div>
      <div class="lex-expandable-item">Se <strong>anexa a arquivos legítimos</strong> para se propagar.</div>
      <div class="lex-expandable-item">Precisa que o usuário execute o arquivo infectado para agir.</div>
      <div class="lex-expandable-item">Pode apagar arquivos, corromper programas e se replicar.</div>
      <div class="lex-expandable-item"><strong>Subtipos:</strong> Boot (infeta MBR/inicialização), Macro (Office: Word, Excel, PowerPoint), Mutante, Polimórfico (muda de forma para evitar detecção), Stealth (se oculta), Injector, Script.</div>
      <div class="lex-expandable-item"><strong>Exemplo real:</strong> ILOVEYOU (2000) — infectou milhões via e-mail.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Worm (Verme)</div>
      <div class="lex-expandable-item">Se espalha <strong>automaticamente pela rede</strong>, explorando vulnerabilidades.</div>
      <div class="lex-expandable-item"><strong>Não precisa de ação do usuário</strong> — diferente do vírus.</div>
      <div class="lex-expandable-item">Não afeta arquivos diretamente — consome recursos e causa lentidão.</div>
      <div class="lex-expandable-item">Pode derrubar redes inteiras pelo consumo excessivo de banda.</div>
      <div class="lex-expandable-item"><strong>Exemplo real:</strong> Morris Worm (1988), WannaCry (2017).</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Trojan (Cavalo de Troia)</div>
      <div class="lex-expandable-item">Malware <strong>disfarçado de programa legítimo</strong>.</div>
      <div class="lex-expandable-item">Usuário instala achando que é um software seguro ou útil.</div>
      <div class="lex-expandable-item">Após instalado, abre acesso ao invasor.</div>
      <div class="lex-expandable-item"><strong>NÃO se replica</strong> — diferença importante em relação ao vírus e ao worm.</div>
      <div class="lex-expandable-item"><strong>Subtipos:</strong> Dropper (instala outros malwares), Clicker (redireciona cliques/anúncios), RAT (Remote Access Trojan — controle remoto).</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Spyware (Software Espião)</div>
      <div class="lex-expandable-item">Coleta informações do usuário <strong>sem sua permissão</strong>.</div>
      <div class="lex-expandable-item">Pode registrar histórico de navegação e dados pessoais.</div>
      <div class="lex-expandable-item">Frequentemente instalado junto com programas gratuitos (adware).</div>
      <div class="lex-expandable-item"><strong>Subtipos:</strong></div>
      <div class="lex-expandable-item">• <strong>Keylogger</strong> — registra tudo que o usuário digita (senhas, mensagens).</div>
      <div class="lex-expandable-item">• <strong>Screenlogger</strong> — captura a tela e movimentos do mouse.</div>
      <div class="lex-expandable-item">• <strong>Adware</strong> — exibe propagandas indesejadas; pode redirecionar navegador.</div>
      <div class="lex-expandable-item">• <strong>Stalkerware</strong> — monitoramento oculto de celular (vigilância).</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Ransomware (Sequestro de Dados)</div>
      <div class="lex-expandable-item">Malware que <strong>criptografa os arquivos</strong> da vítima.</div>
      <div class="lex-expandable-item">O criminoso exige pagamento (geralmente em <strong>Bitcoin</strong>) para liberar os dados.</div>
      <div class="lex-expandable-item">Muito usado contra empresas, hospitais e governos.</div>
      <div class="lex-expandable-item"><strong>Exemplo real:</strong> WannaCry (2017) — 200 mil vítimas em 150 países.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Rootkit</div>
      <div class="lex-expandable-item">Conjunto de ferramentas para <strong>esconder a presença do invasor</strong> no sistema.</div>
      <div class="lex-expandable-item">Permite acesso oculto e persistente ao sistema.</div>
      <div class="lex-expandable-item">Muito difícil de detectar — pode se instalar no nível do kernel.</div>
      <div class="lex-expandable-item">O antivírus comum frequentemente <strong>não consegue remover</strong>.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Bot / Botnet</div>
      <div class="lex-expandable-item"><strong>Bot</strong> — computador infectado controlado remotamente por um hacker.</div>
      <div class="lex-expandable-item"><strong>Botnet</strong> (rede zumbi) — rede de bots usada para ataques coordenados.</div>
      <div class="lex-expandable-item">Usada para ataques DDoS e envio de spam em massa.</div>
      <div class="lex-expandable-item"><strong>Exemplo:</strong> Botnet Mirai (2016) atacou servidores da internet.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Backdoor (Porta dos Fundos)</div>
      <div class="lex-expandable-item">Permite <strong>acesso secreto e contínuo</strong> ao sistema para o invasor.</div>
      <div class="lex-expandable-item">Pode ser instalado por outros malwares (Trojan, Rootkit).</div>
      <div class="lex-expandable-item">Difícil de detectar pois opera de forma oculta.</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Linha do Tempo dos Grandes Ataques Cibernéticos</div>
    <div class="lex-expandable-item"><strong>1988 — Morris Worm</strong> — Primeiro grande worm. Derrubou ~10% da internet da época.</div>
    <div class="lex-expandable-item"><strong>2000 — ILOVEYOU</strong> — Vírus via e-mail que infectou mais de 50 milhões de computadores.</div>
    <div class="lex-expandable-item"><strong>2010 — Stuxnet</strong> — Malware criado para atacar instalações nucleares iranianas. Considerado a primeira arma cibernética.</div>
    <div class="lex-expandable-item"><strong>2017 — WannaCry</strong> — Ransomware. Afetou hospitais, empresas e governos em 150 países.</div>
    <div class="lex-expandable-item"><strong>2020 — SolarWinds</strong> — Ataque sofisticado de supply chain que comprometeu sistemas governamentais dos EUA.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Comparação Rápida para Prova</div>
    <div class="lex-expandable-item"><strong>Vírus</strong> — precisa de ação humana para se espalhar (execução do arquivo).</div>
    <div class="lex-expandable-item"><strong>Worm</strong> — se espalha sozinho pela rede, sem ação do usuário.</div>
    <div class="lex-expandable-item"><strong>Trojan</strong> — disfarçado de programa legítimo; <strong>não se replica</strong>.</div>
    <div class="lex-expandable-item"><strong>Ransomware</strong> — sequestra (criptografa) arquivos e pede resgate.</div>
    <div class="lex-expandable-item"><strong>Spyware</strong> — espiona o usuário silenciosamente.</div>
    <div class="lex-expandable-item"><strong>Rootkit</strong> — esconde invasores; difícil detecção e remoção.</div>
    <div class="lex-expandable-item"><strong>Bot/Botnet</strong> — computador zumbi controlado remotamente.</div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha!</strong> O Trojan (Cavalo de Troia) <strong>NÃO se replica</strong> sozinho — diferente do vírus e do worm. Afirmar que ele se replica como um vírus é uma assertiva <strong>ERRADA</strong> em provas.
  </div>
</div>`
  },

  "Antivirus — Geracoes": {
    icon: "🛡️",
    color: "#22c55e",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🛡️</div>
    <h1 class="notion-title">Antivírus — Gerações</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-g">4 Gerações</span>
      <span class="meta-tag tag-b">Assinatura · Heurística · IA · EDR</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">O que é um Antivírus?</div>
    <div class="lex-expandable-item">Software que <strong>detecta, bloqueia e remove</strong> vírus e outros malwares.</div>
    <div class="lex-expandable-item"><strong>Falso positivo</strong> = detecta como vírus algo que na verdade é seguro.</div>
    <div class="lex-expandable-item"><strong>Windows Defender</strong> = solução antivírus nativa do Windows 10/11.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">1ª Geração — Assinatura (Scanning)</div>
    <div class="lex-expandable-item">Compara arquivos com um <strong>banco de dados de assinaturas</strong> de vírus conhecidos.</div>
    <div class="lex-expandable-item">Método mais clássico e antigo.</div>
    <div class="lex-expandable-item">Precisa de <strong>atualização constante</strong> do banco de dados.</div>
    <div class="lex-expandable-item"><strong>Limitação:</strong> não detecta vírus novos (Zero-day) sem atualização.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">2ª Geração — Heurística</div>
    <div class="lex-expandable-item">Busca <strong>características e padrões semelhantes</strong> a vírus conhecidos, sem precisar de cópia exata.</div>
    <div class="lex-expandable-item">Detecta variantes e vírus ligeiramente modificados.</div>
    <div class="lex-expandable-item">Analisa instruções suspeitas no código do arquivo.</div>
    <div class="lex-expandable-item"><strong>Pode gerar falsos positivos</strong> — alerta para arquivos legítimos com comportamento parecido com vírus.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">3ª Geração — Comportamental (Análise Dinâmica / Interceptação)</div>
    <div class="lex-expandable-item">Monitora o que o programa <strong>faz durante a execução</strong>, não apenas seu código estático.</div>
    <div class="lex-expandable-item">Se tentar criptografar arquivos em massa → bloqueia (ransomware detectado).</div>
    <div class="lex-expandable-item"><strong>Sandboxing</strong> = executa o arquivo em um <strong>ambiente virtual isolado</strong> para observar seu comportamento sem risco ao sistema real.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">4ª Geração — IA / Machine Learning / EDR</div>
    <div class="lex-expandable-item">Usa <strong>Machine Learning e Deep Learning</strong> para prever e identificar ameaças.</div>
    <div class="lex-expandable-item">Analisa milhares de variáveis simultâneas em milissegundos.</div>
    <div class="lex-expandable-item"><strong>EDR</strong> (Endpoint Detection and Response) — monitoramento contínuo com telemetria em nuvem.</div>
    <div class="lex-expandable-item">Capaz de identificar ameaças nunca vistas antes (<strong>Zero-day</strong>).</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> 1ª = assinatura (banco de vírus) &nbsp;|&nbsp; 2ª = heurística (padrões suspeitos) &nbsp;|&nbsp; 3ª = comportamento + sandbox &nbsp;|&nbsp; 4ª = IA + EDR
  </div>
</div>`
  },

  "Firewall — Tipos e Funcoes": {
    icon: "🔥",
    color: "#fb923c",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🔥</div>
    <h1 class="notion-title">Firewall — Tipos e Funções</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-gold">Barreira de Proteção da Rede</span>
      <span class="meta-tag tag-b">Muito cobrado em prova!</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">O que é o Firewall?</div>
    <div class="lex-expandable-item">Barreira de <strong>proteção da rede</strong> — a primeira linha de defesa.</div>
    <div class="lex-expandable-item">Controla o tráfego de <strong>entrada e saída</strong> da rede com base em regras configuradas.</div>
    <div class="lex-expandable-item">Bloqueia acessos não autorizados.</div>
    <div class="lex-expandable-item">Pode ser <strong>hardware</strong> (equipamento físico) ou <strong>software</strong> (programa).</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">O que o Firewall FAZ ✅</div>
      <div class="lex-expandable-item">✅ Controla tráfego de rede (entrada e saída)</div>
      <div class="lex-expandable-item">✅ Bloqueia acessos não autorizados</div>
      <div class="lex-expandable-item">✅ Filtra pacotes de dados por IP, porta e protocolo</div>
      <div class="lex-expandable-item">✅ Protege contra ataques externos</div>
      <div class="lex-expandable-item">✅ Registra logs de acesso</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">O que o Firewall NÃO FAZ ❌</div>
      <div class="lex-expandable-item">❌ Não detecta nem remove vírus</div>
      <div class="lex-expandable-item">❌ Não faz backup</div>
      <div class="lex-expandable-item">❌ Não criptografa dados</div>
      <div class="lex-expandable-item">❌ Não protege contra ataques vindos de <em>dentro</em> da rede</div>
      <div class="lex-expandable-item">❌ Não substitui o antivírus</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Tipos de Firewall</div>
    <div class="lex-expandable-item"><strong>Filtragem de pacotes (Stateless)</strong> — analisa cada pacote de forma independente, por IP de origem/destino e porta. Mais simples.</div>
    <div class="lex-expandable-item"><strong>Stateful (Inspeção de Estado)</strong> — acompanha o estado das conexões. Mais inteligente e seguro que a filtragem simples.</div>
    <div class="lex-expandable-item"><strong>Proxy</strong> — atua como intermediário entre o usuário e a internet. Nível de aplicação — mais profundo.</div>
    <div class="lex-expandable-item"><strong>UTM</strong> (Unified Threat Management) — combina várias ferramentas de segurança (firewall + antivírus + IDS/IPS + VPN) em um único equipamento.</div>
    <div class="lex-expandable-item"><strong>NGFW</strong> (Next Generation Firewall) — firewall de nova geração; inspeção profunda de pacotes (DPI), controle de aplicações, detecção de malware.</div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha de prova:</strong> O firewall <strong>NÃO</strong> detecta nem remove vírus — isso é função do <strong>antivírus</strong>! São ferramentas complementares, não substitutas.
  </div>
</div>`
  },

  "IDS e IPS": {
    icon: "🔍",
    color: "#7c3aed",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🔍</div>
    <h1 class="notion-title">IDS e IPS</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Detecção e Prevenção de Intrusões</span>
      <span class="meta-tag tag-gold">Monitoramento de Rede</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">IDS — Intrusion Detection System</div>
      <div class="lex-expandable-item">Sistema de <strong>Detecção de Intrusões</strong>.</div>
      <div class="lex-expandable-item">Monitora o tráfego da rede e identifica atividades suspeitas.</div>
      <div class="lex-expandable-item"><strong>Apenas detecta</strong> o ataque e gera um alerta — não bloqueia.</div>
      <div class="lex-expandable-item">Passivo — observa e avisa um administrador.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">IPS — Intrusion Prevention System</div>
      <div class="lex-expandable-item">Sistema de <strong>Prevenção de Intrusões</strong>.</div>
      <div class="lex-expandable-item">Monitora o tráfego da rede em tempo real.</div>
      <div class="lex-expandable-item"><strong>Detecta E bloqueia</strong> automaticamente os ataques.</div>
      <div class="lex-expandable-item">Ativo — age para impedir o ataque em tempo real.</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> IDS = só detecta e avisa &nbsp;|&nbsp; IPS = detecta e bloqueia automaticamente<br>
    IDS = passivo &nbsp;|&nbsp; IPS = ativo
  </div>
</div>`
  },

  "Backup — Copia de Seguranca": {
    icon: "📁",
    color: "#38bdf8",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">📁</div>
    <h1 class="notion-title">Backup — Cópia de Segurança</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Completo · Incremental · Diferencial</span>
      <span class="meta-tag tag-gold">Regra 3-2-1</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">O que é Backup?</div>
    <div class="lex-expandable-item">Backup é uma <strong>cópia de segurança dos dados</strong> para recuperação em caso de perda.</div>
    <div class="lex-expandable-item">Protege contra: falhas de hardware, vírus/ransomware, erro humano, roubo, desastres físicos.</div>
    <div class="lex-expandable-item">Empresas e governos usam backup para garantir a <strong>continuidade das operações</strong>.</div>
    <div class="lex-expandable-item"><strong>Nunca deve ser feito no mesmo disco</strong> que os dados originais.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Regra 3-2-1 — Padrão Mundial de Backup</div>
    <div class="lex-list">
      <div class="lex-expandable-item">Manter <strong>3 cópias</strong> dos dados</div>
      <div class="lex-expandable-item">Em <strong>2 tipos de mídia diferentes</strong> (ex: HD externo + nuvem)</div>
      <div class="lex-expandable-item">Sendo <strong>1 cópia fora do local</strong> (offsite ou nuvem)</div>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Backup Completo (Full)</div>
      <div class="lex-expandable-item">Copia <strong>todos os arquivos</strong> do sistema, sempre.</div>
      <div class="lex-expandable-item">Mais seguro e simples de restaurar.</div>
      <div class="lex-expandable-item">Ocupa mais espaço e demora mais tempo.</div>
      <div class="lex-expandable-item"><strong>Marca</strong> os arquivos como copiados (limpa o bit de arquivo).</div>
      <div class="lex-expandable-item">Exemplo: backup semanal completo de um servidor.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Backup Incremental</div>
      <div class="lex-expandable-item">Copia apenas arquivos <strong>modificados desde o último backup</strong> (completo ou incremental).</div>
      <div class="lex-expandable-item">Muito rápido e economiza espaço.</div>
      <div class="lex-expandable-item"><strong>Marca</strong> os arquivos como copiados.</div>
      <div class="lex-expandable-item">Restauração mais trabalhosa: precisa do backup completo + <strong>todos</strong> os incrementais em ordem.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Backup Diferencial</div>
      <div class="lex-expandable-item">Copia arquivos alterados <strong>desde o último backup completo</strong>.</div>
      <div class="lex-expandable-item"><strong>Não marca</strong> os arquivos como copiados — cresce a cada dia.</div>
      <div class="lex-expandable-item">Restauração mais simples: apenas o backup completo + <strong>o último diferencial</strong>.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Backup Espelho (Mirror)</div>
      <div class="lex-expandable-item">Cria uma <strong>cópia idêntica</strong> em tempo real do sistema.</div>
      <div class="lex-expandable-item">Se um arquivo é apagado no original, também é apagado no backup.</div>
      <div class="lex-expandable-item">Usado em servidores de alta disponibilidade.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Backup Contínuo (CDP)</div>
      <div class="lex-expandable-item">Continuous Data Protection — salva mudanças em <strong>tempo real</strong>.</div>
      <div class="lex-expandable-item">Muito usado em bancos e sistemas críticos que não podem perder dados.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Snapshot</div>
      <div class="lex-expandable-item">Cria uma <strong>imagem instantânea</strong> do estado do sistema em um momento.</div>
      <div class="lex-expandable-item">Muito usado em máquinas virtuais (VMs).</div>
      <div class="lex-expandable-item">Permite reverter o sistema para o estado anterior rapidamente.</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Onde Guardar Backups</div>
    <div class="lex-expandable-item">• HD externo / SSD externo</div>
    <div class="lex-expandable-item">• Servidor de backup dedicado</div>
    <div class="lex-expandable-item">• Fitas magnéticas (LTO) — comum em empresas</div>
    <div class="lex-expandable-item">• Armazenamento em nuvem: Google Drive, OneDrive, Dropbox, AWS S3</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Deduplicação de Dados</div>
    <div class="lex-expandable-item">Técnica que <strong>identifica e remove arquivos duplicados</strong> no backup.</div>
    <div class="lex-expandable-item">Armazena apenas uma cópia dos dados repetidos — economiza espaço significativamente.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Erros Comuns em Backup</div>
    <div class="lex-expandable-item">• Nunca testar a restauração (o backup pode estar corrompido)</div>
    <div class="lex-expandable-item">• Guardar backup no mesmo computador dos dados originais</div>
    <div class="lex-expandable-item">• Não fazer backup com regularidade</div>
    <div class="lex-expandable-item">• Não proteger o backup com senha</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu de prova:</strong><br>
    Incremental → desde o <strong>último backup</strong> (qualquer tipo) — <strong>MARCA</strong> os arquivos<br>
    Diferencial → desde o <strong>último backup COMPLETO</strong> — <strong>NÃO MARCA</strong> os arquivos<br>
    Regra 3-2-1 → padrão internacional de segurança de backup
  </div>
</div>`
  },

  "Criptografia": {
    icon: "🔑",
    color: "#a78bfa",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🔑</div>
    <h1 class="notion-title">Criptografia</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Simétrica · Assimétrica</span>
      <span class="meta-tag tag-gold">AES · RSA · SHA · Hash</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">O que é Criptografia?</div>
    <div class="lex-expandable-item">Técnica de <strong>proteger informações</strong> transformando dados legíveis (texto claro) em dados codificados (texto cifrado).</div>
    <div class="lex-expandable-item">Somente quem possui a <strong>chave correta</strong> consegue decifrar e ler a informação.</div>
    <div class="lex-expandable-item">Sem a chave, o conteúdo parece texto aleatório incompreensível.</div>
    <div class="lex-expandable-item">Usada em: bancos digitais, WhatsApp, HTTPS, VPN, cartões de crédito, blockchain.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">História da Criptografia</div>
    <div class="lex-expandable-item"><strong>Cifra de César (Roma Antiga):</strong> Júlio César deslocava letras do alfabeto para criar mensagens secretas militares.</div>
    <div class="lex-expandable-item"><strong>2ª Guerra Mundial:</strong> Alemanha usava a máquina <strong>Enigma</strong> para criptografar comunicações. Os Aliados quebraram o código, ajudando a encurtar a guerra.</div>
    <div class="lex-expandable-item"><strong>Era moderna:</strong> criptografia digital passou a proteger toda a internet.</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Criptografia Simétrica</div>
      <div class="lex-expandable-item">Usa <strong>uma única chave secreta</strong> para criptografar e descriptografar.</div>
      <div class="lex-expandable-item">Muito rápida.</div>
      <div class="lex-expandable-item">Desafio: como compartilhar a chave com segurança?</div>
      <div class="lex-expandable-item"><strong>AES</strong> (Advanced Encryption Standard) — algoritmo padrão mundial. Protege Wi-Fi, discos rígidos, servidores.</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Criptografia Assimétrica</div>
      <div class="lex-expandable-item">Usa <strong>duas chaves diferentes</strong> matematicamente relacionadas.</div>
      <div class="lex-expandable-item"><strong>Chave pública:</strong> distribuída livremente para qualquer pessoa.</div>
      <div class="lex-expandable-item"><strong>Chave privada:</strong> mantida em segredo pelo dono.</div>
      <div class="lex-expandable-item">Resolve o problema do compartilhamento de chaves.</div>
      <div class="lex-expandable-item"><strong>RSA</strong> — algoritmo mais famoso de criptografia assimétrica.</div>
      <div class="lex-expandable-item"><strong>ECC</strong> (Elliptic Curve Cryptography) — moderno e eficiente.</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Função Hash</div>
    <div class="lex-expandable-item">Transforma qualquer dado em uma <strong>sequência de tamanho fixo</strong> (o "hash").</div>
    <div class="lex-expandable-item"><strong>É unidirecional</strong> — não é possível obter o dado original a partir do hash.</div>
    <div class="lex-expandable-item">Usada para verificar <strong>integridade de dados</strong> — qualquer alteração muda o hash completamente.</div>
    <div class="lex-expandable-item"><strong>SHA-256</strong> (padrão atual), <strong>SHA-3</strong> — algoritmos seguros e modernos.</div>
    <div class="lex-expandable-item"><strong>MD5</strong> e <strong>SHA-1</strong> — considerados inseguros, evitados em aplicações modernas.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Como o HTTPS Funciona (Criptografia Híbrida)</div>
    <div class="lex-expandable-item">O HTTPS usa uma <strong>combinação de criptografia assimétrica e simétrica</strong>:</div>
    <div class="lex-expandable-item">1. <strong>RSA ou ECC</strong> — para trocar a chave de sessão com segurança.</div>
    <div class="lex-expandable-item">2. <strong>AES</strong> — para criptografar todo o tráfego da comunicação (mais rápido).</div>
    <div class="lex-expandable-item">SSL/TLS é o protocolo que implementa esse processo no HTTPS.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Algoritmos Que Já Foram Quebrados (Evitar)</div>
    <div class="lex-expandable-item"><strong>MD5</strong> — colisões encontradas; considerado inseguro.</div>
    <div class="lex-expandable-item"><strong>SHA-1</strong> — ataques de colisão demonstrados em 2017.</div>
    <div class="lex-expandable-item"><strong>WEP</strong> (Wi-Fi antigo) — facilmente quebrado; substituído por WPA2/WPA3.</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Simétrica = 1 chave (AES) — rápida &nbsp;|&nbsp; Assimétrica = 2 chaves (RSA/ECC) — segura para troca<br>
    Hash = integridade (SHA-256) &nbsp;|&nbsp; HTTPS = híbrido (RSA para trocar + AES para comunicar)
  </div>
</div>`
  },

  "Certificacao Digital — ICP-Brasil": {
    icon: "📜",
    color: "#0d9488",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">📜</div>
    <h1 class="notion-title">Certificação Digital — ICP-Brasil</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">AC-Raiz · AC · AR</span>
      <span class="meta-tag tag-gold">Assinatura Digital · ICP-Brasil</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">O que é Certificado Digital?</div>
    <div class="lex-expandable-item">Documento eletrônico que <strong>comprova a identidade</strong> de uma pessoa, empresa ou sistema na internet.</div>
    <div class="lex-expandable-item">Funciona como uma "identidade digital" com validade legal.</div>
    <div class="lex-expandable-item">Garante: <strong>Integridade, Confidencialidade e Autenticidade</strong> (ICA).</div>
    <div class="lex-expandable-item">Usado em: nota fiscal eletrônica, declaração de imposto de renda, contratos digitais.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Infraestrutura ICP-Brasil</div>
    <div class="lex-expandable-item"><strong>ICP-Brasil</strong> = Infraestrutura de Chaves Públicas Brasileira. Cadeia de confiança para certificados digitais no Brasil.</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>AC-Raiz</strong> — Autoridade máxima da ICP-Brasil. Exercida pelo <strong>ITI</strong> (Instituto Nacional de Tecnologia da Informação).</div>
      <div class="lex-expandable-item"><strong>AC</strong> (Autoridade Certificadora) — emite os certificados digitais para usuários e empresas. Ex: <strong>SERPRO, Receita Federal, Certisign</strong>.</div>
      <div class="lex-expandable-item"><strong>AR</strong> (Autoridade de Registro) — faz o contato direto com o usuário, valida a identidade <strong>presencialmente</strong>.</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Assinatura Digital</div>
    <div class="lex-expandable-item">Mecanismo criptográfico que <strong>comprova a autoria e integridade</strong> de um documento digital.</div>
    <div class="lex-expandable-item">Usa a <strong>chave privada</strong> do remetente para assinar.</div>
    <div class="lex-expandable-item">O destinatário usa a <strong>chave pública</strong> do remetente para verificar.</div>
    <div class="lex-expandable-item">Garante: <strong>Autenticidade</strong> (quem assinou) e <strong>Não Repúdio</strong> (não pode negar).</div>
    <div class="lex-expandable-item"><strong>NÃO garante Confidencialidade</strong> — para isso seria necessário criptografar o conteúdo separadamente.</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Certificado Digital garante</div>
      <div class="lex-expandable-item">✅ Integridade dos dados</div>
      <div class="lex-expandable-item">✅ Autenticidade do emissor</div>
      <div class="lex-expandable-item">✅ Confidencialidade</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Assinatura Digital garante</div>
      <div class="lex-expandable-item">✅ Autenticidade (quem assinou)</div>
      <div class="lex-expandable-item">✅ Não Repúdio (não pode negar)</div>
      <div class="lex-expandable-item">✅ Integridade (doc não foi alterado)</div>
      <div class="lex-expandable-item">❌ NÃO garante Confidencialidade</div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha!</strong> Assinatura Digital <strong>NÃO</strong> garante confidencialidade. Afirmar que garante é assertiva <strong>ERRADA</strong>.
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> AC-Raiz = ITI (máxima autoridade) &nbsp;|&nbsp; AC = emite certificados &nbsp;|&nbsp; AR = valida presencialmente<br>
    Assinatura digital usa <strong>chave privada</strong> para assinar e <strong>chave pública</strong> para verificar.
  </div>
</div>`
  },


  // ╔══════════════════════════════════════════════════════╗
  // ║                  Excel — Planilhas                   ║
  // ╚══════════════════════════════════════════════════════╝

  "Excel — Planilhas": {
    icon: "📊",
    color: "#16a34a",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">📊</div>
    <h1 class="notion-title">Excel — Planilhas</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Microsoft Excel</span>
      <span class="meta-tag tag-gold">Fórmulas · Funções · PROCV</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Extensões de Arquivo</div>
    <div class="lex-expandable-item"><strong>.xlsx</strong> — formato padrão do Excel (versões modernas)</div>
    <div class="lex-expandable-item"><strong>.xls</strong> — formato antigo (Excel 2003 e anteriores)</div>
    <div class="lex-expandable-item"><strong>.csv</strong> — valores separados por vírgula, sem formatação</div>
    <div class="lex-expandable-item"><strong>.xlsm</strong> — planilha com macros habilitadas</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Operadores e Prioridade de Cálculo</div>
    <div class="lex-expandable-item"><strong>^</strong> — exponenciação (potência) &nbsp;|&nbsp; <strong>*</strong> — multiplicação &nbsp;|&nbsp; <strong>/</strong> — divisão &nbsp;|&nbsp; <strong>+</strong> — soma &nbsp;|&nbsp; <strong>-</strong> — subtração</div>
    <div class="lex-expandable-item"><strong>Ordem de prioridade:</strong> parênteses → exponenciação (^) → multiplicação/divisão → soma/subtração</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Funções Essenciais</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>=SOMA(A1:A10)</strong> — soma um intervalo de células</div>
      <div class="lex-expandable-item"><strong>=MÉDIA(A1:A10)</strong> — calcula a média aritmética</div>
      <div class="lex-expandable-item"><strong>=MÁXIMO(A1:A10)</strong> — retorna o maior valor</div>
      <div class="lex-expandable-item"><strong>=MÍNIMO(A1:A10)</strong> — retorna o menor valor</div>
      <div class="lex-expandable-item"><strong>=CONT.NÚM(A1:A10)</strong> — conta células que contêm <em>números</em></div>
      <div class="lex-expandable-item"><strong>=CONT.VALORES(A1:A10)</strong> — conta células preenchidas (qualquer tipo)</div>
      <div class="lex-expandable-item"><strong>=HOJE()</strong> — retorna a data atual</div>
      <div class="lex-expandable-item"><strong>=AGORA()</strong> — retorna a data e a hora atuais</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Função =SE()</div>
    <div class="lex-expandable-item"><strong>Estrutura:</strong> =SE(teste_lógico; "valor_se_verdadeiro"; "valor_se_falso")</div>
    <div class="lex-expandable-item"><strong>Exemplo:</strong> =SE(A1>=7; "Aprovado"; "Reprovado")</div>
    <div class="lex-expandable-item">Se o teste for verdadeiro → retorna o 1º argumento; se falso → retorna o 2º.</div>
    <div class="lex-expandable-item"><strong>SE aninhado:</strong> =SE(A1>=9; "Ótimo"; SE(A1>=7; "Bom"; "Ruim")) — testa várias condições em sequência</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Funções E() e OU() com SE</div>
    <div class="lex-expandable-item"><strong>=SE(E(A1>5; B1>5); "Aprovado"; "Reprovado")</strong> — ambas as condições devem ser verdadeiras</div>
    <div class="lex-expandable-item"><strong>=SE(OU(A1>5; B1>5); "Aprovado"; "Reprovado")</strong> — basta uma condição ser verdadeira</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Função =PROCV()</div>
    <div class="lex-expandable-item">Pesquisa um valor em uma coluna e retorna um dado de outra coluna da mesma linha.</div>
    <div class="lex-expandable-item"><strong>Sintaxe:</strong> =PROCV(valor_procurado; matriz_tabela; núm_índice_coluna; [intervalo_pesquisa])</div>
    <div class="lex-expandable-item"><strong>FALSO ou 0</strong> = busca correspondência <em>exata</em> (mais comum).</div>
    <div class="lex-expandable-item"><strong>VERDADEIRO ou 1</strong> = busca correspondência <em>aproximada</em>.</div>
    <div class="lex-expandable-item"><strong>Limitação:</strong> só busca da esquerda para a direita. Para busca inversa, use ÍNDICE + CORRESP.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Funções SOMASE e SOMASES</div>
    <div class="lex-expandable-item"><strong>=SOMASE(intervalo; critério; intervalo_soma)</strong> — soma com uma condição</div>
    <div class="lex-expandable-item"><strong>Exemplo:</strong> =SOMASE(A1:A10; "João"; B1:B10) — soma os valores em B onde A for "João"</div>
    <div class="lex-expandable-item"><strong>=SOMASES(intervalo_soma; intervalo1; critério1; intervalo2; critério2)</strong> — soma com múltiplas condições</div>
    <div class="lex-expandable-item"><strong>Exemplo:</strong> =SOMASES(C1:C10; A1:A10; "João"; B1:B10; ">100")</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Funções CONT.SE e CONT.SES</div>
    <div class="lex-expandable-item"><strong>=CONT.SE(intervalo; critério)</strong> — conta com uma condição</div>
    <div class="lex-expandable-item"><strong>Exemplo:</strong> =CONT.SE(A1:A10; ">5") — conta quantos valores são maiores que 5</div>
    <div class="lex-expandable-item"><strong>=CONT.SES(intervalo1; critério1; intervalo2; critério2)</strong> — conta com múltiplas condições</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Conceitos Importantes</div>
    <div class="lex-expandable-item"><strong>Formatação Condicional</strong> — guia Página Inicial → grupo Estilos. Permite realçar células com regras (cores, ícones, barras de dados). <em>Não bloqueia digitação de valores inválidos.</em></div>
    <div class="lex-expandable-item"><strong>Validação de Dados</strong> — cria menus suspensos e restringe a entrada de dados (bloqueia valores fora da regra).</div>
    <div class="lex-expandable-item"><strong>Mesclar e Centralizar</strong> — combina células selecionadas em uma só e centraliza o conteúdo.</div>
    <div class="lex-expandable-item"><strong>Referência Relativa</strong> — =A1 — muda ao copiar/arrastar a fórmula.</div>
    <div class="lex-expandable-item"><strong>Referência Absoluta</strong> — =$A$1 — o cifrão ($) trava a referência; não muda ao copiar.</div>
    <div class="lex-expandable-item"><strong>Alça de Preenchimento</strong> — arrastar o canto inferior da célula para copiar/completar fórmulas e sequências.</div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha!</strong> Formatação Condicional <strong>NÃO</strong> bloqueia digitação. Quem bloqueia é a <strong>Validação de Dados</strong>.
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📗 PARTE 01 – FORMATAÇÃO BÁSICA</div>
    <div class="lex-expandable-item">Uma planilha é como uma grande tabela formada por <strong>linhas</strong> (números: 1, 2, 3...) e <strong>colunas</strong> (letras: A, B, C...).</div>
    <div class="lex-expandable-item">O encontro de uma linha com uma coluna forma uma <strong>célula</strong> (ex: A1, B3, C5).</div>
    <div class="lex-expandable-item"><strong>Negrito</strong> — deixa o texto mais escuro e forte (Ctrl+B)</div>
    <div class="lex-expandable-item"><strong>Itálico</strong> — deixa o texto inclinado (Ctrl+I)</div>
    <div class="lex-expandable-item"><strong>Cor do texto</strong> — muda a cor das letras</div>
    <div class="lex-expandable-item"><strong>Cor de fundo</strong> — pinta a célula por trás do texto</div>
    <div class="lex-expandable-item"><strong>Bordas</strong> — cria linhas ao redor das células</div>
    <div class="lex-expandable-item"><strong>Alinhamento</strong> — centraliza, alinha à esquerda/direita</div>
    <div class="lex-expandable-item"><strong>Formato de número</strong> — mostra números como moeda, data, porcentagem</div>
  </div>

  <div class="lex-section-title">📷 Exemplo de Formatação</div>
  <div class="img-box">
    <img src="./imagens/formatacao_basica.png" alt="Exemplo de formatação básica em planilha">
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🔣 PARTE 02 – OPERADORES</div>
    <div class="lex-expandable-item"><strong>+</strong> — Soma &nbsp;|&nbsp; Ex: =3+2 → 5</div>
    <div class="lex-expandable-item"><strong>-</strong> — Subtração &nbsp;|&nbsp; Ex: =5-2 → 3</div>
    <div class="lex-expandable-item"><strong>*</strong> — Multiplicação &nbsp;|&nbsp; Ex: =4*3 → 12</div>
    <div class="lex-expandable-item"><strong>/</strong> — Divisão &nbsp;|&nbsp; Ex: =10/2 → 5</div>
    <div class="lex-expandable-item"><strong>%</strong> — Porcentagem &nbsp;|&nbsp; Ex: =20% → 0,2</div>
    <div class="lex-expandable-item"><strong>^</strong> — Exponenciação &nbsp;|&nbsp; Ex: =3^2 → 9</div>
    <div class="lex-expandable-item"><strong>()</strong> — Parênteses &nbsp;|&nbsp; Ex: =(2+3)*2 → 10</div>
    <div class="lex-expandable-item"><strong>&</strong> — Concatenação &nbsp;|&nbsp; Ex: ="João" & " " & "Silva" → "João Silva"</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">⚖️ Operadores de comparação (usados no SE)</div>
    <div class="lex-expandable-item"><strong>=</strong> — Igual a &nbsp;|&nbsp; <strong>&lt;&gt;</strong> — Diferente de &nbsp;|&nbsp; <strong>&gt;</strong> — Maior que</div>
    <div class="lex-expandable-item"><strong>&lt;</strong> — Menor que &nbsp;|&nbsp; <strong>&gt;=</strong> — Maior ou igual &nbsp;|&nbsp; <strong>&lt;=</strong> — Menor ou igual</div>
  </div>

  <div class="lex-section-title">📷 Exemplo de Operadores</div>
  <div class="img-box">
    <img src="./imagens/operadores_aritmeticos.png" alt="Exemplo de operadores">
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📌 PARTE 03 – TIPOS DE CÉLULAS E ALÇA DE PREENCHIMENTO</div>
    <div class="lex-expandable-item"><strong>Texto</strong> — "Maria", "Notas" — Letras, palavras</div>
    <div class="lex-expandable-item"><strong>Número</strong> — 10, 3.5 — Valores numéricos</div>
    <div class="lex-expandable-item"><strong>Fórmula</strong> — =A1+B1 — Começa com = e faz cálculo</div>
    <div class="lex-expandable-item"><strong>Data/Hora</strong> — 13/04/2026 — Dias e horas</div>
    <div class="lex-expandable-item"><strong>Lógico</strong> — VERDADEIRO / FALSO — Resultado de comparação</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🖱️ Alça de preenchimento (quadradinho preto no canto inferior direito)</div>
    <div class="lex-expandable-item">Copia fórmulas para células vizinhas automaticamente</div>
    <div class="lex-expandable-item">Preenche sequências (1, 2, 3... ou Jan, Fev, Mar...)</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🔒 Referências</div>
    <div class="lex-expandable-item"><strong>Relativa (A1)</strong> — =A1*2 — Ao arrastar, muda a letra e o número</div>
    <div class="lex-expandable-item"><strong>Absoluta ($A$1)</strong> — =$A$1*2 — Ao arrastar, não muda nada</div>
    <div class="lex-expandable-item"><strong>Mista ($A1 ou A$1)</strong> — Só coluna ou só linha fixa</div>
  </div>

  <div class="lex-section-title">📷 Exemplo da Alça de Preenchimento e Referências</div>
  <div class="img-box">
    <img src="./imagens/alca_preenchimento.png" alt="Exemplo da alça de preenchimento">
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Dica:</strong> Use <strong>F4</strong> para alternar entre os tipos de referência.
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📅 PARTE 04 – FUNÇÕES DE DATA</div>
    <div class="lex-expandable-item"><strong>=HOJE()</strong> — Data atual → 13/04/2026</div>
    <div class="lex-expandable-item"><strong>=AGORA()</strong> — Data e hora atual → 13/04/2026 14:30</div>
    <div class="lex-expandable-item"><strong>=DIA(data)</strong> — Extrai o dia → =DIA(HOJE()) → 13</div>
    <div class="lex-expandable-item"><strong>=MÊS(data)</strong> — Extrai o mês (1 a 12) → =MÊS(HOJE()) → 4</div>
    <div class="lex-expandable-item"><strong>=ANO(data)</strong> — Extrai o ano → =ANO(HOJE()) → 2026</div>
    <div class="lex-expandable-item"><strong>=DATA(ano; mês; dia)</strong> — Cria uma data → =DATA(2026;12;25) → 25/12/26</div>
    <div class="lex-expandable-item"><strong>=DIAS(data_fim; data_ini)</strong> — Diferença em dias → =DIAS(HOJE(); "01/01/2026") → 103</div>
  </div>

  <div class="lex-section-title">📷 Exemplo de Funções de Data</div>
  <div class="img-box">
    <img src="./imagens/funcoes_data.png" alt="Exemplo de funções de data">
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Dica:</strong> Datas são números especiais. Você pode somar dias: <strong>=HOJE()+7</strong> → daqui a 7 dias.
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📊 PARTE 05 – FUNÇÕES ESTATÍSTICAS</div>
    <div class="lex-expandable-item"><strong>=MÁXIMO(intervalo)</strong> — Maior valor → =MÁXIMO(A1:A10)</div>
    <div class="lex-expandable-item"><strong>=MÍNIMO(intervalo)</strong> — Menor valor → =MÍNIMO(B2:B20)</div>
    <div class="lex-expandable-item"><strong>=MÉDIA(intervalo)</strong> — Média aritmética → =MÉDIA(C1:C5)</div>
    <div class="lex-expandable-item"><strong>=MED(intervalo)</strong> — Mediana (valor do meio) → =MED(D1:D7)</div>
    <div class="lex-expandable-item"><strong>=CONT.NÚM(intervalo)</strong> — Conta células com número → =CONT.NÚM(A1:A10)</div>
    <div class="lex-expandable-item"><strong>=CONT.VALORES(intervalo)</strong> — Conta células preenchidas → =CONT.VALORES(B1:B10)</div>
    <div class="lex-expandable-item"><strong>=CONT.SE(intervalo; critério)</strong> — Conta com condição → =CONT.SE(C1:C10; "&gt;5")</div>
    <div class="lex-expandable-item"><strong>=CONT.SES(intervalo1; critério1; intervalo2; critério2)</strong> — Conta com múltiplas condições</div>
  </div>

  <div class="lex-section-title">📷 Exemplo de Funções Estatísticas</div>
  <div class="img-box">
    <img src="./imagens/funcoes_estatisticas.png" alt="Exemplo de funções estatísticas">
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🧮 PARTE 06 – FUNÇÕES MATEMÁTICAS E PESQUISA</div>
    <div class="lex-expandable-item"><strong>=SOMA(intervalo)</strong> — Soma tudo → =SOMA(A1:A10)</div>
    <div class="lex-expandable-item"><strong>=SOMASE(intervalo; critério)</strong> — Soma com condição → =SOMASE(A1:A10; "&gt;5")</div>
    <div class="lex-expandable-item"><strong>=ARRED(número; casas)</strong> — Arredonda → =ARRED(3.76;1) → 3,8</div>
    <div class="lex-expandable-item"><strong>=INT(número)</strong> — Parte inteira → =INT(3.76) → 3</div>
    <div class="lex-expandable-item"><strong>=RAIZ(número)</strong> — Raiz quadrada → =RAIZ(9) → 3</div>
    <div class="lex-expandable-item"><strong>=ABS(número)</strong> — Valor absoluto → =ABS(-5) → 5</div>
    <div class="lex-expandable-item"><strong>=MOD(número; divisor)</strong> — Resto da divisão → =MOD(10;3) → 1</div>
    <div class="lex-expandable-item"><strong>=POTÊNCIA(número; expoente)</strong> — Potência → =POTÊNCIA(2;8) → 256</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🔍 Funções de pesquisa</div>
    <div class="lex-expandable-item"><strong>=PROCV(valor; matriz; coluna; 0)</strong> — Procura na vertical → =PROCV("Ana"; A1:B10; 2; 0)</div>
    <div class="lex-expandable-item"><strong>=ÍNDICE(intervalo; posição)</strong> — Retorna valor de uma posição → =ÍNDICE(A1:A5; 3)</div>
    <div class="lex-expandable-item"><strong>=CORRESP(valor; intervalo; 0)</strong> — Retorna posição de um valor → =CORRESP("Bruno"; A1:A5; 0) → 2</div>
    <div class="lex-expandable-item"><strong>ÍNDICE + CORRESP</strong> — combinação poderosa que substitui PROCV e permite busca em qualquer direção</div>
  </div>

  <div class="lex-section-title">📷 Exemplo de PROCV</div>
  <div class="img-box">
    <img src="./imagens/funcao_procv.png" alt="Exemplo da função PROCV">
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Dica:</strong> No PROCV, o <strong>0</strong> no final significa "busca exata". Sempre use 0.
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🤖 PARTE 07 – FUNÇÃO SE</div>
    <div class="lex-expandable-item">Ela testa uma condição e retorna um resultado se for <strong>verdadeira</strong> e outro se for <strong>falsa</strong>.</div>
    <div class="lex-expandable-item"><strong>Estrutura:</strong> =SE(teste_lógico; valor_se_verdadeiro; valor_se_falso)</div>
    <div class="lex-expandable-item"><strong>Exemplo 1:</strong> =SE(B2&gt;=6; "Aprovado"; "Reprovado")</div>
    <div class="lex-expandable-item">João: 7 &gt;= 6 → "Aprovado" | Maria: 4 &gt;= 6 → "Reprovado"</div>
    <div class="lex-expandable-item"><strong>Exemplo 2:</strong> =SE(A1&gt;100; A1*0,9; A1) — se valor &gt; 100, dá 10% de desconto</div>
  </div>

  <div class="lex-section-title">📷 Exemplo de Função SE</div>
  <div class="img-box">
    <img src="./imagens/funcao_se_situacao.png" alt="Exemplo de função SE">
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📋 PARTE 08 – TABELA DINÂMICA</div>
    <div class="lex-expandable-item"><strong>O que é:</strong> ferramenta que resume, analisa e reorganiza grandes volumes de dados automaticamente.</div>
    <div class="lex-expandable-item"><strong>Como inserir:</strong> guia Inserir → Tabela Dinâmica</div>
    <div class="lex-expandable-item"><strong>Partes da Tabela Dinâmica:</strong></div>
    <div class="lex-expandable-item">• <strong>Linhas</strong> — categorias exibidas nas linhas</div>
    <div class="lex-expandable-item">• <strong>Colunas</strong> — categorias exibidas nas colunas</div>
    <div class="lex-expandable-item">• <strong>Valores</strong> — dados a serem calculados (soma, média, contagem)</div>
    <div class="lex-expandable-item">• <strong>Filtros</strong> — segmentam os dados exibidos</div>
    <div class="lex-expandable-item"><strong>Atualizar dados:</strong> botão direito → Atualizar (a tabela não atualiza sozinha ao mudar os dados)</div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha!</strong> A Tabela Dinâmica <strong>NÃO</strong> atualiza automaticamente ao alterar os dados de origem. É preciso atualizar manualmente.
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📈 PARTE 09 – GRÁFICOS</div>
    <div class="lex-expandable-item"><strong>Como inserir:</strong> selecionar os dados → guia Inserir → Gráficos</div>
    <div class="lex-expandable-item"><strong>Tipos principais:</strong></div>
    <div class="lex-expandable-item">• <strong>Colunas/Barras</strong> — comparar categorias</div>
    <div class="lex-expandable-item">• <strong>Linhas</strong> — mostrar evolução ao longo do tempo</div>
    <div class="lex-expandable-item">• <strong>Pizza (setor)</strong> — mostrar proporções de um todo</div>
    <div class="lex-expandable-item">• <strong>Dispersão (XY)</strong> — correlação entre dois conjuntos de dados</div>
    <div class="lex-expandable-item"><strong>Elementos do gráfico:</strong> título, legenda, eixos, rótulos de dados</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🔒 PARTE 10 – CONGELAR PAINÉIS E FILTROS</div>
    <div class="lex-expandable-item"><strong>Congelar Painéis</strong> — guia Exibir → Congelar Painéis. Mantém linhas/colunas visíveis ao rolar a planilha.</div>
    <div class="lex-expandable-item">• Congelar linha superior → mantém o cabeçalho visível</div>
    <div class="lex-expandable-item">• Congelar primeira coluna → mantém a primeira coluna visível</div>
    <div class="lex-expandable-item"><strong>Filtro Automático</strong> — guia Dados → Filtro. Permite mostrar apenas os dados que atendem a um critério.</div>
    <div class="lex-expandable-item"><strong>Classificar</strong> — guia Dados → Classificar. Ordena os dados em ordem crescente ou decrescente.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🎯 PARTE 11 – RESUMO FINAL</div>
    <div class="lex-expandable-item"><strong>1.</strong> Toda fórmula começa com <strong>=</strong></div>
    <div class="lex-expandable-item"><strong>2.</strong> Use <strong>$</strong> para travar células (absoluta)</div>
    <div class="lex-expandable-item"><strong>3.</strong> A alça de preenchimento arrasta fórmulas</div>
    <div class="lex-expandable-item"><strong>4.</strong> Funções economizam trabalho: SOMA, MÉDIA, SE, PROCV</div>
    <div class="lex-expandable-item"><strong>5.</strong> Datas e horas são números que você pode calcular</div>
    <div class="lex-expandable-item"><strong>6.</strong> Operadores comparativos (&gt;, &lt;, =) são usados no SE</div>
    <div class="lex-expandable-item"><strong>7.</strong> Tabela Dinâmica resume grandes volumes de dados</div>
    <div class="lex-expandable-item"><strong>8.</strong> Formatação Condicional ≠ Validação de Dados</div>
    <div class="lex-expandable-item"><strong>9.</strong> Pratique com exemplos reais: notas, vendas, estoque</div>
  </div>

  <div class="lex-section-title">📷 Exemplo Completo de Planilha</div>
  <div class="img-box">
    <img src="./imagens/planilha_completa.png" alt="Exemplo completo de planilha">
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Super Dica:</strong> Pratique com exemplos reais para fixar o conteúdo!
  </div>
</div>`
  },


  // ╔══════════════════════════════════════════════════════╗
  // ║                      WORD                            ║
  // ╚══════════════════════════════════════════════════════╝
  "Word — Editor de Textos": {
    icon: "📝",
    color: "#2563eb",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">📝</div>
    <h1 class="notion-title">Word — Editor de Textos</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Microsoft Word</span>
      <span class="meta-tag tag-gold">Guias · Atalhos · Extensões</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Extensões de Arquivo</div>
    <div class="lex-expandable-item"><strong>.docx</strong> — formato padrão do Word (versões modernas)</div>
    <div class="lex-expandable-item"><strong>.dotx</strong> — modelo (template) de documento Word</div>
    <div class="lex-expandable-item"><strong>.doc</strong> — formato antigo (versões anteriores ao Word 2007)</div>
    <div class="lex-expandable-item"><strong>.docm</strong> — documento com macros habilitadas (VBA)</div>
    <div class="lex-expandable-item"><strong>.odt</strong> — padrão do LibreOffice Writer (documento aberto de texto)</div>
    <div class="lex-expandable-item"><strong>.txt</strong> — texto simples, sem formatação (usado no Bloco de Notas)</div>
    <div class="lex-expandable-item"><strong>.rtf</strong> — padrão do WordPad, nativo do Windows</div>
    <div class="lex-expandable-item"><strong>.pdf</strong> — formato portátil para documentos; aceita texto, planilha, imagem e links. A partir do Word 2013, é possível salvar e editar PDFs diretamente no Word</div>
    <div class="lex-expandable-item"><strong>.html</strong> — formato para web</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Principais Guias (Abas) do Word</div>
    <div class="lex-expandable-item"><strong>Página Inicial</strong> — maioria das ferramentas de formatação: negrito, itálico, sublinhado, alinhamento, estilos, fonte, parágrafo.</div>
    <div class="lex-expandable-item"><strong>Inserir</strong> — tabelas, imagens, quebra de página, cabeçalho, rodapé, número de página, folha de rosto, símbolos.</div>
    <div class="lex-expandable-item"><strong>Layout (ou Layout da Página)</strong> — margens, orientação, tamanho do papel, colunas.</div>
    <div class="lex-expandable-item"><strong>Referências</strong> — sumário automático, notas de rodapé, citações, índice.</div>
    <div class="lex-expandable-item"><strong>Revisão</strong> — ortografia e gramática (F7), controle de alterações, comentários.</div>
    <div class="lex-expandable-item"><strong>Exibir</strong> — modos de visualização, zoom, dividir janelas lado a lado.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Conceitos Importantes</div>
    <div class="lex-expandable-item"><strong>Alinhamento Justificado</strong> — alinha o texto nas duas bordas (esquerda e direita) simultaneamente.</div>
    <div class="lex-expandable-item"><strong>Sumário Automático</strong> — inserido pela guia <strong>Referências</strong>. Gerado a partir dos Estilos de Título (Título 1, Título 2...).</div>
    <div class="lex-expandable-item"><strong>Quebra de Página</strong> — insere uma nova página em ponto específico. Localizada na guia <strong>Inserir</strong>.</div>
    <div class="lex-expandable-item"><strong>Folha de Rosto</strong> — inserida pela guia <strong>Inserir</strong>.</div>
    <div class="lex-expandable-item"><strong>Cabeçalho e Rodapé</strong> — podem ter número de página, imagens e podem ser suprimidos na primeira página.</div>
    <div class="lex-expandable-item"><strong>Modos de visualização</strong> — é possível visualizar dois documentos lado a lado (guia Exibir → Exibir Lado a Lado).</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Atalhos Essenciais do Word</div>
    <div class="lex-cols">
      <div class="lex-section-container">
        <div class="lex-expandable-item"><strong>Ctrl + N</strong> — Negrito</div>
        <div class="lex-expandable-item"><strong>Ctrl + I</strong> — Itálico</div>
        <div class="lex-expandable-item"><strong>Ctrl + S</strong> — Sublinhado</div>
        <div class="lex-expandable-item"><strong>Ctrl + C</strong> — Copiar</div>
        <div class="lex-expandable-item"><strong>Ctrl + V</strong> — Colar</div>
        <div class="lex-expandable-item"><strong>Ctrl + Z</strong> — Desfazer</div>
        <div class="lex-expandable-item"><strong>Ctrl + E</strong> — Centralizar</div>
        <div class="lex-expandable-item"><strong>Ctrl + J</strong> — Justificar</div>
        <div class="lex-expandable-item"><strong>Ctrl + L</strong> — Alinhar à esquerda</div>
        <div class="lex-expandable-item"><strong>Ctrl + R</strong> — Alinhar à direita</div>
      </div>
      <div class="lex-section-container">
        <div class="lex-expandable-item"><strong>Ctrl + A</strong> — Selecionar tudo</div>
        <div class="lex-expandable-item"><strong>Ctrl + B</strong> — Salvar (no BR: Ctrl + G)</div>
        <div class="lex-expandable-item"><strong>Ctrl + P</strong> — Imprimir</div>
        <div class="lex-expandable-item"><strong>Ctrl + Enter</strong> — Quebra de página</div>
        <div class="lex-expandable-item"><strong>Ctrl + L</strong> — Localizar</div>
        <div class="lex-expandable-item"><strong>Ctrl + U</strong> — Substituir</div>
        <div class="lex-expandable-item"><strong>F7</strong> — Verificar Ortografia e Gramática</div>
        <div class="lex-expandable-item"><strong>F12</strong> — Salvar Como</div>
        <div class="lex-expandable-item"><strong>Backspace</strong> — Apaga caractere à <strong>esquerda</strong> do cursor</div>
        <div class="lex-expandable-item"><strong>Delete</strong> — Apaga caractere à <strong>direita</strong> do cursor</div>
      </div>
    </div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha!</strong> É <strong>possível sim</strong> visualizar dois arquivos lado a lado no Word (guia Exibir). A afirmação de que isso é impossível é <strong>ERRADA</strong>.
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Informações Gerais</div>
    <div class="lex-expandable-item">O Microsoft 365 é a versão mais atual do Word. Seus concorrentes são o LibreOffice Writer e o Google Documentos.</div>
    <div class="lex-expandable-item">O "X" em DOCX significa XML, o que permite que o formato seja usado dentro de sites.</div>
    <div class="lex-expandable-item">É possível adicionar plugins dentro do Word em <strong>Obter Suplementos</strong>.</div>
    <div class="lex-expandable-item">Na pasta <strong>Informações</strong> ficam opções como proteger documentos, verificar compatibilidade e gerenciar versões.</div>
  </div>

  <div class="callout callout-gold">
    <div class="lex-section-title">💡 Bizu</div>
    <div class="lex-expandable-item">Quando a questão estiver falando mal do Word, geralmente ela é errada.</div>
  </div>

  <div class="lex-section-title">📷 Exemplo completo de menu Word</div>
  <div class="img-box">
    <img src="./imagens/menu_superior_word.png" alt="Menu superior do Word">
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Outras Informações</div>
    <div class="lex-expandable-item">Criar novo arquivo em branco: <strong>Ctrl + O</strong></div>
    <div class="lex-expandable-item">Na opção <strong>Abrir</strong> ficam os documentos e pastas recentes, compartilhados comigo, OneDrive, Este PC, Adicionar um local e Procurar.</div>
    <div class="lex-expandable-item">Tecla de atalho para abrir um documento: <strong>Ctrl + A</strong></div>
  </div>
</div>

<div class="lex-block">

  <div class="lex-section-container">
    <div class="lex-section-title">🔥 1. Modos de Salvamento (pegadinha clássica)</div>
    <div class="lex-expandable-item"><strong>Salvar (Ctrl + B / Ctrl + G)</strong> → sobrescreve o arquivo atual</div>
    <div class="lex-expandable-item"><strong>Salvar Como (F12)</strong> → cria outro arquivo</div>
    <div class="lex-expandable-item"><strong>AutoRecuperação</strong> → salva automaticamente em caso de queda</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🧠 2. Faixa de Opções (Ribbon)</div>
    <div class="lex-expandable-item">Nome da barra superior: <strong>Faixa de Opções</strong></div>
    <div class="lex-expandable-item">Pode ser: <strong>Ocultada</strong> ou <strong>Fixada</strong></div>
    <div class="lex-expandable-item">Contém: <strong>Guias → Grupos → Comandos</strong></div>
    <div class="lex-expandable-item">Exemplo de questão: "A barra superior do Word chama-se Toolbar" ❌ <strong>ERRADO</strong></div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📑 3. Estilos (CAI MUITO)</div>
    <div class="lex-expandable-item">Estilos: <strong>Título 1, Título 2, Normal</strong></div>
    <div class="lex-expandable-item">Usados para: <strong>Formatação automática</strong> e <strong>Criar sumário automático</strong></div>
    <div class="lex-expandable-item">Pegadinha: "Sumário é feito manualmente" ❌ <strong>ERRADO</strong></div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📌 4. Quebras (muito explorado)</div>
    <div class="lex-expandable-item"><strong>Quebra de Página</strong> — inicia uma nova página no documento</div>
    <div class="lex-expandable-item"><strong>Quebra de Seção</strong> — divide o documento em partes independentes</div>
    <div class="lex-expandable-item">Tipos de quebra de seção:</div>
    <div class="lex-expandable-item">• <strong>Próxima página</strong> — inicia a nova seção em outra página</div>
    <div class="lex-expandable-item">• <strong>Contínua</strong> — cria uma nova seção na mesma página</div>
    <div class="lex-expandable-item">Permite mudar: orientação, margens, cabeçalho diferente por seção</div>
    <div class="lex-expandable-item"><strong>Diferença:</strong> 👉 Página ≠ Seção (CAI MUITO)</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🔐 5. Proteção de Documento</div>
    <div class="lex-expandable-item">Restringir edição</div>
    <div class="lex-expandable-item">Definir senha</div>
    <div class="lex-expandable-item">Somente leitura</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🖼️ 6. Inserções importantes</div>
    <div class="lex-expandable-item">Tabela</div>
    <div class="lex-expandable-item">Imagem</div>
    <div class="lex-expandable-item">SmartArt</div>
    <div class="lex-expandable-item">WordArt</div>
    <div class="lex-expandable-item">Gráfico</div>
    <div class="lex-expandable-item">Caixa de Texto</div>
    <div class="lex-expandable-item">Equação</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🧾 7. Impressão (questão clássica)</div>
    <div class="lex-expandable-item">Visualizar impressão (Ctrl + P)</div>
    <div class="lex-expandable-item">Configurar: Margens, Orientação (Retrato/Paisagem), Intervalo de páginas</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🌐 8. Integração com nuvem</div>
    <div class="lex-expandable-item"><strong>OneDrive</strong></div>
    <div class="lex-expandable-item">Compartilhamento em tempo real</div>
    <div class="lex-expandable-item">Edição colaborativa</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">⚙️ 9. Correção automática</div>
    <div class="lex-expandable-item">Ortografia (F7)</div>
    <div class="lex-expandable-item">Autocorreção</div>
    <div class="lex-expandable-item">Sugestões gramaticais</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🎯 10. Pegadinhas clássicas (ESSENCIAL)</div>
    <div class="lex-expandable-item">Word <strong>não é banco de dados</strong> ❌</div>
    <div class="lex-expandable-item">Word <strong>não é planilha eletrônica</strong> ❌</div>
    <div class="lex-expandable-item">Word <strong>não é software de apresentação</strong> ❌</div>
    <div class="lex-expandable-item">Word <strong>permite inserir tabelas</strong> ✅</div>
    <div class="lex-expandable-item">Word <strong>permite exportar PDF</strong> ✅</div>
    <div class="lex-expandable-item">Word <strong>permite colaboração online</strong> ✅</div>
    <div class="lex-expandable-item">Word <strong>não calcula automaticamente como Excel</strong> (só de forma limitada) ⚠️</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🧠 11. Extra (nível avançado — diferencial)</div>
    <div class="lex-expandable-item"><strong>Macros (VBA)</strong> → automação de tarefas repetitivas</div>
    <div class="lex-expandable-item"><strong>Extensão DOCM</strong> → documento com macros</div>
    <div class="lex-expandable-item"><strong>Modo de leitura</strong> → visualização otimizada para leitura</div>
    <div class="lex-expandable-item"><strong>Comentários e controle de alterações</strong> → revisão colaborativa</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">✉️ 12. Mala Direta (CAI EM PROVA)</div>
    <div class="lex-expandable-item"><strong>O que é:</strong> recurso que permite criar cartas, etiquetas ou e-mails personalizados em massa, combinando um documento modelo com uma lista de dados.</div>
    <div class="lex-expandable-item"><strong>Onde fica:</strong> guia <strong>Correspondências</strong> → Iniciar Mala Direta</div>
    <div class="lex-expandable-item"><strong>Fonte de dados:</strong> pode ser uma planilha Excel, tabela Word ou contatos do Outlook</div>
    <div class="lex-expandable-item"><strong>Campos de mesclagem:</strong> marcadores como «Nome» que são substituídos pelos dados reais na impressão</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📝 13. Marcadores, Numeração e Colunas</div>
    <div class="lex-expandable-item"><strong>Marcadores</strong> — listas com símbolos (•, -, ✓). Guia Página Inicial.</div>
    <div class="lex-expandable-item"><strong>Numeração</strong> — listas numeradas (1, 2, 3...). Guia Página Inicial.</div>
    <div class="lex-expandable-item"><strong>Lista de Vários Níveis</strong> — hierarquia de itens (1, 1.1, 1.2...). Guia Página Inicial.</div>
    <div class="lex-expandable-item"><strong>Colunas de texto</strong> — divide o texto em colunas (estilo jornal). Guia <strong>Layout</strong> → Colunas.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🖼️ 14. Marca d'Água e Plano de Fundo</div>
    <div class="lex-expandable-item"><strong>Marca d'Água</strong> — texto ou imagem semitransparente atrás do conteúdo. Guia <strong>Design</strong> → Marca d'Água.</div>
    <div class="lex-expandable-item">Exemplos de uso: "CONFIDENCIAL", "RASCUNHO", logo da empresa.</div>
    <div class="lex-expandable-item"><strong>Cor da Página</strong> — altera a cor de fundo do documento. Guia Design.</div>
    <div class="lex-expandable-item"><strong>Bordas de Página</strong> — adiciona bordas decorativas ao redor de toda a página. Guia Design.</div>
  </div>

</div>

<div class="lex-block">

  <div class="lex-section-container">
    <div class="lex-section-title">📑 15. Cabeçalho e Rodapé (detalhado)</div>
    <div class="lex-expandable-item">Pode conter: número de página, texto, imagens, data automática.</div>
    <div class="lex-expandable-item"><strong>Diferente na primeira página</strong> — muito cobrado em prova.</div>
    <div class="lex-expandable-item"><strong>Diferente em páginas pares e ímpares</strong> — usado em livros e documentos formais.</div>
    <div class="lex-expandable-item"><strong>Número de página:</strong> guia Inserir → Número de Página. Pode ficar no início, final ou margens.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📊 16. Tabelas no Word</div>
    <div class="lex-expandable-item">Word <strong>permite inserir tabelas</strong> ✅</div>
    <div class="lex-expandable-item">Pode realizar <strong>cálculos simples</strong> (fórmulas básicas como =SUM(ABOVE)).</div>
    <div class="lex-expandable-item">❌ <strong>Não substitui o Excel</strong> para cálculos complexos.</div>
    <div class="lex-expandable-item"><strong>Layout da Tabela</strong> — permite mesclar células, dividir células, distribuir linhas/colunas uniformemente.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🎯 17. Modos de Exibição</div>
    <div class="lex-expandable-item"><strong>Layout de Impressão</strong> — modo padrão, mostra o documento como será impresso.</div>
    <div class="lex-expandable-item"><strong>Modo de Leitura</strong> — otimizado para leitura, sem distrações.</div>
    <div class="lex-expandable-item"><strong>Layout da Web</strong> — visualização como página web.</div>
    <div class="lex-expandable-item"><strong>Estrutura de Tópicos</strong> — organização hierárquica do documento.</div>
    <div class="lex-expandable-item"><strong>Rascunho</strong> — modo simplificado, sem cabeçalhos e rodapés visíveis.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">⚙️ 18. Faixa de Opções</div>
    <div class="lex-expandable-item">Nome oficial: <strong>Ribbon (Faixa de Opções)</strong></div>
    <div class="lex-expandable-item">Estrutura: <strong>Guias → Grupos → Comandos</strong></div>
  </div>

  <div class="lex-section-title">📷 Exemplo Completo de menu Word</div>
  <div class="img-box">
    <img src="./imagens/menu_arquivo.png" alt="Menu superior do Word">
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📂 Gerenciamento e Abertura</div>
    <div class="lex-expandable-item"><strong>Página Inicial:</strong> É a tela de boas-vindas. Mostra seus documentos recentes, fixados e modelos sugeridos.</div>
    <div class="lex-expandable-item"><strong>Novo:</strong> Abre a galeria de modelos. Aqui você escolhe entre um "Documento em branco" ou designs pré-prontos (currículos, calendários, relatórios).</div>
    <div class="lex-expandable-item"><strong>Abrir:</strong> Permite localizar arquivos salvos no seu computador, no OneDrive (nuvem) ou em outros locais de rede.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">💾 Salvamento e Informações</div>
    <div class="lex-expandable-item"><strong>Informações:</strong> Mostra os detalhes do arquivo (tamanho, autor, data de criação). É aqui que você pode proteger o documento com senha.</div>
    <div class="lex-expandable-item"><strong>Salvar:</strong> Salva as alterações no arquivo atual. Se for a primeira vez que você salva, ele agirá como o "Salvar como".</div>
    <div class="lex-expandable-item"><strong>Salvar como:</strong> Permite criar uma cópia do arquivo com um novo nome, em uma nova pasta ou em um formato diferente (como .docx antigo ou .txt).</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📄 Saída e Distribuição</div>
    <div class="lex-expandable-item"><strong>Imprimir:</strong> Abre as configurações de impressão (escolha da impressora, número de cópias, orientação da página) e a visualização prévia de como o papel ficará.</div>
    <div class="lex-expandable-item"><strong>Compartilhar:</strong> Envia o documento para outras pessoas por e-mail ou gera um link para que outros editem simultaneamente via nuvem.</div>
    <div class="lex-expandable-item"><strong>Exportar:</strong> A forma mais rápida de transformar seu documento Word em um PDF ou mudar o tipo de arquivo para formatos específicos.</div>
    <div class="lex-expandable-item"><strong>Transformar:</strong> Uma função moderna que converte seu documento em uma página da web interativa (Sway).</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">⚙️ Configurações e Encerramento</div>
    <div class="lex-expandable-item"><strong>Fechar:</strong> Fecha apenas o documento que está aberto no momento, sem fechar o programa Word inteiro.</div>
    <div class="lex-expandable-item"><strong>Conta:</strong> Onde você gerencia sua assinatura do Microsoft 365, altera o tema (modo escuro/claro) e verifica atualizações.</div>
    <div class="lex-expandable-item"><strong>Opções:</strong> O "coração" das configurações técnicas. Aqui você muda o idioma, ajusta a correção automática e personaliza a barra de ferramentas.</div>
  </div>

</div>
`
  },

  // ╔══════════════════════════════════════════════════════╗
  // ║                  POWERPOINT                         ║
  // ╚══════════════════════════════════════════════════════╝

  "PowerPoint — Apresentações": {
    icon: "📊",
    color: "#f97316",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">📊</div>
    <h1 class="notion-title">PowerPoint — Apresentações</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Microsoft PowerPoint</span>
      <span class="meta-tag tag-gold">Slides · Animações · Transições</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Extensões de Arquivo</div>
    <div class="lex-expandable-item"><strong>.pptx</strong> — formato padrão (a partir de 2007)</div>
    <div class="lex-expandable-item"><strong>.ppt</strong> — formato antigo (até 2003)</div>
    <div class="lex-expandable-item"><strong>.ppsx</strong> — abre direto como apresentação (modo de exibição)</div>
    <div class="lex-expandable-item"><strong>.ppsm</strong> — apresentação com macros habilitadas</div>
    <div class="lex-expandable-item"><strong>.potx</strong> — modelo (template) de apresentação</div>
    <div class="lex-expandable-item"><strong>.odp</strong> — formato do LibreOffice Impress</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Interface do PowerPoint</div>
    <div class="lex-expandable-item">Faixa de Opções (Ribbon)</div>
    <div class="lex-expandable-item">Painel de Slides (lado esquerdo)</div>
    <div class="lex-expandable-item">Área de edição (slide atual)</div>
    <div class="lex-expandable-item">Painel de Anotações (parte inferior)</div>
    <div class="lex-expandable-item">Barra de status</div>
  </div>

  <div class="lex-section-title">📷 Interface do PowerPoint</div>
  <div class="img-box">
    <img src="./imagens/interface_powerpoint.png" alt="Interface do PowerPoint">
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Principais Guias (Abas)</div>
    <div class="lex-expandable-item"><strong>Página Inicial</strong> — formatação de texto e inserção de novos slides</div>
    <div class="lex-expandable-item"><strong>Inserir</strong> — imagens, vídeos, tabelas, gráficos, SmartArt, links</div>
    <div class="lex-expandable-item"><strong>Design</strong> — temas, variantes e tamanho do slide</div>
    <div class="lex-expandable-item"><strong>Transições</strong> — efeitos de entrada <em>entre</em> slides</div>
    <div class="lex-expandable-item"><strong>Animações</strong> — efeitos aplicados aos <em>objetos dentro</em> do slide</div>
    <div class="lex-expandable-item"><strong>Apresentação de Slides</strong> — iniciar (F5), configurar, gravar narração</div>
    <div class="lex-expandable-item"><strong>Revisão</strong> — comentários, ortografia</div>
    <div class="lex-expandable-item"><strong>Exibir</strong> — modos de exibição, Slide Mestre, zoom</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Conceitos Importantes</div>
    <div class="lex-expandable-item"><strong>Slide</strong> — cada página da apresentação</div>
    <div class="lex-expandable-item"><strong>Layout</strong> — estrutura predefinida do slide (título, conteúdo, em branco etc.)</div>
    <div class="lex-expandable-item"><strong>Tema</strong> — conjunto de cores, fontes e efeitos que dá identidade visual à apresentação</div>
    <div class="lex-expandable-item"><strong>Slide Mestre</strong> — padroniza o design de todos os slides. Alterações nele refletem em toda a apresentação.</div>
    <div class="lex-expandable-item"><strong>Espaço Reservado (Placeholder)</strong> — caixas predefinidas no layout para texto, imagem etc.</div>
  </div>

  <div class="lex-section-title">📷 Slide Mestre</div>
  <div class="img-box">
    <img src="./imagens/slide_mestre.png" alt="Slide Mestre PowerPoint">
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Transição x Animação (CAI MUITO)</div>
    <div class="lex-expandable-item"><strong>Transição</strong> — efeito que ocorre ao <em>passar de um slide para outro</em> (ex: Dissolver, Empurrar, Revelar)</div>
    <div class="lex-expandable-item"><strong>Animação</strong> — efeito aplicado a <em>objetos dentro do slide</em> (ex: texto entrando pela esquerda, imagem girando)</div>
    <div class="lex-expandable-item">Tipos de animação: <strong>Entrada</strong> (como o objeto aparece), <strong>Ênfase</strong> (destaque), <strong>Saída</strong> (como o objeto desaparece) e <strong>Caminho de Movimento</strong></div>
  </div>

  <div class="lex-section-title">📷 Transições</div>
  <div class="img-box">
    <img src="./imagens/transicoes_powerpoint.png" alt="Transições">
  </div>

  <div class="lex-section-title">📷 Animações</div>
  <div class="img-box">
    <img src="./imagens/animacoes_powerpoint.png" alt="Animações">
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Atalhos Essenciais</div>
    <div class="lex-expandable-item"><strong>F5</strong> — iniciar apresentação do começo</div>
    <div class="lex-expandable-item"><strong>Shift + F5</strong> — iniciar do slide atual</div>
    <div class="lex-expandable-item"><strong>Ctrl + M</strong> — inserir novo slide</div>
    <div class="lex-expandable-item"><strong>Ctrl + D</strong> — duplicar slide</div>
    <div class="lex-expandable-item"><strong>Ctrl + Enter</strong> — avançar para o próximo placeholder</div>
    <div class="lex-expandable-item"><strong>Esc</strong> — sair da apresentação</div>
    <div class="lex-expandable-item"><strong>B</strong> (durante a apresentação) — tela preta (pausa)</div>
    <div class="lex-expandable-item"><strong>W</strong> (durante a apresentação) — tela branca (pausa)</div>
  </div>

  <div class="callout callout-rose">
    <span class="callout-icon">⚠️</span>
    <strong>Pegadinha!</strong> Transição é entre slides e animação é dentro do slide. Se inverter → ERRADO.
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Modos de Exibição</div>
    <div class="lex-expandable-item"><strong>Normal</strong> — modo padrão de edição</div>
    <div class="lex-expandable-item"><strong>Estrutura de Tópicos</strong> — exibe apenas o texto dos slides em hierarquia</div>
    <div class="lex-expandable-item"><strong>Classificação de Slides</strong> — visão geral de todos os slides em miniatura</div>
    <div class="lex-expandable-item"><strong>Modo de Apresentação</strong> — apresenta em tela cheia</div>
    <div class="lex-expandable-item"><strong>Modo de Leitura</strong> — exibe a apresentação em janela (sem tela cheia)</div>
    <div class="lex-expandable-item"><strong>Anotações</strong> — exibe o slide com o painel de anotações ampliado</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📝 Anotações do Apresentador</div>
    <div class="lex-expandable-item">Campo abaixo do slide para escrever observações visíveis apenas ao apresentador.</div>
    <div class="lex-expandable-item">Podem ser impressas junto com os slides (em folhetos).</div>
    <div class="lex-expandable-item"><strong>Modo Apresentador</strong> — exibe o slide atual, o próximo slide, o tempo decorrido e as anotações na tela do apresentador, enquanto o público vê apenas o slide.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Inserções Importantes</div>
    <div class="lex-expandable-item">Imagem</div>
    <div class="lex-expandable-item">Vídeo (do computador ou do YouTube)</div>
    <div class="lex-expandable-item">Áudio</div>
    <div class="lex-expandable-item">Gráfico</div>
    <div class="lex-expandable-item">Tabela</div>
    <div class="lex-expandable-item">SmartArt</div>
    <div class="lex-expandable-item">Hiperlink (entre slides ou para URLs externas)</div>
    <div class="lex-expandable-item">Ação (executa algo ao clicar ou passar o mouse)</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🔗 Hiperlinks e Ações</div>
    <div class="lex-expandable-item"><strong>Hiperlink</strong> — guia Inserir → Link. Pode apontar para outro slide, um site, um arquivo ou um e-mail.</div>
    <div class="lex-expandable-item"><strong>Botão de Ação</strong> — guia Inserir → Formas → Botões de Ação. Permite criar navegação interativa entre slides (ex: botão "Próximo", "Voltar", "Início").</div>
    <div class="lex-expandable-item">Muito usado em apresentações não lineares e quiosques interativos.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📤 Exportar como PDF e Vídeo</div>
    <div class="lex-expandable-item"><strong>Exportar como PDF:</strong> Arquivo → Exportar → Criar PDF/XPS. Preserva o layout da apresentação.</div>
    <div class="lex-expandable-item"><strong>Exportar como Vídeo:</strong> Arquivo → Exportar → Criar um Vídeo. Gera um arquivo .mp4 ou .wmv com os slides e animações.</div>
    <div class="lex-expandable-item">É possível definir o tempo de duração de cada slide no vídeo.</div>
    <div class="lex-expandable-item"><strong>Exportar como Folheto:</strong> imprime miniaturas dos slides com espaço para anotações.</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🎯 Pegadinhas Clássicas</div>
    <div class="lex-expandable-item">PowerPoint <strong>não é editor de texto</strong> ❌</div>
    <div class="lex-expandable-item">PowerPoint <strong>não é planilha eletrônica</strong> ❌</div>
    <div class="lex-expandable-item">PowerPoint <strong>permite inserir vídeos e áudios</strong> ✅</div>
    <div class="lex-expandable-item">PowerPoint <strong>permite exportar como PDF e vídeo</strong> ✅</div>
    <div class="lex-expandable-item">O <strong>Slide Mestre</strong> afeta todos os slides da apresentação ✅</div>
    <div class="lex-expandable-item">O arquivo <strong>.ppsx</strong> abre diretamente em modo de apresentação (não em edição) ✅</div>
  </div>

  <div class="callout callout-gold">
    <div class="lex-section-title">💡 Bizu</div>
    <div class="lex-expandable-item">PowerPoint = apresentação de slides (NUNCA confundir com Word ou Excel)</div>
    <div class="lex-expandable-item">Transição = entre slides | Animação = dentro do slide</div>
    <div class="lex-expandable-item">F5 = apresentação do início | Shift + F5 = do slide atual</div>
  </div>

  <div class="lex-section-title">📷 Exemplo de Slides</div>
  <div class="img-box">
    <img src="./imagens/exemplo_slide.png" alt="Exemplo de Slide">
  </div>

</div>
`  },

  "Software Livre": {
    icon: "📘",
    color: "#4a85f0",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">📘</div>
    <h1 class="notion-title">Software Livre (Open Source)</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Open Source</span>
      <span class="meta-tag tag-g">Liberdade</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Quatro Liberdades do Software Livre</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>Abrir</strong> — executar o programa para qualquer propósito</div>
      <div class="lex-expandable-item"><strong>Modificar</strong> — estudar como o programa funciona e adaptá-lo</div>
      <div class="lex-expandable-item"><strong>Estudar</strong> — acessar o código-fonte para aprendizado</div>
      <div class="lex-expandable-item"><strong>Distribuir</strong> — redistribuir cópias para ajudar outros</div>
      <div class="lex-expandable-item"><strong>Adaptar</strong> — melhorar o programa e liberar melhorias publicamente</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Exemplos de Software Livre</div>
    <div class="lex-expandable-item"><strong>Linux</strong> — sistema operacional de código aberto</div>
    <div class="lex-expandable-item"><strong>Mozilla Firefox</strong> — navegador web open source</div>
    <div class="lex-expandable-item"><strong>Chromium</strong> — projeto base do Google Chrome</div>
    <div class="lex-expandable-item"><strong>LibreOffice</strong> — suite de escritório</div>
    <div class="lex-expandable-item"><strong>Apache</strong> — servidor web</div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Bizu:</strong> Software Livre ≠ Gratuito. É sobre liberdade, não preço!
  </div>
</div>`
  },

  "Sistema Computacional": {
    icon: "💻",
    color: "#6366f1",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">💻</div>
    <h1 class="notion-title">Sistema Computacional</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Hardware + Software</span>
      <span class="meta-tag tag-g">Camadas</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Camadas do Sistema Computacional</div>
    <div class="lex-expandable-item"><strong>👤 Usuário</strong> — quem opera o computador</div>
    <div class="lex-expandable-item"><strong>🖥️ GUI</strong> — Interface Gráfica (Graphical User Interface)</div>
    <div class="lex-expandable-item"><strong>⌨️ Shell</strong> — Interpretador de comandos</div>
    <div class="lex-expandable-item"><strong>⚙️ Sistema Operacional</strong> — gerencia todos os recursos</div>
    <div class="lex-expandable-item"><strong>🔧 Kernel</strong> — Núcleo do SO (alto nível)</div>
    <div class="lex-expandable-item"><strong>🔌 Hardware</strong> — Componentes físicos (binário/baixo nível)</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Alto Nível</div>
      <div class="lex-expandable-item">Linguagem humana</div>
      <div class="lex-expandable-item">GUI, Shell, Kernel</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Baixo Nível</div>
      <div class="lex-expandable-item">Binário (0 e 1)</div>
      <div class="lex-expandable-item">Hardware físico</div>
    </div>
  </div>

  <div class="callout callout-gold">
    <span class="callout-icon">💡</span>
    <strong>Ordem:</strong> Usuário → GUI → Shell → SO → Kernel → Hardware
  </div>
</div>`
  },

  "Gerenciador de Tarefas": {
    icon: "⚙️",
    color: "#f59e0b",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">⚙️</div>
    <h1 class="notion-title">Gerenciador de Tarefas</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Monitoramento</span>
      <span class="meta-tag tag-gold">Ctrl + Shift + Esc</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Funcionalidades</div>
    <div class="lex-expandable-item"><strong>Processos</strong> — visualizar e encerrar programas</div>
    <div class="lex-expandable-item"><strong>Desempenho</strong> — CPU, memória, disco, rede</div>
    <div class="lex-expandable-item"><strong>Inicialização</strong> — programas que iniciam com Windows</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Atalhos</div>
    <div class="lex-cols">
      <div class="lex-section-container">
        <div class="lex-section-title">Direto</div>
        <div class="lex-expandable-item"><strong>Ctrl + Shift + Esc</strong></div>
      </div>
      <div class="lex-section-container">
        <div class="lex-section-title">Indireto</div>
        <div class="lex-expandable-item"><strong>Ctrl + Alt + Del</strong> → escolher</div>
      </div>
    </div>
  </div>
</div>`
  },

  "Software": {
    icon: "🧠",
    color: "#a78bfa",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🧠</div>
    <h1 class="notion-title">Software — Parte Lógica</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Programas</span>
      <span class="meta-tag tag-g">Categorias</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🔹 Básico</div>
    <div class="lex-expandable-item"><strong>Sistema Operacional</strong> — Windows, Linux, iOS, macOS, Android</div>
    <div class="lex-expandable-item"><strong>Drivers</strong> — tradutor hardware/software</div>
    <div class="lex-expandable-item"><strong>Firmware</strong> — embarcado em ROM (BIOS, UEFI)</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🔹 Aplicativos</div>
    <div class="lex-expandable-item"><strong>MS Office</strong> — Word, Excel, PowerPoint</div>
    <div class="lex-expandable-item"><strong>LibreOffice</strong> — Writer, Calc, Impress</div>
    <div class="lex-expandable-item"><strong>Jogos, Browser</strong></div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">🔹 Utilitários</div>
    <div class="lex-expandable-item"><strong>Antivírus, Firewall</strong> (Defender)</div>
    <div class="lex-expandable-item"><strong>Backup</strong> (HD/SSD)</div>
    <div class="lex-expandable-item"><strong>Desfragmentador</strong></div>
  </div>
</div>`
  },

  "Codigo Fonte": {
    icon: "🧾",
    color: "#10b981",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">🧾</div>
    <h1 class="notion-title">Código-fonte — A Receita</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Proprietário vs Livre</span>
      <span class="meta-tag tag-gold">Código</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">🔒 Proprietário</div>
      <div class="lex-expandable-item">Fechado, uso restrito</div>
      <div class="lex-expandable-item">Ex: Windows XP, Vista, 7, 8, 10, 11</div>
      <div class="lex-expandable-item">Ex: Microsoft, Apple</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">🔓 Livre</div>
      <div class="lex-expandable-item">Aberto, pode modificar</div>
      <div class="lex-expandable-item">Ex: Linux, LibreOffice, Firefox</div>
    </div>
  </div>
</div>`
  },

  "Gerenciador de Configuracoes": {
    icon: "⚙️",
    color: "#0ea5e9",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">⚙️</div>
    <h1 class="notion-title">Gerenciador de Configurações</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Painel de Controle</span>
      <span class="meta-tag tag-gold">Win + I</span>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">Painel de Controle</div>
      <div class="lex-expandable-item">Interface clássica</div>
      <div class="lex-expandable-item">Win + R → control</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">Configurações</div>
      <div class="lex-expandable-item">Moderno (Win 10/11)</div>
      <div class="lex-expandable-item"><strong>Win + I</strong></div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Opções</div>
    <div class="lex-expandable-item"><strong>Segurança, Backup</strong></div>
    <div class="lex-expandable-item"><strong>Histórico de atividades</strong></div>
    <div class="lex-expandable-item"><strong>Arquivos</strong></div>
  </div>
</div>`
  },

  "Gerenciador de Arquivos": {
    icon: "📁",
    color: "#f472b6",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">📁</div>
    <h1 class="notion-title">Gerenciador de Arquivos e Pastas</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Windows Explorer</span>
      <span class="meta-tag tag-gold">Win + E</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Nomes</div>
    <div class="lex-expandable-item"><strong>Windows Explorer</strong> (antigo)</div>
    <div class="lex-expandable-item"><strong>Explorador de Arquivos</strong> (atual)</div>
    <div class="lex-expandable-item">Atalho: <strong>Windows + E</strong></div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Limites</div>
    <div class="lex-expandable-item"><strong>Caminho máximo:</strong> 260 caracteres</div>
    <div class="lex-expandable-item"><strong>Exemplo:</strong> C:\\Users\\joao\\Downloads\\PostaLA.PDF (40 caracteres)</div>
    <div class="lex-expandable-item"><strong>Raiz:</strong> Windows (NTFS)</div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Caracteres Proibidos</div>
    <div class="lex-expandable-item"><strong>:  "  *  \  /  |  >  <  ?</strong></div>
  </div>
</div>`
  },

  "Atalhos Windows": {
    icon: "⌨️",
    color: "#8b5cf6",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">⌨️</div>
    <h1 class="notion-title">Atalhos Tecla Windows (WinKey)</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Produtividade</span>
      <span class="meta-tag tag-gold">Win + ?</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Atalhos Principais</div>
    <div class="lex-list">
      <div class="lex-expandable-item"><strong>Win + A</strong> — Central de Ações</div>
      <div class="lex-expandable-item"><strong>Win + C</strong> — Copilot (IA)</div>
      <div class="lex-expandable-item"><strong>Win + D</strong> — Desktop</div>
      <div class="lex-expandable-item"><strong>Ctrl + Win + D</strong> — Novo desktop</div>
      <div class="lex-expandable-item"><strong>Win + E</strong> — Explorador de Arquivos</div>
      <div class="lex-expandable-item"><strong>Win + I</strong> — Configurações</div>
      <div class="lex-expandable-item"><strong>Win + K</strong> — Conectar</div>
      <div class="lex-expandable-item"><strong>Win + L</strong> — Bloquear</div>
      <div class="lex-expandable-item"><strong>Win + M</strong> — Minimizar</div>
      <div class="lex-expandable-item"><strong>Win + P</strong> — Projetar</div>
      <div class="lex-expandable-item"><strong>Win + R</strong> — Executar (%temp%, msconfig, cmd)</div>
      <div class="lex-expandable-item"><strong>Win + S</strong> — Pesquisar</div>
      <div class="lex-expandable-item"><strong>Win + V</strong> — Área de transferência</div>
      <div class="lex-expandable-item"><strong>Win + Z</strong> — Snap Layout</div>
    </div>
  </div>
</div>`
  },

  "Tipos de Arquivo": {
    icon: "📂",
    color: "#ec4899",
    aprendizado: `
<div class="lex-block">
  <div class="notion-header">
    <div class="notion-icon">📂</div>
    <h1 class="notion-title">Tipos de Arquivo (Formato / Extensão)</h1>
    <div class="notion-meta">
      <span class="meta-tag tag-b">Extensões</span>
      <span class="meta-tag tag-g">Formatos</span>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">Nome.extensão (ocultar)</div>
    <div class="lex-expandable-item">Extensões ocultas por padrão no Windows</div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">🖼️ Imagem</div>
      <div class="lex-expandable-item">JPG, JPEG, PNG, GIF, TIF, BMP (Paint 3D)</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">🎵 Áudio</div>
      <div class="lex-expandable-item">MP3, AAC, WAV, WMA (Groove)</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">🎥 Vídeo</div>
      <div class="lex-expandable-item">MP4, MPEG, FLV, MKV, MOV, AVI, WMV</div>
    </div>
  </div>

  <div class="lex-cols">
    <div class="lex-section-container">
      <div class="lex-section-title">📦 Compactação</div>
      <div class="lex-expandable-item">ZIP, 7Z, RAR, ISO</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">⚙️ Executável</div>
      <div class="lex-expandable-item">EXE, MSI, BAT, BIN, APP, APK</div>
    </div>
    <div class="lex-section-container">
      <div class="lex-section-title">🌐 Web</div>
      <div class="lex-expandable-item">HTML</div>
    </div>
  </div>

  <div class="lex-section-container">
    <div class="lex-section-title">📄 Texto / Documentos</div>
    <div class="lex-expandable-item"><strong>Word:</strong> DOCX, DOTX (tema/modelo), TXT, RTF</div>
    <div class="lex-expandable-item"><strong>Writer:</strong> ODT</div>
    <div class="lex-expandable-item"><strong>Excel:</strong> XLSX | <strong>Calc:</strong> ODS</div>
    <div class="lex-expandable-item"><strong>PowerPoint:</strong> PPTX, PPSX | <strong>Impress:</strong> ODP</div>
  </div>
</div>`
  },
};
