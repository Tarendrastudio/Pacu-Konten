const translations = {
    id: {
        mainTitle: "Pacu Konten",
        subtitle: "Suite Kreatif Berbasis AI untuk Konten Anda",
        tabPlanner: "Perencana Kampanye",
        tabCrafter: "Perajin Konten",
        tabAnalyzer: "Analisis Viral",
        tabDashboard: "Dashboard",
        statCampaigns: "Kampanye Dibuat",
        statFeedback: "Umpan Balik Positif",
        statContent: "Konten Terbantu",
        formTitle: "Perencana Kampanye 7 Hari",
        templateLabel: "Butuh Inspirasi? Coba Template Cepat:",
        templateDefault: "Pilih Template...",
        template1: "Contoh: Kopi Tenang (Produk)",
        template2: "Contoh: Workshop Desain (Jasa)",
        template3: "Contoh: Tas Ransel (Fashion)",
        campaignGoalLabel: "Tujuan Kampanye",
        goalOption1: "Promosi Umum & Penjualan",
        goalOption2: "Peluncuran Produk Baru",
        goalOption3: "Meningkatkan Otoritas Merek",
        goalOption4: "Membangun Komunitas",
        toneLabel: "Gaya Bahasa",
        toneOption1: "Profesional & Informatif",
        toneOption2: "Santai & Ramah",
        toneOption3: "Lucu & Menghibur",
        toneOption4: "Inspiratif & Memotivasi",
        toneOption5: "Mewah & Eksklusif",
        productNameLabel: "Nama Produk",
        productNamePlaceholder: "Contoh: Headphone 'Senyap Pro'",
        emotionalBenefitLabel: "Manfaat Emosional Inti",
        emotionalBenefitPlaceholder: "Contoh: Ketenangan, Kepercayaan Diri",
        featuresLabel: "Fitur & Bukti Pendukung (1 per baris)",
        featuresPlaceholder: "Contoh:\nFitur: Active Noise Cancellation -> Bukti: Fokus penuh tanpa gangguan",
        saveDraftBtn: "Simpan Draft",
        generateBtn: "Buat Kalender Konten 7 Hari",
        generateBtnLoading: "Merancang Strategi...",
        apiKeyBtn: "Pengaturan API Key",
        tutorialBtn: "Cara Penggunaan",
        generatingTitle: "Merancang Kampanye Anda...",
        generatingDesc: "AI sedang membuat strategi konten yang disesuaikan untuk Anda",
        apiKeyModalTitle: "Pengaturan API Key",
        apiKeyModalDesc: "Masukkan API Key Google AI Studio Anda. Kunci ini akan disimpan di peramban Anda dan tidak akan dibagikan.",
        apiKeyModalPlaceholder: "Masukkan API Key Anda di sini",
        cancelBtn: "Batal",
        saveBtn: "Simpan",
        tutorialModalTitle: "Cara Menggunakan Alat Ini",
        understandBtn: "Mengerti",
        toastAPIKeySaved: "API Key berhasil disimpan!",
        toastAPIKeyMissing: "API Key belum diatur. Silakan masukkan di Pengaturan.",
        toastContentCopied: "Konten berhasil disalin!",
        toastDraftSaved: "Draft berhasil disimpan!",
        toastInputMissing: "Harap isi semua kolom untuk hasil terbaik.",
        toastImageMissing: "Harap unggah gambar untuk dianalisis.",
        errorTitle: "Oops, terjadi kesalahan!",
        errorDesc: "Tidak dapat menghasilkan konten. Pastikan API Key Anda valid dan coba lagi. Galat: {error}",
        outputTitle: "Kalender Kampanye Anda",
        downloadPdfBtn: "Unduh sebagai PDF",
        pdfBtnLoading: "Mempersiapkan PDF...",
        contentPillarsTitle: "Pilar Konten Utama",
        feedbackLabel: "Beri Umpan Balik:",
        reasoningLabel: "Mengapa Konten Ini Dibuat?",
        copyCaptionBtn: "Salin Caption",
        copyHashtagsBtn: "Salin Hashtag",
        copiedSuccess: "Berhasil Disalin!",
        hookTitle: "Judul / Hook",
        captionTitle: "Konten Lengkap",
        visualTitle: "Saran Visual",
        visualPromptTitle: "Prompt untuk AI Gambar",
        hashtagTitle: "Hashtag",
        days: ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu'],
        slots: ['Pagi', 'Siang', 'Malam'],
        crafterTitle: "Perajin Konten Utas",
        crafterTopicLabel: "Topik / Nama Produk",
        crafterTopicPlaceholder: "Contoh: Tips produktif buat pekerja remote",
        crafterAudienceLabel: "Target Audiens",
        crafterAudiencePlaceholder: "Contoh: Pekerja remote yang sering terdistraksi",
        crafterDescLabel: "Penjelasan Singkat",
        crafterDescPlaceholder: "Fungsi, siapa yang pakai, kenapa menarik",
        crafterStyleLabel: "Gaya Konten",
        crafterGoalLabel: "Tujuan Konten",
        crafterFormatLabel: "Format Konten",
        crafterFormatCarousel: "Slide Post (Carousel)",
        crafterFormatThread: "Postingan Utuh (Utas)",
        craftBtn: "Buatkan Draf Konten",
        craftingTitle: "Merajut Kata...",
        craftingDesc: "AI sedang menyusun draf konten yang menarik.",
        crafterStyle1: "Edukasi",
        crafterStyle2: "Lucu",
        crafterStyle3: "Inspiratif",
        crafterStyle4: "Promosi",
        crafterGoal1: "Bikin penasaran (Engagement)",
        crafterGoal2: "Edukasi produk (Soft-selling)",
        crafterGoal3: "Promosi langsung (Hard-selling)",
        viralAnalyzerTitle: "Analisis Konten Viral",
        viralUploadLabel: "1. Unggah Screenshot",
        viralUploadAction: "Pilih file",
        viralDragDrop: "or drag and drop",
        viralMetricsLabel: "2. Masukkan Metrik (Opsional)",
        viralElementsLabel: "3. Tandai Elemen Penting (Opsional)",
        viralHookPlaceholder: "Hook / Judul yang digunakan",
        viralCTAPlaceholder: "Most Prominent CTA",
        viralNotesPlaceholder: "Visual observations or other notes...",
        analyzeBtn: "Analyze Why It's Viral",
        analyzingTitle: "Analyzing Content...",
        analyzingDesc: "AI is dissecting its secret formula.",
        analysisTitle: "In-depth Analysis",
        formulaTitle: "Formula/Template for Duplikasi",
        exampleTitle: "Formula Usage Example",
        regenerateBtn: "Create Alternative Version",
        tweakAndRegenerateBtn: "Tweak & Regenerate",
        useFormulaBtn: "Use This Formula",
        exportTitle: "Content Ready for Export",
        visualHookTitle: "Visual Ideas for Hook",
        getVisualHookBtn: "Get Visual Ideas",
        exportToDesignBtn: "Prep for Design Tool",
        tutorialHTML: `
            <p class="font-bold">Welcome to Pacu Konten! Here's how to maximize each feature:</p>
            <div class="space-y-3">
                <div><h4 class="font-semibold text-indigo-600">1. 🎯 Provide Context, Not Just a Topic</h4><p class="text-xs">The more specific you are, the sharper the result. For example: Instead of "Productivity," try "Productivity tips for remote workers distracted by social media."</p></div>
                <div><h4 class="font-semibold text-indigo-600">2. 👤 Focus on a Single Audience</h4><p class="text-xs">Choose a clear persona, e.g., "Design students who love scrolling TikTok" or "Homemakers starting an online business." Avoid targeting "everyone."</p></div>
                <div><h4 class="font-semibold text-indigo-600">3. 🎨 Define Style & Goal Upfront</h4><p class="text-xs">Select a clear style (educational, funny, etc.) and goal (click link, save post, etc.). This will influence the story structure and CTA generated by the AI.</p></div>
                <div><h4 class="font-semibold text-indigo-600">4. 🧩 Use Carousel Format for Storytelling</h4><p class="text-xs">If you choose the Slide Post format, the AI will divide it into 5-7 parts, ideal for visual narratives on Instagram, complete with a hook, problem, solution, and CTA.</p></div>
                <div><h4 class="font-semibold text-indigo-600">5. 🔁 Experiment & Iterate</h4><p class="text-xs">Not satisfied with the first result? Use the "Create Alternative Version" or "Tweak & Regenerate" buttons that appear below the output. You can experiment endlessly.</p></div>
                <div><h4 class="font-semibold text-indigo-600">6. 🧠 Analisis & Adaptasi Konten Viral</h4><p class="text-xs">Upload a screenshot of viral content and let the AI break down its formula. Use the "Use This Formula" button to directly apply its pattern to your new content draft.</p></div>
            </div>
        `
    }
};

