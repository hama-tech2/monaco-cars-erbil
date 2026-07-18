/* ============================================================
   MONACO CARS — script.js  (file 3 of 3)
   i18n (کوردی / عربي / EN) · filters · modal · notifications · toasts
   ============================================================ */
(function () {
  "use strict";

  /* ---------- translations ---------- */
  const I18N = {
    ckb: {
      nav_home:"ماڵەوە", nav_cars:"ئۆتۆمبێلەکان", nav_services:"خزمەتگوزارییەکان", nav_about:"دەربارە", nav_contact:"پەیوەندی",
      login:"چوونەژوورەوە",
      hero_eyebrow:"لێخوڕینی نایاب", hero_title_1:"MONACO", hero_title_2:"CARS",
      hero_sub:"ئۆتۆمبێلی لوکس. خزمەتگوزاری نایاب. گەشتەکەت، بەرزتر.",
      hero_btn_cars:"بینینی ئۆتۆمبێلەکان", hero_btn_loc:"شوێنەکەمان", hero_scroll:"بۆ خوارەوە بگەڕێ",
      stat_vehicles:"ئۆتۆمبێلی لوکس", stat_years:"ساڵ شارەزایی", stat_clients:"کڕیاری دڵخۆش",
      feat1_t:"کوالیتی نایاب", feat1_d:"ئۆتۆمبێلی لوکسی هەڵبژێردراو بۆ تۆ.",
      feat2_t:"پشتگیری ٢٤/٧", feat2_d:"تیمەکەمان هەمیشە ئامادەیە بۆ یارمەتیت.",
      feat3_t:"دارایی نەرم", feat3_d:"هەڵبژاردەی پارەدانی گونجاو بۆ پێداویستیت.",
      feat4_t:"ئەزموونی تایبەت", feat4_d:"خزمەتگوزاری لوکس، تایبەت بۆ تۆ.",
      cars_eyebrow:"کۆکراوەکەمان", cars_title:"ئۆتۆمبێلە <em>لوکسەکان</em>",
      cars_sub:"هەڵبژاردەیەکی تایبەت لە باشترین ئۆتۆمبێلەکان، شوێنێک کە کوالیتی و شکۆمەندی یەکدەگرن.",
      cars_search_ph:"گەڕان بۆ ئۆتۆمبێل...",
      cat_all:"هەموو", cat_suv:"SUV", cat_sedan:"سیدان", cat_pickup:"پیکاپ", cat_luxury:"لوکس",
      tag_featured:"تایبەت", spec_auto:"ئۆتۆماتیک", view_details:"بینینی وردەکاری",
      car1_desc:"لووتکەی لوکس و بەهێزی — ئامادە بۆ هەموو ڕێگایەک.",
      car2_desc:"نەوەی نوێ — هێز و شکۆ لە یەک ئۆتۆمبێلدا.",
      car3_desc:"ڤێرژنی وەرزشی GR — بۆ ئەوانەی زیاتر دەخوازن.",
      car4_desc:"بەهێز و متمانەپێکراو — بۆ کار و ماندووبوون.",
      car5_desc:"شێوازی نوێ و سووتەمەنیی کەم — سیدانی هۆشمەند.",
      car6_desc:"ڕەنگی پێرڵی سپی — پاک و ئامادەی گەشت.",
      cars_empty:"هیچ ئۆتۆمبێلێک نەدۆزرایەوە. جۆرێکی تر تاقی بکەرەوە.",
      cars_cta_t:"ئەوەی دەتەوێت نەتدۆزییەوە؟", cars_cta_d:"پەیوەندیمان پێوە بکە، یارمەتیت دەدەین ئۆتۆمبێلی خەونەکانت بدۆزیتەوە.",
      cars_cta_btn:"پەیوەندی بە پسپۆڕەکانمان",
      serv_eyebrow:"خزمەتگوزارییەکانمان", serv_title:"لە <em>کڕینەوە</em> تا خزمەتگوزاری",
      serv_sub:"هەموو ئەوەی پێویستتە لە یەک شوێندا — بە متمانە و کوالیتی.",
      serv1_t:"فرۆشتنی ئۆتۆمبێل", serv1_d:"هەڵبژاردەیەکی فراوان لە باشترین ئۆتۆمبێلە لوکسەکان.",
      serv2_t:"چاککردنەوەی نایاب", serv2_d:"پارێزگاری و چاککردنەوە بە دەستی پسپۆڕ.",
      serv3_t:"خاوێنکردنەوە و پاراستن", serv3_d:"وردەکاری و ڕازاندنەوەی ئۆتۆمبێل بۆ ڕووخسارێکی نوێ.",
      serv4_t:"دارایی و قیست", serv4_d:"پلانی پارەدانی گونجاو بۆ هەموو بودجەیەک.",
      about_eyebrow:"دەربارەی مۆناکۆ کارز", about_title:"هاندراو بە خولیا. <em>ناسراو بە نایابی.</em>",
      about_lead:"لە مۆناکۆ کارز، باوەڕمان وایە ئۆتۆمبێل زیاتر لە ئامێرێکە — نیشانەی ئاواتخوازی، دەستڕەنگینی و کەسایەتییە. لە ڕۆژی یەکەمەوە، ئامانجمان دابینکردنی ئەزموونێکی بێهاوتای ئۆتۆمبێلە کە لەسەر متمانە و کوالیتی بنیات نراوە.",
      about_tag_t:"لوکس. کارایی. متمانە.", about_tag_d:"زیاتر لە فرۆشگا — پابەندبوون بە نایابی.",
      about_s1:"ئۆتۆمبێلی لوکس", about_s2:"ساڵ نایابی", about_s3:"کڕیاری دڵخۆش", about_s4:"پابەندی کوالیتی",
      ac1_t:"هەڵبژاردەی نایاب", ac1_d:"هەموو ئۆتۆمبێلێک بە وردی هەڵدەبژێردرێت.",
      ac2_t:"خزمەتگوزاری بێهاوتا", ac2_d:"لە ڕاوێژکاری تا گەیاندن، لەگەڵتداین.",
      ac3_t:"متمانە و ڕوونی", ac3_d:"ڕاستگۆیی و پەیوەندیی درێژخایەن لەگەڵ کڕیار.",
      ac4_t:"نایابی لە وردەکاریدا", ac4_d:"نایابی بەڵێن نییە — ستانداردمانە.",
      contact_eyebrow:"پەیوەندیمان پێوە بکە", contact_title:"ئێمە لێرەین بۆ <em>یارمەتیت</em>",
      contact_sub:"پرسیارت هەیە یان ئامادەیت ئۆتۆمبێلی خەونەکانت بدۆزیتەوە؟ تیمەکەمان ئامادەیە.",
      contact_loc_eyebrow:"شوێنەکەمان", contact_loc_title:"سەردانی مۆناکۆ کارز بکە",
      contact_loc_lead:"ئەزموونی لوکس لە شۆرووم — لێرەین بۆ دۆزینەوەی ئۆتۆمبێلی گونجاوت.",
      info_phone:"تەلەفۆن", info_addr:"ناونیشان", info_addr_v:"سۆران، هەولێر، هەرێمی کوردستان، عێراق",
      info_hours:"کاتەکانی کار", info_hours_v1:"شەممە – پێنجشەممە: ٩:٠٠ بەیانی – ٨:٠٠ ئێوارە", info_hours_v2:"هەینی: ٢:٠٠ – ٨:٠٠ ئێوارە",
      map_name:"مۆناکۆ کارز — شۆرووم", map_dir:"ڕێنمایی",
      assist_t:"پێویستت بە یارمەتی کەسی هەیە؟", assist_d:"پسپۆڕەکانمان ئامادەن ئۆتۆمبێلی گونجاوت بۆ بدۆزنەوە.", assist_btn:"پەیوەندی بە پسپۆڕەکانمان",
      foot_about:"مۆناکۆ کارز — ناوەندی تۆ بۆ باشترین ئۆتۆمبێلە لوکسەکان. نایابی، متمانە و کارایی — لە هەموو کیلۆمەترێکدا.",
      foot_links:"بەستەرەکان", foot_serv:"خزمەتگوزارییەکان", foot_contact:"پەیوەندی",
      foot_rights:"© 2026 مۆناکۆ کارز. هەموو مافەکان پارێزراون.", foot_made:"دیزاینی نمایشی — Demo",
      m_login:"چوونەژوورەوە", m_signup:"دروستکردنی هەژمار", m_name:"ناو", m_email:"ئیمەیڵ", m_pass:"وشەی نهێنی",
      m_or:"یان", m_google:"بەردەوامبوون بە گووگڵ", m_note:"ئەمە نمایشە — هیچ داتایەک هەڵناگیرێت.",
      notif_title:"ئاگادارییەکان", notif_clear:"پاککردنەوە",
      notif1_t:"ئۆتۆمبێلی نوێ زیادکرا", notif1_d:"Land Cruiser 300 GR-S ئێستا بەردەستە.",
      notif2_t:"داشکاندنی تایبەت", notif2_d:"بۆ ماوەیەکی سنووردار لەسەر Camry 2025.",
      notif3_t:"بەخێربێیت بۆ مۆناکۆ", notif3_d:"سوپاس بۆ سەردانت — یارمەتیت دەدەین.",
      notif_empty:"هیچ ئاگادارییەک نییە.",
      t_fav_add:"زیادکرا بۆ دڵخوازەکان", t_fav_rem:"لابرا لە دڵخوازەکان", t_share:"بەستەر کۆپی کرا",
      t_auth:"بەخێربێیت بۆ مۆناکۆ کارز", t_google:"چوونەژوورەوە بە گووگڵ (نمایش)", t_notif_clear:"ئاگادارییەکان پاککرانەوە", t_lang:"زمان گۆڕدرا"
    },
    ar: {
      nav_home:"الرئيسية", nav_cars:"السيارات", nav_services:"الخدمات", nav_about:"من نحن", nav_contact:"اتصل بنا",
      login:"تسجيل الدخول",
      hero_eyebrow:"قيادة الامتياز", hero_title_1:"MONACO", hero_title_2:"CARS",
      hero_sub:"سيارات فاخرة. خدمة استثنائية. رحلتك، بمستوى أرقى.",
      hero_btn_cars:"استعرض السيارات", hero_btn_loc:"موقعنا", hero_scroll:"مرّر للأسفل",
      stat_vehicles:"سيارة فاخرة", stat_years:"سنوات خبرة", stat_clients:"عميل سعيد",
      feat1_t:"جودة استثنائية", feat1_d:"سيارات فاخرة مختارة بعناية لك.",
      feat2_t:"دعم ٢٤/٧", feat2_d:"فريقنا جاهز دائمًا لمساعدتك.",
      feat3_t:"تمويل مرن", feat3_d:"خيارات دفع تناسب احتياجك.",
      feat4_t:"تجربة حصرية", feat4_d:"خدمة فاخرة مصممة خصيصًا لك.",
      cars_eyebrow:"مجموعتنا", cars_title:"السيارات <em>الفاخرة</em>",
      cars_sub:"مجموعة مختارة من أفضل السيارات، حيث يلتقي الأداء بالرقي.",
      cars_search_ph:"ابحث عن سيارة...",
      cat_all:"الكل", cat_suv:"دفع رباعي", cat_sedan:"سيدان", cat_pickup:"بيك أب", cat_luxury:"فاخرة",
      tag_featured:"مميزة", spec_auto:"أوتوماتيك", view_details:"عرض التفاصيل",
      car1_desc:"قمة الفخامة والقوة — جاهزة لكل الطرق.",
      car2_desc:"الجيل الجديد — قوة وفخامة في سيارة واحدة.",
      car3_desc:"النسخة الرياضية GR — لمن يريد المزيد.",
      car4_desc:"قوية وموثوقة — للعمل والمهام الصعبة.",
      car5_desc:"تصميم جديد واستهلاك منخفض — سيدان ذكية.",
      car6_desc:"لون لؤلؤي أبيض — نظيفة وجاهزة للرحلة.",
      cars_empty:"لا توجد سيارات مطابقة. جرّب فئة أخرى.",
      cars_cta_t:"لم تجد ما تبحث عنه؟", cars_cta_d:"تواصل معنا وسنساعدك في العثور على سيارة أحلامك.",
      cars_cta_btn:"تواصل مع خبرائنا",
      serv_eyebrow:"خدماتنا", serv_title:"من <em>الشراء</em> إلى الخدمة",
      serv_sub:"كل ما تحتاجه في مكان واحد — بثقة وجودة.",
      serv1_t:"بيع السيارات", serv1_d:"تشكيلة واسعة من أفضل السيارات الفاخرة.",
      serv2_t:"صيانة متميزة", serv2_d:"صيانة وإصلاح على يد خبراء.",
      serv3_t:"التنظيف والعناية", serv3_d:"تلميع وتفصيل السيارة لمظهر كالجديد.",
      serv4_t:"تمويل وتقسيط", serv4_d:"خطط دفع مناسبة لكل الميزانيات.",
      about_eyebrow:"عن موناكو كارز", about_title:"مدفوعون بالشغف. <em>متميزون بالإتقان.</em>",
      about_lead:"في موناكو كارز، نؤمن أن السيارة أكثر من مجرد آلة — إنها تعبير عن الطموح والحرفية والشخصية. منذ اليوم الأول، هدفنا تقديم تجربة سيارات لا مثيل لها مبنية على الثقة والجودة.",
      about_tag_t:"فخامة. أداء. ثقة.", about_tag_d:"أكثر من معرض — التزام بالتميز.",
      about_s1:"سيارة فاخرة", about_s2:"سنة تميز", about_s3:"عميل سعيد", about_s4:"التزام بالجودة",
      ac1_t:"اختيار متميز", ac1_d:"كل سيارة يتم اختيارها بعناية فائقة.",
      ac2_t:"خدمة لا مثيل لها", ac2_d:"من الاستشارة إلى التسليم، نحن معك.",
      ac3_t:"ثقة وشفافية", ac3_d:"صدق وعلاقات طويلة الأمد مع عملائنا.",
      ac4_t:"التميز في كل تفصيل", ac4_d:"التميز ليس وعدًا — بل معيارنا.",
      contact_eyebrow:"تواصل معنا", contact_title:"نحن هنا <em>لمساعدتك</em>",
      contact_sub:"لديك سؤال أو مستعد للعثور على سيارة أحلامك؟ فريقنا جاهز.",
      contact_loc_eyebrow:"موقعنا", contact_loc_title:"زر موناكو كارز",
      contact_loc_lead:"عِش الفخامة في معرضنا — نحن هنا لمساعدتك في اختيار سيارتك.",
      info_phone:"الهاتف", info_addr:"العنوان", info_addr_v:"سوران، أربيل، إقليم كردستان، العراق",
      info_hours:"ساعات العمل", info_hours_v1:"السبت – الخميس: ٩:٠٠ ص – ٨:٠٠ م", info_hours_v2:"الجمعة: ٢:٠٠ – ٨:٠٠ م",
      map_name:"موناكو كارز — المعرض", map_dir:"الاتجاهات",
      assist_t:"تحتاج مساعدة شخصية؟", assist_d:"خبراؤنا جاهزون لمساعدتك في اختيار سيارتك.", assist_btn:"تواصل مع خبرائنا",
      foot_about:"موناكو كارز — وجهتك لأفضل السيارات الفاخرة. تميز وثقة وأداء — في كل كيلومتر.",
      foot_links:"روابط", foot_serv:"الخدمات", foot_contact:"اتصل بنا",
      foot_rights:"© 2026 موناكو كارز. جميع الحقوق محفوظة.", foot_made:"تصميم تجريبي — Demo",
      m_login:"تسجيل الدخول", m_signup:"إنشاء حساب", m_name:"الاسم", m_email:"البريد الإلكتروني", m_pass:"كلمة المرور",
      m_or:"أو", m_google:"المتابعة عبر Google", m_note:"هذه نسخة تجريبية — لا يتم حفظ أي بيانات.",
      notif_title:"الإشعارات", notif_clear:"مسح الكل",
      notif1_t:"سيارة جديدة أُضيفت", notif1_d:"Land Cruiser 300 GR-S متوفرة الآن.",
      notif2_t:"عرض خاص", notif2_d:"لفترة محدودة على Camry 2025.",
      notif3_t:"مرحبًا بك في موناكو", notif3_d:"شكرًا لزيارتك — نحن هنا لمساعدتك.",
      notif_empty:"لا توجد إشعارات.",
      t_fav_add:"أُضيفت إلى المفضلة", t_fav_rem:"أُزيلت من المفضلة", t_share:"تم نسخ الرابط",
      t_auth:"مرحبًا بك في موناكو كارز", t_google:"دخول عبر Google (تجريبي)", t_notif_clear:"تم مسح الإشعارات", t_lang:"تم تغيير اللغة"
    },
    en: {
      nav_home:"Home", nav_cars:"Cars", nav_services:"Services", nav_about:"About", nav_contact:"Contact",
      login:"Login",
      hero_eyebrow:"Drive Excellence", hero_title_1:"MONACO", hero_title_2:"CARS",
      hero_sub:"Premium luxury cars. Exceptional service. Your journey, elevated.",
      hero_btn_cars:"Explore Cars", hero_btn_loc:"Our Location", hero_scroll:"Scroll to discover",
      stat_vehicles:"Luxury Vehicles", stat_years:"Years of Excellence", stat_clients:"Happy Clients",
      feat1_t:"Premium Quality", feat1_d:"World-class luxury cars handpicked for you.",
      feat2_t:"24/7 Support", feat2_d:"Our team is always here to assist you.",
      feat3_t:"Flexible Finance", feat3_d:"Tailored payment options to suit your needs.",
      feat4_t:"Exclusive Experience", feat4_d:"Luxury service, personalized for you.",
      cars_eyebrow:"Our Collection", cars_title:"Luxury <em>Vehicles</em>",
      cars_sub:"A handpicked selection of the finest vehicles, where performance meets prestige.",
      cars_search_ph:"Search vehicles...",
      cat_all:"All", cat_suv:"SUV", cat_sedan:"Sedan", cat_pickup:"Pickup", cat_luxury:"Luxury",
      tag_featured:"Featured", spec_auto:"Automatic", view_details:"View Details",
      car1_desc:"The pinnacle of luxury and power — ready for any road.",
      car2_desc:"The new generation — power and prestige in one.",
      car3_desc:"The GR sport edition — for those who want more.",
      car4_desc:"Strong and reliable — built for work and adventure.",
      car5_desc:"Fresh design, low consumption — a smart sedan.",
      car6_desc:"Pearl white finish — clean and ready to drive.",
      cars_empty:"No vehicles found. Try another category.",
      cars_cta_t:"Can't find what you're looking for?", cars_cta_d:"Get in touch and we'll help you find your dream car.",
      cars_cta_btn:"Contact Our Experts",
      serv_eyebrow:"Our Services", serv_title:"From <em>Purchase</em> to Care",
      serv_sub:"Everything you need in one place — with trust and quality.",
      serv1_t:"Vehicle Sales", serv1_d:"A wide selection of the finest luxury vehicles.",
      serv2_t:"Premium Maintenance", serv2_d:"Expert servicing and repair you can trust.",
      serv3_t:"Detailing & Care", serv3_d:"Polishing and detailing for a like-new finish.",
      serv4_t:"Finance & Installments", serv4_d:"Flexible payment plans for every budget.",
      about_eyebrow:"About Monaco Cars", about_title:"Driven by Passion. <em>Defined by Excellence.</em>",
      about_lead:"At Monaco Cars, we believe a car is more than a machine — it's a statement of ambition, craftsmanship, and individuality. Since day one, our mission has been to deliver an unparalleled automotive experience built on trust and quality.",
      about_tag_t:"Luxury. Performance. Trust.", about_tag_d:"More than a dealership — a commitment to excellence.",
      about_s1:"Luxury Vehicles", about_s2:"Years of Excellence", about_s3:"Happy Clients", about_s4:"Quality Promise",
      ac1_t:"Handpicked Excellence", ac1_d:"Every vehicle is carefully selected.",
      ac2_t:"Unmatched Service", ac2_d:"From consultation to delivery, we're with you.",
      ac3_t:"Trust & Transparency", ac3_d:"Honesty and long-term relationships with clients.",
      ac4_t:"Excellence in Every Detail", ac4_d:"Excellence isn't a promise — it's our standard.",
      contact_eyebrow:"Get In Touch", contact_title:"We're Here to <em>Help</em>",
      contact_sub:"Have a question or ready to find your dream car? Our team is here.",
      contact_loc_eyebrow:"Our Location", contact_loc_title:"Visit Monaco Cars",
      contact_loc_lead:"Experience luxury at our showroom — we're here to help you find your perfect car.",
      info_phone:"Phone", info_addr:"Address", info_addr_v:"Soran, Erbil, Kurdistan Region, Iraq",
      info_hours:"Business Hours", info_hours_v1:"Sat – Thu: 9:00 AM – 8:00 PM", info_hours_v2:"Friday: 2:00 PM – 8:00 PM",
      map_name:"Monaco Cars — Showroom", map_dir:"Directions",
      assist_t:"Need personal assistance?", assist_d:"Our experts are ready to help you find the perfect vehicle.", assist_btn:"Contact Our Experts",
      foot_about:"Monaco Cars — your destination for the finest luxury vehicles. Excellence, trust, and performance — every mile.",
      foot_links:"Quick Links", foot_serv:"Services", foot_contact:"Contact",
      foot_rights:"© 2026 Monaco Cars. All rights reserved.", foot_made:"Demo Design",
      m_login:"Login", m_signup:"Create Account", m_name:"Name", m_email:"Email", m_pass:"Password",
      m_or:"or", m_google:"Continue with Google", m_note:"This is a demo — no data is saved.",
      notif_title:"Notifications", notif_clear:"Clear all",
      notif1_t:"New vehicle added", notif1_d:"Land Cruiser 300 GR-S is now available.",
      notif2_t:"Special offer", notif2_d:"Limited time on the 2025 Camry.",
      notif3_t:"Welcome to Monaco", notif3_d:"Thanks for visiting — we're here to help.",
      notif_empty:"No notifications.",
      t_fav_add:"Added to favorites", t_fav_rem:"Removed from favorites", t_share:"Link copied",
      t_auth:"Welcome to Monaco Cars", t_google:"Signed in with Google (demo)", t_notif_clear:"Notifications cleared", t_lang:"Language changed"
    }
  };

  const $ = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));
  let lang = "ckb";

  /* ---------- i18n apply ---------- */
  function applyLang(l) {
    if (!I18N[l]) return;
    lang = l;
    const dict = I18N[l];
    const rtl = (l === "ckb" || l === "ar");
    document.documentElement.lang = l;
    document.documentElement.dir = rtl ? "rtl" : "ltr";

    $$("[data-i18n]").forEach(el => {
      const k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    $$("[data-i18n-ph]").forEach(el => {
      const k = el.getAttribute("data-i18n-ph");
      if (dict[k] != null) el.setAttribute("placeholder", dict[k]);
    });

    $$("#langSwitch button, #drawerLang button").forEach(b =>
      b.classList.toggle("active", b.dataset.lang === l));

    const sub = $("#authSubmit");
    if (sub) sub.innerHTML = dict[activeTab === "signup" ? "m_signup" : "m_login"];
    try { localStorage.setItem("mc_lang", l); } catch (e) {}
  }

  /* ---------- toast ---------- */
  function toast(msg) {
    const wrap = $("#toastWrap");
    if (!wrap) return;
    const t = document.createElement("div");
    t.className = "toast";
    t.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg><span></span>';
    t.querySelector("span").textContent = msg;
    wrap.appendChild(t);
    setTimeout(() => { t.classList.add("out"); setTimeout(() => t.remove(), 320); }, 2600);
  }
  const tr = k => (I18N[lang] && I18N[lang][k]) || k;

  /* ---------- nav scroll + scrollspy ---------- */
  const nav = $("#siteNav");
  const sections = ["home", "cars", "services", "about", "contact"].map(id => $("#" + id)).filter(Boolean);
  function onScroll() {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 30);
    let cur = "home";
    const y = window.scrollY + 120;
    sections.forEach(s => { if (s.offsetTop <= y) cur = s.id; });
    $$("#navLinks a").forEach(a =>
      a.classList.toggle("active", a.getAttribute("href") === "#" + cur));
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- mobile drawer ---------- */
  const drawer = $("#drawer");
  const openDrawer = () => { if (drawer) drawer.hidden = false; };
  const closeDrawer = () => { if (drawer) drawer.hidden = true; };
  $("#hamburger") && $("#hamburger").addEventListener("click", openDrawer);
  $("#drawerClose") && $("#drawerClose").addEventListener("click", closeDrawer);
  drawer && drawer.addEventListener("click", e => { if (e.target === drawer) closeDrawer(); });
  $$("#drawer .drawer-links a").forEach(a => a.addEventListener("click", closeDrawer));

  /* ---------- language buttons ---------- */
  $$("#langSwitch button, #drawerLang button").forEach(b =>
    b.addEventListener("click", () => { applyLang(b.dataset.lang); toast(tr("t_lang")); }));

  /* ---------- favorites ---------- */
  $$(".car-fav").forEach(btn => btn.addEventListener("click", e => {
    e.preventDefault();
    btn.classList.toggle("on");
    toast(tr(btn.classList.contains("on") ? "t_fav_add" : "t_fav_rem"));
  }));

  /* ---------- share ---------- */
  $$(".car-share").forEach(btn => btn.addEventListener("click", e => {
    e.preventDefault();
    const url = location.href.split("#")[0];
    if (navigator.clipboard) navigator.clipboard.writeText(url).catch(() => {});
    toast(tr("t_share"));
  }));

  /* ---------- filter + search ---------- */
  const cards = $$(".car-card");
  const empty = $("#carsEmpty");
  let curCat = "all";
  function filter() {
    const q = ($("#carSearch") ? $("#carSearch").value : "").trim().toLowerCase();
    let shown = 0;
    cards.forEach(c => {
      const cats = (c.dataset.cat || "").split(" ");
      const name = (c.dataset.name || "").toLowerCase();
      const okCat = curCat === "all" || cats.includes(curCat);
      const okQ = !q || name.includes(q);
      const show = okCat && okQ;
      c.style.display = show ? "" : "none";
      if (show) shown++;
    });
    if (empty) empty.hidden = shown !== 0;
  }
  $$("#filterChips .chip").forEach(chip => chip.addEventListener("click", () => {
    $$("#filterChips .chip").forEach(c => c.classList.remove("active"));
    chip.classList.add("active");
    curCat = chip.dataset.cat;
    filter();
  }));
  $("#carSearch") && $("#carSearch").addEventListener("input", filter);

  function setChipCounts() {
    $$("#filterChips .chip").forEach(chip => {
      const cat = chip.dataset.cat;
      const n = cat === "all"
        ? cards.length
        : cards.filter(c => (c.dataset.cat || "").split(" ").includes(cat)).length;
      const em = chip.querySelector(".chip-count");
      if (em) em.textContent = n;
    });
  }

  /* ---------- account modal ---------- */
  const modal = $("#accountModal");
  let activeTab = "login";
  const openModal = () => { if (modal) modal.hidden = false; };
  const closeModal = () => { if (modal) modal.hidden = true; };
  $("#accountBtn") && $("#accountBtn").addEventListener("click", openModal);
  $("#loginBtn") && $("#loginBtn").addEventListener("click", openModal);
  $("#drawerLogin") && $("#drawerLogin").addEventListener("click", () => { closeDrawer(); openModal(); });
  $("#modalClose") && $("#modalClose").addEventListener("click", closeModal);
  modal && modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });

  $$("#modalTabs button").forEach(b => b.addEventListener("click", () => {
    activeTab = b.dataset.tab;
    $$("#modalTabs button").forEach(x => x.classList.remove("active"));
    b.classList.add("active");
    const nameField = $(".signup-only");
    if (nameField) nameField.hidden = activeTab !== "signup";
    const sub = $("#authSubmit");
    if (sub) sub.innerHTML = tr(activeTab === "signup" ? "m_signup" : "m_login");
  }));

  $("#authForm") && $("#authForm").addEventListener("submit", e => {
    e.preventDefault();
    closeModal();
    toast(tr("t_auth"));
    e.target.reset();
  });
  $("#googleBtn") && $("#googleBtn").addEventListener("click", () => { closeModal(); toast(tr("t_google")); });

  /* ---------- notifications ---------- */
  const notif = $("#notifPanel");
  $("#notifBtn") && $("#notifBtn").addEventListener("click", e => {
    e.stopPropagation();
    if (notif) notif.hidden = !notif.hidden;
  });
  document.addEventListener("click", e => {
    if (notif && !notif.hidden && !notif.contains(e.target) && !$("#notifBtn").contains(e.target))
      notif.hidden = true;
  });
  $("#notifClear") && $("#notifClear").addEventListener("click", () => {
    const list = $("#notifList");
    if (list) list.innerHTML = '<li class="notif-empty">' + tr("notif_empty") + "</li>";
    const badge = $("#notifBadge");
    if (badge) badge.style.display = "none";
    toast(tr("t_notif_clear"));
  });

  /* ---------- scroll reveal ---------- */
  if ("IntersectionObserver" in window) {
    const targets = $$(".car-card, .serv-card, .ac, .stat-card");
    targets.forEach(t => t.classList.add("s-reveal"));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    targets.forEach(t => io.observe(t));
  }

  /* ---------- init ---------- */
  let saved = "ckb";
  try { saved = localStorage.getItem("mc_lang") || "ckb"; } catch (e) {}
  applyLang(saved);
  setChipCounts();
  onScroll();
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") { closeModal(); closeDrawer(); if (notif) notif.hidden = true; }
  });
})();
