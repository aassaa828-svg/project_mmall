    // 햄버거 메뉴 클릭 시 LNB 토글
    const menuToggleBtn = document.getElementById('menu-toggle');
    const lnbLayer = document.getElementById('full-category-lnb');

    menuToggleBtn.addEventListener('click', () => {
        // 'is-open' 클래스를 넣었다 뺐다 함 (CSS에서 display: block 처리)
        lnbLayer.classList.toggle('is-open');
        
        // 접근성을 위해 aria-expanded 속성 변경
        const isExpanded = lnbLayer.classList.contains('is-open');
        menuToggleBtn.setAttribute('aria-expanded', isExpanded);
    });