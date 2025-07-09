// CONFIGURAÇÃO CENTRAL DE DADOS
// Edite apenas este arquivo para atualizar as informações

const DADOS_CAMPEONATO = {
    // Informações Gerais
    geral: {
        temporadaAtual: "Stockpap",
        anoAtual: 2025,
        dataUltimaAtualizacao: "Julho de 2025",
        totalTemporadas: 11,
        periodoTempo: "2021-2025"
    },

    // Estatísticas Históricas
    estatisticasHistoricas: {
        maiorCampeao: {
            nome: "Bruno Scremin",
            titulos: 5
        },
        maisVitorias: {
            nome: "João M. Angeli",
            vitorias: 77.5
        },
        maisPoles: {
            nome: "Bruno S. / João M.",
            poles: 120
        }
    },

    // Ranking Histórico de Pilotos
    rankingHistorico: [
        { posicao: 1, nome: "João M. Angeli", Pontos: 775, Títulos: "Seasons 6, 8, 9, 10", Vitórias: 3 },
        { posicao: 2, nome: "Bruno Scremin", Pontos: 610, Títulos: "Seasons 1, 2, 3, 4, 5", Vitórias: 3 },
        { posicao: 3, nome: "Henrique Gomes", Pontos: 335, Títulos: "Season 7", Vitórias: 1 },
        { posicao: 4, nome: "Luiz Henrique Conte", Pontos: 232, Títulos: 0, Vitórias: 0 },
        { posicao: 5, nome: "Lucas Santana", Pontos: 232, Títulos: 0, Vitórias: 0 }
    ],

    // Temporada Atual
    temporadaAtual: {
        numero: 11,
        ano: 2025,
        categoria: "Stockpap",
        etapasCompletas: 3,
        totalEtapas: 5,
        proximaEtapa: "E4",
        
        // Líder Atual
        lider: {
            nome: "João Fernando",
            equipe: "Bravo Snow Schatten",
            pontos: 70
        },

        // Colunas da Tabela de Classificação
        colunasClassificacao: [
            "Pos", "Piloto", "Equipe", "Categoria", "E1-B1", "E1-B2", "E2-B1", "E2-B2", "Total"
        ],

        // Classificação Atual
        classificacao: [
            { pos: 1, piloto: "João Fernando", equipe: "Bravo Snow Schatten", categoria: "PRO", e1b1: 25, e1b2: 9, e2b1: 16, e2b2: 20, total: 70 },
            { pos: 2, piloto: "João M. Angeli", equipe: "Canyon Racing Team", categoria: "PRO", e1b1: 8, e1b2: 20, e2b1: 20, e2b2: 11, total: 59 },
            { pos: 3, piloto: "Lucas Angeloni", equipe: "Canyon Racing Team", categoria: "PRO", e1b1: 0, e1b2: 0, e2b1: 25, e2b2: 15, total: 40 },
            { pos: 4, piloto: "Felipe Silva", equipe: "Canyon Racing Team", categoria: "AM", e1b1: 6, e1b2: 11, e2b1: 12, e2b2: 9, total: 38 },
            { pos: 5, piloto: "Diogo Meneguetti", equipe: "Arctic Wolves", categoria: "PRO", e1b1: 12, e1b2: 15, e2b1: 5, e2b2: 2, total: 34 }
        ]
    },

    // Histórico de Temporadas
    historicoTemporadas: [
        { ano: 2025, temporada: 11, campeao: "Em andamento", categoria: "Campap", carro: "Stockpap" },
        { ano: 2025, temporada: 10, campeao: "João M. Angeli", categoria: "Campap", carro: "BMW M3 GTR" },
        { ano: 2024, temporada: 9, campeao: "João M. Angeli", categoria: "Campap", carro: "Hyundai Genesis" },
        { ano: 2023, temporada: 8, campeao: "João M. Angeli", categoria: "Campap", carro: "GT3" },
        { ano: 2023, temporada: 7, campeao: "Henrique Gomes", categoria: "Campap", carro: "IMSA" },
        { ano: 2022, temporada: 6, campeao: "João M. Angeli", categoria: "Campap", carro: "Fiat Tipo Competizione" },
        { ano: 2022, temporada: 5, campeao: "Bruno Scremin", categoria: "Campap", carro: "Porsche Cup" },
        { ano: 2022, temporada: 4, campeao: "Bruno Scremin", categoria: "Campap", carro: "Super Formula" },
        { ano: 2022, temporada: 3, campeao: "Bruno Scremin", categoria: "Campap", carro: "GT4" },
        { ano: 2022, temporada: 2, campeao: "Bruno Scremin", categoria: "Campap", carro: "GT4 x TCR" },
        { ano: 2021, temporada: 1, campeao: "Bruno Scremin", categoria: "Campap", carro: "Fiat Tipo" }
    ],

    // Equipes Atuais
    equipes: [
        {
            nome: "Bravo Snow Schatten",
            pilotos: ["JOHN PALAURO #31", "JOÃO FERNANDO #32", "RENATO ROVEDA #33", "DANILO VAZ #23"],
            reservas: [""]
        },
        {
            nome: "Canyon Racing Team",
            pilotos: ["JOÃO M. ANGELI #19", "HENRIQUE GOMES #12", "LUCAS ANGELONI #16", "FELIPE SILVA #47"],
            reservas: [""]
        },
        {
            nome: "Anibbas Racing",
            pilotos: ["HEITOR DUTRA #06", "LUCAS RIBEIRO #13", "FERNANDO MARÇAL #14", "IVOR ROSA #86"],
            reservas: [""]
        },
        {
            nome: "Arctic Wolves",
            pilotos: ["DIOGO MENEGUETTI #80", "FELIPE SODRÉ #03", "MATHEUS MACHADO #28", "MISAEL GUERRA #09", "GABRIEL JUBETT #74"],
            reservas: [""]
        },
        {
            nome: "RoadClub Racing",
            pilotos: ["ANTÔNIO GARGIONI #25", "DOUGLAS TOMACHESKI #36", "GABRIEL BRANDÃO #46", "VITOR ZUCCO #64"],
            reservas: [""]
        },
        {
            nome: "Lobini Racing",
            pilotos: ["LUIZ PANCIERI #07", "BRENDO DUARTE #08", "RODRIGO ARK #55", "GUILHERME TAVARES #20", "PEDRO HÉRCULES #81"],
            reservas: [""]
        },
        {
            nome: "Astralopitecos",
            pilotos: ["HENRIQUE CATALDO #39", "VITOR SILVA #51", "JOÃO V. DIAS #69", "VINÍCIUS MATTIUZZI #73"],
            reservas: [""]
        },
        {
            nome: "Dragons D4",
            pilotos: ["LUCAS SANTANA #91", "BRUNO SCREMIN #50", "GABRIEL ALCÂNTARA #96", "ANTHONY SILVA #90"],
            reservas: [""]
        }
    ],

/*{
            nome: "Anibbas Racing",
            pilotos: [""],
            reservas: [""]
        }*/

    // Premiações CAMPAP Awards
    premiacoes: {
        anoAtual: 2024,
        categorias: [
            { nome: "MELHOR ULTRAPASSAGEM", icone: "🏆", vencedor: "TONI X JOÃO" },
            { nome: "MELHOR BATIDA", icone: "🌟", vencedor: "MARRETA X SANABRIA" },
            { nome: "MOMENTO CAMPAP", icone: "🚗", vencedor: "VINI DEPRESSÃO" },
            { nome: "PIOR VETERANO", icone: "🥇", vencedor: "HEITOR DUTRA" },
            { nome: "PILOTO REVELAÇÃO", icone: "🏁", vencedor: "TONI" },
            { nome: "MELHOR ROOKIE", icone: "👥", vencedor: "FEH SILVA" }
        ]
    }
};