let currentLanguage = localStorage.getItem('pacuKontenLang') || 'id';

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLanguage = lang;
    localStorage.setItem('pacuKontenLang', lang);
    document.documentElement.lang = lang;

    document.getElementById('lang-id').classList.toggle('active', lang === 'id');
    document.getElementById('lang-en').classList.toggle('active', lang === 'en');

    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const key = el.getAttribute('data-lang-key');
        if (translations[lang][key]) el.textContent = translations[lang][key];
    });

    document.querySelectorAll('[data-lang-key-placeholder]').forEach(el => {
        const key = el.getAttribute('data-lang-key-placeholder');
        if (translations[lang][key]) el.placeholder = translations[lang][key];
    });

    populateSelect('templateSelector', ['templateDefault', 'template1', 'template2', 'template3'], ['', 'kopi', 'workshop', 'tas']);
    populateSelect('campaignGoal', ['goalOption1', 'goalOption2', 'goalOption3', 'goalOption4']);
    populateSelect('toneOfVoice', ['toneOption1', 'toneOption2', 'toneOption3', 'toneOption4', 'toneOption5']);
    populateSelect('crafterStyle', ['crafterStyle1', 'crafterStyle2', 'crafterStyle3', 'crafterStyle4']);
    populateSelect('crafterGoal', ['crafterGoal1', 'crafterGoal2', 'crafterGoal3']);

    document.getElementById('tutorialContent').innerHTML = translations[lang].tutorialHTML;
}

function populateSelect(elementId, translationKeys, values = null) {
    const select = document.getElementById(elementId);
    const t = translations[currentLanguage];
    select.innerHTML = '';
    translationKeys.forEach((key, index) => {
        const option = document.createElement('option');
        option.value = values ? values[index] : t[key];
        option.textContent = t[key];
        select.appendChild(option);
    });
}

let generatedData = null;
let progressInterval = null;
let uploadedImageBase64 = null;
let lastCraftedContent = null;
const quickTemplates = {
    kopi: { goal: 'Membangun Komunitas', tone: 'Santai & Ramah', benefit: 'Ketenangan dan jeda di tengah kesibukan', name: 'Kopi Tenang', features: `Fitur: Biji kopi rendah kafein -> Bukti: Bisa dinikmati kapan saja tanpa cemas\nFitur: Diproses alami -> Bukti: Rasa kopi asli terjaga, tanpa bahan kimia`},
    workshop: { goal: 'Meningkatkan Otoritas Merek', tone: 'Profesional & Informatif', benefit: 'Kepercayaan diri untuk menguasai skill baru', name: 'Workshop Desain AI', features: `Fitur: Kurikulum berbasis proyek nyata -> Bukti: Lulus langsung punya portofolio\nFitur: Mentor praktisi industri -> Bukti: Belajar langsung dari pengalaman`},
    tas: { goal: 'Peluncuran Produk Baru', tone: 'Inspiratif & Memotivasi', benefit: 'Kebebasan menjelajahi kota', name: 'Tas Ransel "Arka"', features: `Fitur: Bahan anti-air -> Bukti: Aman menerjang hujan saat berangkat kerja\nFitur: Banyak kompartemen -> Bukti: Barang berharga aman dari pencuri`}
};

