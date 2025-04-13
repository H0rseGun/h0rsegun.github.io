// 自定义光标跟随效果
document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // 使用setTimeout让follower有延迟效果
        setTimeout(function() {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    // 鼠标悬停在链接上时的效果
    const links = document.querySelectorAll('a, button');
    links.forEach(link => {
        link.addEventListener('mouseenter', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursorFollower.style.borderColor = 'var(--primary-color)';
        });
        
        link.addEventListener('mouseleave', function() {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
            cursorFollower.style.borderColor = 'var(--secondary-color)';
        });
    });
    
    // 鼠标点击效果
    document.addEventListener('mousedown', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });
    
    document.addEventListener('mouseup', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
    });
});

// 粒子背景效果
document.addEventListener('DOMContentLoaded', function() {
    // 创建粒子容器
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.position = 'fixed';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.overflow = 'hidden';
    particlesContainer.style.zIndex = '-1';
    document.body.appendChild(particlesContainer);
    
    // 创建粒子
    const particleCount = 50;
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
    
    function createParticle(container) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'var(--primary-color)';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        
        // 随机位置
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        particle.style.left = posX + '%';
        particle.style.top = posY + '%';
        
        // 随机动画
        const duration = Math.random() * 20 + 10;
        particle.style.animation = `float ${duration}s linear infinite`;
        particle.style.animationDelay = `-${Math.random() * duration}s`;
        
        container.appendChild(particle);
    }
});

// 滚动动画效果
document.addEventListener('DOMContentLoaded', function() {
    // 添加滚动动画CSS
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in-up {
            opacity: 0;
        }
        
        .fade-in-up.visible {
            animation: fadeInUp 0.8s ease forwards;
        }
    `;
    document.head.appendChild(style);
    
    // 为各个部分添加动画类
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in-up');
    });
    
    // 滚动监听函数
    function checkScroll() {
        const elements = document.querySelectorAll('.fade-in-up');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.classList.add('visible');
            }
        });
    }
    
    // 初始检查
    checkScroll();
    
    // 滚动时检查
    window.addEventListener('scroll', checkScroll);
});

// 打字机效果和随机哲学语句
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter');
    const philosophicalQuotes = [
        "认识你自己。 —— 苏格拉底",
        "我思故我在。 —— 笛卡尔",
        "人是一根会思考的芦苇。 —— 帕斯卡",
        "未经审视的人生不值得过。 —— 苏格拉底",
        "存在先于本质。 —— 萨特",
        "真正的自由不是想做什么就做什么，而是不想做什么就可以不做什么。 —— 叔本华",
        "他人即地狱。 —— 萨特",
        "幸福不是获取更多，而是渴望更少。 —— 斯多葛派",
        "要么庸俗，要么孤独。 —— 舒本华",
        "时间是我们唯一无法储存的财富。 —— 塞内卡",
        "一个人的价值，在于他贡献了什么，而不在于他获得了什么。 —— 爱因斯坦",
        "生命的意义在于它本身，而不在于外在的目标。 —— 加缪",
        "世界上只有一种真正的英雄主义，那就是在认清生活的真相后依然热爱它。 —— 罗曼·罗兰",
        "要想控制世界，先学会控制自己。 —— 柏拉图",
        "最重要的不是生命的长度，而是它的深度。 —— 爱默生",
        "人生最大的敌人是自己。 —— 斯多葛派",
        "所有的伟大都伴随着痛苦。 —— 尼采",
        "当你凝视深渊时，深渊也在凝视你。 —— 尼采",
        "过去不可改变，但未来可以。 —— 培根",
        "幸福是灵魂的一种香味。 —— 巴尔扎克"
    ];
    
    
    let currentQuote = "";
    let currentIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function getRandomQuote() {
        return philosophicalQuotes[Math.floor(Math.random() * philosophicalQuotes.length)];
    }
    
    function typeEffect() {
        // 初始化或完成删除后选择新的引用
        if (currentQuote === "" || (isDeleting && currentIndex === 0)) {
            currentQuote = getRandomQuote();
            isDeleting = false;
        }
        
        // 当前要显示的文本
        let displayText = currentQuote.substring(0, currentIndex);
        typewriterElement.textContent = displayText;
        
        // 设置打字速度
        if (isDeleting) {
            typingSpeed = 50; // 删除速度更快
        } else {
            typingSpeed = 100; // 正常打字速度
        }
        
        // 处理打字或删除逻辑
        if (!isDeleting && currentIndex < currentQuote.length) {
            // 继续打字
            currentIndex++;
        } else if (!isDeleting && currentIndex === currentQuote.length) {
            // 完成打字，等待一段时间后开始删除
            isDeleting = true;
            typingSpeed = 1500; // 完成后暂停时间
        } else if (isDeleting && currentIndex > 0) {
            // 开始删除
            currentIndex--;
        }
        
        // 继续动画循环
        setTimeout(typeEffect, typingSpeed);
    }
    
    // 启动打字效果
    typeEffect();
});

// 社交链接交互效果
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        // 鼠标悬停时添加发光效果
        link.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 0 20px var(--primary-color)';
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1.2)';
            icon.style.transition = 'transform 0.3s ease';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
            const icon = this.querySelector('i');
            icon.style.transform = 'scale(1)';
        });
        
        // 点击时添加波纹效果
        link.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.transform = 'translate(-50%, -50%)';
            ripple.style.pointerEvents = 'none';
            
            // 获取相对于元素的点击位置
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            this.appendChild(ripple);
            
            // 动画结束后移除
            ripple.style.animation = 'ripple 0.6s linear';
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // 添加波纹动画
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);});
