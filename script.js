// =====================================================
// 부드러운 네비게이션 링크 클릭 처리
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // #만 있는 경우는 동작하지 않음
        if (href === '#') return;
        
        e.preventDefault();
        
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// =====================================================
// 연락처 정보 (GitHub Pages 정적 호스팅용)
// =====================================================
// GitHub Pages는 서버가 없으므로 메시지 기능은 제거되었습니다.
// 이메일이나 GitHub를 통해 연락 주세요.



// =====================================================
// 페이지 로드 시 초기화
// =====================================================

document.addEventListener('DOMContentLoaded', function () {
    // 네비게이션 링크 활성화 표시 (선택사항)
    updateActiveNavigation();
    
    // 스크롤 시 네비게이션 업데이트
    window.addEventListener('scroll', updateActiveNavigation);
});

// =====================================================
// 현재 섹션에 따라 네비게이션 링크 활성화
// =====================================================

function updateActiveNavigation() {
    const sections = ['home', 'about', 'projects', 'contact'];
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = 'home';
    
    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        if (section) {
            const rect = section.getBoundingClientRect();
            // 섹션의 상단이 화면의 상단 1/3 지점에 있으면 활성화
            if (rect.top <= window.innerHeight / 3) {
                currentSection = sectionId;
            }
        }
    });
    
    // 모든 네비게이션 링크에서 active 클래스 제거
    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.style.color = '#3498db';
        }
    });
}

// =====================================================
// 프로젝트 카드 호버 효과 (선택사항)
// =====================================================

document.addEventListener('DOMContentLoaded', function () {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
        });
        
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
});