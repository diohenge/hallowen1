// Produtos de Halloween atualizados
const halloweenProducts = [
    {
        name: "Fantasia Completa de Vampiro Premium",
        price: 299.99,
        image: "/api/placeholder/400/320",
        description: "Conjunto completo com capa, colete, camisa, calça e acessórios vampirescos!",
        category: "fantasia"
    },
    {
        name: "Kit Decoração Mansão Assombrada",
        price: 199.99,
        image: "/api/placeholder/400/320",
        description: "Transform seu ambiente em uma mansão assombrada com este kit completo!",
        category: "decoracao"
    },
    {
        name: "Fantasia de Bruxa Elegante",
        price: 259.99,
        image: "/api/placeholder/400/320",
        description: "Vestido luxuoso, chapéu e vassoura personalizada",
        category: "fantasia"
    },
    {
        name: "Pacote Decoração Cemitério",
        price: 159.99,
        image: "/api/placeholder/400/320",
        description: "Lápides, esqueletos e névoa artificial para criar seu próprio cemitério",
        category: "decoracao"
    },
    {
        name: "Fantasia Zumbi Realista",
        price: 189.99,
        image: "/api/placeholder/400/320",
        description: "Roupas rasgadas, maquiagem profissional e próteses realistas",
        category: "fantasia"
    },
    {
        name: "Kit Iluminação Terror",
        price: 129.99,
        image: "/api/placeholder/400/320",
        description: "Luzes LED coloridas, strobo e projetores de sombras assustadoras",
        category: "decoracao"
    }
];

// Efeitos sonoros
const spookySounds = {
    addToCart: new Audio('https://example.com/sounds/ghost.mp3'),
    hover: new Audio('https://example.com/sounds/crickets.mp3')
};

// Função para adicionar efeitos aos cards
function addSpookyEffects() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        // Adiciona movimento flutuante aleatório
        card.style.animation = `floatingGhost ${3 + Math.random() * 2}s ease-in-out infinite`;
        
        // Adiciona som ao hover
        card.addEventListener('mouseenter', () => {
            try {
                spookySounds.hover.currentTime = 0;
                spookySounds.hover.play();
            } catch (e) {
                console.log('Áudio não suportado');
            }
        });
    });
}

// Função para filtrar produtos por categoria
function filterProducts(category) {
    const filtered = category === 'all' 
        ? halloweenProducts 
        : halloweenProducts.filter(product => product.category === category);
    renderProducts(filtered);
    addSpookyEffects();
}

// Função para criar efeitos de partículas
function createSpookyParticles() {
    const particles = ['🎃', '👻', '🦇', '🕸️', '🕷️'];
    setInterval(() => {
        const particle = document.createElement('div');
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.className = 'particle';
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.animation = `fall ${5 + Math.random() * 5}s linear`;
        document.body.appendChild(particle);
        
        setTimeout(() => particle.remove(), 10000);
    }, 3000);
}

// Função melhorada para adicionar ao carrinho
function addToCart(productName, price) {
    // Efeito de tremor na tela
    document.body.style.animation = 'spookyShake 0.5s';
    setTimeout(() => document.body.style.animation = '', 500);
    
    // Som de fantasma
    try {
        spookySounds.addToCart.currentTime = 0;
        spookySounds.addToCart.play();
    } catch (e) {
        console.log('Áudio não suportado');
    }
    
    // Lógica original do carrinho
    if (cart[productName]) {
        cart[productName].quantity++;
    } else {
        cart[productName] = { price: price, quantity: 1 };
    }
    cartTotal += price;
    updateCartCount();
    saveCart();
    showToast(`${productName} adicionado ao carrinho! 👻`);
}

// Função para criar morcegos voadores
function createBat() {
    const bat = document.createElement('div');
    bat.className = 'bat';
    bat.style.top = `${Math.random() * 80 + 10}%`;
    document.body.appendChild(bat);
    
    bat.addEventListener('animationend', () => bat.remove());
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    loadCart();
    renderProducts(halloweenProducts);
    addSpookyEffects();
    createSpookyParticles();
    
    // Criar morcegos periodicamente
    setInterval(createBat, 10000);
    
    // Easter egg: Código Konami
    let konamiCode = [];
    const correctCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        if (konamiCode.length > correctCode.length) {
            konamiCode.shift();
        }
        if (JSON.stringify(konamiCode) === JSON.stringify(correctCode)) {
            // Ativa modo super assustador
            document.body.classList.add('super-spooky-mode');
            for (let i = 0; i < 20; i++) {
                setTimeout(createBat, i * 100);
            }
        }
    });
});