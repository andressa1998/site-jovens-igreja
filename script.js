// FUNCIONALIDADES PRINCIPAIS DO SITE

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas as funcionalidades
    initMenu();
    carregarEventos();
    carregarBlog();
    carregarProdutos();
    initForms();
    initSmoothScroll();
});

// Menu responsivo
function initMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('.nav-menu');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('show');
        });
    });
}

// Carregar eventos na agenda
function carregarEventos() {
    const container = document.getElementById('eventsContainer');
    
    if (!container) return;
    
    let eventosHTML = '';
    
    eventos.forEach(evento => {
        const data = new Date(evento.data);
        const dia = data.getDate().toString().padStart(2, '0');
        const mes = data.toLocaleDateString('pt-BR', { month: 'short' }).toUpperCase();
        
        eventosHTML += `
            <div class="event-card">
                <div class="event-date">
                    <span class="day">${dia}</span>
                    <span class="month">${mes}</span>
                </div>
                <div class="event-content">
                    <h3>${evento.titulo}</h3>
                    <p>${evento.descricao}</p>
                    <div class="event-meta">
                        <span><i class="far fa-clock"></i> ${evento.hora}</span>
                        <span><i class="fas fa-map-marker-alt"></i> ${evento.local}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = eventosHTML;
}

// Carregar posts do blog
function carregarBlog() {
    const container = document.getElementById('blogContainer');
    
    if (!container) return;
    
    let blogHTML = '';
    
    postsBlog.forEach(post => {
        const data = new Date(post.data);
        const dataFormatada = data.toLocaleDateString('pt-BR');
        
        blogHTML += `
            <div class="blog-card">
                <div class="blog-image">
                    <img src="${post.imagem}" alt="${post.titulo}">
                </div>
                <div class="blog-content">
                    <h3>${post.titulo}</h3>
                    <p>${post.resumo}</p>
                    <div class="blog-meta">
                        <span><i class="far fa-user"></i> ${post.autor}</span>
                        <span><i class="far fa-calendar"></i> ${dataFormatada}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = blogHTML;
}

// Carregar produtos (camisetas)
function carregarProdutos() {
    const container = document.getElementById('productsContainer');
    
    if (!container) return;
    
    let produtosHTML = '';
    
    produtos.forEach(produto => {
        const tamanhosHTML = produto.tamanhos.map(tamanho => 
            `<div class="size-option" data-size="${tamanho}">${tamanho}</div>`
        ).join('');
        
        const coresHTML = produto.cores.map(cor => 
            `<span class="color-option" style="background-color: ${cor.toLowerCase()};" title="${cor}"></span>`
        ).join('');
        
        produtosHTML += `
            <div class="product-card">
                <div class="product-image">
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    ${produto.disponivel ? '<span class="product-badge">Disponível</span>' : '<span class="product-badge esgotado">Esgotado</span>'}
                </div>
                <div class="product-content">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <div class="product-price">R$ ${produto.preco.toFixed(2)}</div>
                    <div>Cores disponíveis: ${coresHTML}</div>
                    <div class="product-sizes">
                        ${tamanhosHTML}
                    </div>
                    <button class="btn btn-primary btn-comprar" data-id="${produto.id}">Comprar Agora</button>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = produtosHTML;
    
    // Adicionar eventos para seleção de tamanhos
    document.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    // Adicionar eventos para botões de compra
    document.querySelectorAll('.btn-comprar').forEach(btn => {
        btn.addEventListener('click', function() {
            const produtoId = this.getAttribute('data-id');
            const produto = produtos.find(p => p.id == produtoId);
            
            // Verificar se um tamanho foi selecionado
            const tamanhoSelecionado = this.parentElement.querySelector('.size-option.selected');
            
            if (!tamanhoSelecionado) {
                alert('Por favor, selecione um tamanho antes de comprar.');
                return;
            }
            
            const tamanho = tamanhoSelecionado.getAttribute('data-size');
            
            // Simular processo de compra
            const confirmacao = confirm(`Você está comprando: ${produto.nome}\nTamanho: ${tamanho}\nValor: R$ ${produto.preco.toFixed(2)}\n\nDeseja continuar?`);
            
            if (confirmacao) {
                alert('Compra realizada com sucesso! Em breve entraremos em contato para finalizar o pagamento.');
            }
        });
    });
}

// Inicializar formulários
function initForms() {
    // Formulário de inscrição no retiro
    const retiroForm = document.getElementById('retiroForm');
    if (retiroForm) {
        retiroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação simples
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;
            const telefone = document.getElementById('telefone').value;
            const idade = document.getElementById('idade').value;
            const tipoAcomodacao = document.getElementById('tipoAcomodacao').value;
            
            if (!nome || !email || !telefone || !idade || !tipoAcomodacao) {
                mostrarMensagem('retiroMessage', 'Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            
            // Simular envio
            mostrarMensagem('retiroMessage', 'Inscrição enviada com sucesso! Em breve entraremos em contato para confirmar sua participação.', 'success');
            retiroForm.reset();
            
            // Em um caso real, aqui seria feita uma requisição AJAX para o servidor
            console.log('Dados da inscrição:', { nome, email, telefone, idade, tipoAcomodacao });
        });
    }
    
    // Formulário de contato
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nome = document.getElementById('contactNome').value;
            const email = document.getElementById('contactEmail').value;
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value;
            
            if (!nome || !email || !assunto || !mensagem) {
                mostrarMensagem('contactMessage', 'Por favor, preencha todos os campos obrigatórios.', 'error');
                return;
            }
            
            // Simular envio
            mostrarMensagem('contactMessage', 'Mensagem enviada com sucesso! Responderemos em breve.', 'success');
            contactForm.reset();
            
            console.log('Mensagem de contato:', { nome, email, assunto, mensagem });
        });
    }
    
    // Formulário de newsletter
    const newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('newsletterEmail').value;
            
            if (!email) {
                alert('Por favor, insira seu e-mail.');
                return;
            }
            
            // Simular inscrição
            alert(`Obrigado por se inscrever na nossa newsletter! Um e-mail de confirmação foi enviado para ${email}.`);
            newsletterForm.reset();
            
            console.log('Inscrição na newsletter:', email);
        });
    }
}

// Mostrar mensagens nos formulários
function mostrarMensagem(elementId, texto, tipo) {
    const elemento = document.getElementById(elementId);
    elemento.textContent = texto;
    elemento.className = `form-message ${tipo}`;
    
    // Limpar mensagem após 5 segundos
    setTimeout(() => {
        elemento.className = 'form-message';
        elemento.textContent = '';
    }, 5000);
}

// Funções para o carrossel de álbuns de fotos
function initCarrossel() {
    const carouselTrack = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const carouselDots = document.getElementById('carouselDots');
    
    if (!carouselTrack) return;
    
    let currentSlide = 0;
    const slidesPerView = getSlidesPerView();
    
    // Criar cards dos álbuns
    let albumsHTML = '';
    let dotsHTML = '';
    
    albunsFotos.forEach((album, index) => {
        const data = new Date(album.data);
        const dataFormatada = data.toLocaleDateString('pt-BR');
        
        albumsHTML += `
            <div class="album-card" data-album-id="${album.id}">
                <div class="album-image">
                    <img src="${album.fotoPrincipal}" alt="${album.titulo}">
                    <div class="album-overlay">
                        <span class="album-count">
                            <i class="fas fa-camera"></i> ${album.fotos.length}
                        </span>
                    </div>
                </div>
                <div class="album-content">
                    <h3>${album.titulo}</h3>
                    <p>${album.descricao}</p>
                    <div class="album-date">
                        <i class="far fa-calendar"></i> ${dataFormatada}
                    </div>
                </div>
            </div>
        `;
        
        dotsHTML += `
            <button class="carousel-dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></button>
        `;
    });
    
    carouselTrack.innerHTML = albumsHTML;
    carouselDots.innerHTML = dotsHTML;
    
    // Configurar largura do track
    updateTrackWidth();
    
    // Event listeners para navegação
    prevBtn.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        const maxSlide = Math.ceil(albunsFotos.length / slidesPerView) - 1;
        if (currentSlide < maxSlide) {
            currentSlide++;
            updateCarousel();
        }
    });
    
    // Event listeners para dots
    document.querySelectorAll('.carousel-dot').forEach(dot => {
        dot.addEventListener('click', () => {
            currentSlide = parseInt(dot.getAttribute('data-slide'));
            updateCarousel();
        });
    });
    
    // Event listeners para abrir álbuns
    document.querySelectorAll('.album-card').forEach(card => {
        card.addEventListener('click', () => {
            const albumId = parseInt(card.getAttribute('data-album-id'));
            openAlbumViewer(albumId);
        });
    });
    
    // Atualizar carrossel ao redimensionar a janela
    window.addEventListener('resize', () => {
        updateTrackWidth();
        updateCarousel();
    });
    
    function updateTrackWidth() {
        const slidesPerView = getSlidesPerView();
        const slideWidth = 100 / slidesPerView;
        const totalSlides = albunsFotos.length;
        
        carouselTrack.style.width = `${(totalSlides * 100) / slidesPerView}%`;
        
        // Atualizar largura dos slides
        document.querySelectorAll('.album-card').forEach(slide => {
            slide.style.flex = `0 0 ${slideWidth}%`;
        });
    }
    
    function updateCarousel() {
        const slidesPerView = getSlidesPerView();
        const slideWidth = 100 / slidesPerView;
        const translateX = -currentSlide * slideWidth;
        
        carouselTrack.style.transform = `translateX(${translateX}%)`;
        
        // Atualizar dots ativos
        document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
        
        // Atualizar estado dos botões
        const maxSlide = Math.ceil(albunsFotos.length / slidesPerView) - 1;
        prevBtn.disabled = currentSlide === 0;
        nextBtn.disabled = currentSlide === maxSlide;
    }
    
    function getSlidesPerView() {
        if (window.innerWidth >= 992) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }
    
    // Inicializar carrossel
    updateCarousel();
}

// Visualizador de álbuns
function openAlbumViewer(albumId) {
    const album = albunsFotos.find(a => a.id === albumId);
    if (!album) return;
    
    const viewer = document.getElementById('albumViewer');
    const viewerTitle = document.getElementById('viewerTitle');
    const viewerMainImage = document.getElementById('viewerMainImage');
    const viewerThumbnails = document.getElementById('viewerThumbnails');
    const currentImageIndex = document.getElementById('currentImageIndex');
    const totalImages = document.getElementById('totalImages');
    
    // Configurar título
    viewerTitle.textContent = album.titulo;
    
    // Configurar contador
    totalImages.textContent = album.fotos.length;
    
    // Estado do visualizador
    let currentImage = 0;
    
    // Carregar imagens
    function loadImages() {
        // Imagem principal
        viewerMainImage.src = album.fotos[currentImage];
        viewerMainImage.alt = `${album.titulo} - Foto ${currentImage + 1}`;
        currentImageIndex.textContent = currentImage + 1;
        
        // Miniaturas
        let thumbnailsHTML = '';
        album.fotos.forEach((foto, index) => {
            thumbnailsHTML += `
                <div class="thumbnail ${index === currentImage ? 'active' : ''}" 
                     data-index="${index}">
                    <img src="${foto}" alt="Foto ${index + 1}">
                </div>
            `;
        });
        viewerThumbnails.innerHTML = thumbnailsHTML;
        
        // Event listeners para miniaturas
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.addEventListener('click', () => {
                currentImage = parseInt(thumb.getAttribute('data-index'));
                loadImages();
            });
        });
    }
    
    loadImages();
    
    // Botões de navegação
    const prevImageBtn = document.getElementById('prevImageBtn');
    const nextImageBtn = document.getElementById('nextImageBtn');
    const closeViewer = document.getElementById('closeViewer');
    
    prevImageBtn.onclick = () => {
        if (currentImage > 0) {
            currentImage--;
            loadImages();
        }
    };
    
    nextImageBtn.onclick = () => {
        if (currentImage < album.fotos.length - 1) {
            currentImage++;
            loadImages();
        }
    };
    
    closeViewer.onclick = () => {
        viewer.classList.remove('active');
    };
    
    // Fechar com ESC
    document.addEventListener('keydown', function closeOnEsc(e) {
        if (e.key === 'Escape') {
            viewer.classList.remove('active');
            document.removeEventListener('keydown', closeOnEsc);
        }
    });
    
    // Mostrar visualizador
    viewer.classList.add('active');
}

// Atualizar a função init() para incluir o carrossel
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar todas as funcionalidades
    initMenu();
    initCarrossel();  // ← Adicionar esta linha
    carregarEventos();
    carregarBlog();
    carregarProdutos();
    initForms();
    initSmoothScroll();
});

// Rolagem suave para âncoras
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Ativar link ativo na navegação conforme rolagem
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            currentSection = '#' + section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentSection) {
            link.classList.add('active');
        }
    });
});