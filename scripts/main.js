document.addEventListener('DOMContentLoaded', () => {

    const menuToggleBtn = document.getElementById('menu-toggle');
    const lnbLayer = document.getElementById('full-category-lnb');

    // 1. 햄버거 메뉴 및 LNB (전체 카테고리) 로직
    
    // 햄버거 메뉴 토글 기능
    if (menuToggleBtn && lnbLayer) {
        menuToggleBtn.addEventListener('click', () => {
            const isOpen = lnbLayer.classList.contains('is-open');
            
            if (isOpen) {
            closeLnb();
            } else {
            openLnb();
            }
        });
    }

    function openLnb() {
        lnbLayer.classList.add('is-open');
        menuToggleBtn.setAttribute('aria-expanded', 'true');
        resetLnbActive(); // 열릴 때 초기화
    }

    function closeLnb() {
        lnbLayer.classList.remove('is-open');
        menuToggleBtn.setAttribute('aria-expanded', 'false');
        resetLnbActive(); // 닫을 때도 초기화
    }

    // LNB 모든 활성화 상태 제거
    function resetLnbActive() {
        if (!lnbLayer) return;
        const activeItems = lnbLayer.querySelectorAll('.is-active');
        activeItems.forEach(item => item.classList.remove('is-active'));
    }

    // LNB 메뉴 클릭 인터랙션 (Depth 1)
    if (lnbLayer) {
        const depth1Links = lnbLayer.querySelectorAll('.depth1 > li > a');
        depth1Links.forEach(link => {
            link.addEventListener('click', (e) => {
            const parentLi = link.parentElement;
            
            // 하위 메뉴(Depth 2)가 있을 때만 이동 막고 펼치기
            if (parentLi.querySelector('.depth2')) {
                e.preventDefault(); 
                
                const isActive = parentLi.classList.contains('is-active');

                // 같은 라인의 다른 활성화 끄기
                const siblings = lnbLayer.querySelectorAll('.depth1 > li');
                siblings.forEach(li => li.classList.remove('is-active'));

                // 토글 (안 켜져 있었으면 켜기)
                if (!isActive) {
                parentLi.classList.add('is-active');
                }
            }
            // 하위 메뉴 없으면 그냥 링크 이동 (코드 작성 불필요)
            });
        });

        // LNB 메뉴 클릭 인터랙션 (Depth 2)
        const depth2Links = lnbLayer.querySelectorAll('.depth2 > li > a');
        depth2Links.forEach(link => {
            link.addEventListener('click', (e) => {
            const parentLi = link.parentElement;
            
            // 하위 메뉴(Depth 3)가 있을 때만 이동 막고 펼치기
            if (parentLi.querySelector('.depth3')) {
                e.preventDefault(); 
                
                const isActive = parentLi.classList.contains('is-active');

                // 같은 라인의 다른 활성화 끄기
                const currentDepth1 = parentLi.closest('.depth1 > li');
                const siblings = currentDepth1.querySelectorAll('.depth2 > li');
                siblings.forEach(li => li.classList.remove('is-active'));

                if (!isActive) {
                parentLi.classList.add('is-active');
                }
            }
            });
        });
    }

    // 2. 메인 GNB 인터랙션 (Hover 시 활성화 이동)
    const gnbItems = document.querySelectorAll('#gnb-main > ul > li');

    gnbItems.forEach(item => {
        item.addEventListener('click', () => {
        // 1. 기존에 활성화된(is-active) 항목 찾기
        const currentActive = document.querySelector('#gnb-main > ul > li.is-active');
        
        // 2. 있다면 클래스 제거
        if (currentActive) {
            currentActive.classList.remove('is-active');
        }

        // 3. 지금 마우스 올린 항목에 클래스 추가
        item.classList.add('is-active');
        });
    });

/* ===============================swiper=========================================== */
// Swiper 초기화 (라이브러리가 로드되었는지 확인)
if (typeof Swiper !== 'undefined') {
    var mainBannerSwiper = new Swiper(".banner-swiper", {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.5,
        spaceBetween: 20,
        autoplay:true,
        pagination: {
            el: ".main-banner .swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".main-banner .swiper-button-next",
            prevEl: ".main-banner .swiper-button-prev",
        },
        scrollbar: {
            el: ".main-banner .swiper-scrollbar",
            hide: false,
        },
    });

    var brandSwiper = new Swiper(".brand-swiper", {
        slidesPerView: 12,
        spaceBetween:20,
        navigation: {
            nextEl: ".brand-slide .swiper-button-next",
            prevEl: ".brand-slide .swiper-button-prev",
        },
    });

    var bestSwiper = new Swiper(".best-swiper", {
        slidesPerView: 4,
        spaceBetween:20,
        scrollbar: {
            el : ".best50 .swiper-scrollbar",
            hide : false,
        },
    });

    var saleSwiper = new Swiper(".sale-swiper", {
        slidesPerView: 4,
        spaceBetween:20,
        scrollbar: {
            el : ".sale .swiper-scrollbar",
            hide : false,
        },
    });
    
    var redSwiper = new Swiper(".membership .red-swiper", {
        slidesPerView: 6,
        spaceBetween: 12,
        observer: true,       // 스타일이 변경되면 감지해서 갱신
        observeParents: true, // 부모 요소(mproduct)의 변화도 감지
    });
    var greenSwiper = new Swiper(".membership .green-swiper", {
        slidesPerView: 6,
        spaceBetween: 12,
        observer: true,       // 스타일이 변경되면 감지해서 갱신
        observeParents: true
    });
    var pinkSwiper = new Swiper(".membership .pink-swiper", {
        slidesPerView: 6,
        spaceBetween: 12,
        observer: true,       // 스타일이 변경되면 감지해서 갱신
        observeParents: true
    });

var adSwiper = new Swiper(".ad-swiper", {
    slidesPerView: 3,
    spaceBetween: 20,   
    scrollbar: {
        el : ".ad-section .swiper-scrollbar",
        hide : false,
        draggable: true, 
    },
});

    var newSwiper = new Swiper(".new-swiper", {
        slidesPerView: 6.5,
        spaceBetween:20,
        scrollbar: {
            el : ".newitem .swiper-scrollbar",
            hide : false,
        },
    });

        var mdSwiper = new Swiper(".mdpick-swiper", {
        slidesPerView: 4,
        spaceBetween:20,
        scrollbar: {
            el : ".mdpick .swiper-scrollbar",
            hide : false,
        },
    });

        var weekSwiper = new Swiper(".week-swiper", {
        slidesPerView: 6.5,
        spaceBetween:20,
        scrollbar: {
            el : ".weekly-best .swiper-scrollbar",
            hide : false,
        },
    });

    var reviewSwiper = new Swiper(".review-swiper", {
    slidesPerView: 5,   // 한 화면에 5개 보이기
    spaceBetween: 20,   // 카드 사이 간격 20px
    grabCursor: true,   // 마우스 커서 손모양
    
    // 스크롤바 설정
    scrollbar: {
        el: ".review-swiper .swiper-scrollbar",
        draggable: true, // 드래그 가능하게
        hide: false,     // 항상 보이게
    },
    })
}
/* ============================상품 카드 기능 (관심 상품 토글 및 가격 자동 계산)===================================== */

/**
 * 금액을 천 단위로 포맷팅하고 '원'을 붙여주는 함수
 * @param {number} price - 금액 (숫자)
 * @returns {string} - 포맷된 금액 문자열
 */
const formatPrice = (price) => {
    // Math.round로 반올림하여 소수점을 제거하고 포맷팅
    return Math.round(price).toLocaleString('ko-KR') + '원';
};

/**
 * 모든 상품 카드에 대한 기능을 초기화합니다.
 */
const initProductCards = () => {
    // 모든 상품 카드를 선택합니다.
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        // 1. 가격 계산 및 표시
        const originalPrice = parseInt(card.dataset.originalPrice) || 0;
        const discountRate = parseInt(card.dataset.discountRate) || 0;

        // 할인율 적용 금액 계산: 원가 * (1 - 할인율/100)
        const salePrice = originalPrice * (1 - discountRate / 100);

        // 가격 표시 요소 찾기
        const discountRateEl = card.querySelector('.discount-rate');
        const originalPriceEl = card.querySelector('.original-price');
        const salePriceEl = card.querySelector('.sale-price');

        if (discountRateEl && originalPriceEl && salePriceEl) {
            // HTML에 가격 정보 업데이트
            discountRateEl.textContent = `${discountRate}%`;
            originalPriceEl.textContent = formatPrice(originalPrice);
            salePriceEl.textContent = formatPrice(salePrice);

            // 🚨 로직: 할인율이 0%인 경우 .discount-rate와 .original-price 요소를 visibility: hidden으로 숨김
            if (discountRate > 0) {
                discountRateEl.textContent = `${discountRate}%`;
                
                // 할인율 및 원가 표시 요소를 보이게 설정
                discountRateEl.style.visibility = 'visible';
                originalPriceEl.style.visibility = 'visible';
                
                // 원가 표시
                originalPriceEl.textContent = formatPrice(originalPrice);
            } else {
                // 할인율이 0% 이하면 요소를 숨겨 위치는 유지하고 보이지 않게 함
                discountRateEl.style.visibility = 'hidden';
                originalPriceEl.style.visibility = 'hidden';
                
                // 텍스트는 채워두지만 보이지 않음
                originalPriceEl.textContent = formatPrice(originalPrice); 
            }
        }

        // 2. 관심 상품 (Wish Button) 토글 기능
        const wishButton = card.querySelector('.wish-button');
        if (wishButton) {
            const wishIcon = wishButton.querySelector('#wish-icon'); // 이미지 태그 선택
            
            // 초기 찜 상태 설정 (HTML data-is-wished 값 이용)
            let isWished = card.dataset.isWished === 'true'; 

            // 초기 이미지 경로 설정
            if (wishIcon) {
                if (isWished) {
                    wishIcon.src = wishIcon.src.replace('_off.png', '_on.png');
                }

                // 버튼 클릭 이벤트 리스너 추가
                wishButton.addEventListener('click', (e) => {
                    e.stopPropagation(); // 상위로 이벤트 전파 방지 (필수)
                    e.preventDefault();  // [추가] 기본 동작(새로고침/스크롤 이동) 방지 (필수)

                    isWished = !isWished;
                    
                    // 이미지 경로 변경 로직
                    if (isWished) {
                        // 찜함: off -> on
                        wishIcon.src = wishIcon.src.replace('_off.png', '_on.png');
                    } else {
                        // 찜 해제: on -> off
                        wishIcon.src = wishIcon.src.replace('_on.png', '_off.png');
                    }
                    
                    // 데이터 속성 값 업데이트 
                    card.dataset.isWished = isWished; 

                    console.log(`상품 찜 상태가 ${isWished ? '찜' : '찜 해제'}로 변경되었습니다.`);
                });
            }
        }
    });
};