const DOMElements = {
    generateBtn: document.getElementById('generateBtn'),
    saveDraftBtn: document.getElementById('saveDraftBtn'),
    loadingDiv: document.getElementById('loading'),
    outputDiv: document.getElementById('output'),
    campaignGoalInput: document.getElementById('campaignGoal'),
    productNameInput: document.getElementById('productName'),
    emotionalBenefitInput: document.getElementById('emotionalBenefit'),
    productFeaturesInput: document.getElementById('productFeatures'),
    toneOfVoiceSelect: document.getElementById('toneOfVoice'),
    templateSelector: document.getElementById('templateSelector'),
    toast: document.getElementById('toast'),
    progressBar: document.getElementById('progressBar'),
    campaignCountEl: document.getElementById('campaignCount'),
    positiveFeedbackEl: document.getElementById('positiveFeedback'),
    contentHelpedEl: document.getElementById('contentHelped'),
    apiKeyBtn: document.getElementById('apiKeyBtn'),
    tutorialBtn: document.getElementById('tutorialBtn'),
    apiKeyModal: document.getElementById('apiKeyModal'),
    tutorialModal: document.getElementById('tutorialModal'),
    exportModal: document.getElementById('exportModal'),
    visualHookModal: document.getElementById('visualHookModal'),
    closeApiKeyModalBtn: document.getElementById('closeApiKeyModalBtn'),
    closeTutorialModalBtn: document.getElementById('closeTutorialModalBtn'),
    closeExportModalBtn: document.getElementById('closeExportModalBtn'),
    closeVisualHookModalBtn: document.getElementById('closeVisualHookModalBtn'),
    copyExportBtn: document.getElementById('copyExportBtn'),
    saveApiKeyBtn: document.getElementById('saveApiKeyBtn'),
    apiKeyInput: document.getElementById('apiKeyInput'),
    analyzeBtn: document.getElementById('analyzeBtn'),
    imageUpload: document.getElementById('imageUpload'),
    imagePreview: document.getElementById('imagePreview'),
    imagePreviewContainer: document.getElementById('imagePreviewContainer'),
    viralNotes: document.getElementById('viralNotes'),
    viralLoading: document.getElementById('viralLoading'),
    viralOutput: document.getElementById('viralOutput'),
    craftBtn: document.getElementById('craftBtn'),
    crafterLoading: document.getElementById('crafterLoading'),
    crafterOutput: document.getElementById('crafterOutput'),
    crafterTopic: document.getElementById('crafterTopic'),
    crafterDesc: document.getElementById('crafterDesc'),
    contentCrafterSection: document.getElementById('contentCrafter'),
    mainTabs: document.querySelectorAll('.main-tab'),
    tabContents: document.querySelectorAll('.tab-content'),
    loginThreadsBtn: document.getElementById('loginThreadsBtn'),
    dashboardData: document.getElementById('dashboardData'),
    authSection: document.getElementById('authSection'),
    postSort: document.getElementById('postSort'),
};

function setupEventListeners() {
    DOMElements.generateBtn.addEventListener('click', handleGenerateClick);
    DOMElements.saveDraftBtn.addEventListener('click', saveDraft);
    DOMElements.apiKeyBtn.addEventListener('click', () => toggleModal(DOMElements.apiKeyModal, true));
    DOMElements.tutorialBtn.addEventListener('click', () => toggleModal(DOMElements.tutorialModal, true));
    DOMElements.closeApiKeyModalBtn.addEventListener('click', () => toggleModal(DOMElements.apiKeyModal, false));
    DOMElements.closeTutorialModalBtn.addEventListener('click', () => toggleModal(DOMElements.tutorialModal, false));
    DOMElements.closeExportModalBtn.addEventListener('click', () => toggleModal(DOMElements.exportModal, false));
    DOMElements.closeVisualHookModalBtn.addEventListener('click', () => toggleModal(DOMElements.visualHookModal, false));
    DOMElements.copyExportBtn.addEventListener('click', copyExportedContent);
    DOMElements.saveApiKeyBtn.addEventListener('click', saveApiKey);
    document.getElementById('lang-id').addEventListener('click', () => setLanguage('id'));
    document.getElementById('lang-en').addEventListener('click', () => setLanguage('en'));
    DOMElements.templateSelector.addEventListener('change', applyTemplate);
    DOMElements.imageUpload.addEventListener('change', handleImageUpload);
    DOMElements.analyzeBtn.addEventListener('click', handleViralAnalysisClick);
    DOMElements.craftBtn.addEventListener('click', handleContentCraftClick);
    DOMElements.mainTabs.forEach(tab => tab.addEventListener('click', () => switchMainTab(tab.dataset.tab)));
    
    if (DOMElements.loginThreadsBtn) {
        DOMElements.loginThreadsBtn.addEventListener('click', handleThreadsLogin);
    }
    if (DOMElements.postSort) {
        DOMElements.postSort.addEventListener('change', handleSortPosts);
    }
}

async function handleGenerateClick() {
    if (!checkApiKey()) return;
    const { campaignGoal, productName, emotionalBenefit, features, toneOfVoice } = getFormValues();
    if (!productName || !emotionalBenefit || !features) {
        showToast(translations[currentLanguage].toastInputMissing);
        return;
    }
    setLoadingState(true);
    try {
        await generateContentWithAI(campaignGoal, productName, emotionalBenefit, features, toneOfVoice);
        updateStats();
    } catch (error) {
        handleError(error, DOMElements.outputDiv);
    } finally {
        setLoadingState(false);
    }
}

async function handleContentCraftClick() {
    if (!checkApiKey()) return;
    const { topic, description, audience, style, goal, format } = getCrafterFormValues();
    if (!topic || !description || !audience) {
        showToast(translations[currentLanguage].toastInputMissing);
        return;
    }
    setCrafterLoadingState(true);
    try {
        await generateCraftedContentWithAI(topic, description, audience, style, goal, format);
    } catch (error) {
        handleError(error, DOMElements.crafterOutput);
    } finally {
        setCrafterLoadingState(false);
    }
}

async function handleViralAnalysisClick() {
    if (!checkApiKey()) return;
    if (!uploadedImageBase64) {
        showToast(translations[currentLanguage].toastImageMissing);
        return;
    }
    DOMElements.viralLoading.classList.remove('hidden');
    DOMElements.viralOutput.classList.add('hidden');
    DOMElements.viralOutput.innerHTML = '';
    try {
        const metrics = {
            views: document.getElementById('viralViews').value,
            likes: document.getElementById('viralLikes').value,
            comments: document.getElementById('viralComments').value,
            shares: document.getElementById('viralShares').value,
        };
        const elements = {
            hook: document.getElementById('viralHook').value,
            cta: document.getElementById('viralCTA').value,
            notes: DOMElements.viralNotes.value
        };
        await generateViralAnalysisWithAI(uploadedImageBase64, elements, metrics);
    } catch (error) {
        handleError(error, DOMElements.viralOutput);
    } finally {
        DOMElements.viralLoading.classList.add('hidden');
        DOMElements.viralOutput.classList.remove('hidden');
    }
}

async function handleVisualHookGeneration(hookText) {
    if (!checkApiKey()) return;
    showToast("Generating visual ideas...");
    try {
        const prompt = getVisualHookAIPrompt(currentLanguage, hookText);
        const visualData = await apiCall(prompt);
        renderVisualHookIdeas(visualData);
        toggleModal(DOMElements.visualHookModal, true);
    } catch (error) {
        handleError(error, DOMElements.crafterOutput);
    }
}