// FUNÇÕES PRINCIPAIS
class CampapStats {
    constructor() {
        this.dados = DADOS_CAMPEONATO;
        this.currentSection = 'geral';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.updateLastModified();
        this.loadSection('geral');
    }

    setupEventListeners() {
        // Navegação entre seções
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const section = e.target.dataset.section;
                this.switchSection(section);
            });
        });

        // Menu mobile
        const menuToggle = document.querySelector('.menu-toggle');
        const navUl = document.querySelector('nav ul');
        
        if (menuToggle && navUl) {
            menuToggle.addEventListener('click', () => {
                navUl.classList.toggle('show');
            });
        }

        // Tabelas ordenáveis
        this.setupSortableTables();
    }

    setupSortableTables() {
        document.querySelectorAll('.sortable th').forEach(th => {
            th.addEventListener('click', (e) => {
                const table = e.target.closest('table');
                const columnIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
                this.sortTable(table, columnIndex);
            });
        });
    }

    sortTable(table, columnIndex) {
        const tbody = table.querySelector('tbody');
        const rows = Array.from(tbody.querySelectorAll('tr'));
        const isNumeric = !isNaN(parseFloat(rows[0].cells[columnIndex].textContent));

        rows.sort((a, b) => {
            const aValue = a.cells[columnIndex].textContent.trim();
            const bValue = b.cells[columnIndex].textContent.trim();

            if (isNumeric) {
                return parseFloat(bValue) - parseFloat(aValue);
            } else {
                return aValue.localeCompare(bValue);
            }
        });

        rows.forEach(row => tbody.appendChild(row));
    }

    updateLastModified() {
        const updateInfo = document.getElementById('update-info');
        if (updateInfo) {
            updateInfo.textContent = `Última atualização: ${this.dados.geral.dataUltimaAtualizacao}`;
        }
    }

    switchSection(sectionName) {
        // Atualizar botões de navegação
        document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');

        // Mostrar seção correspondente
        document.querySelectorAll('.stats-section').forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(sectionName).classList.add('active');

        // Carregar dados da seção
        this.loadSection(sectionName);
        this.currentSection = sectionName;
    }

    loadSection(sectionName) {
        switch (sectionName) {
            case 'geral':
                this.loadGeralSection();
                break;
            case 'temporada-atual':
                this.loadTemporadaAtualSection();
                break;
            case 'historico':
                this.loadHistoricoSection();
                break;
            case 'equipes':
                this.loadEquipesSection();
                break;
            case 'premiacao':
                this.loadPremiacaoSection();
                break;
        }
    }

    loadGeralSection() {
        // Carregar estatísticas gerais
        const statsGrid = document.getElementById('stats-grid');
        if (statsGrid) {
            statsGrid.innerHTML = this.generateStatsCards();
        }

        // Carregar ranking histórico
        const rankingBody = document.getElementById('historical-ranking-body');
        if (rankingBody) {
            rankingBody.innerHTML = this.generateHistoricalRanking();
        }
    }

    generateStatsCards() {
        const stats = this.dados.estatisticasHistoricas;
        const geral = this.dados.geral;

        return `
            <div class="stat-card">
                <h3>Temporadas Realizadas</h3>
                <div class="stat-value">${geral.totalTemporadas}</div>
                <div class="stat-detail">${geral.periodoTempo}</div>
            </div>
            <div class="stat-card champion-card">
                <h3>Maior Campeão</h3>
                <div class="stat-value">${stats.maiorCampeao.titulos}</div>
                <div class="stat-detail">${stats.maiorCampeao.nome}</div>
            </div>
            <div class="stat-card">
                <h3>Maior Média de Pontos p/ temporada</h3>
                <div class="stat-value">${stats.maisVitorias.vitorias}</div>
                <div class="stat-detail">${stats.maisVitorias.nome}</div>
            </div>
            <div class="stat-card">
                <h3>Maior Pontuação em uma Temporada</h3>
                <div class="stat-value">${stats.maisPoles.poles}</div>
                <div class="stat-detail">${stats.maisPoles.nome}</div>
            </div>
            <div class="stat-card">
                <h3>Temporada Atual</h3>
                <div class="stat-value">${geral.temporadaAtual}</div>
                <div class="stat-detail">${geral.anoAtual}</div>
            </div>
        `;
    }

    generateHistoricalRanking() {
        return this.dados.rankingHistorico.map(piloto => `
            <tr ${piloto.posicao === 1 ? 'class="leader"' : ''}>
                <td>${piloto.posicao}º</td>
                <td>${piloto.nome}</td>
                <td>${piloto.Pontos}</td>
                <td>${piloto.Títulos}</td>
                <td>${piloto.Vitórias}</td>
            </tr>
        `).join('');
    }

    loadTemporadaAtualSection() {
        const temporada = this.dados.temporadaAtual;
        
        // Atualizar títulos
        document.getElementById('current-season-title').textContent = `Temporada ${temporada.numero} (${temporada.ano})`;
        document.getElementById('current-season-subtitle').textContent = `Categoria: ${temporada.categoria} | Etapas: ${temporada.etapasCompletas}/${temporada.totalEtapas}`;
        
        // Informações da temporada
        const seasonInfo = document.getElementById('current-season-info');
        if (seasonInfo) {
            seasonInfo.innerHTML = `
                <div class="season-card">
                    <h3>Líder do Campeonato</h3>
                    <div class="leader-info">
                        <div class="leader-name">${temporada.lider.nome}</div>
                        <div class="leader-team">${temporada.lider.equipe}</div>
                        <div class="leader-points">${temporada.lider.pontos} pontos</div>
                    </div>
                </div>
                <div class="season-card">
                    <h3>Progresso da Temporada</h3>
                    <div class="stat-value">${temporada.etapasCompletas}/${temporada.totalEtapas}</div>
                    <div class="stat-detail">Próxima: ${temporada.proximaEtapa}</div>
                </div>
                <div class="season-card">
                    <h3>Categoria</h3>
                    <div class="stat-value">${temporada.categoria}</div>
                    <div class="stat-detail">Temporada ${temporada.numero}</div>
                </div>
            `;
        }

        // Tabela de classificação
        document.getElementById('current-season-table-title').textContent = `Classificação - Temporada ${temporada.numero}`;
        
        const tableHead = document.getElementById('current-season-table-head');
        const tableBody = document.getElementById('current-season-table-body');
        
        if (tableHead && tableBody) {
            tableHead.innerHTML = `
                <tr>
                    ${temporada.colunasClassificacao.map(col => `<th>${col}</th>`).join('')}
                </tr>
            `;
            
            tableBody.innerHTML = temporada.classificacao.map(piloto => `
                <tr ${piloto.pos === 1 ? 'class="leader"' : ''}>
                    <td>${piloto.pos}º</td>
                    <td>${piloto.piloto}</td>
                    <td>${piloto.equipe}</td>
                    <td>${piloto.categoria}</td>
                    <td>${piloto.e1b1}</td>
                    <td>${piloto.e1b2}</td>
                    <td>${piloto.e2b1}</td>
                    <td>${piloto.e2b2}</td>
                    <td><strong>${piloto.total}</strong></td>
                </tr>
            `).join('');
        }
    }

    loadHistoricoSection() {
        const timeline = document.getElementById('timeline');
        if (timeline) {
            timeline.innerHTML = this.dados.historicoTemporadas.map(temporada => `
                <div class="timeline-item">
                    <div class="timeline-year">${temporada.ano}</div>
                    <div class="timeline-content">
                        <h4>Temporada ${temporada.temporada}</h4>
                        <p><strong>Campeão:</strong> ${temporada.campeao}</p>
                        <p><strong>Categoria:</strong> ${temporada.categoria}</p>
                        <p><strong>Carro:</strong> ${temporada.carro}</p>
                    </div>
                </div>
            `).join('');
        }
    }

    loadEquipesSection() {
        const teamsTitle = document.getElementById('teams-title');
        const teamsGrid = document.getElementById('teams-grid');
        
        if (teamsTitle) {
            teamsTitle.textContent = `Equipes - Temporada ${this.dados.temporadaAtual.numero}`;
        }
        
        if (teamsGrid) {
            teamsGrid.innerHTML = this.dados.equipes.map(equipe => `
                <div class="team-card">
                    <h3>${equipe.nome}</h3>
                    <div class="team-drivers">
                        ${equipe.pilotos.map(piloto => `
                            <div class="driver">${piloto}</div>
                        `).join('')}
                        ${equipe.reservas.map(reserva => `
                            <div class="driver reserve">${reserva} (Reserva)</div>
                        `).join('')}
                    </div>
                </div>
            `).join('');
        }
    }

    loadPremiacaoSection() {
        const awardsSubtitle = document.getElementById('awards-subtitle');
        const awardsGrid = document.getElementById('awards-grid');
        
        if (awardsSubtitle) {
            awardsSubtitle.textContent = `Premiações ${this.dados.premiacoes.anoAtual}`;
        }
        
        if (awardsGrid) {
            awardsGrid.innerHTML = this.dados.premiacoes.categorias.map(categoria => `
                <div class="award-card">
                    <div class="award-icon">${categoria.icone}</div>
                    <h3>${categoria.nome}</h3>
                    <p>${categoria.vencedor}</p>
                </div>
            `).join('');
        }
    }
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new CampapStats();
});

// Adicionar funcionalidades extras
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fechar menu mobile ao clicar em um link
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            const navUl = document.querySelector('nav ul');
            if (navUl) {
                navUl.classList.remove('show');
            }
        });
    });

    // Adicionar efeito de loading
    const loadingElements = document.querySelectorAll('[id*="loading"], [class*="loading"]');
    loadingElements.forEach(element => {
        element.style.opacity = '0';
        setTimeout(() => {
            element.style.transition = 'opacity 0.5s ease-in-out';
            element.style.opacity = '1';
        }, 100);
    });
});

// Utility functions
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('pt-BR', options);
}

function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}