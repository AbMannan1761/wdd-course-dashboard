// WDD Course Dashboard - Client-side Logic

let courseData = [];
let activeClassId = null;
let activeVideoPath = null;

// Detailed Bengali Summaries for all 36 classes
const classSummaries = {
  1: "ওয়েব ডিজাইন ও ডেভেলপমেন্টের বেসিক ক্লাস। এতে ওয়েব ডিজাইন কী, একজন ডিজাইনার ও ডেভেলপারের ভূমিকা ও কাজের ক্ষেত্র এবং পার্থক্য আলোচনা করা হয়েছে। এইচটিএমএল-৫ (HTML5) এর বেসিক সিনট্যাক্স, হেডার, বডি স্ট্রাকচার, হেডিং ট্যাগ (h1-h6) এবং টেক্সট এডিটর (যেমন: Sublime Text/VS Code) ও ব্রাউজার পরিচিতি নিয়ে আলোচনা করা হয়েছে।",
  2: "এইচটিএমএল-এর অত্যন্ত গুরুত্বপূর্ণ ট্যাগসমূহ নিয়ে আলোচনা। ব্লক এলিমেন্ট (যা পুরো লাইন দখল করে) এবং ইনলাইন এলিমেন্ট (যা শুধুমাত্র তার ভেতরের কন্টেন্ট পরিমাণ জায়গা নেয়) নিয়ে ধারণা দেওয়া হয়েছে। এইচটিএমএল কমেন্টস লেখার নিয়ম, অর্ডারড ও আনঅর্ডারড লিস্ট (ol, ul, li) তৈরি এবং আইডি (ID) ও ক্লাস (Class) এট্রিবিউটের সঠিক ব্যবহার শেখানো হয়েছে। মারকুই (Marquee) ট্যাগের মাধ্যমে স্ক্রলিং টেক্সট তৈরি করা হয়েছে।",
  3: "ব্যবহারকারীর কাছ থেকে তথ্য নেয়ার জন্য এইচটিএমএল ফর্ম ডিজাইন। বিভিন্ন ইনপুট টাইপ (Text, Password, Email, Checkbox, Radio, Submit) এবং ফর্ম এলিমেন্টসমূহ নিয়ে বিস্তারিত আলোচনা। এছাড়া ওয়েবসাইটে কিভাবে অডিও ও ভিডিও যুক্ত করতে হয় এবং গুগল ম্যাপ ও ইউটিউব ভিডিও এম্বেড (Embed) বা যুক্ত করতে হয় তা শেখানো হয়েছে।",
  4: "এইচটিএমএল টেবিল (Table) তৈরির নিয়ম। টেবিলের বিভিন্ন এট্রিবিউট (border, cellspacing, cellpadding, colspan, rowspan) ব্যবহার করে ডেটা গ্রিড তৈরি করা। নেস্টেড টেবিল (টেবিলের ভেতর টেবিল) দিয়ে জটিল স্ট্রাকচার ও পেজ লেআউট তৈরি করার কৌশল নিয়ে এই ক্লাসে আলোচনা করা হয়েছে।",
  5: "সিএসএস (Cascading Style Sheets) এর প্রথম ক্লাস। সিএসএস এর সিনট্যাক্স, ইনলাইন সিএসএস (ট্যাগের ভেতরে), ইন্টারনাল সিএসএস (হেড ট্যাগের ভেতরে style দিয়ে) এবং এক্সটারনাল সিএসএস (আলাদা ফাইলে) যুক্ত করার নিয়ম শেখানো হয়েছে। আইডি ও ক্লাস সিলেক্টরের পার্থক্য এবং সিএসএস এর বেসিক প্রপার্টিসমূহ (color, background, border, font-size) প্র্যাকটিস করা হয়েছে।",
  6: "ওয়েবসাইট লেআউটের সবচেয়ে গুরুত্বপূর্ণ ট্যাগ ডিভ (Div) নিয়ে কাজ। মার্জিন ও প্যাডিং-এর পার্থক্য ও ব্যবহার। সিএসএস ফ্লোট (float: left/right) এবং ক্লিয়ার (clear) প্রপার্টি ব্যবহার করে পাশাপাশি কলাম ভিত্তিক ওয়েবসাইট লেআউট ডিজাইন করার নিয়ম এবং টেক্সট ও ফন্ট স্টাইলিং শেখানো হয়েছে।",
  7: "আধুনিক সিএসএস লেআউট তৈরির অন্যতম প্রধান হাতিয়ার ফ্লেক্সবক্স (Flexbox) পরিচিতি। ফ্লেক্স ডিরেকশন, জাস্টিফাই কন্টেন্ট, অ্যালাইন আইটেমস প্রপার্টির ব্যবহার। এছাড়া সিএসএস পজিশন (Static, Relative, Absolute, Fixed, Sticky) ব্যবহার করে কিভাবে হেডার ও ড্রপডাউন মেনু তৈরি করতে হয় তা এই ক্লাসে দেখানো হয়েছে।",
  8: "সিএসএস-এর অ্যাডভান্সড ডিজাইন প্রপার্টিসমূহ। ইনপুট বক্স ও বাটন স্টাইলিং, ব্যাকগ্রাউন্ড ইমেজের পজিশনিং ও সাইজিং, বর্ডার ও বক্স শ্যাডো (ছায়া) ইফেক্ট, লিনিয়ার ও রেডিয়াল গ্রেডিয়েন্ট কালার স্কিম, এবং হোভার করার পর ট্রানজিশন (Transition) ও ট্রান্সফর্মেশন (Transform - scale, rotate, translate) ইফেক্টস।",
  9: "এইচটিএমএল ও সিএসএস-এর সমস্যা সমাধান (Problem Solving) এবং রিভিশন ক্লাস। শিক্ষার্থীরা তাদের পূর্ববর্তী কাজগুলোর সমস্যা নিয়ে আলোচনা করেছে এবং একটি সম্পূর্ণ রেজিস্ট্রেশন ফর্ম ও লগইন পেজ ডিজাইন প্রজেক্ট প্র্যাকটিস করেছে।",
  10: "রেসপন্সিভ ওয়েব ডিজাইন (RWD) এর পরিচিতি ক্লাস। বিভিন্ন স্ক্রিন সাইজে (ডেস্কটপ, ট্যাবলেট, মোবাইল) ওয়েবসাইট সুন্দরভাবে দেখানোর কৌশল। মেটা ভিউপোর্ট ট্যাগের গুরুত্ব, মিডিয়া কুয়েরি (Media Queries) লেখার নিয়ম এবং স্ট্যান্ডার্ড রেসপন্সিভ ব্রেকপয়েন্টস (যেমন: 576px, 768px, 992px, 1200px) প্র্যাকটিস।",
  11: "এইচটিএমএল এবং সিএসএস ব্যবহার করে একটি লাইভ প্রজেক্ট তৈরি। ৫টি সম্পূর্ণ রেসপন্সিভ সেকশন বিশিষ্ট একটি ওয়েবসাইট ল্যান্ডিং পেজ ডিজাইন করা হয়েছে যেখানে ব্যানার, সার্ভিস, পোর্টফোলিও এবং কন্টাক্ট সেকশন যুক্ত করা হয়েছে।",
  12: "বিশ্বের সবচেয়ে জনপ্রিয় রেসপন্সিভ ফ্রেমওয়ার্ক বুটস্ট্র্যাপ (Bootstrap 5) পরিচিতি। বুটস্ট্র্যাপ কিভাবে ইনস্টল ও লিংক করতে হয়, গ্রিড সিস্টেম (Containers, Rows, Columns) কিভাবে রেসপন্সিভ কাজ করে এবং বুটস্ট্র্যাপের বিভিন্ন কন্টেন্ট ও বেসিক কম্পোনেন্টসমূহের প্র্যাকটিস।",
  13: "বুটস্ট্র্যাপের রেডিমেড কম্পোনেন্টগুলো যেমন নেভবার (Navbar) এবং ক্যারোসেল (Slider) কিভাবে সম্পূর্ণ কাস্টমাইজ করতে হয়। বুটস্ট্র্যাপের গ্রিড সিস্টেম এবং ইউটিলিটি ক্লাসগুলো ব্যবহার করে একটি সম্পূর্ণ পার্সোনাল পোর্টফোলিও ওয়েবসাইট তৈরি করা হয়েছে।",
  14: "মিড-টার্ম পরীক্ষার মূল্যায়ন এবং অ্যাডোবি ফটোশপ (Photoshop) পরিচিতি। ওয়েব ডিজাইনের জন্য পিএসডি (PSD) ফাইল ওপেন করার নিয়ম, রুলার ও স্লাইসিং টুলের ব্যবহার এবং পিএসডি ফাইল থেকে কিভাবে লোগো, ব্যানার ও আইকন ক্রপ করে কেটে সংরক্ষণ করতে হয় তা দেখানো হয়েছে।",
  15: "সিএসএস অ্যানিমেশন এবং অ্যানিমেট প্লাগইন এর ব্যবহার। `@keyframes` ব্যবহার করে কিভাবে কাস্টম সিএসএস অ্যানিমেশন তৈরি করতে হয় এবং তৈরি করা অ্যানিমেশন কিভাবে পেজের বিভিন্ন উপাদানে প্রয়োগ করতে হয়। এছাড়া Animate.css প্লাগইন ব্যবহার করে সহজে অসাধারণ অ্যানিমেশন ইফেক্ট দেওয়ার নিয়ম।",
  16: "পিএসডি থেকে এইচটিএমএল (PSD to HTML) কনভার্সনের প্রথম প্র্যাকটিকাল ক্লাস। ফটোশপ থেকে গ্রাফিক্স ও মেজারমেন্ট নিয়ে এইচটিএমএল ও কাস্টম সিএসএস ব্যবহার করে একটি বেসিক ল্যান্ডিং পেজ লেআউট তৈরি করার পদ্ধতি।",
  17: "অ্যাডভান্সড পিএসডি থেকে এইচটিএমএল রূপান্তর (পার্ট ১)। বুটস্ট্র্যাপ ৫ ব্যবহার করে কিভাবে দ্রুত পিএসডি ডিজাইনকে এইচটিএমএল-এ নিখুঁতভাবে রূপান্তর করা যায়। মেনু, ব্যানার ও গ্রিড লেআউটগুলোর কোডিং প্র্যাকটিস।",
  18: "অ্যাডভান্সড পিএসডি থেকে এইচটিএমএল রূপান্তর (পার্ট ২)। পিএসডির বাকি সেকশনগুলোর ডিজাইন সম্পন্ন করা এবং সম্পূর্ণ ওয়েবসাইটটি মোবাইল, ট্যাবলেট ও ডেস্কটপের জন্য রেসপন্সিভ করা। বুটস্ট্র্যাপের কাস্টম গ্রিড নিয়ে অ্যাডভান্সড বাগ ফিক্সিং।",
  19: "স্পেশাল ল্যাব ক্লাস। ৪ ঘণ্টার এই প্র্যাকটিকাল ক্লাসে শিক্ষার্থীরা সরাসরি ল্যাবে বসে তাদের পিএসডি থেকে এইচটিএমএল কনভার্সন প্রজেক্ট সম্পন্ন করেছে এবং মেন্টরের সহায়তায় কোড অপটিমাইজ ও বাগ ফিক্সিং করেছে।",
  20: "ক্লায়েন্ট সাইড স্ক্রিপ্টিং ল্যাঙ্গুয়েজ জাভাস্ক্রিপ্ট (JavaScript) পরিচিতি। জাভাস্ক্রিপ্টের আউটপুট মেথড, সিনট্যাক্স, ভেরিয়েবল (let, const), অপারেটর, ডাটা টাইপ, ফাংশন, অবজেক্ট, ইভেন্টস, স্ট্রিং মেথড এবং নাম্বার মেথড নিয়ে বিস্তারিত প্র্যাকটিকাল আলোচনা।",
  21: "জাভাস্ক্রিপ্টের লজিক্যাল কন্ট্রোল ক্লাস। কন্ডিশনাল স্টেটমেন্ট (if, else if, else), কম্পারিসন অপারেটর, লুপস (For Loop, While Loop), জাভাস্ক্রিপ্ট রিজার্ভড ওয়ার্ডস এবং ক্লায়েন্ট সাইড ফর্ম ভ্যালিডেশন (ফর্ম সাবমিট করার আগে ভুল ডেটা বা ফাঁকা থাকলে তা ধরা) প্র্যাকটিস।",
  22: "জাভাস্ক্রিপ্টের জনপ্রিয় লাইব্রেরি জেকুয়েরি (jQuery) পরিচিতি। কেন জেকুয়েরি ব্যবহার করা হয়, সিডিএন ও লোকাল ফাইলের মাধ্যমে পেজে যুক্ত করা, বেসিক সিনট্যাক্স ও সিলেক্টরস। জেকুয়েরি ইভেন্টস এবং ইফেক্টস (Hide, Show, Toggle, Slide, Fade) নিয়ে প্র্যাকটিস।",
  23: "জেকুয়েরি দিয়ে আকর্ষণীয় অ্যানিমেশন তৈরি। `animate()` মেথড, অ্যানিমেশন স্টপ করা, জেকুয়েরি চেইনিং ও কলব্যাক ফাংশন। সিএসএস ক্লাস পরিবর্তন করা (addClass, removeClass, toggleClass) এবং জেকুয়েরি প্লাগইন ব্যবহার করে রেসপন্সিভ ইমেজ স্লাইডার ইন্টিগ্রেশন।",
  24: "ফ্রিল্যান্সিং মার্কেটপ্লেস ফাইভার (Fiverr) ক্লাস। ফাইভার ডটকমের পরিচয়, প্রফেশনাল অ্যাকাউন্ট খোলার নিয়ম, প্রোফাইল আপডেট করা, কভার লেটার লেখার টেকনিক, গিগ তৈরি ও অপটিমাইজেশন কৌশল এবং অ্যাকাউন্ট সিকিউরিটি নিশ্চিত করা।",
  25: "সার্ভার সাইড প্রোগ্রামিং ল্যাঙ্গুয়েজ পিএইচপি (PHP) এর পরিচিতি ক্লাস। লোকালহোস্ট সেটআপ (XAMPP), পিএইচপি সিনট্যাক্স, ভেরিয়েবল, কন্ডিশনাল স্টেটমেন্ট (if/else), লুপ (for/foreach/while) এবং পিএইচপি কাস্টম ও বিল্ট-ইন ফাংশনের ব্যবহার।",
  26: "পিএইচপি ও ডাটাবেস এর প্রথম ক্লাস। পিএইচপি দিয়ে ডাইনামিক ওয়েবসাইট বানানোর কনসেপ্ট, লোকাল ডাটাবেস (MySQL) এবং পিএইচপি অ্যাডমিন প্যানেল ড্যাশবোর্ড তৈরি। পিএইচপি ও ডাটাবেস কানেকশন করা এবং এসকিউএল (SQL) কোয়েরি দিয়ে ডাটা ইন্সার্ট, ভিউ ও ডিলিট করার নিয়ম।",
  27: "এইচটিএমএল অ্যাডমিন প্যানেলকে পিএইচপিতে রূপান্তর করার অ্যাডভান্সড ক্লাস। ফ্রন্ট-এন্ড থেকে ডাটাবেসে ডেটা পাঠানো, অ্যাডমিন প্যানেলে ডাটা লোড করা এবং ডাটা এডিট ও আপডেট করার সম্পূর্ণ ক্রুড (CRUD) অপারেশন প্র্যাকটিস।",
  28: "পিএইচপি-র আধুনিক ফ্রেমওয়ার্ক লারাভেল (Laravel) পরিচিতি। কম্পোজার ব্যবহার করে লারাভেল ইন্সটলেশন, আর্টিসান (Artisan) কমান্ডস, লারাভেলের প্রজেক্ট ফোল্ডার স্ট্রাকচার এবং ব্লেড টেমপ্লেটিং (Blade Templating) ইঞ্জিনের বেসিক পরিচিতি।",
  29: "লারাভেলের মাধ্যমে ওয়েবসাইট ডাইনামিক করার প্রজেক্ট। লারাভেল ব্লেড সিনট্যাক্স, এইচটিএমএল টেমপ্লেটকে লারাভেলে কনভার্ট করা, রাউটিং ও কন্ট্রোলারের ব্যবহার, এবং লারাভেলের বিল্ট-ইন অথেনটিকেশন (Login/Registration) সিস্টেম সেটআপ।",
  30: "লারাভেলের ড্যাশবোর্ড বা অ্যাডমিন প্যানেল সেটআপ। মাইগ্রেশন ফাইলের সাহায্যে ডাটাবেস টেবিল তৈরি, কন্ট্রোলারের মাধ্যমে ফ্রন্ট-এন্ড থেকে ডাটাবেসে ডাটা সেভ করা, এবং লারাভেল এডমিন প্যানেলে ডাটা ডাইনামিকালি ডিলিট ও এডিট করার কাজ।",
  31: "বিশ্বের জনপ্রিয় কন্টেন্ট ম্যানেজমেন্ট সিস্টেম (CMS) ওয়ার্ডপ্রেস (WordPress) পরিচিতি। ডোমেইন-হোস্টিং ও লোকালহোস্টে ওয়ার্ডপ্রেস ইনস্টলেশন প্রসেস, ডাটাবেস সেটআপ এবং ওয়ার্ডপ্রেস ড্যাশবোর্ডের সব অপশন নিয়ে বিস্তারিত আলোচনা।",
  32: "ওয়ার্ডপ্রেস থিম ও প্লাগইনের কাজ। ফ্রি থিম ইনস্টল করা, মেনু ও সাব-মেনু তৈরি করা, ক্যাটাগরি ও পোস্ট তৈরি, উইজেট সেটিং এবং পেজ লেআউট ও বেসিক ব্লগ সাইট তৈরি করা।",
  33: "ওয়ার্ডপ্রেসের মাধ্যমে প্রফেশনাল পোর্টফোলিও বা বিজনেস ওয়েবসাইট তৈরি। প্রিমিয়াম থিম ইনস্টল ও ডেমো কন্টেন্ট ইম্পোর্ট করা, রিকোয়ার্ড প্লাগইন সেটআপ, এবং অতিরিক্ত কাস্টম সিএসএস (Additional CSS) ব্যবহার করে ডিজাইন মডিফাই করা।",
  34: "ফ্রিল্যান্সিং মার্কেটপ্লেস আপওয়ার্ক (Upwork) পরিচিতি। আপওয়ার্কে অ্যাকাউন্ট তৈরি, প্রোফাইল আপডেট ও প্রফেশনাল পোর্টফোলিও আপলোড, কাঙ্খিত কাজ খুঁজে বের করা, কভার লেটার লেখা এবং নিখুঁত বিডিং টেকনিক।",
  35: "ডোমেইন ও হোস্টিং পরিচিতি এবং লাইভ সার্ভার সেটআপ। ডোমেইন হোস্টিং বাই করার পর cPanel ব্যবহার করার নিয়ম, ডাটাবেস তৈরি এবং ক্লাসের লোকাল এইচটিএমএল প্রজেক্ট অথবা ওয়ার্ডপ্রেস প্রজেক্ট সরাসরি ইন্টারনেটে আপলোড করা।",
  36: "কোর্সের বিদায়ী ক্লাস। ফাইনাল প্রজেক্ট মূল্যায়ন এবং শিক্ষার্থীদের তৈরি করা ওয়েবসাইটগুলোর লাইভ ডেমনস্ট্রেশন প্রদর্শন। ফাইনাল পরীক্ষা গ্রহণ এবং কোর্স সম্পন্নকরণের বিদায় অনুষ্ঠান।"
};

