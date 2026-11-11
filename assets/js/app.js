/**
 * THE LITTLE LOOM — Artisanal E-Commerce Interactive Script
 * Clean, lightweight, modular ES6 JavaScript
 * Currency: Indian Rupee (₹)
 * PRD Source of Truth: The Little Loom | "Little Thread Big Love"
 * Contact: Rajanandini Dash | Bhubaneswar, Odisha
 */

(function() {
  'use strict';

  // -------------------------------------------------------------
  // 1. PRODUCT CATALOG DATA (PRD: CROCHET KEYCHAINS, FLOWERS,
  //    ACCESSORIES, DECORATIVE CANDLES & CUTE GIFTING ITEMS)
  // -------------------------------------------------------------
  const PRODUCTS = [
    // --- 1. CROCHET KEYCHAINS & CHARMS ---
    {
      id: 'loom-01',
      name: 'Mini Crocheted Strawberry Charm Keychain',
      category: 'keychains',
      categoryLabel: 'Crochet Keychains',
      price: 249,
      originalPrice: 299,
      rating: 5.0,
      reviewsCount: 84,
      badge: 'Bestseller',
      image: 'assets/images/Pocket Charms.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Pocket Charms.jpg',
      description: 'Delightfully tiny strawberry hand-crocheted from mercerized cotton thread, dotted with glass seed beads, topped with a leaf cap, white blossom, and antique brass lobster clasp.',
      materials: '100% Mercerized Cotton Thread, Glass Seed Beads, Brass Clasp',
      dimensions: '1.75" fruit length, 3.5" total with swivel clasp',
      care: 'Spot clean with a damp soft cloth.',
      leadTime: 'Ready to ship'
    },
    {
      id: 'loom-02',
      name: 'Daisy Bloom Macramé Wristlet Keychain',
      category: 'keychains',
      categoryLabel: 'Crochet Keychains',
      price: 299,
      originalPrice: 349,
      rating: 4.9,
      reviewsCount: 52,
      badge: 'Student Favorite',
      image: 'assets/images/Macrame Keychains.jpg?purpose=fullsize?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Pocket Charms.jpg',
      description: 'Soft bohemian wristlet keychain hand-knotted from recycled sage and cream cotton cord with seven woven daisy flowers and sturdy brass hardware. Slips comfortably over the wrist.',
      materials: '100% Recycled Cotton Cord, Solid Brass Lobster Clasp & Ring',
      dimensions: '7.5" total length (Fits comfortably over wrist)',
      care: 'Spot clean with mild soap and air dry.',
      leadTime: 'Ready to ship'
    },
    {
      id: 'loom-03',
      name: 'Little Teddy Bear Pocket Charm Keychain',
      category: 'keychains',
      categoryLabel: 'Crochet Keychains',
      price: 349,
      originalPrice: 399,
      rating: 5.0,
      reviewsCount: 68,
      badge: 'Artisan Mascot',
      image: 'assets/images/Teddy Keychain.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Wool and Knit.jpg',
      description: 'Miniature heirloom teddy bear hand-crocheted with oatmeal cotton yarn and finished with hand-embroidered facial features and a tiny sage green knit scarf.',
      materials: 'Organic Cotton Yarn, Hypoallergenic Wool Fill, Brass Swivel Ring',
      dimensions: '3.5" height x 2.2" width',
      care: 'Gentle spot clean with cool water; dry in shade.',
      leadTime: 'Hand-crocheted in 1-2 days'
    },
    {
      id: 'loom-04',
      name: 'Hand-Stitched Felt Acorn & Oak Leaf Charm',
      category: 'keychains',
      categoryLabel: 'Crochet Keychains',
      price: 249,
      originalPrice: null,
      rating: 4.8,
      reviewsCount: 29,
      badge: 'Woodsy Touch',
      image: 'assets/images/Acorn Keychain.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Pocket Charms.jpg',
      description: 'Crafted from pure wool felt with a genuine harvested acorn cap preserved with beeswax, accented with a hand-stitched golden oak leaf and waxed linen cord.',
      materials: '100% Wool Felt, Foraged Acorn Cap, Waxed Linen Cord, Brass Ring',
      dimensions: '3.5" total drop',
      care: 'Keep dry. Dust gently with a soft brush.',
      leadTime: 'Ready to ship'
    },

    // --- 2. CROCHET FLOWERS & BOUQUETS ---
    {
      id: 'loom-05',
      name: 'Sunlit Crochet Sunflower Everlasting Stem',
      category: 'flowers',
      categoryLabel: 'Crochet Flowers',
      price: 399,
      originalPrice: 449,
      rating: 5.0,
      reviewsCount: 96,
      badge: 'Bestseller',
      image: 'assets/images/Crochet Sunflower.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Wool and Knit.jpg',
      description: 'Handmade crochet sunflower with a textured chocolate-brown center and radiant golden petals on a bendable green wrapped stem. A joyful forever-bloom that never wilts.',
      materials: '100% Mercerized Cotton Yarn, Flexible Floral Wire, Kraft Wrap',
      dimensions: '11.5" stem height, 4.2" flower diameter',
      care: 'Dust gently with a clean soft brush or cool hairdryer on low.',
      leadTime: 'Ready to ship'
    },
    {
      id: 'loom-06',
      name: 'Pastel Tulip Blossom Trio (Set of 3)',
      category: 'flowers',
      categoryLabel: 'Crochet Flowers',
      price: 699,
      originalPrice: 799,
      rating: 5.0,
      reviewsCount: 72,
      badge: 'Everlasting Bloom',
      image: 'assets/images/Pastel Tulip.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Wool and Knit.jpg',
      description: 'A delicate bouquet of three hand-crocheted tulips in soft blush, warm cream, and gentle lavender. Tied with natural jute twine and tucked with a sweet handwritten gift note.',
      materials: 'Soft Combed Cotton Yarn, Flexible Floral Stem, Jute Ribbon',
      dimensions: '10.5" stem length each',
      care: 'Keep away from direct rain and prolonged harsh sunlight.',
      leadTime: 'Hand-crocheted in 2-3 days'
    },
    {
      id: 'loom-07',
      name: 'Dried Lavender & Chamomile Crochet Sprigs',
      category: 'flowers',
      categoryLabel: 'Crochet Flowers',
      price: 449,
      originalPrice: 499,
      rating: 4.9,
      reviewsCount: 41,
      badge: 'Peace & Calm',
      image: 'assets/images/Lavender and Chamomile.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Wool and Knit.jpg',
      description: 'Delicate hand-crocheted sprigs of French lavender and cheerful wild chamomile flowers. Scented subtly with pure essential oil for a calming bedside or desk presence.',
      materials: 'Organic Cotton Floss, French Lavender Essence, Wire Stem',
      dimensions: '9" total height',
      care: 'Keep indoors; refresh with a drop of lavender essential oil anytime.',
      leadTime: 'Ready to ship'
    },
    {
      id: 'loom-08',
      name: 'Smiling Wild Daisy Desk Pot',
      category: 'flowers',
      categoryLabel: 'Crochet Flowers',
      price: 549,
      originalPrice: 620,
      rating: 4.9,
      reviewsCount: 58,
      badge: 'Desk Companion',
      image: 'assets/images/Wild Daisy Desk Pot.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Wool and Knit.jpg',
      description: 'Handmade potted crochet plant featuring three smiling white daisies blooming from a cozy textured crochet soil base in a soft terracotta cup. The ultimate study desk mood booster.',
      materials: 'Organic Cotton Yarn, Recycled Wool Stuffing, Ceramic-Weight Base',
      dimensions: '5" height x 3.5" width',
      care: 'Dust gently; do not water.',
      leadTime: 'Ready to ship'
    },

    // --- 3. CROCHET ACCESSORIES ---
    {
      id: 'loom-09',
      name: 'Cozy Cable-Knit Mug Hugger',
      category: 'accessories',
      categoryLabel: 'Crochet Accessories',
      price: 299,
      originalPrice: 349,
      rating: 4.9,
      reviewsCount: 63,
      badge: 'Chai & Coffee',
      image: 'assets/images/Coffee Mug Hugger.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Wool and Knit.jpg',
      description: 'Hand-knitted sleeve crafted with soft oatmeal wool-blend yarn and a real coconut wood button. Keeps your morning brew warm while comforting your hands on cool study mornings.',
      materials: '70% Fine Wool, 30% Baby Alpaca, Coconut Wood Button',
      dimensions: 'Adjustable wrap for standard 11-15 oz ceramic mugs',
      care: 'Hand wash in lukewarm water with mild soap; lay flat to dry.',
      leadTime: 'Ready to ship'
    },
    {
      id: 'loom-10',
      name: 'Daisy Bloom Coasters (Set of 4)',
      category: 'accessories',
      categoryLabel: 'Crochet Accessories',
      price: 499,
      originalPrice: 599,
      rating: 4.9,
      reviewsCount: 48,
      badge: 'New Batch',
      image: 'assets/images/Daisy Bloom Coasters.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Wool and Knit.jpg',
      description: 'Set of four hand-crocheted cotton coasters shaped like blooming daisies with honey-gold centers and warm cream petals. Naturally absorbs glass condensation.',
      materials: '100% Natural Combed Cotton Thread',
      dimensions: '4.75" diameter each',
      care: 'Hand wash or gentle cycle in cold water; lay flat to dry.',
      leadTime: 'Ready to ship'
    },
    {
      id: 'loom-11',
      name: 'Cloud-Soft Crochet Hair Scrunchie Duo',
      category: 'accessories',
      categoryLabel: 'Crochet Accessories',
      price: 249,
      originalPrice: 299,
      rating: 4.8,
      reviewsCount: 37,
      badge: 'Gentle on Hair',
      image: 'assets/images/Scrunchie.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Wool and Knit.jpg',
      description: 'Pair of cloud-soft crocheted scrunchies in sage green and warm cream. Soft against delicate hair strands, prevents friction breakage, and looks lovely on wrists.',
      materials: '100% Soft Organic Cotton Yarn, High-Elastic Interior Band',
      dimensions: '4.5" expanded diameter',
      care: 'Hand wash in cold water; air dry flat.',
      leadTime: 'Ready to ship'
    },
    {
      id: 'loom-12',
      name: 'Chunky Merino Wool Throw Blanket',
      category: 'accessories',
      categoryLabel: 'Crochet Accessories',
      price: 3499,
      originalPrice: 3999,
      rating: 5.0,
      reviewsCount: 42,
      badge: 'Heirloom Piece',
      image: 'assets/images/Merino Wool Blanket.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Wool and Knit.jpg',
      description: 'Hand-knit with 100% cruelty-free, superfine merino roving wool. Exceptionally airy, cloud-soft, and comforting for slow Sunday morning coffee and quiet reading sessions.',
      materials: '100% Superfine Merino Wool (21 Micron)',
      dimensions: '48" x 58" (Generous Lap & Sofa Size)',
      care: 'Spot clean or gentle dry clean only. Avoid harsh friction.',
      leadTime: 'Crafted in 4-6 days'
    },

    // --- 4. DECORATIVE CANDLES ---
    {
      id: 'loom-13',
      name: 'Wild Honey & Sandalwood Amber Candle',
      category: 'candles',
      categoryLabel: 'Decorative Candles',
      price: 599,
      originalPrice: 699,
      rating: 5.0,
      reviewsCount: 88,
      badge: 'Signature Scent',
      image: 'assets/images/Sandalwood Candle.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Botanical Glow.jpg',
      description: 'Hand-poured into a warm fluted amber glass vessel with an FSC-certified crackling wooden wick. Subtle, relaxing notes of golden wildflower honey, smoked sandalwood, and tonka bean.',
      materials: '100% Pure Soy Wax, FSC Wooden Wick, Fine Botanical Oils',
      dimensions: '8 oz amber glass tumbler (Approx. 45 hour clean burn)',
      care: 'Allow melt pool to reach all outer edges on first burn. Trim wick before lighting.',
      leadTime: 'Ready to ship'
    },
    {
      id: 'loom-14',
      name: 'Cloud Bubble Geometric Soy Candle',
      category: 'candles',
      categoryLabel: 'Decorative Candles',
      price: 399,
      originalPrice: 449,
      rating: 4.9,
      reviewsCount: 56,
      badge: 'Aesthetic Decor',
      image: 'assets/images/Bubble Candle.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Botanical Glow.jpg',
      description: 'Sculptural sphere-cube soy candle hand-cast in creamy oat and soft terracotta tones. Infused with a subtle hint of Madagascar vanilla bean for calm cozy moments.',
      materials: '100% Pure Soy Wax, Natural Earth Pigments, Braided Cotton Wick',
      dimensions: '2.5" cube (Approx. 22 hour burn)',
      care: 'Place on a heat-safe candle plate or coaster before lighting.',
      leadTime: 'Ready to ship'
    },
    {
      id: 'loom-15',
      name: 'Ribbed Arch Pillar Soy Candle',
      category: 'candles',
      categoryLabel: 'Decorative Candles',
      price: 449,
      originalPrice: 499,
      rating: 4.8,
      reviewsCount: 39,
      badge: 'Studio Cast',
      image: 'assets/images/Arch Candle.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Botanical Glow.jpg',
      description: 'Hand-cast architectural arch candle with delicate fluted ribs. Made with clean unscented soy wax, creating an understated sculptural focal point on bookshelves and mantels.',
      materials: '100% Pure Soy Wax, Lead-Free Braided Cotton Wick',
      dimensions: '5.5" height x 2.75" width (Approx. 35 hour burn)',
      care: 'Burn on a flat ceramic dish away from drafty windows.',
      leadTime: 'Ready to ship'
    },
    {
      id: 'loom-16',
      name: 'Botanical Pressed Flower Wax Sachet',
      category: 'candles',
      categoryLabel: 'Decorative Candles',
      price: 299,
      originalPrice: 349,
      rating: 4.9,
      reviewsCount: 45,
      badge: 'Gift Favorite',
      image: 'assets/images/Wax Pressed Sachet.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Botanical Glow.jpg',
      description: 'Hand-poured botanical wax tablet embedded with real dried lavender sprigs, chamomile, and rose petals. Strung on natural jute twine to perfume wardrobes, drawers, or cars.',
      materials: 'Pure Soy Wax, French Lavender Essential Oil, Real Dried Botanicals, Jute Twine',
      dimensions: '4" x 2.25" x 0.5"',
      care: 'Keep away from direct heat and direct hot sunlight. Lasts 4-6 months.',
      leadTime: 'Ready to ship'
    },

    // --- 5. CUTE GIFTING ITEMS & KEEPSAKES ---
    {
      id: 'loom-17',
      name: 'Ceramic Speckled Match Striker Pot',
      category: 'gifting',
      categoryLabel: 'Cute Gifting Items',
      price: 499,
      originalPrice: 599,
      rating: 5.0,
      reviewsCount: 52,
      badge: 'Stoneware Pot',
      image: 'assets/images/Match Pot.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Botanical Glow.jpg',
      description: 'Handmade speckled stoneware pot with a tactile strike-anywhere base. Comes filled with 50 natural wooden matchsticks with warm honey-tinted tips.',
      materials: 'Mid-Fire Stoneware Clay, Matte Cream Glaze, Natural Matchsticks',
      dimensions: '2.75" height x 2.25" diameter',
      care: 'Wipe clean with a dry soft cloth.',
      leadTime: 'Ready to ship'
    },
    {
      id: 'loom-18',
      name: 'Hand-Embroidered Botanical Bento Bag',
      category: 'gifting',
      categoryLabel: 'Cute Gifting Items',
      price: 649,
      originalPrice: 749,
      rating: 4.9,
      reviewsCount: 34,
      badge: 'Hand-Stitched',
      image: 'assets/images/Bento Bag.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Wool and Knit.jpg',
      description: 'Sewn from heavy textured oatmeal linen with hand-embroidered sage floral branches. Ties effortlessly into a knot handle for lunches, knit projects, or gifting presentation.',
      materials: '100% Organic Oatmeal Linen, Cotton Embroidery Floss',
      dimensions: '12" base width x 10" height when tied',
      care: 'Hand wash in cold water; air dry and press with a warm iron.',
      leadTime: 'Hand-stitched in 2 days'
    },
    {
      id: 'loom-19',
      name: 'Linen Aromatherapy Lavender Eye Pillow',
      category: 'gifting',
      categoryLabel: 'Cute Gifting Items',
      price: 449,
      originalPrice: 499,
      rating: 4.9,
      reviewsCount: 42,
      badge: 'Rest & Calm',
      image: 'assets/images/Eye Pillow.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Wool and Knit.jpg',
      description: 'Crafted from washed oatmeal linen and filled with organic flaxseeds and fragrant French lavender buds. Can be chilled or warmed to soothe tired eyes after long study hours.',
      materials: '100% Natural Flax Linen, Organic Flaxseeds, Dried Lavender Buds',
      dimensions: '8.5" length x 3.75" width',
      care: 'Removable linen slipcover is gently washable in cold water.',
      leadTime: 'Ready to ship'
    },
    {
      id: 'loom-20',
      name: '"Little Hug" Curated Artisan Gift Box',
      category: 'gifting',
      categoryLabel: 'Cute Gifting Items',
      price: 999,
      originalPrice: 1199,
      rating: 5.0,
      reviewsCount: 89,
      badge: 'Complete Gift Set',
      image: 'assets/images/Gift Box.jpg?auto=format&fit=crop&w=800&q=80',
      fallbackImage: 'assets/images/Elegant Gold Jewellery.png',
      description: 'The ultimate thoughtful hamper: features 1 crochet sunflower stem, 1 strawberry charm keychain, 1 mini vanilla bubble candle, and a handwritten card tucked into a recycled kraft box.',
      materials: 'Recycled Kraft Gift Box, Shredded Paper Cushion, Raw Jute Bow',
      dimensions: '8" x 6" x 4" gift box',
      care: 'Gift-ready straight out of delivery package.',
      leadTime: 'Ready to ship'
    }
  ];

  // Helper for Indian Rupee currency formatting (Bhubaneswar, Odisha)
  function formatRupees(amount) {
    return '₹' + Math.round(amount).toLocaleString('en-IN');
  }

  // -------------------------------------------------------------
  // 2. STATE MANAGEMENT
  // -------------------------------------------------------------
  const state = {
    cart: JSON.parse(localStorage.getItem('littleloom_cart') || '[]'),
    wishlist: JSON.parse(localStorage.getItem('littleloom_wishlist') || '[]'),
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'featured',
    appliedPromo: null,
    discountRate: 0,
    shippingThreshold: 999 // Free gift packaging & delivery over ₹999
  };

  // -------------------------------------------------------------
  // 3. DOM ELEMENTS
  // -------------------------------------------------------------
  const elements = {
    header: document.getElementById('siteHeader'),
    cartBtn: document.getElementById('headerCartBtn'),
    cartBadge: document.getElementById('cartBadgeCount'),
    wishlistBadge: document.getElementById('wishlistBadgeCount'),
    cartDrawerBackdrop: document.getElementById('cartDrawerBackdrop'),
    closeCartBtn: document.getElementById('closeCartBtn'),
    cartItemsContainer: document.getElementById('cartItemsList'),
    cartSubtotal: document.getElementById('cartSubtotalAmount'),
    cartShippingBar: document.getElementById('cartShippingBar'),
    cartShippingNotice: document.getElementById('cartShippingNotice'),
    cartCheckoutBtn: document.getElementById('cartCheckoutBtn'),
    promoInput: document.getElementById('cartPromoInput'),
    promoApplyBtn: document.getElementById('cartPromoApplyBtn'),
    promoMessage: document.getElementById('cartPromoMessage'),
    productGrid: document.getElementById('productGrid'),
    productCount: document.getElementById('productResultCount'),
    filterTabs: document.querySelectorAll('[data-filter]'),
    searchInput: document.getElementById('productSearchInput'),
    sortSelect: document.getElementById('productSortSelect'),
    quickViewModal: document.getElementById('quickViewModal'),
    closeQuickViewBtn: document.getElementById('closeQuickViewBtn'),
    quickViewContent: document.getElementById('quickViewContent'),
    checkoutModal: document.getElementById('checkoutModal'),
    closeCheckoutBtn: document.getElementById('closeCheckoutBtn'),
    checkoutForm: document.getElementById('checkoutForm'),
    checkoutSummaryList: document.getElementById('checkoutSummaryList'),
    checkoutTotalAmount: document.getElementById('checkoutTotalAmount'),
    orderSuccessModal: document.getElementById('orderSuccessModal'),
    closeOrderSuccessBtn: document.getElementById('closeOrderSuccessBtn'),
    toastContainer: document.getElementById('toastContainer'),
    backToTopBtn: document.getElementById('backToTopBtn'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    mobileNavDrawer: document.getElementById('mobileNavDrawer'),
    closeMobileMenuBtn: document.getElementById('closeMobileMenuBtn'),
    newsletterForm: document.getElementById('newsletterForm'),
    customInquiryForm: document.getElementById('customInquiryForm'),
    faqItems: document.querySelectorAll('.faq-item'),
    testimonialPrev: document.getElementById('testimonialPrev'),
    testimonialNext: document.getElementById('testimonialNext'),
    testimonialDotsContainer: document.getElementById('testimonialDots')
  };

  // -------------------------------------------------------------
  // 4. TOAST NOTIFICATIONS
  // -------------------------------------------------------------
  function showToast(title, message, iconType = 'check') {
    if (!elements.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';

    let iconSvg = '';
    if (iconType === 'check') {
      iconSvg = `<svg class="w-4 h-4 text-[#B8795E] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>`;
    } else if (iconType === 'heart') {
      iconSvg = `<svg class="w-4 h-4 text-[#B8795E] flex-shrink-0 fill-[#B8795E]" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>`;
    } else {
      iconSvg = `<svg class="w-4 h-4 text-[#A3AD91] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`;
    }

    toast.innerHTML = `
      ${iconSvg}
      <div class="flex-1 min-w-0">
        <p class="font-medium text-xs text-[#40352F] tracking-wide">${title}</p>
        ${message ? `<p class="text-[0.72rem] text-[#827267] mt-0.5 truncate">${message}</p>` : ''}
      </div>
    `;

    elements.toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('exit');
      setTimeout(() => {
        toast.remove();
      }, 250);
    }, 3200);
  }

  // -------------------------------------------------------------
  // 5. CART SYSTEM
  // -------------------------------------------------------------
  function saveCart() {
    localStorage.setItem('littleloom_cart', JSON.stringify(state.cart));
    updateCartUI();
  }

  function addToCart(productId, quantity = 1, showFeedback = true) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingIndex = state.cart.findIndex(item => item.id === productId);
    if (existingIndex > -1) {
      state.cart[existingIndex].quantity += quantity;
    } else {
      state.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        fallbackImage: product.fallbackImage,
        categoryLabel: product.categoryLabel,
        quantity: quantity
      });
    }

    saveCart();

    if (showFeedback) {
      showToast('Added to basket', `${product.name} (x${quantity})`);
      openCartDrawer();
    }
  }

  function removeFromCart(productId) {
    const item = state.cart.find(i => i.id === productId);
    state.cart = state.cart.filter(i => i.id !== productId);
    saveCart();
    if (item) {
      showToast('Removed from basket', item.name, 'info');
    }
  }

  function updateQuantity(productId, delta) {
    const item = state.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      saveCart();
    }
  }

  function getCartSubtotal() {
    return state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  function getTotalItemsCount() {
    return state.cart.reduce((count, item) => count + item.quantity, 0);
  }

  function updateCartUI() {
    const totalCount = getTotalItemsCount();
    const subtotal = getCartSubtotal();

    // Update badges
    if (elements.cartBadge) {
      elements.cartBadge.textContent = totalCount;
      elements.cartBadge.classList.toggle('hidden', totalCount === 0);
    }

    // Render Cart Items
    if (!elements.cartItemsContainer) return;

    if (state.cart.length === 0) {
      elements.cartItemsContainer.innerHTML = `
        <div class="h-full flex flex-col items-center justify-center py-16 px-6 text-center">
          <div class="w-16 h-16 rounded-full bg-[#E9DFD1]/50 flex items-center justify-center text-[#827267] mb-4">
            <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h4 class="font-serif text-xl text-[#40352F] mb-1.5 font-medium">Your basket is empty</h4>
          <p class="text-xs text-[#827267] max-w-xs mb-6 leading-relaxed">Discover our slow-made crochet keychains, everlasting flowers, and cozy treasures.</p>
          <button onclick="document.getElementById('cartDrawerBackdrop').classList.remove('open'); window.location.hash='#shop';" class="btn-primary text-xs py-2 px-5">
            Explore Handcrafted Goods
          </button>
        </div>
      `;

      if (elements.cartSubtotal) elements.cartSubtotal.textContent = '₹0';
      if (elements.cartShippingBar) elements.cartShippingBar.style.width = '0%';
      if (elements.cartShippingNotice) elements.cartShippingNotice.textContent = `Add ${formatRupees(state.shippingThreshold)} more for Complimentary Gift Box & Delivery`;
      return;
    }

    // Render items list
    let itemsHTML = '<div class="divide-y divide-[#E9DFD1]">';
    state.cart.forEach(item => {
      const lineTotal = item.price * item.quantity;
      itemsHTML += `
        <div class="py-3.5 flex gap-3.5 items-center">
          <img src="${item.image}" alt="${item.name}" onerror="this.onerror=null; this.src='${item.fallbackImage || 'assets/images/logo.svg'}';" class="w-16 h-16 rounded object-cover border border-[#E9DFD1] flex-shrink-0 bg-[#F3EFE7]">
          <div class="flex-1 min-w-0">
            <p class="text-[0.65rem] uppercase tracking-wider text-[#827267] font-medium">${item.categoryLabel}</p>
            <h5 class="text-xs font-medium text-[#40352F] truncate mt-0.5">${item.name}</h5>
            <p class="text-[0.75rem] text-[#B8795E] mt-0.5">${formatRupees(item.price)} each</p>
            
            <div class="flex items-center justify-between mt-2">
              <div class="qty-control">
                <button class="qty-btn" onclick="window.LittleLoom.updateQuantity('${item.id}', -1)" aria-label="Decrease quantity">−</button>
                <span class="qty-val">${item.quantity}</span>
                <button class="qty-btn" onclick="window.LittleLoom.updateQuantity('${item.id}', 1)" aria-label="Increase quantity">+</button>
              </div>
              <span class="text-xs font-semibold text-[#40352F]">${formatRupees(lineTotal)}</span>
            </div>
          </div>
          <button onclick="window.LittleLoom.removeFromCart('${item.id}')" class="text-[#827267] hover:text-[#B8795E] p-1.5 transition-colors" title="Remove item">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
        </div>
      `;
    });
    itemsHTML += '</div>';

    elements.cartItemsContainer.innerHTML = itemsHTML;

    // Calculate totals & discounts
    let discountAmount = 0;
    if (state.discountRate > 0) {
      discountAmount = subtotal * state.discountRate;
    }
    const finalSubtotal = Math.max(0, subtotal - discountAmount);

    if (elements.cartSubtotal) {
      elements.cartSubtotal.textContent = formatRupees(finalSubtotal);
    }

    // Shipping progress
    const remaining = state.shippingThreshold - subtotal;
    const progressPercent = Math.min(100, (subtotal / state.shippingThreshold) * 100);

    if (elements.cartShippingBar) {
      elements.cartShippingBar.style.width = `${progressPercent}%`;
    }

    if (elements.cartShippingNotice) {
      if (remaining <= 0) {
        elements.cartShippingNotice.innerHTML = `
          <span class="text-[#6C775B] font-medium flex items-center justify-center gap-1.5 text-xs">
            <svg class="w-3.5 h-3.5 text-[#A3AD91]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
            Unlocked: Complimentary Gift Box & Free Dispatch
          </span>
        `;
      } else {
        elements.cartShippingNotice.textContent = `Add ${formatRupees(remaining)} more for Complimentary Gift Box & Delivery`;
      }
    }
  }

  function openCartDrawer() {
    if (elements.cartDrawerBackdrop) {
      elements.cartDrawerBackdrop.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    if (elements.cartDrawerBackdrop) {
      elements.cartDrawerBackdrop.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // -------------------------------------------------------------
  // 6. PROMO CODE HANDLER
  // -------------------------------------------------------------
  function applyPromoCode() {
    if (!elements.promoInput) return;
    const code = elements.promoInput.value.trim().toUpperCase();

    if (code === 'WARMTH10') {
      state.appliedPromo = 'WARMTH10';
      state.discountRate = 0.10;
      if (elements.promoMessage) {
        elements.promoMessage.innerHTML = `<span class="text-xs text-[#6C775B]">✓ Code 'WARMTH10' applied (10% off)!</span>`;
      }
      showToast('Promo Applied', '10% off your order', 'check');
      updateCartUI();
    } else if (code === 'LITTLELOVE') {
      state.appliedPromo = 'LITTLELOVE';
      state.discountRate = 0.15;
      if (elements.promoMessage) {
        elements.promoMessage.innerHTML = `<span class="text-xs text-[#6C775B]">✓ Code 'LITTLELOVE' applied (15% off)!</span>`;
      }
      showToast('Big Love Discount', '15% off entire basket', 'check');
      updateCartUI();
    } else if (code === 'STUDENT15') {
      state.appliedPromo = 'STUDENT15';
      state.discountRate = 0.15;
      if (elements.promoMessage) {
        elements.promoMessage.innerHTML = `<span class="text-xs text-[#6C775B]">✓ Student Pass 'STUDENT15' applied (15% off)!</span>`;
      }
      showToast('Student Special', '15% off handcrafted treats', 'check');
      updateCartUI();
    } else if (code === 'COZYGIFT') {
      state.appliedPromo = 'COZYGIFT';
      state.shippingThreshold = 0;
      if (elements.promoMessage) {
        elements.promoMessage.innerHTML = `<span class="text-xs text-[#6C775B]">✓ 'COZYGIFT' applied (Free Gift Box & Delivery)!</span>`;
      }
      showToast('Gift Delivery', 'Free gift packaging unlocked', 'check');
      updateCartUI();
    } else {
      if (elements.promoMessage) {
        elements.promoMessage.innerHTML = `<span class="text-xs text-[#B8795E]">Code not recognized. Try 'WARMTH10' or 'STUDENT15'</span>`;
      }
    }
  }

  // -------------------------------------------------------------
  // 7. WISHLIST MANAGEMENT
  // -------------------------------------------------------------
  function toggleWishlist(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const index = state.wishlist.indexOf(productId);
    if (index > -1) {
      state.wishlist.splice(index, 1);
      showToast('Removed from favorites', product.name, 'info');
    } else {
      state.wishlist.push(productId);
      showToast('Saved to favorites', product.name, 'heart');
    }

    localStorage.setItem('littleloom_wishlist', JSON.stringify(state.wishlist));
    updateWishlistUI();
    renderProducts();
  }

  function updateWishlistUI() {
    if (elements.wishlistBadge) {
      elements.wishlistBadge.textContent = state.wishlist.length;
      elements.wishlistBadge.classList.toggle('hidden', state.wishlist.length === 0);
    }
  }

  // -------------------------------------------------------------
  // 8. PRODUCT RENDERING & FILTERING
  // -------------------------------------------------------------
  function renderProducts() {
    if (!elements.productGrid) return;

    let filtered = PRODUCTS.filter(product => {
      const matchesCategory = state.activeCategory === 'all' || product.category === state.activeCategory;
      const matchesSearch = !state.searchQuery || 
        product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        product.categoryLabel.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        product.materials.toLowerCase().includes(state.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    // Sorting
    if (state.sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    } else if (state.sortBy === 'reviews') {
      filtered.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }

    if (elements.productCount) {
      elements.productCount.textContent = `Showing ${filtered.length} handcrafted pieces`;
    }

    if (filtered.length === 0) {
      elements.productGrid.innerHTML = `
        <div class="col-span-full py-14 text-center bg-white rounded-lg border border-[#E9DFD1] p-8">
          <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-[#F3EFE7] flex items-center justify-center text-[#B8795E]">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <h3 class="font-serif text-xl font-medium text-[#40352F] mb-1">No pieces found</h3>
          <p class="text-xs text-[#827267] max-w-sm mx-auto mb-4">We couldn't find items matching "${state.searchQuery}". Try selecting another category or resetting filters.</p>
          <button onclick="window.LittleLoom.resetFilters()" class="btn-secondary text-xs py-2 px-4">View All Pieces</button>
        </div>
      `;
      return;
    }

    elements.productGrid.innerHTML = filtered.map(product => {
      const isWishlisted = state.wishlist.includes(product.id);

      return `
        <article class="product-card group" data-category="${product.category}">
          <div class="product-image-wrap">
            <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='${product.fallbackImage || 'assets/images/logo.svg'}';">
            
            ${product.badge ? `
              <div class="absolute top-2.5 left-2.5 z-10">
                <span class="tag-badge bg-white/95 text-[#40352F] shadow-xs">${product.badge}</span>
              </div>
            ` : ''}

            <!-- Wishlist Button -->
            <button class="btn-wishlist ${isWishlisted ? 'active' : ''}" onclick="window.LittleLoom.toggleWishlist('${product.id}')" aria-label="Save to wishlist">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            <!-- Subtle Hover Action Bar -->
            <div class="product-actions-bar">
              <button class="btn-card-action" onclick="window.LittleLoom.addToCart('${product.id}', 1)">
                <span>Add to Basket</span>
              </button>
              <button class="btn-card-quick" onclick="window.LittleLoom.openQuickView('${product.id}')" title="Quick preview">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </button>
            </div>
          </div>

          <!-- Product Details -->
          <div class="p-4 flex flex-col flex-1 justify-between">
            <div>
              <div class="flex items-center justify-between text-[0.68rem] text-[#827267] mb-1">
                <span class="tracking-wider uppercase font-medium text-[#A3AD91]">${product.categoryLabel}</span>
                <span>★ ${product.rating.toFixed(1)}</span>
              </div>

              <h4 class="font-serif text-base font-normal text-[#40352F] group-hover:text-[#B8795E] transition-colors line-clamp-1 mb-1">
                <a href="javascript:void(0)" onclick="window.LittleLoom.openQuickView('${product.id}')">${product.name}</a>
              </h4>
              <p class="text-[0.785rem] text-[#574B43] line-clamp-2 leading-relaxed mb-3">${product.description}</p>
            </div>

            <div class="pt-2.5 border-t border-[#E9DFD1]/70 flex items-center justify-between mt-auto">
              <div class="flex items-baseline gap-2">
                <span class="font-serif text-base font-semibold text-[#40352F]">${formatRupees(product.price)}</span>
                ${product.originalPrice ? `<span class="text-xs text-[#827267] line-through">${formatRupees(product.originalPrice)}</span>` : ''}
              </div>
              <span class="text-[0.68rem] text-[#827267]">${product.leadTime}</span>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // -------------------------------------------------------------
  // 9. QUICK VIEW MODAL
  // -------------------------------------------------------------
  let currentModalQty = 1;

  function openQuickView(productId) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product || !elements.quickViewModal || !elements.quickViewContent) return;

    currentModalQty = 1;

    elements.quickViewContent.innerHTML = `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-8">
        <!-- Visual Column -->
        <div class="space-y-3">
          <div class="relative rounded-sm overflow-hidden bg-[#F3EFE7] border border-[#E9DFD1] aspect-square">
            <img src="${product.image}" alt="${product.name}" onerror="this.onerror=null; this.src='${product.fallbackImage || 'assets/images/logo.svg'}';" class="w-full h-full object-cover">
          </div>
        </div>

        <!-- Info Column -->
        <div class="flex flex-col justify-between">
          <div>
            <div class="flex items-center justify-between mb-1.5">
              <span class="text-[0.68rem] uppercase tracking-wider font-semibold text-[#A3AD91]">${product.categoryLabel}</span>
              <span class="text-xs text-[#827267]">★ ${product.rating} (${product.reviewsCount} reviews)</span>
            </div>

            <h3 class="font-serif text-2xl font-normal text-[#40352F] mb-1.5">${product.name}</h3>

            <div class="flex items-baseline gap-2 mb-3.5">
              <span class="font-serif text-2xl font-semibold text-[#B8795E]">${formatRupees(product.price)}</span>
              ${product.originalPrice ? `<span class="text-xs text-[#827267] line-through">${formatRupees(product.originalPrice)}</span>` : ''}
              <span class="text-[0.72rem] text-[#6C775B] bg-[#EBF0E6] px-2 py-0.5 rounded-sm">Handmade with Little Thread Big Love</span>
            </div>

            <p class="text-xs sm:text-sm text-[#574B43] leading-relaxed mb-5">${product.description}</p>

            <!-- Specifications -->
            <div class="space-y-2 bg-[#F8F5EF] p-3.5 rounded border border-[#E9DFD1] text-[0.76rem] mb-5">
              <div class="flex justify-between">
                <span class="text-[#827267]">Materials:</span>
                <span class="font-medium text-[#40352F] text-right">${product.materials}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[#827267]">Dimensions:</span>
                <span class="font-medium text-[#40352F] text-right">${product.dimensions}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[#827267]">Care Tip:</span>
                <span class="font-medium text-[#40352F] text-right">${product.care}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-[#827267]">Dispatch:</span>
                <span class="font-medium text-[#40352F] text-right">${product.leadTime} from Bhubaneswar, Odisha</span>
              </div>
            </div>
          </div>

          <!-- Action CTA -->
          <div class="pt-3 border-t border-[#E9DFD1] space-y-2.5">
            <div class="flex items-center gap-2.5">
              <div class="qty-control py-1 px-2 border">
                <button class="qty-btn" onclick="window.LittleLoom.adjustModalQty(-1)">−</button>
                <span class="qty-val px-2 text-sm" id="modalQtyVal">1</span>
                <button class="qty-btn" onclick="window.LittleLoom.adjustModalQty(1)">+</button>
              </div>
              <button class="btn-primary flex-1 py-2.5 text-xs" onclick="window.LittleLoom.addFromModal('${product.id}')">
                <span>Add to Basket • <span id="modalBtnPrice">${formatRupees(product.price)}</span></span>
              </button>
            </div>
            <p class="text-[0.68rem] text-center text-[#827267]">Brown-paper wrapped with dried florals & personal note.</p>
          </div>
        </div>
      </div>
    `;

    elements.quickViewModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function adjustModalQty(delta) {
    const valEl = document.getElementById('modalQtyVal');
    const priceEl = document.getElementById('modalBtnPrice');
    if (!valEl) return;

    currentModalQty = Math.max(1, currentModalQty + delta);
    valEl.textContent = currentModalQty;

    const btn = document.querySelector('[onclick*="addFromModal"]');
    if (btn) {
      const match = btn.getAttribute('onclick').match(/'([^']+)'/);
      if (match && match[1]) {
        const prod = PRODUCTS.find(p => p.id === match[1]);
        if (prod && priceEl) {
          priceEl.textContent = formatRupees(prod.price * currentModalQty);
        }
      }
    }
  }

  function addFromModal(productId) {
    addToCart(productId, currentModalQty);
    closeQuickView();
  }

  function closeQuickView() {
    if (elements.quickViewModal) {
      elements.quickViewModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // -------------------------------------------------------------
  // 10. CHECKOUT MODAL SYSTEM
  // -------------------------------------------------------------
  function openCheckoutModal() {
    if (state.cart.length === 0) {
      showToast('Your basket is empty', 'Add some handcrafted treasures before checkout', 'info');
      return;
    }

    closeCartDrawer();

    const subtotal = getCartSubtotal();
    let discountAmount = 0;
    if (state.discountRate > 0) {
      discountAmount = subtotal * state.discountRate;
    }
    const finalAmount = Math.max(0, subtotal - discountAmount);

    if (elements.checkoutTotalAmount) {
      elements.checkoutTotalAmount.textContent = formatRupees(finalAmount);
    }

    if (elements.checkoutSummaryList) {
      elements.checkoutSummaryList.innerHTML = state.cart.map(item => `
        <div class="flex items-center justify-between text-xs py-1.5 border-b border-[#E9DFD1]/50">
          <span class="text-[#574B43] truncate max-w-[200px]">${item.name} × ${item.quantity}</span>
          <span class="font-medium text-[#40352F]">${formatRupees(item.price * item.quantity)}</span>
        </div>
      `).join('');
    }

    if (elements.checkoutModal) {
      elements.checkoutModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCheckoutModal() {
    if (elements.checkoutModal) {
      elements.checkoutModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  function handleCheckoutSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById('checkoutName');
    const phoneInput = document.getElementById('checkoutPhone');
    const addressInput = document.getElementById('checkoutAddress');

    if (!nameInput || !nameInput.value.trim()) {
      showToast('Missing details', 'Please enter your full name', 'info');
      return;
    }
    if (!phoneInput || !phoneInput.value.trim()) {
      showToast('Missing details', 'Please enter your phone number', 'info');
      return;
    }
    if (!addressInput || !addressInput.value.trim()) {
      showToast('Missing details', 'Please enter delivery address', 'info');
      return;
    }

    const orderNumber = 'LL-' + Math.floor(100000 + Math.random() * 900000);
    const customerName = nameInput.value.trim();

    closeCheckoutModal();

    // Show order success modal
    const orderNumEl = document.getElementById('confirmedOrderNumber');
    const orderNameEl = document.getElementById('confirmedCustomerName');
    if (orderNumEl) orderNumEl.textContent = orderNumber;
    if (orderNameEl) orderNameEl.textContent = customerName;

    if (elements.orderSuccessModal) {
      elements.orderSuccessModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    }

    showToast('Order Placed Successfully!', `Order #${orderNumber} received with love.`, 'check');

    // Clear cart
    state.cart = [];
    saveCart();

    if (elements.checkoutForm) {
      elements.checkoutForm.reset();
    }
  }

  function closeOrderSuccessModal() {
    if (elements.orderSuccessModal) {
      elements.orderSuccessModal.classList.remove('open');
      document.body.style.overflow = '';
    }
  }

  // -------------------------------------------------------------
  // 11. TESTIMONIAL CAROUSEL
  // -------------------------------------------------------------
  const TESTIMONIALS = [
    {
      name: 'Aditi Mohapatra',
      location: 'KIIT Campus, Bhubaneswar',
      verified: true,
      text: 'The crochet sunflower and strawberry keychain are so adorable! Being a student here in Bhubaneswar, having such high-quality handmade gifts at such affordable prices is amazing. It made my roommate’s birthday unforgettable!',
      product: 'Crochet Sunflower & Strawberry Charm',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
      stars: 5
    },
    {
      name: 'Rohan Sharma',
      location: 'New Delhi, India',
      verified: true,
      text: 'I ordered the Wild Honey & Sandalwood amber candle and the crochet tulip trio for our anniversary. The crackling wooden wick, the warm scent, and the flowers that will never wilt... truly Little Thread Big Love in action!',
      product: 'Honey Candle & Pastel Tulip Trio',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      stars: 5
    },
    {
      name: 'Sneha Pattnaik',
      location: 'RCM Bhubaneswar, Odisha',
      verified: true,
      text: 'Knowing Rajanandini personally from Regional College of Management, I can tell you every stitch is made with pure devotion! The daisy coasters and cable-knit mug hugger make morning study sessions so cozy.',
      product: 'Daisy Coasters & Mug Hugger',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      stars: 5
    },
    {
      name: 'Priyanka Das',
      location: 'Bengaluru, India',
      verified: true,
      text: 'Unboxing the Little Hug gift hamper felt like opening a warm care package from home. The handwritten note, dried flowers, and delicate finish on the teddy bear mascot exceeded all expectations!',
      product: '"Little Hug" Curated Artisan Gift Box',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
      stars: 5
    }
  ];

  let currentTestimonialIndex = 0;
  let testimonialAutoInterval = null;

  function renderTestimonial(index) {
    const container = document.getElementById('testimonialSlideWrap');
    if (!container) return;

    const t = TESTIMONIALS[index];
    container.innerHTML = `
      <div class="testimonial-card flex flex-col justify-between max-w-2xl mx-auto min-h-[260px]">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs text-[#B8795E] tracking-widest">★★★★★</span>
            <span class="quote-mark select-none">“</span>
          </div>

          <p class="font-editorial text-base sm:text-lg text-[#40352F] italic leading-relaxed mb-6 font-normal">
            "${t.text}"
          </p>
        </div>

        <div class="pt-3.5 border-t border-[#E9DFD1] flex items-center justify-between flex-wrap gap-3">
          <div class="flex items-center gap-3">
            <img src="${t.avatar}" alt="${t.name}" class="w-10 h-10 rounded-full object-cover border border-[#E9DFD1]">
            <div>
              <h5 class="font-medium text-xs text-[#40352F] flex items-center gap-1.5">
                ${t.name}
                ${t.verified ? `<span class="inline-flex text-[0.62rem] text-[#6C775B] font-medium">• Verified Artisan Lover</span>` : ''}
              </h5>
              <p class="text-[0.68rem] text-[#827267]">${t.location}</p>
            </div>
          </div>
          <div class="text-[0.68rem] text-[#827267] font-medium bg-[#F8F5EF] px-2.5 py-0.5 rounded border border-[#E9DFD1]">
            ${t.product}
          </div>
        </div>
      </div>
    `;

    if (elements.testimonialDotsContainer) {
      elements.testimonialDotsContainer.innerHTML = TESTIMONIALS.map((_, i) => `
        <button class="w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-[#B8795E] w-5' : 'bg-[#D4C6B3] hover:bg-[#827267]'}" 
                onclick="window.LittleLoom.goToTestimonial(${i})" 
                aria-label="Go to testimonial ${i + 1}"></button>
      `).join('');
    }
  }

  function nextTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % TESTIMONIALS.length;
    renderTestimonial(currentTestimonialIndex);
  }

  function prevTestimonial() {
    currentTestimonialIndex = (currentTestimonialIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length;
    renderTestimonial(currentTestimonialIndex);
  }

  function goToTestimonial(i) {
    currentTestimonialIndex = i;
    renderTestimonial(i);
  }

  function startTestimonialTimer() {
    if (testimonialAutoInterval) clearInterval(testimonialAutoInterval);
    testimonialAutoInterval = setInterval(nextTestimonial, 6500);
  }

  function stopTestimonialTimer() {
    if (testimonialAutoInterval) clearInterval(testimonialAutoInterval);
  }

  // -------------------------------------------------------------
  // 12. FAQ ACCORDION
  // -------------------------------------------------------------
  function initFAQs() {
    const faqButtons = document.querySelectorAll('.faq-button');
    faqButtons.forEach(button => {
      button.addEventListener('click', () => {
        const item = button.closest('.faq-item');
        const isActive = item.classList.contains('active');

        document.querySelectorAll('.faq-item').forEach(other => {
          if (other !== item) other.classList.remove('active');
        });

        item.classList.toggle('active', !isActive);
      });
    });
  }

  // -------------------------------------------------------------
  // 13. NEWSLETTER & CONTACT FORM
  // -------------------------------------------------------------
  function initNewsletter() {
    if (!elements.newsletterForm) return;

    elements.newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = elements.newsletterForm.querySelector('input[type="email"]');
      if (!emailInput || !emailInput.value) return;

      const email = emailInput.value.trim();
      emailInput.value = '';

      showToast('Welcome to The Cozy Club', `We sent your 10% welcome coupon (WARMTH10) to ${email}.`, 'check');
    });
  }

  function initContactForm() {
    if (!elements.customInquiryForm) return;

    elements.customInquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('inquiryName')?.value.trim();
      const contact = document.getElementById('inquiryContact')?.value.trim();
      const item = document.getElementById('inquiryItem')?.value;
      const message = document.getElementById('inquiryMessage')?.value.trim();

      if (!name || !contact) {
        showToast('Required fields missing', 'Please enter your name and phone/email', 'info');
        return;
      }

      showToast('Inquiry Received with Love', `Thank you ${name}! Rajanandini will connect with you via WhatsApp/Call shortly.`, 'check');
      elements.customInquiryForm.reset();
    });
  }

  // -------------------------------------------------------------
  // 14. FILTER BY CATEGORY (FOR COLLECTIONS SECTION)
  // -------------------------------------------------------------
  function filterByCategory(category) {
    state.activeCategory = category;
    elements.filterTabs.forEach(tab => {
      if (tab.getAttribute('data-filter') === category) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    renderProducts();

    const shopEl = document.getElementById('shop');
    if (shopEl) {
      shopEl.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // -------------------------------------------------------------
  // 15. ACTIVE NAV SCROLLSPY
  // -------------------------------------------------------------
  function initScrollSpy() {
    const sections = ['home', 'collections', 'shop', 'about', 'contact'];
    const navLinks = document.querySelectorAll('.site-header .nav-link');

    window.addEventListener('scroll', () => {
      let currentSection = '';
      const scrollPos = window.scrollY + 120;

      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            currentSection = id;
          }
        }
      });

      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }, { passive: true });
  }

  // -------------------------------------------------------------
  // 16. EVENT LISTENERS SETUP
  // -------------------------------------------------------------
  function setupEventListeners() {
    window.addEventListener('scroll', () => {
      if (elements.header) {
        if (window.scrollY > 30) {
          elements.header.classList.add('scrolled');
        } else {
          elements.header.classList.remove('scrolled');
        }
      }

      if (elements.backToTopBtn) {
        if (window.scrollY > 400) {
          elements.backToTopBtn.classList.add('visible');
        } else {
          elements.backToTopBtn.classList.remove('visible');
        }
      }
    }, { passive: true });

    if (elements.backToTopBtn) {
      elements.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    if (elements.cartBtn) elements.cartBtn.addEventListener('click', openCartDrawer);
    if (elements.closeCartBtn) elements.closeCartBtn.addEventListener('click', closeCartDrawer);
    if (elements.cartDrawerBackdrop) {
      elements.cartDrawerBackdrop.addEventListener('click', (e) => {
        if (e.target === elements.cartDrawerBackdrop) closeCartDrawer();
      });
    }

    if (elements.cartCheckoutBtn) elements.cartCheckoutBtn.addEventListener('click', openCheckoutModal);
    if (elements.closeCheckoutBtn) elements.closeCheckoutBtn.addEventListener('click', closeCheckoutModal);
    if (elements.checkoutModal) {
      elements.checkoutModal.addEventListener('click', (e) => {
        if (e.target === elements.checkoutModal) closeCheckoutModal();
      });
    }
    if (elements.checkoutForm) elements.checkoutForm.addEventListener('submit', handleCheckoutSubmit);

    if (elements.closeOrderSuccessBtn) elements.closeOrderSuccessBtn.addEventListener('click', closeOrderSuccessModal);
    if (elements.orderSuccessModal) {
      elements.orderSuccessModal.addEventListener('click', (e) => {
        if (e.target === elements.orderSuccessModal) closeOrderSuccessModal();
      });
    }

    if (elements.promoApplyBtn) elements.promoApplyBtn.addEventListener('click', applyPromoCode);
    if (elements.promoInput) {
      elements.promoInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          applyPromoCode();
        }
      });
    }

    if (elements.closeQuickViewBtn) elements.closeQuickViewBtn.addEventListener('click', closeQuickView);
    if (elements.quickViewModal) {
      elements.quickViewModal.addEventListener('click', (e) => {
        if (e.target === elements.quickViewModal) closeQuickView();
      });
    }

    elements.filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        elements.filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        state.activeCategory = tab.getAttribute('data-filter') || 'all';
        renderProducts();
      });
    });

    if (elements.searchInput) {
      elements.searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value.trim();
        renderProducts();
      });
    }

    if (elements.sortSelect) {
      elements.sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        renderProducts();
      });
    }

    if (elements.mobileMenuBtn && elements.mobileNavDrawer) {
      elements.mobileMenuBtn.addEventListener('click', () => {
        elements.mobileNavDrawer.classList.toggle('hidden');
      });
    }
    if (elements.closeMobileMenuBtn && elements.mobileNavDrawer) {
      elements.closeMobileMenuBtn.addEventListener('click', () => {
        elements.mobileNavDrawer.classList.add('hidden');
      });
    }

    if (elements.testimonialPrev) {
      elements.testimonialPrev.addEventListener('click', () => {
        stopTestimonialTimer();
        prevTestimonial();
        startTestimonialTimer();
      });
    }
    if (elements.testimonialNext) {
      elements.testimonialNext.addEventListener('click', () => {
        stopTestimonialTimer();
        nextTestimonial();
        startTestimonialTimer();
      });
    }

    const testWrap = document.getElementById('testimonialSlideWrap');
    if (testWrap) {
      testWrap.addEventListener('mouseenter', stopTestimonialTimer);
      testWrap.addEventListener('mouseleave', startTestimonialTimer);
    }

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeCartDrawer();
        closeQuickView();
        closeCheckoutModal();
        closeOrderSuccessModal();
        if (elements.mobileNavDrawer) elements.mobileNavDrawer.classList.add('hidden');
      }
    });

    // Warm artisanal brown click ripple
    window.addEventListener('pointerdown', (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'rainbow-ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      ripple.addEventListener('animationend', () => {
        ripple.remove();
      });
    });
  }

  function resetFilters() {
    state.activeCategory = 'all';
    state.searchQuery = '';
    state.sortBy = 'featured';

    if (elements.searchInput) elements.searchInput.value = '';
    if (elements.sortSelect) elements.sortSelect.value = 'featured';

    elements.filterTabs.forEach(tab => {
      if (tab.getAttribute('data-filter') === 'all') {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });

    renderProducts();
  }

  function init() {
    updateCartUI();
    updateWishlistUI();
    renderProducts();
    renderTestimonial(0);
    startTestimonialTimer();
    initFAQs();
    initNewsletter();
    initContactForm();
    setupEventListeners();
    initScrollSpy();
  }

  window.LittleLoom = {
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleWishlist,
    openQuickView,
    closeQuickView,
    openCheckoutModal,
    closeCheckoutModal,
    adjustModalQty,
    addFromModal,
    resetFilters,
    filterByCategory,
    goToTestimonial
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