function checkApiKey() {
    const apiKey = localStorage.getItem('geminiApiKey');
    if (!apiKey) {
        showToast(translations[currentLanguage].toastAPIKeyMissing);
        toggleModal(DOMElements.apiKeyModal, true);
        return false;
    }
    return true;
}

function handleError(error, outputElement) {
    console.error("Error:", error);
    const errorMsg = translations[currentLanguage].errorDesc.replace('{error}', error.message);
    outputElement.innerHTML = `<div class="text-center p-8 bg-red-50 rounded-xl border border-red-200"><h3 class="font-bold text-lg text-red-700">${translations[currentLanguage].errorTitle}</h3><p class="text-red-600">${errorMsg}</p></div>`;
    outputElement.classList.remove('hidden');
}

async function apiCall(prompt, imageBase64 = null) {
    const apiKey = localStorage.getItem('geminiApiKey') || "";
    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    let parts = [{ text: prompt }];
    if (imageBase64) {
        parts.push({ inlineData: { mimeType: 'image/jpeg', data: imageBase64.split(',')[1] } });
    }

    const payload = {
        contents: [{ parts }],
        generationConfig: { responseMimeType: "application/json" }
    };

    const response = await fetch(apiUrl, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
    if (!response.ok) { const errorBody = await response.text(); throw new Error(`API request failed: ${errorBody}`); }
    const result = await response.json();
    if (result.candidates?.[0]?.content?.parts?.[0]?.text) {
        return JSON.parse(result.candidates[0].content.parts[0].text);
    } else {
        throw new Error("Invalid or empty response structure from AI.");
    }
}

function getAIPrompt(lang, campaignGoal, productName, emotionalBenefit, features, toneOfVoice, feedbackSummary) {
    return `
        You are an expert social media campaign strategist. Your task is to create a single, highly detailed, cohesive, and post-ready 7-day content plan.
        **Campaign Details:**
        - Language: ${lang === 'id' ? 'Bahasa Indonesia' : 'English'}
        - Campaign Goal: "${campaignGoal}"
        - Product Name: "${productName}"
        - Core Emotional Benefit: "${emotionalBenefit}"
        - Features & Proof: ${features}
        - Tone of Voice: "${toneOfVoice}"
        **Past Performance Feedback (Use this to guide your decisions):**
        ${feedbackSummary}
        **Strict Instructions:**
        1.  **Analysis:** First, determine 3 strong content pillars. Then, create a 1-2 sentence campaign strategy summary.
        2.  **Weekly Plan:** Create a content plan for 7 days (keys: 'senin', 'selasa', etc.).
        3.  **Daily Schedule:** Each day MUST have 3 slots (keys: 'pagi', 'siang', 'malam').
        4.  **Content Output:** For each piece of content, provide: 'platform', 'archetype', 'hook', 'full_caption', 'visual_suggestion', 'visual_prompt' (a detailed, descriptive prompt for an image generation AI like Midjourney or DALL-E), 'hashtags', and 'strategic_reasoning'. The reasoning is crucial.
        5.  **JSON Structure:** Respond ONLY with a valid JSON object. The root object must have keys: "campaign_summary" (string), "content_pillars" (array of strings), and "weekly_plan" (object). The "weekly_plan" object must contain keys for each day ('senin', 'selasa', etc.), and each day's value must be an object with keys for each slot ('pagi', 'siang', 'malam'). Do not add any text, comments, or markdown formatting like \`\`\`json before or after the JSON object.
    `;
}

function getCrafterAIPrompt(lang, topic, description, audience, style, goal, format) {
    const formatInstruction = format === 'carousel'
        ? 'The output should be structured for a 5-7 part carousel slide post. The root object must have a key "slides", which is an array of objects. Each object in the array should have "content" and "visual_suggestion" keys.'
        : 'The output should be a single, long-form narrative post. The root object must have a single key "content" with the full text as a string.';

    return `
        You are a Threads Prompt Crafter. Your task is to create a single, engaging piece of content based on the user's input.
        - Language: ${lang === 'id' ? 'Bahasa Indonesia' : 'English'}
        - Topic/Product: "${topic}"
        - Brief Description: "${description}"
        - Target Audience: "${audience}"
        - Content Style: "${style}"
        - Content Goal: "${goal}"
        - Desired Format: "${format}"

        **Strict Instructions:**
        1.  Create a sharp, scroll-stopping hook.
        2.  Develop a relatable, flowing story or explanation.
        3.  Clearly explain the benefits or insights.
        4.  End with a strong Call to Action (CTA) that matches the content goal.
        5.  **JSON Structure:** Respond ONLY with a valid JSON object. ${formatInstruction} Do not add any text, comments, or markdown formatting like \`\`\`json before or after the JSON object.
    `;
}

function getViralAnalysisAIPrompt(lang, elements, metrics) {
    let metricsText = '';
    if (metrics.views || metrics.likes || metrics.comments || metrics.shares) {
        metricsText = `
        - Metrics:
          - Views: ${metrics.views || 'N/A'}
          - Likes: ${metrics.likes || 'N/A'}
          - Comments: ${metrics.comments || 'N/A'}
          - Shares: ${metrics.shares || 'N/A'}
        `;
    }
    let elementsText = `
        - Key Elements Identified by User:
          - Hook/Title: ${elements.hook || 'N/A'}
          - Prominent CTA: ${elements.cta || 'N/A'}
          - Visual/Other Notes: ${elements.notes || 'N/A'}
    `;
    return `
        As a Viral Content Strategist, analyze the provided image of a social media post.
        ${elementsText}
        ${metricsText}
        - Your task: Analyze why this content likely went viral. Break down its structure, psychology, and engagement triggers based on the image and provided data.
        - Output Language: ${lang === 'id' ? 'Bahasa Indonesia' : 'English'}
        - Required Output: Respond ONLY with a valid JSON object. The root object must have keys: "in_depth_analysis" (string with markdown for formatting), "formula" (string), and "example" (string). Do not add any text, comments, or markdown formatting like \`\`\`json before or after the JSON object.
    `;
}

function getVisualHookAIPrompt(lang, hookText) {
    return `
        You are a Visual Strategist for social media. For the following text hook, generate 3-5 creative and strong visual ideas for the first slide of an Instagram Carousel.
        - Text Hook: "${hookText}"
        - Language for ideas: ${lang === 'id' ? 'Bahasa Indonesia' : 'English'}
        - Required Output: Respond ONLY with a valid JSON object. The root object must have a key "ideas", which is an array of objects. Each object in the array should have "title" and "description" keys. Do not add any text, comments, or markdown formatting like \`\`\`json before or after the JSON object.
    `;
}

async function generateContentWithAI(campaignGoal, productName, emotionalBenefit, features, toneOfVoice) {
    const feedbackSummary = getFeedbackSummary();
    const prompt = getAIPrompt(currentLanguage, campaignGoal, productName, emotionalBenefit, features, toneOfVoice, feedbackSummary);
    generatedData = await apiCall(prompt);
    renderAllContent(generatedData);
}

async function generateCraftedContentWithAI(topic, description, audience, style, goal, format) {
    const prompt = getCrafterAIPrompt(currentLanguage, topic, description, audience, style, goal, format);
    lastCraftedContent = await apiCall(prompt);
    renderCraftedContent(lastCraftedContent, format);
}

async function generateViralAnalysisWithAI(base64ImageData, elements, metrics) {
    const prompt = getViralAnalysisAIPrompt(currentLanguage, elements, metrics);
    const analysisData = await apiCall(prompt, base64ImageData);
    renderViralAnalysis(analysisData);
}

function renderAllContent(data) {
    const plan = data.weekly_plan;
    const dayKeys = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu'];
    const displayDays = translations[currentLanguage].days;
    const t = translations[currentLanguage];
    let tabsHTML = displayDays.map((day, index) => `<button class="tab-btn flex-1 sm:flex-none whitespace-nowrap px-4 py-2.5 text-sm font-semibold border-b-2 transition-all duration-300 ${index === 0 ? 'tab-active' : 'tab-inactive'}" data-target="tab-${dayKeys[index]}">${day}</button>`).join('');
    let panelsHTML = dayKeys.map((dayKey, index) => `<div id="tab-${dayKey}" class="tab-panel ${index === 0 ? '' : 'hidden'} fade-in space-y-6">${renderDayContent(plan[dayKey])}</div>`).join('');
    let pillarsHTML = data.content_pillars.map(pillar => `<div class="bg-indigo-100 p-3 rounded-lg text-center"><span class="text-indigo-800 font-medium text-sm">${pillar}</span></div>`).join('');
    let html = `
        <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="p-4 sm:p-6 border-b border-gray-200">
                <div class="flex flex-col sm:flex-row justify-between items-center mb-4">
                    <h2 class="text-2xl font-bold mb-4 sm:mb-0 text-center sm:text-left">${t.outputTitle}</h2>
                    <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                        <button onclick="handleGenerateClick()" class="w-full sm:w-auto bg-gray-100 text-gray-800 font-semibold py-2.5 px-5 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" /></svg>
                            ${t.regenerateBtn}
                        </button>
                        <button id="downloadPdfBtn" class="w-full sm:w-auto bg-indigo-600 text-white font-bold py-2.5 px-5 rounded-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" /></svg>
                            ${t.downloadPdfBtn}
                        </button>
                    </div>
                </div>
                <p class="text-center text-gray-700 bg-indigo-50 p-4 rounded-xl border border-indigo-100 mb-6">${data.campaign_summary}</p>
                <div><h3 class="text-lg font-semibold mb-3 text-center sm:text-left">${t.contentPillarsTitle}</h3><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">${pillarsHTML}</div></div>
            </div>
            <div class="w-full bg-gray-50 p-4 sm:p-6">
                <nav class="flex border-b border-gray-200 overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">${tabsHTML}</nav>
                <div class="mt-5">${panelsHTML}</div>
            </div>
        </div>`;
    DOMElements.outputDiv.innerHTML = html;
    addTabListeners();
    document.getElementById('downloadPdfBtn').addEventListener('click', generatePDF);
}

function renderDayContent(dayData) {
    if (!dayData) return '';
    const slotKeys = ['pagi', 'siang', 'malam'];
    const displaySlots = translations[currentLanguage].slots;
    return slotKeys.map((slotKey, i) => dayData[slotKey] ? createScheduleCard(dayData[slotKey], displaySlots[i]) : '').join('');
}

function getArchetypeColor(archetype) {
    const lowerArchetype = (archetype || '').toLowerCase();
    if (lowerArchetype.includes('educator') || lowerArchetype.includes('pendidik')) return 'bg-blue-100 text-blue-800';
    if (lowerArchetype.includes('inspirator')) return 'bg-purple-100 text-purple-800';
    if (lowerArchetype.includes('entertainer') || lowerArchetype.includes('penghibur')) return 'bg-yellow-100 text-yellow-800';
    if (lowerArchetype.includes('promoter')) return 'bg-green-100 text-green-800';
    return 'bg-gray-100 text-gray-800';
}

function createScheduleCard(idea, time) {
    const contentId = `content_${Math.random().toString(36).substr(2, 9)}`;
    const feedbackData = getFeedback();
    const currentFeedback = feedbackData[contentId] ? feedbackData[contentId].score : 0;
    const t = translations[currentLanguage];
    const archetypeColor = getArchetypeColor(idea.archetype);

    return `
        <div class="content-card bg-white p-5 rounded-xl shadow-sm border border-gray-100">
            <div class="flex justify-between items-start mb-3">
                <p class="text-indigo-600 font-semibold">${idea.platform || 'N/A'}</p>
                <div class="text-right">
                    <span class="px-3 py-1 text-xs font-semibold rounded-full ${archetypeColor}">${idea.archetype || 'N/A'}</span>
                    <p class="text-gray-500 font-medium text-sm mt-1">${time}</p>
                </div>
            </div>
            <div class="space-y-5">
                ${renderCardSection(t.hookTitle, idea.hook, 'caption')}
                ${renderCardSection(t.captionTitle, idea.full_caption, 'caption')}
                ${renderCardSection(t.visualTitle, idea.visual_suggestion, 'visual')}
                ${renderCardSection(t.visualPromptTitle, idea.visual_prompt, 'visual_prompt')}
                ${renderCardSection(t.hashtagTitle, idea.hashtags, 'hashtags')}

                <div>
                    <button class="flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-indigo-600" onclick="toggleReasoning(this)">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v.01a1 1 0 102 0V6zM10 15a1 1 0 01-1-1v-4a1 1 0 112 0v4a1 1 0 01-1 1z" clip-rule="evenodd" /></svg>
                        ${t.reasoningLabel}
                    </button>
                    <div class="reasoning-panel mt-2 text-sm text-gray-700 bg-yellow-50 border-l-4 border-yellow-400 p-0">
                        <p class="p-3">${idea.strategic_reasoning || ''}</p>
                    </div>
                </div>
            </div>
            <div class="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                <div class="flex items-center gap-3">
                    <span class="text-sm font-medium text-gray-600">${t.feedbackLabel}</span>
                    <div class="flex gap-1">
                        <button class="feedback-btn p-2 rounded-full hover:bg-green-100 ${currentFeedback === 1 ? 'bg-green-200 selected' : ''}" onclick="handleFeedback(this, '${contentId}', 1, '${idea.archetype}', '${idea.hook}')">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.562 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" /></svg>
                        </button>
                        <button class="feedback-btn p-2 rounded-full hover:bg-red-100 ${currentFeedback === -1 ? 'bg-red-200 selected' : ''}" onclick="handleFeedback(this, '${contentId}', -1, '${idea.archetype}', '${idea.hook}')">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor"><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0010.057 2H4.641a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 003.438 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.2-2.4a4 4 0 00.8-2.4z" /></svg>
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-3 w-full sm:w-auto">
                    <button class="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 transition-all flex items-center justify-center gap-2" onclick="copyContent(this, 'caption')">${t.copyCaptionBtn}</button>
                    <button class="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600 transition-all flex items-center justify-center gap-2" onclick="copyContent(this, 'hashtags')">${t.copyHashtagsBtn}</button>
                </div>
            </div>
        </div>`;
}

function renderCardSection(title, content, type) {
    if (!content) return '';
    const isHashtag = type === 'hashtags';
    const isVisualPrompt = type === 'visual_prompt';
    const bgColor = isHashtag ? 'bg-indigo-50' : isVisualPrompt ? 'bg-gray-800' : 'bg-gray-50';
    const textColor = isHashtag ? 'text-indigo-700' : isVisualPrompt ? 'text-green-300' : 'text-gray-800';
    const font = isHashtag || isVisualPrompt ? 'font-mono' : '';
    return `
        <div>
            <h4 class="font-semibold text-base mb-1.5">${title}</h4>
            <div class="${textColor} ${bgColor} p-3 rounded-lg border border-gray-200 whitespace-pre-wrap ${font}" data-type="${type}">${content}</div>
        </div>`;
}

function renderViralAnalysis(data) {
    const t = translations[currentLanguage];
    const html = `
        <div class="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mt-8 space-y-6">
            <div>
                <h3 class="text-xl font-bold mb-3 text-gray-800">${t.analysisTitle}</h3>
                <div class="prose prose-sm max-w-none text-gray-700">${data.in_depth_analysis.replace(/\n/g, '<br>')}</div>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
                <h3 class="text-xl font-bold mb-3 text-gray-800">${t.formulaTitle}</h3>
                <pre class="bg-gray-800 text-white p-4 rounded-md text-sm whitespace-pre-wrap font-mono" id="viralFormula">${data.formula}</pre>
            </div>
            <div>
                <h3 class="text-xl font-bold mb-3 text-gray-800">${t.exampleTitle}</h3>
                <p class="text-gray-700 italic border-l-4 border-indigo-300 pl-4">${data.example}</p>
            </div>
            <div class="pt-4 border-t">
                <button onclick="useViralFormula()" class="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-purple-700 transition-all flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" /></svg>
                    ${t.useFormulaBtn}
                </button>
            </div>
        </div>
    `;
    DOMElements.viralOutput.innerHTML = html;
}

function renderCraftedContent(data, format) {
    const t = translations[currentLanguage];
    let contentHTML = '';
    let hookText = '';
    if (format === 'carousel') {
        hookText = data.slides[0].content;
        contentHTML = data.slides.map((slide, index) => `
            <div class="bg-white rounded-xl shadow-sm border p-5 mb-4">
                <h4 class="font-bold text-lg mb-2 text-indigo-600">Slide ${index + 1}</h4>
                <p class="text-gray-800 mb-3">${slide.content}</p>
                <p class="text-sm text-gray-500"><strong class="font-semibold">Saran Visual:</strong> ${slide.visual_suggestion}</p>
            </div>
        `).join('');
    } else {
        hookText = data.content.split('\n')[0];
        contentHTML = `<div class="bg-white rounded-xl shadow-sm border p-5"><div class="prose prose-sm max-w-none">${data.content.replace(/\n/g, '<br>')}</div></div>`;
    }
    const html = `
        <div class="bg-white rounded-2xl shadow-lg p-4 sm:p-6 mt-8">
            ${contentHTML}
            <div class="pt-4 border-t mt-4 flex flex-col sm:flex-row gap-3">
                 <button onclick="handleContentCraftClick()" class="w-full sm:w-auto flex-1 bg-gray-100 text-gray-800 font-semibold py-2.5 px-5 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 110 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" /></svg>
                    ${t.regenerateBtn}
                </button>
                <button onclick="DOMElements.contentCrafterSection.scrollIntoView({behavior: 'smooth'})" class="w-full sm:w-auto flex-1 bg-green-100 text-green-800 font-semibold py-2.5 px-5 rounded-lg hover:bg-green-200 transition-all flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg>
                    ${t.tweakAndRegenerateBtn}
                </button>
                ${format === 'carousel' ? `
                <button onclick="handleVisualHookGeneration('${hookText.replace(/'/g, "\\'")}')" class="w-full sm:w-auto flex-1 bg-blue-100 text-blue-800 font-semibold py-2.5 px-5 rounded-lg hover:bg-blue-200 transition-all flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" /></svg>
                    ${t.getVisualHookBtn}
                </button>
                <button onclick="handleExportForDesignTool()" class="w-full sm:w-auto flex-1 bg-yellow-100 text-yellow-800 font-semibold py-2.5 px-5 rounded-lg hover:bg-yellow-200 transition-all flex items-center justify-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" /></svg>
                    ${t.exportToDesignBtn}
                </button>
                ` : ''}
            </div>
        </div>`;
    DOMElements.crafterOutput.innerHTML = html;
}