// Key Code Snippets and Cheatsheets (Bengali)
const cheatsheets = {
  1: [
    { title: "HTML5 কঙ্কাল (Basic Skeleton)", desc: "যেকোনো এইচটিএমএল ফাইলের মূল কাঠামো।", code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>আমার পেজ</title>\n</head>\n<body>\n  <h1>হ্যালো ওয়ার্ল্ড</h1>\n</body>\n</html>" },
    { title: "হেডিং ট্যাগ (Heading Tags)", desc: "শিরোনাম লেখার জন্য ব্যবহার করা হয়। h1 সবচেয়ে বড়, h6 সবচেয়ে ছোট।", code: "<h1>প্রধান শিরোনাম</h1>\n<h2>উপ-শিরোনাম</h2>\n<h6>সবচেয়ে ছোট শিরোনাম</h6>" }
  ],
  2: [
    { title: "এইচটিএমএল কমেন্ট (Comments)", desc: "কোড সহজে বোঝার জন্য নোট রাখা, যা ব্রাউজারে দেখা যায় না।", code: "<!-- এটি একটি কমেন্ট, যা ব্রাউজার দেখাবে না -->" },
    { title: "আনঅর্ডারড লিস্ট (Unordered List)", desc: "বুলেট পয়েন্টের লিস্ট তৈরির জন্য।", code: "<ul>\n  <li>কম্পিউটার</li>\n  <li>ল্যাপটপ</li>\n</ul>" },
    { title: "অর্ডারড লিস্ট (Ordered List)", desc: "ক্রমানুসারে সংখ্যাযুক্ত লিস্টের জন্য।", code: "<ol>\n  <li>এইচটিএমএল</li>\n  <li>সিএসএস</li>\n</ol>" }
  ],
  3: [
    { title: "টেক্সট ও পাসওয়ার্ড ইনপুট (Text & Password Inputs)", desc: "ফর্মের মধ্যে নাম ও পাসওয়ার্ড লেখার বক্স।", code: "<input type=\"text\" placeholder=\"আপনার নাম\">\n<input type=\"password\" placeholder=\"পাসওয়ার্ড\">" },
    { title: "অডিও প্লেয়ার (Audio)", desc: "ওয়েবসাইটে অডিও চালানোর জন্য।", code: "<audio src=\"audio.mp3\" controls></audio>" },
    { title: "ভিডিও প্লেয়ার (Video)", desc: "ওয়েবসাইটে ভিডিও দেখানোর জন্য।", code: "<video src=\"video.mp4\" width=\"320\" height=\"240\" controls></video>" }
  ],
  4: [
    { title: "বেসিক টেবিল (Basic Table)", desc: "কলাম ও রো আকারে ডেটা সাজানোর জন্য।", code: "<table>\n  <tr>\n    <th>নাম</th>\n    <th>রোল</th>\n  </tr>\n  <tr>\n    <td>রহমান</td>\n    <td>১০১</td>\n  </tr>\n</table>" },
    { title: "colspan এবং rowspan", desc: "একাধিক সেল একত্রিত করার জন্য।", code: "<td colspan=\"2\">দুই কলাম জুড়বে</td>\n<td rowspan=\"2\">দুই রো জুড়বে</td>" }
  ],
  5: [
    { title: "এক্সটারনাল সিএসএস লিংক", desc: "এইচটিএমএল ফাইলে সিএসএস ফাইল যুক্ত করা।", code: "<link rel=\"stylesheet\" href=\"css/style.css\">" },
    { title: "আইডি ও ক্লাস সিলেক্টর (Class & ID Selector)", desc: "আইডি সিলেক্ট করতে '#' এবং ক্লাস সিলেক্ট করতে '.' ব্যবহার করা হয়।", code: "/* ক্লাস সিলেক্টর */\n.my-class {\n  color: red;\n}\n\n/* আইডি সিলেক্টর */\n#my-id {\n  background: yellow;\n}" }
  ],
  6: [
    { title: "ডিভ ও ফ্লোট লেআউট (Float Layout)", desc: "ডিভ পাশাপাশি বসানোর জন্য float ব্যবহার করা হয়।", code: ".left-col {\n  width: 50%;\n  float: left;\n}\n.right-col {\n  width: 50%;\n  float: right;\n}\n.clear {\n  clear: both; /* ফ্লোট কাটানোর জন্য */\n}" },
    { title: "মার্জিন ও প্যাডিং (Margin & Padding)", desc: "মার্জিন বাইরের ফাঁকা জায়গা তৈরি করে, প্যাডিং ভেতরের ফাঁকা জায়গা তৈরি করে।", code: ".box {\n  margin: 20px; /* চারদিকে ২০ পিক্সেল বাইরে ফাঁকা */\n  padding: 15px; /* চারদিকে ১৫ পিক্সেল ভেতরে ফাঁকা */\n}" }
  ],
  7: [
    { title: "ফ্লেক্সবক্স লেআউট (Flexbox)", desc: "সহজে পাশাপাশি এলিমেন্ট বসানোর আধুনিক নিয়ম।", code: ".container {\n  display: flex;\n  justify-content: space-between; /* দুই মাথায় এলিমেন্ট বসাবে */\n  align-items: center; /* লম্বালম্বি মাঝে রাখবে */\n}" },
    { title: "পজিশন প্রপার্টি (CSS Position)", desc: "এলিমেন্টের জায়গা নিয়ন্ত্রণ করা।", code: ".menu-sticky {\n  position: sticky;\n  top: 0;\n  z-index: 999;\n}" }
  ],
  8: [
    { title: "গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড (Gradient)", desc: "রঙিন কালার গ্রেডিয়েন্ট তৈরি করার নিয়ম।", code: ".gradient-bg {\n  background: linear-gradient(135deg, #8854ff, #00b894);\n}" },
    { title: "ট্রানজিশন ও হোভার (Transition & Hover)", desc: "হোভার করলে ইফেক্ট মসৃণভাবে চলার জন্য।", code: ".btn {\n  transition: all 0.3s ease;\n}\n.btn:hover {\n  transform: scale(1.05);\n}" }
  ],
  10: [
    { title: "মিডিয়া কুয়েরি (Media Query)", desc: "নির্দিষ্ট স্ক্রিন সাইজে কাস্টম ডিজাইন দেখানোর জন্য।", code: "/* মোবাইল স্ক্রিনের জন্য (৭৬৮ পিক্সেলের নিচে) */\n@media (max-width: 767px) {\n  .sidebar {\n    display: none;\n  }\n  .main-content {\n    width: 100%;\n  }\n}" }
  ],
  12: [
    { title: "বুটস্ট্র্যাপ গ্রিড সিস্টেম (Grid System)", desc: "রেসপন্সিভ কলাম ডিজাইন করার জন্য ১২ কলাম ভিত্তিক গ্রিড।", code: "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">প্রথম অর্ধেক</div>\n    <div class=\"col-md-6\">দ্বিতীয় অর্ধেক</div>\n  </div>\n</div>" }
  ],
  15: [
    { title: "সিএসএস অ্যানিমেশন (Keyframes)", desc: "কাস্টম অ্যানিমেশন তৈরি ও চালানোর নিয়ম।", code: "/* অ্যানিমেশন তৈরি */\n@keyframes slideIn {\n  from { opacity: 0; transform: translateY(-20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n/* অ্যানিমেশন চালানো */\n.box {\n  animation: slideIn 0.5s ease forwards;\n}" }
  ],
  20: [
    { title: "জাভাস্ক্রিপ্ট ভেরিয়েবল ও ফাংশন", desc: "বেসিক ডাটা স্টোর ও এক্সিকিউশন।", code: "let userName = 'Rahman';\nconst age = 25;\n\nfunction sayHello() {\n  alert('হ্যালো ' + userName);\n}" }
  ],
  21: [
    { title: "কন্ডিশনাল ও লুপ (Condition & Loops)", desc: "জাভাস্ক্রিপ্টের সিদ্ধান্ত গ্রহণ ও চক্র।", code: "if (age >= 18) {\n  console.log('আপনি প্রাপ্তবয়স্ক');\n} else {\n  console.log('আপনি নাবালক');\n}\n\nfor (let i = 1; i <= 5; i++) {\n  console.log('সংখ্যা: ' + i);\n}" }
  ],
  22: [
    { title: "জেকুয়েরি ক্লিক ও ইফেক্ট (jQuery Click)", desc: "বাটনে ক্লিকে কন্টেন্ট দেখানো বা লুকানো।", code: "$('#my-btn').click(function() {\n  $('#my-div').fadeToggle(300);\n});" }
  ],
  25: [
    { title: "পিএইচপি ভেরিয়েবল ও কন্ডিশন", desc: "সার্ভার সাইড বেসিক কন্ডিশন।", code: "<?php\n$name = \"Karim\";\n$score = 85;\n\nif ($score >= 80) {\n    echo $name . \" A+ পেয়েছে\";\n} else {\n    echo $name . \" পাস করেছে\";\n}\n?>" }
  ],
  26: [
    { title: "পিএইচপি ডাটাবেস কানেকশন (MySQLi)", desc: "MySQL ডাটাবেসের সাথে কানেকশন তৈরি করা।", code: "<?php\n$servername = \"localhost\";\n$username = \"root\";\n$password = \"\";\n$dbname = \"wdd_db\";\n\n$conn = mysqli_connect($servername, $username, $password, $dbname);\n\nif (!$conn) {\n    die(\"কানেকশন ব্যর্থ: \" . mysqli_connect_error());\n}\n?>" }
  ],
  28: [
    { title: "লারাভেল রাউট ও কন্ট্রোলার (Route)", desc: "লারাভেলে নতুন ইউআরএল বা পেজ তৈরি করা।", code: "use App\\Http\\Controllers\\HomeController;\nuse Illuminate\\Support\\Facades\\Route;\n\nRoute::get('/home', [HomeController::class, 'index']);" }
  ]
};

// Default cheatsheet items when no custom one is defined for a class
const defaultCheatsheet = [
  { title: "ক্লাস প্র্যাকটিস কোড", desc: "এই ক্লাসের সোর্স কোড দেখার জন্য উপরের ড্রপডাউনটি ব্যবহার করুন।", code: "/* এই ক্লাসের ফোল্ডারে থাকা ফাইলগুলো ওপরে দেখুন */" },
  { title: "ক্লাস নোট", desc: "এই ক্লাসে শেখানো বিষয়গুলো ভালোভাবে অনুশীলন করুন এবং নিয়মিত অ্যাসাইনমেন্ট জমা দিন।", code: "// প্র্যাকটিস মেকস এ ম্যান পারফেক্ট!" }
];

// Initialize and Fetch Data
document.addEventListener('DOMContentLoaded', () => {
  fetchCourseData();
  setupEventListeners();
});

// Fetch compiled JSON from local server API
function fetchCourseData() {
  fetch('/api/course-data')
    .then(res => res.json())
    .then(data => {
      courseData = data;
      renderClassList(data);
      updateOverallProgress();
    })
    .catch(err => {
      console.error('Error fetching course data:', err);
      const listContainer = document.getElementById('class-list-container');
      listContainer.innerHTML = `
        <div class="error-state">
          <i class="fa-solid fa-triangle-exclamation text-red" style="font-size: 28px;"></i>
          <p>ডেটা লোড করতে ব্যর্থ হয়েছে। সার্ভার চালু আছে কিনা নিশ্চিত করুন।</p>
        </div>
      `;
    });
}

// Render Sidebar List
function renderClassList(data) {
  const container = document.getElementById('class-list-container');
  container.innerHTML = '';

  if (data.length === 0) {
    container.innerHTML = '<div class="loading-state">কোনো ক্লাস খুঁজে পাওয়া যায়নি।</div>';
    return;
  }

  // Get completed classes from localStorage
  const completedClasses = getCompletedClasses();

  data.forEach(cls => {
    const isCompleted = completedClasses.includes(cls.id);
    const item = document.createElement('div');
    item.className = `class-item ${isCompleted ? 'completed' : ''} ${activeClassId === cls.id ? 'active' : ''}`;
    item.id = `class-item-${cls.id}`;
    
    // Check files presence
    const hasVideo = cls.video_files && cls.video_files.length > 0;
    const hasCode = cls.code_files && cls.code_files.length > 0;

    item.innerHTML = `
      <div class="class-item-left">
        <span class="class-item-number">Class ${cls.id}</span>
        <span class="class-item-title">${cls.syllabus[0] || 'টপিক লোড হচ্ছে...'}</span>
      </div>
      <div class="class-item-icons">
        ${hasVideo ? '<i class="fa-solid fa-play active-icon" title="ভিডিও আছে"></i>' : '<i class="fa-solid fa-play" style="opacity: 0.1"></i>'}
        ${hasCode ? '<i class="fa-solid fa-code active-icon" title="কোড আছে"></i>' : '<i class="fa-solid fa-code" style="opacity: 0.1"></i>'}
      </div>
    `;

    item.addEventListener('click', () => selectClass(cls.id));
    container.appendChild(item);
  });
}

// Select Class and Display Content
function selectClass(classId) {
  activeClassId = classId;
  const cls = courseData.find(c => c.id === classId);
  if (!cls) return;

  // Update Sidebar active styling
  document.querySelectorAll('.class-item').forEach(item => item.classList.remove('active'));
  const activeItem = document.getElementById(`class-item-${classId}`);
  if (activeItem) activeItem.classList.add('active');

  // Switch views (hide welcome, show viewer)
  document.getElementById('welcome-container').style.display = 'none';
  document.getElementById('viewer-container').style.display = 'flex';

  // Set selected class badges
  document.getElementById('selected-class-badge').textContent = `Class ${String(cls.id).padStart(2, '0')}`;
  document.getElementById('class-folder-path').textContent = cls.folder_name ? `Class work wdd 2407/${cls.folder_name}` : 'ফোল্ডার পাওয়া যায়নি';

  // 1. Setup Video Files
  setupVideo(cls);

  // 2. Setup Syllabus & Topics List
  const topicsContainer = document.getElementById('topics-list-container');
  topicsContainer.innerHTML = '';
  if (cls.syllabus.length > 0) {
    cls.syllabus.forEach(topic => {
      const li = document.createElement('li');
      li.textContent = topic;
      topicsContainer.appendChild(li);
    });
  } else {
    topicsContainer.innerHTML = '<li>কোনো সিলেবাস টপিক দেওয়া নেই।</li>';
  }

  // 3. Setup Code Files Selector
  setupCodeSelector(cls);

  // 4. Setup Bengali Summary & CheatSheets
  const summaryText = classSummaries[classId] || `Class ${classId} এর জন্য কোনো সারসংক্ষেপ লেখা নেই। সিলেবাসের টপিকগুলো দেখুন।`;
  document.getElementById('class-summary-text').textContent = summaryText;

  const cheatsheetContainer = document.getElementById('cheatsheet-container');
  cheatsheetContainer.innerHTML = '';
  const items = cheatsheets[classId] || defaultCheatsheet;
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cheatsheet-item';
    div.innerHTML = `
      <div class="cheatsheet-title">${item.title}</div>
      <div class="cheatsheet-desc">${item.desc}</div>
      <pre class="cheatsheet-code"><code>${escapeHtml(item.code)}</code></pre>
    `;
    cheatsheetContainer.appendChild(div);
  });
}

