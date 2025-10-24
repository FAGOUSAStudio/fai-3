// إضافة السنة الحالية في التذييل
document.getElementById('year').textContent = new Date().getFullYear();

// إنشاء تأثير الجسيمات
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // تحديد خصائص عشوائية لكل جسيم
    const size = Math.random() * 5 + 2;
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight + window.innerHeight;
    const delay = Math.random() * 10;
    const duration = Math.random() * 20 + 10;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;
    particle.style.top = `${posY}px`;
    particle.style.animationDelay = `${delay}s`;
    particle.style.animationDuration = `${duration}s`;
    
    // تلوين عشوائي للجسيمات
    const colors = ['#6e45e2', '#88d3ce', '#ff7e5f', '#0ff0fc', '#ff00ff'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.backgroundColor = color;
    
    particlesContainer.appendChild(particle);
  }
}

// تأثيرات الماوس المتطورة
const cursor = document.querySelector('.cursor-effect');
const cursorOuter = document.querySelector('.cursor-outer');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  
  cursorOuter.style.left = `${e.clientX}px`;
  cursorOuter.style.top = `${e.clientY}px`;
  
  // تأثير المغناطيس للأزرار والبطاقات
  const interactiveElements = document.querySelectorAll('a, button, .card, .logo');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(2)';
      cursor.style.backgroundColor = 'rgba(110, 69, 226, 0.3)';
      cursorOuter.style.transform = 'translate(-50%, -50%) scale(0.5)';
      cursorOuter.style.borderColor = 'var(--primary)';
    });
    
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
      cursorOuter.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOuter.style.borderColor = 'rgba(110, 69, 226, 0.5)';
    });
  });
});

// تأثيرات إضافية عند التحميل
document.addEventListener('DOMContentLoaded', function() {
  createParticles();
  
  // تأثير اهتزاز خفيف للأزرار بعد التحميل
  setTimeout(() => {
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach((btn, index) => {
      setTimeout(() => {
        btn.style.transform = 'translateY(-10px) scale(1.05)';
        setTimeout(() => {
          btn.style.transform = 'translateY(0) scale(1)';
        }, 500);
      }, index * 200);
    });
  }, 4500);
  
  // تأثير العائمة المتطور للبطاقات
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const x = e.clientX - card.getBoundingClientRect().left;
      const y = e.clientY - card.getBoundingClientRect().top;
      
      const centerX = card.offsetWidth / 2;
      const centerY = card.offsetHeight / 2;
      
      const angleX = (y - centerY) / 15;
      const angleY = (centerX - x) / 15;
      
      card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-15px) scale(1.03)`;
      
      // تأثير الضوء المتحرك
      const glow = document.createElement('div');
      glow.style.position = 'absolute';
      glow.style.width = '100px';
      glow.style.height = '100px';
      glow.style.background = 'radial-gradient(circle, rgba(255,255,255,0.3), transparent 70%)';
      glow.style.borderRadius = '50%';
      glow.style.top = `${y - 50}px`;
      glow.style.left = `${x - 50}px`;
      glow.style.pointerEvents = 'none';
      glow.style.opacity = '0';
      glow.style.transition = 'opacity 0.3s';
      
      card.appendChild(glow);
      
      setTimeout(() => {
        glow.style.opacity = '0.5';
        setTimeout(() => {
          glow.style.opacity = '0';
          setTimeout(() => {
            card.removeChild(glow);
          }, 300);
        }, 100);
      }, 10);
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(-15px) scale(1.03)';
    });
  });
  
  // تأثير النص المتوهج
  const highlights = document.querySelectorAll('.highlight');
  highlights.forEach(highlight => {
    highlight.addEventListener('mousemove', (e) => {
      const x = e.clientX - highlight.getBoundingClientRect().left;
      const percent = x / highlight.offsetWidth * 100;
      
      highlight.style.textShadow = `0 0 ${10 + percent / 5}px rgba(15, 240, 252, ${0.3 + percent / 200})`;
    });
    
    highlight.addEventListener('mouseleave', () => {
      highlight.style.textShadow = '0 0 8px rgba(15, 240, 252, 0.5)';
    });
  });
});