function renderVisualHookIdeas(data) {
    const contentDiv = document.getElementById('visualHookContent');
    contentDiv.innerHTML = data.ideas.map(idea => `
        <div class="p-3 bg-gray-50 rounded-lg border">
            <p class="font-semibold text-gray-800">${idea.title}</p>
            <p class="text-sm text-gray-600">${idea.description}</p>
        </div>
    `).join('');
}
function getFormValues() { return { campaignGoal: DOMElements.campaignGoalInput.value, productName: DOMElements.productNameInput.value.trim(), emotionalBenefit: DOMElements.emotionalBenefitInput.value.trim(), features: DOMElements.productFeaturesInput.value.trim(), toneOfVoice: DOMElements.toneOfVoiceSelect.value }; }
function getCrafterFormValues() { return { topic: document.getElementById('crafterTopic').value.trim(), description: document.getElementById('crafterDesc').value.trim(), audience: document.getElementById('crafterAudience').value.trim(), style: document.getElementById('crafterStyle').value, goal: document.getElementById('crafterGoal').value, format: document.querySelector('input[name="contentFormat"]:checked').value }; }
function setLoadingState(isLoading) {
    DOMElements.generateBtn.disabled = isLoading;
    if (isLoading) {
        DOMElements.outputDiv.classList.add('hidden');
        DOMElements.outputDiv.innerHTML = '';
        DOMElements.loadingDiv.classList.remove('hidden');
        DOMElements.generateBtn.classList.add('opacity-50', 'cursor-not-allowed');
        DOMElements.generateBtn.querySelector('span').textContent = translations[currentLanguage].generateBtnLoading;
        let progress = 0;
        DOMElements.progressBar.style.width = '0%';
        clearInterval(progressInterval);
        progressInterval = setInterval(() => { progress += Math.random() * 5; if (progress > 95) progress = 95; DOMElements.progressBar.style.width = `${progress}%`; }, 300);
    } else {
        DOMElements.loadingDiv.classList.add('hidden');
        DOMElements.outputDiv.classList.remove('hidden');
        DOMElements.outputDiv.scrollIntoView({ behavior: 'smooth', block: 'start' });
        DOMElements.generateBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        DOMElements.generateBtn.querySelector('span').textContent = translations[currentLanguage].generateBtn;
        clearInterval(progressInterval);
        DOMElements.progressBar.style.width = '100%';
    }
}
function setCrafterLoadingState(isLoading) {
    DOMElements.craftBtn.disabled = isLoading;
    if (isLoading) {
        DOMElements.crafterOutput.classList.add('hidden');
        DOMElements.crafterOutput.innerHTML = '';
        DOMElements.crafterLoading.classList.remove('hidden');
        DOMElements.craftBtn.classList.add('opacity-50', 'cursor-not-allowed');
    } else {
        DOMElements.crafterLoading.classList.add('hidden');
        DOMElements.crafterOutput.classList.remove('hidden');
        DOMElements.craftBtn.classList.remove('opacity-50', 'cursor-not-allowed');
    }
}
function switchMainTab(tabId) {
    DOMElements.mainTabs.forEach(tab => tab.classList.remove('active'));
    DOMElements.tabContents.forEach(content => content.classList.add('hidden'));
    document.querySelector(`.main-tab[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(`${tabId}-content`).classList.remove('hidden');
    if (tabId === 'dashboard') {
        loadDashboard();
    }
}
function addTabListeners() {
    document.querySelectorAll('.tab-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.replace('tab-active', 'tab-inactive'));
            button.classList.replace('tab-inactive', 'tab-active');
            document.querySelectorAll('.tab-panel').forEach(panel => panel.classList.add('hidden'));
            document.getElementById(button.dataset.target).classList.remove('hidden');
        });
    });
}
function toggleModal(modal, show) { if (show) modal.classList.remove('hidden'); else modal.classList.add('hidden'); }
function showToast(message) { DOMElements.toast.textContent = message; DOMElements.toast.classList.remove('opacity-0', 'translate-y-20'); setTimeout(() => { DOMElements.toast.classList.add('opacity-0', 'translate-y-20'); }, 3000); }
window.toggleReasoning = (button) => { const panel = button.nextElementSibling; panel.classList.toggle('open'); panel.style.padding = panel.classList.contains('open') ? '0.75rem' : '0'; };
window.copyContent = (button, type) => { const card = button.closest('.content-card'); const element = card.querySelector(`[data-type="${type}"]`); if (!element) return; navigator.clipboard.writeText(element.innerText).then(() => { const t = translations[currentLanguage]; showToast(t.toastContentCopied); const originalText = button.textContent; button.textContent = t.copiedSuccess; setTimeout(() => { button.textContent = originalText; }, 2000); }).catch(err => console.error('Failed to copy: ', err)); };
function saveDraft() { localStorage.setItem('campaignDraft', JSON.stringify(getFormValues())); showToast(translations[currentLanguage].toastDraftSaved); }
function loadDraft() { const draft = JSON.parse(localStorage.getItem('campaignDraft')); if (draft) { DOMElements.campaignGoalInput.value = draft.campaignGoal; DOMElements.productNameInput.value = draft.productName; DOMElements.emotionalBenefitInput.value = draft.emotionalBenefit; DOMElements.productFeaturesInput.value = draft.features; DOMElements.toneOfVoiceSelect.value = draft.toneOfVoice; } }
function saveApiKey() { localStorage.setItem('geminiApiKey', DOMElements.apiKeyInput.value); toggleModal(DOMElements.apiKeyModal, false); showToast(translations[currentLanguage].toastAPIKeySaved); }
function initStats() { DOMElements.campaignCountEl.textContent = localStorage.getItem('campaignCount') || 0; DOMElements.positiveFeedbackEl.textContent = `${localStorage.getItem('positiveFeedback') || 0}%`; DOMElements.contentHelpedEl.textContent = Object.keys(getFeedback()).length || 0; }
function updateStats() { const newCount = (parseInt(localStorage.getItem('campaignCount') || 0) + 1); localStorage.setItem('campaignCount', newCount); DOMElements.campaignCountEl.textContent = newCount; }
window.handleFeedback = (button, contentId, score, archetype, hook) => { const feedbackData = getFeedback(); feedbackData[contentId] = { score, archetype, hook, timestamp: new Date().toISOString() }; localStorage.setItem('aiCampaignFeedback', JSON.stringify(feedbackData)); const feedbackCount = Object.keys(feedbackData).length; const positiveCount = Object.values(feedbackData).filter(fb => fb.score === 1).length; const positivePercentage = feedbackCount > 0 ? Math.round((positiveCount / feedbackCount) * 100) : 0; localStorage.setItem('positiveFeedback', positivePercentage); initStats(); const parent = button.parentElement; parent.querySelectorAll('.feedback-btn').forEach(btn => btn.classList.remove('selected', 'bg-green-200', 'bg-red-200')); button.classList.add('selected'); if (score === 1) button.classList.add('bg-green-200'); if (score === -1) button.classList.add('bg-red-200'); };
function getFeedback() { try { return JSON.parse(localStorage.getItem('aiCampaignFeedback')) || {}; } catch (e) { return {}; } }
function getFeedbackSummary() { const feedbackData = getFeedback(); const successful = Object.values(feedbackData).filter(i => i.score === 1).map(i => `[${i.archetype}] "${i.hook}"`); const unsuccessful = Object.values(feedbackData).filter(i => i.score === -1).map(i => `[${i.archetype}] "${i.hook}"`); const t = translations[currentLanguage]; if (successful.length === 0 && unsuccessful.length === 0) return t.days[0] === 'Monday' ? "No previous feedback." : "Tidak ada umpan balik."; let summary = ""; if (successful.length > 0) summary += `${t.days[0] === 'Monday' ? 'Successful content to prioritize' : 'Konten sukses (prioritaskan)'}: \n- ${successful.join('\n- ')}\n\n`; if (unsuccessful.length > 0) summary += `${t.days[0] === 'Monday' ? 'Less successful content to avoid' : 'Konten kurang sukses (hindari)'}: \n- ${unsuccessful.join('\n- ')}`; return summary; }
function applyTemplate(e) { const selectedKey = e.target.value; if (selectedKey && quickTemplates[selectedKey]) { const template = quickTemplates[selectedKey]; DOMElements.campaignGoalInput.value = template.goal; DOMElements.toneOfVoiceSelect.value = template.tone; DOMElements.emotionalBenefitInput.value = template.benefit; DOMElements.productNameInput.value = template.name; DOMElements.productFeaturesInput.value = template.features; } }
function handleImageUpload(event) { const file = event.target.files[0]; if (!file) return; const reader = new FileReader(); reader.onload = (e) => { uploadedImageBase64 = e.target.result; DOMElements.imagePreview.style.backgroundImage = `url('${uploadedImageBase64}')`; DOMElements.imagePreviewContainer.classList.remove('hidden'); }; reader.readAsDataURL(file); }
async function generatePDF() { showToast("Fungsi PDF sedang dalam pengembangan."); }
window.useViralFormula = () => {
    const formula = document.getElementById('viralFormula').innerText;
    switchMainTab('crafter');
    DOMElements.crafterDesc.value = formula;
    DOMElements.contentCrafterSection.scrollIntoView({ behavior: 'smooth' });
    showToast('Formula telah disalin ke Perajin Konten!');
}
window.handleExportForDesignTool = () => {
    if (!lastCraftedContent || !lastCraftedContent.slides) return;
    const text = lastCraftedContent.slides.map((slide, index) => `SLIDE ${index + 1}:\n${slide.content}\n\nVISUAL: ${slide.visual_suggestion}`).join('\n\n---\n\n');
    document.getElementById('exportContent').value = text;
    toggleModal(DOMElements.exportModal, true);
}
function copyExportedContent() {
    const content = document.getElementById('exportContent');
    content.select();
    document.execCommand('copy');
    showToast(translations[currentLanguage].toastContentCopied);
}
function getThreadsToken() {
    return localStorage.getItem('threads_access_token');
}
function setThreadsToken(token) {
    localStorage.setItem('threads_access_token', token);
}
function handleThreadsLogin() {
    window.location.href = '/api/auth';
}
async function loadDashboard() {
    const token = getThreadsToken();
    if (!token) {
        DOMElements.authSection.classList.remove('hidden');
        DOMElements.dashboardData.classList.add('hidden');
        return;
    }
    DOMElements.authSection.classList.add('hidden');
    DOMElements.dashboardData.classList.remove('hidden');
    try {
        const response = await fetch('/api/dashboard', {
            headers: {
                'X-Threads-Access-Token': token
            }
        });
        if (!response.ok) throw new Error('Failed to fetch dashboard data');
        const data = await response.json();
        renderDashboard(data);
    } catch (error) {
        console.error('Error loading dashboard:', error);
        showToast('Gagal memuat data dashboard.');
        DOMElements.authSection.classList.remove('hidden');
        DOMElements.dashboardData.classList.add('hidden');
        document.getElementById('authStatus').classList.remove('hidden');
    }
}
let myChart = null;
let allPosts = [];
function renderDashboard(data) {
    document.getElementById('dashboardFollowers').textContent = data.followers;
    document.getElementById('dashboardLikes').textContent = data.likes;
    document.getElementById('dashboardInteractions').textContent = data.interactions;
    document.getElementById('dashboardReach').textContent = data.reach;
    document.getElementById('dashboardEngagementRate').textContent = `${data.engagement_rate}%`;
    const ctx = document.getElementById('interactionChart').getContext('2d');
    const chartData = {
        labels: data.chartData.map(d => d.date),
        datasets: [{
            label: 'Interaksi',
            data: data.chartData.map(d => d.interactions),
            borderColor: 'rgb(79, 70, 229)',
            tension: 0.1,
            fill: false,
        }]
    };
    if (myChart) myChart.destroy();
    myChart = new Chart(ctx, { type: 'line', data: chartData });
    allPosts = data.posts;
    renderPosts(allPosts);
}
function renderPosts(posts) {
    const postList = document.getElementById('postList');
    postList.innerHTML = posts.map(post => `
        <div class="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p class="text-sm text-gray-500 mb-2">${new Date(post.timestamp).toLocaleString()}</p>
            <p class="font-medium text-gray-800">${post.text.substring(0, 100)}...</p>
            <div class="flex items-center gap-4 mt-3 text-sm text-gray-600">
                <span>Likes: <span class="font-bold">${post.likes}</span></span>
                <span>Komentar: <span class="font-bold">${post.comments}</span></span>
                <span>Views: <span class="font-bold">${post.views}</span></span>
            </div>
        </div>
    `).join('');
}
function handleSortPosts() {
    const sortBy = DOMElements.postSort.value;
    let sortedPosts = [...allPosts];
    if (sortBy === 'likes') {
        sortedPosts.sort((a, b) => b.likes - a.likes);
    } else if (sortBy === 'interactions') {
        sortedPosts.sort((a, b) => (b.likes + b.comments) - (a.likes + a.comments));
    } else {
        sortedPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
    }
    renderPosts(sortedPosts);
}
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLanguage);
    loadDraft();
    initStats();
    setupEventListeners();
    DOMElements.apiKeyInput.value = localStorage.getItem('geminiApiKey') || '';
});