// Helper to extract YouTube video ID from various URL formats
function getYouTubeId(url) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : null;
}

// Setup Video Player or Launcher
function setupVideo(cls) {
  const nativePlayer = document.getElementById('native-video-player');
  const youtubePlayer = document.getElementById('youtube-player');
  const systemOverlay = document.getElementById('system-player-launcher');
  const noVideoOverlay = document.getElementById('no-video-launcher');
  const playlistContainer = document.getElementById('class-video-files-list');

  // Reset states
  nativePlayer.style.display = 'none';
  nativePlayer.src = '';
  youtubePlayer.style.display = 'none';
  youtubePlayer.src = '';
  systemOverlay.style.display = 'none';
  noVideoOverlay.style.display = 'none';
  playlistContainer.innerHTML = '';

  if (!cls.video_files || cls.video_files.length === 0) {
    noVideoOverlay.style.display = 'flex';
    return;
  }

  // Render video selection list if multiple videos
  if (cls.video_files.length > 1) {
    cls.video_files.forEach((vf, index) => {
      const btn = document.createElement('button');
      btn.className = 'video-file-btn';
      btn.innerHTML = `
        <span><i class="fa-solid fa-film"></i> ${vf.name}</span>
        <span class="badge">${vf.ext.toUpperCase()}</span>
      `;
      btn.addEventListener('click', () => playVideoFile(vf));
      playlistContainer.appendChild(btn);
    });
  }

  // Play the first video by default
  playVideoFile(cls.video_files[0]);
}