// 문서 로드 완료 후 함수 실행하여 모든 상품 카드 초기화
document.addEventListener('DOMContentLoaded', initProductCards);

/* ============================ [추가] 빈 링크 새로고침 방지 기능 ===================================== */
// 문서 내의 모든 클릭 이벤트 감지 (이벤트 위임 - 나중에 생성된 요소도 적용됨)
document.addEventListener('click', (e) => {
    // 클릭된 요소가 a 태그이거나 a 태그 내부의 요소인지 확인 (closest 사용)
    const anchor = e.target.closest('a');
    
    if (anchor) {
        const href = anchor.getAttribute('href');
        
        // 1. href 속성이 아예 없거나 (null)
        // 2. href가 "#" 이거나
        // 3. href가 비어있는 문자열("")인 경우
        if (!href || href === '#' || href.trim() === '') {
            e.preventDefault(); // 기본 동작(새로고침/상단이동) 막기
            // console.log('빈 링크 클릭 방지됨'); 
        }
    }
});

/* ========================멤버십상품 펼침 닫기================================== */
// 모든 버튼과 모든 상품 섹션 선택
const openBtns = document.querySelectorAll('.openbtn');
const allProducts = document.querySelectorAll('.mproduct');

openBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
        // 1. 클릭한 버튼의 부모(.mproduct) 찾기 (주인공)
        const currentProduct = btn.closest('.mproduct');

        // 2. 모든 섹션을 돌면서 검사
        allProducts.forEach(function(product) {
            // "주인공"이 아닌 다른 섹션들은 모두 닫기(active 제거)
            if (product !== currentProduct) {
                product.classList.remove('active');
            }
        });

        // 3. 주인공 섹션은 토글 (닫혀있으면 열고, 열려있으면 닫음)
        // 무조건 열기만 하고 싶다면 .add('active')를 쓰면 되지만,
        // 보통 다시 누르면 닫히는 게 자연스러우므로 toggle 유지
        currentProduct.classList.toggle('active');
    });
});
});