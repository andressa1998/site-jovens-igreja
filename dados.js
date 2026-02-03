// ARQUIVO DE DADOS - ATUALIZE AQUI PARA MODIFICAR O CONTEÚDO DO SITE

// Dados dos eventos (agenda)
const eventos = [
    {
        id: 1,
        titulo: "Ensaio - Jovens",
        data: "2026-02-08",
        hora: "60:00",
        local: "Rua Júlia Thereza Bini, 740",
        descricao: "Venha ensaiar conosco, ter um momento com Deus!",
        imagem: "https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        titulo: "Culto - Jovens",
        data: "2026-02-08",
        hora: "19:30",
        local: "Rua Júlia Thereza Bini, 740",
        descricao: "Venha cultuar conosco nesse dia especial. Traga sua Bíblia e um amigo!",
        imagem: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        titulo: "Escola Bíblica dominical",
        data: "2026-02-09",
        hora: "09:00",
        local: "Rua Júlia Thereza Bini, 740",
        descricao: "Venha aprender mais sobre a Bíblia conosco!",
        imagem: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        titulo: "Inicio Retiro 2026",
        data: "2026-05-16",
        hora: "08:00",
        local: "Fazenda Monte Sião",
        descricao: "Retiro anual dos jovens. Inscrições abertas!",
        imagem: "https://images.unsplash.com/photo-1549056572-75914d5d03fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        titulo: "Continuação Retiro 2026",
        data: "2026-05-17",
        hora: "08:00",
        local: "Fazenda Monte Sião",
        descricao: "Retiro anual dos jovens. Inscrições abertas!",
        imagem: "https://images.unsplash.com/photo-1549056572-75914d5d03fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        titulo: "Finalização Retiro 2026",
        data: "2026-05-18",
        hora: "08:00",
        local: "Fazenda Monte Sião",
        descricao: "Retiro anual dos jovens. Inscrições abertas!",
        imagem: "https://images.unsplash.com/photo-1549056572-75914d5d03fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
];

// Dados do blog (recados)
const postsBlog = [
    {
        id: 1,
        titulo: "Bem-vindos ao Novo Ano Ministerial",
        data: "2024-10-05",
        autor: "Pastor João",
        resumo: "Neste novo ano ministerial, convidamos todos os jovens a se engajarem nas atividades e crescerem juntos na fé.",
        imagem: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        conteudo: "Queridos jovens, é com muita alegria que iniciamos mais um ano de atividades em nosso grupo..."
    },
    {
        id: 2,
        titulo: "Preparativos para o Retiro 2024",
        data: "2024-10-10",
        autor: "Coordenadora Maria",
        resumo: "Estamos nos preparando para o nosso retiro anual. Confira todas as informações importantes.",
        imagem: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        conteudo: "O retiro espiritual está chegando e temos muitas novidades este ano. Teremos palestrantes especiais..."
    },
    {
        id: 3,
        titulo: "Campanha de Doações para o Natal",
        data: "2024-10-12",
        autor: "Diácono Pedro",
        resumo: "Vamos ajudar famílias carentes neste Natal. Participe da nossa campanha de doações.",
        imagem: "https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        conteudo: "Como todos os anos, organizaremos a campanha 'Natal Solidário'. Precisamos de voluntários..."
    }
];

// Dados dos produtos (camisetas)
const produtos = [
    {
        id: 1,
        nome: "Camiseta Básica Jovens 2024",
        preco: 45.00,
        imagem: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        descricao: "Camiseta 100% algodão, estampa frontal com o logo dos Jovens da Igreja 2024.",
        cores: ["Branca", "Preta", "Azul"],
        tamanhos: ["P", "M", "G", "GG"],
        disponivel: true
    },
    {
        id: 2,
        nome: "Camiseta Premium Retiro 2024",
        preco: 65.00,
        imagem: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        descricao: "Edição especial do retiro espiritual 2024. Tecido de alta qualidade.",
        cores: ["Cinza", "Verde", "Vermelha"],
        tamanhos: ["P", "M", "G", "GG", "XG"],
        disponivel: true
    },
    {
        id: 3,
        nome: "Moletom Jovens da Igreja",
        preco: 89.90,
        imagem: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        descricao: "Moletom com capuz, perfeito para os dias mais frios. Logo bordado.",
        cores: ["Preto", "Cinza escuro", "Azul marinho"],
        tamanhos: ["M", "G", "GG", "XG"],
        disponivel: true
    }
];

// Dados dos álbuns de fotos
const albunsFotos = [
    {
        id: 1,
        titulo: "Encontros",
        descricao: "Momento de comunhão, risadas e boa comida!",
        fotoPrincipal: "imagens/albuns/encontros/2.jpeg",
        fotos: [
            "imagens/albuns/encontros/1.jpeg",
            "imagens/albuns/encontros/3.jpeg",
            "imagens/albuns/encontros/4.jpeg",
            "imagens/albuns/encontros/5.jpeg",
            "imagens/albuns/encontros/6.jpeg"
        ]
    },
    {
        id: 2,
        titulo: "Cantina",
        descricao: "Momento de criação de receitas, ajuda na obra e arrecadação",
        fotoPrincipal: "imagens/albuns/cantina/1.jpeg",
        fotos: [
            "imagens/albuns/cantina/2.jpeg",
            "imagens/albuns/cantina/3.jpeg"
        ]
    },
    {
        id: 3,
        titulo: "Retiro - 2025",
        data: "09-2025",
        descricao: "Diversão e aprendizado na chacara com a galera!",
        fotoPrincipal: "imagens/albuns/retiro-2025/1.jpeg",
        fotos: [
            "imagens/albuns/retiro-2025/2.jpeg",
            "imagens/albuns/retiro-2025/3.jpeg",
            "imagens/albuns/retiro-2025/4.jpeg",
            "imagens/albuns/retiro-2025/5.jpeg",
            "imagens/albuns/retiro-2025/6.jpeg",
            "imagens/albuns/retiro-2025/7.jpeg",
            "imagens/albuns/retiro-2025/8.jpeg",
            "imagens/albuns/retiro-2025/9.jpeg"
        ]
    },
    {
        id: 4,
        titulo: "Encontro de Aniversariantes",
        descricao: "Um dia lindo para comemorar com os aniversariantes do semestre!",
        fotoPrincipal: "imagens/albuns/aniversario/1.jpeg",
        fotos: [
            "imagens/albuns/aniversario/2.jpeg",
            "imagens/albuns/aniversario/3.jpeg",
            "imagens/albuns/aniversario/4.jpeg",
            "imagens/albuns/aniversario/5.jpeg",
            "imagens/albuns/aniversario/6.jpeg"
        ]
    },
    {
        id: 5,
        titulo: "Cultos Semanais",
        descricao: "Cultos onde estamos sempre reunidos!",
        fotoPrincipal: "imagens/albuns/cultos/1.jpeg",
        fotos: [
            "imagens/albuns/cultos/2.jpeg",
            "imagens/albuns/cultos/3.jpeg",
            "imagens/albuns/cultos/4.jpeg",
            "imagens/albuns/cultos/5.jpeg",
            "imagens/albuns/cultos/6.jpeg",
            "imagens/albuns/cultos/7.jpeg",
            "imagens/albuns/cultos/8.jpeg",
            "imagens/albuns/cultos/9.jpeg",
            "imagens/albuns/cultos/10.jpeg",
            "imagens/albuns/cultos/11.jpeg",
            "imagens/albuns/cultos/12.jpeg",
            "imagens/albuns/cultos/13.jpeg",
            "imagens/albuns/cultos/14.jpeg",
            "imagens/albuns/cultos/15.jpeg",
            "imagens/albuns/cultos/16.jpeg",
            "imagens/albuns/cultos/17.jpeg",
            "imagens/albuns/cultos/18.jpeg",
            "imagens/albuns/cultos/19.jpeg"
        ]
    },
    {
        id: 6,
        titulo: "Congresso - 2025",
        descricao: "Nosso congresso 2025, com muito agir do Espírito Santo!",
        fotoPrincipal: "imagens/albuns/congresso-2025/1.jpeg",
        fotos: [
            "imagens/albuns/congresso-2025/2.jpeg",
            "imagens/albuns/congresso-2025/3.jpeg",
            "imagens/albuns/congresso-2025/4.jpeg",
            "imagens/albuns/congresso-2025/5.jpeg"
        ]
    },
    {
        id: 7,
        titulo: "Escola Bíblica Dominical",
        descricao: "Nossos domingos cheios de aprendizagem e comunhão",
        fotoPrincipal: "imagens/albuns/ebd/1.jpeg",
        fotos: [
            "imagens/albuns/ebd/2.jpeg",
            "imagens/albuns/ebd/3.jpeg",
            "imagens/albuns/ebd/4.jpeg",
            "imagens/albuns/ebd/5.jpeg",
            "imagens/albuns/ebd/6.jpeg",
            "imagens/albuns/ebd/7.jpeg",
            "imagens/albuns/ebd/8.jpeg",
            "imagens/albuns/ebd/9.jpeg"
        ]
    },
    {
        id: 8,
        titulo: "Ensaios aos sábados",
        descricao: "Nossos sabados de ensaio",
        fotoPrincipal: "imagens/albuns/ensaios/1.jpeg",
        fotos: [
            "imagens/albuns/ensaios/2.jpeg",
            "imagens/albuns/ensaios/3.jpeg",
            "imagens/albuns/ensaios/4.jpeg",
            "imagens/albuns/ensaios/5.jpeg",
            "imagens/albuns/ensaios/6.jpeg",
            "imagens/albuns/ensaios/7.jpeg",
            "imagens/albuns/ensaios/8.jpeg"
        ]
    },
    {
        id: 8,
        titulo: "Evangelismos",
        descricao: "Nós dias que saimos para evangelizar",
        fotoPrincipal: "imagens/albuns/evangelismo/1.jpeg",
        fotos: [
            "imagens/albuns/evangelismo/2.jpeg"
        ]
    },
    {
        id: 9,
        titulo: "Roles pós culto",
        descricao: "Nossos momentos de comunhão e comida pós culto!",
        fotoPrincipal: "imagens/albuns/pos culto/1.jpeg",
        fotos: [
            "imagens/albuns/pos culto/2.jpeg",
            "imagens/albuns/pos culto/3.jpeg",
            "imagens/albuns/pos culto/4.jpeg",
            "imagens/albuns/pos culto/5.jpeg"
        ]
    }
];

// Exportar dados para uso no script principal
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { eventos, postsBlog, produtos };
}