// Play specific video file
function playVideoFile(vf) {
  const nativePlayer = document.getElementById('native-video-player');
  const youtubePlayer = document.getElementById('youtube-player');
  const systemOverlay = document.getElementById('system-player-launcher');
  
  // Save global active video path for opening in system player (if not YouTube)
  activeVideoPath = (vf.ext !== 'youtube') ? vf.path : null;

  // Reset players
  nativePlayer.style.display = 'none';
  nativePlayer.src = '';
  youtubePlayer.style.display = 'none';
  youtubePlayer.src = '';
  systemOverlay.style.display = 'none';

  // Highlight active button if playlist exists
  document.querySelectorAll('.video-file-btn').forEach(btn => {
    if (btn.innerText.includes(vf.name)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const isYoutube = vf.ext === 'youtube' || vf.path.includes('youtube.com') || vf.path.includes('youtu.be');

  if (isYoutube) {
    const ytId = getYouTubeId(vf.path);
    if (ytId) {
      youtubePlayer.style.display = 'block';
      youtubePlayer.src = `https://www.youtube.com/embed/${ytId}`;
    } else {
      youtubePlayer.style.display = 'block';
      youtubePlayer.src = vf.path;
    }
  } else if (vf.ext === 'mp4' || vf.ext === 'webm') {
    nativePlayer.style.display = 'block';
    
    // Serve via our local Express mount path /class-work/
    // Since vf.path is something like: Class work wdd 2407/3. Class 3, Date/video/class3.mp4
    // We remove the "Class work wdd 2407" prefix to get the mount path: /class-work/...
    const relativeUrl = vf.path.replace('Class work wdd 2407/', '');
    nativePlayer.src = `/class-work/${encodeURIComponent(relativeUrl)}`;
    nativePlayer.load();
  } else {
    // Show System Player Overlay
    systemOverlay.style.display = 'flex';
    document.getElementById('video-filename').textContent = vf.name;
    activeVideoPath = vf.path;
  }
}

// Setup Code Selector and Code View
function setupCodeSelector(cls) {
  const selector = document.getElementById('code-file-selector');
  const codePre = document.getElementById('code-display');
  const noCodeMsg = document.getElementById('no-code-message');
  
  // Clear selector
  selector.innerHTML = '';

  if (!cls.code_files || cls.code_files.length === 0) {
    selector.innerHTML = '<option value="">-- কোনো কোড ফাইল নেই --</option>';
    codePre.style.display = 'none';
    noCodeMsg.style.display = 'flex';
    noCodeMsg.innerHTML = '<i class="fa-solid fa-code-merge"></i><p>এই ক্লাসের ফোল্ডারে কোনো কোড ফাইল নেই।</p>';
    return;
  }

  // Add a default placeholder option
  selector.innerHTML = '<option value="">-- ফাইল নির্বাচন করুন --</option>';

  cls.code_files.forEach(cf => {
    const opt = document.createElement('option');
    opt.value = cf.path;
    // Get file name relative to class folder
    const parts = cf.path.split('/');
    const cleanName = parts.slice(2).join('/'); // Skip "Class work wdd 2407/class-folder"
    opt.textContent = cleanName;
    selector.appendChild(opt);
  });

  // Handle file select
  selector.onchange = (e) => {
    const selectedPath = e.target.value;
    if (!selectedPath) {
      codePre.style.display = 'none';
      noCodeMsg.style.display = 'flex';
      return;
    }

    const file = cls.code_files.find(cf => cf.path === selectedPath);
    if (file) {
      noCodeMsg.style.display = 'none';
      codePre.style.display = 'block';
      const codeContainer = document.getElementById('code-content');
      
      // Escape HTML tags to show them as text
      codeContainer.textContent = file.content;
      
      // Set appropriate class for syntax styling if any library is present
      codeContainer.className = `language-${file.ext}`;
    }
  };
}

// Open video file using local API which runs standard "start" in Windows
function openInSystemPlayer() {
  if (!activeVideoPath) return;

  fetch(`/api/open-video?path=${encodeURIComponent(activeVideoPath)}`)
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        // Show success alert/toast
        const btn = document.getElementById('btn-open-system-player');
        const originalHtml = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-circle-check"></i> প্লেয়ারে ওপেন হয়েছে';
        btn.style.backgroundColor = 'var(--color-green)';
        
        setTimeout(() => {
          btn.innerHTML = originalHtml;
          btn.style.backgroundColor = 'var(--color-primary)';
        }, 3000);
      } else {
        alert('ভিডিও ফাইল ওপেন করতে ব্যর্থ হয়েছে: ' + (data.error || 'অজানা ত্রুটি'));
      }
    })
    .catch(err => {
      console.error('Error opening system video:', err);
      alert('সার্ভার থেকে রেসপন্স পাওয়া যায়নি।');
    });
}

// Search Functionality for Sidebar
function handleSearch(e) {
  const query = e.target.value.toLowerCase();
  
  // Filter courseData array
  const filtered = courseData.filter(cls => {
    const numMatch = cls.id.toString().includes(query);
    const titleMatch = cls.title.toLowerCase().includes(query);
    const folderMatch = cls.folder_name && cls.folder_name.toLowerCase().includes(query);
    
    // Check syllabus topics
    const syllabusMatch = cls.syllabus.some(topic => topic.toLowerCase().includes(query));
    
    // Check Bengali summary
    const summaryText = classSummaries[cls.id] || '';
    const summaryMatch = summaryText.toLowerCase().includes(query);

    return numMatch || titleMatch || folderMatch || syllabusMatch || summaryMatch;
  });

  renderClassList(filtered);
}

// Helper to escape HTML tags
function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// -------------------------------------------------------------------------
// Local Storage Progress Management
// -------------------------------------------------------------------------
function getCompletedClasses() {
  const completed = localStorage.getItem('wdd_completed_classes');
  return completed ? JSON.parse(completed) : [];
}

function saveCompletedClasses(arr) {
  localStorage.setItem('wdd_completed_classes', JSON.stringify(arr));
}

// Toggle class completed status
function toggleClassCompleted(classId) {
  const completed = getCompletedClasses();
  const index = completed.indexOf(classId);
  
  if (index === -1) {
    completed.push(classId);
  } else {
    completed.splice(index, 1);
  }

  saveCompletedClasses(completed);
  
  // Re-render sidebar and update progress
  renderClassList(courseData);
  updateOverallProgress();
}

// Update badges and progress bar at the header
function updateOverallProgress() {
  const completed = getCompletedClasses();
  const total = courseData.length || 36;
  const badge = document.getElementById('completed-classes-badge');
  const progressFill = document.getElementById('progress-fill');
  
  badge.textContent = `${completed.length} / ${total}`;
  const pct = (completed.length / total) * 100;
  progressFill.style.width = `${pct}%`;
  
  // Update badge class
  if (completed.length === total) {
    badge.className = 'stat-value text-green';
  } else if (completed.length > 0) {
    badge.className = 'stat-value text-orange';
  } else {
    badge.className = 'stat-value';
  }
}

// Event Listeners setup
function setupEventListeners() {
  // Search bar
  document.getElementById('class-search').addEventListener('input', handleSearch);

  // System player launcher button
  document.getElementById('btn-open-system-player').addEventListener('click', openInSystemPlayer);

  // Keyboard shortcut to mark active class as completed (double click/press space)
  // Let's add a button in the viewer in future if needed, but double clicking on sidebar items is simple.
  // We can also add double click on sidebar items to complete them.
  document.getElementById('class-list-container').addEventListener('dblclick', (e) => {
    const item = e.target.closest('.class-item');
    if (item) {
      const id = parseInt(item.id.replace('class-item-', ''));
      toggleClassCompleted(id);
    }
  });

  // Native HTML5 video player completion handler: automatically mark class as completed!
  document.getElementById('native-video-player').addEventListener('ended', () => {
    if (activeClassId) {
      const completed = getCompletedClasses();
      if (!completed.includes(activeClassId)) {
        toggleClassCompleted(activeClassId);
      }
    }
  });
}
