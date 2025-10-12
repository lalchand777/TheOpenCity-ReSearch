
import React from 'react';
import SectionCard from './components/SectionCard';
import ComparisonTable from './components/ComparisonTable';
import WorksCitedList from './components/WorksCitedList';
import StatCard from './components/StatCard';
import IconListItem from './components/IconListItem';
import VerdictCard from './components/VerdictCard';

// SVG Icons for lists
const icons = {
  duplicates: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" /></svg>,
  address: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>,
  bulk: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.289 2.72a3 3 0 0 1-4.682-2.72 9.094 9.094 0 0 1 3.741-.479m7.289 2.72a8.97 8.97 0 0 1-2.184.583m-7.289-2.72a8.97 8.97 0 0 0-2.184.583m11.653 0a9.026 9.026 0 0 1-9.473 0m9.473 0a4.506 4.506 0 0 0-2.122-.923M3.568 15.72a4.506 4.506 0 0 1-2.122-.923m13.246-1.148a3 3 0 1 0-4.682-2.72m4.682 2.72a3 3 0 0 1-4.682-2.72m0 0a3 3 0 1 0-4.682 2.72m4.682-2.72L12 12.75" /></svg>,
  photo: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>,
  form: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" /></svg>,
  check: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>,
  question: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>,
  audit: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" /></svg>,
  transparency: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-4.5 4.5V6m0 0L10.5 8.25M13.5 6l3 2.25" /></svg>,
  review: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.6-3.751" /></svg>,
  appointment: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.289 2.72a3 3 0 0 1-4.682-2.72 9.094 9.094 0 0 1 3.741-.479m7.289 2.72a8.97 8.97 0 0 1-2.184.583m-7.289-2.72a8.97 8.97 0 0 0-2.184.583m11.653 0a9.026 9.026 0 0 1-9.473 0m9.473 0a4.506 4.506 0 0 0-2.122-.923M3.568 15.72a4.506 4.506 0 0 1-2.122-.923m13.246-1.148a3 3 0 1 0-4.682-2.72m4.682 2.72a3 3 0 0 1-4.682-2.72m0 0a3 3 0 1 0-4.682 2.72m4.682-2.72L12 12.75" /></svg>,
  verification: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" /></svg>,
};


const App: React.FC = () => {
  return (
    <div className="min-h-screen text-stone-800 antialiased">
      <main className="max-w-4xl mx-auto p-4 sm:p-8 space-y-12">
        
        <header className="text-center border-b border-stone-200 pb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-800 leading-tight">
            "वोट चोरी" विवाद: भारत के 2025 के चुनावी अखंडता संकट का एक गहन विश्लेषण
          </h1>
          <p className="mt-4 text-lg text-stone-600">
            EVM, चुनाव आयोग और सर्वोच्च न्यायालय के दृष्टिकोण की पड़ताल
          </p>
        </header>

        {/* Introduction */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-amber-700 text-center">परिचय: एक संकट की संरचना</h2>
          <p className="text-base md:text-lg leading-relaxed">
            अगस्त 2025 में, भारतीय लोकतंत्र एक महत्वपूर्ण मोड़ पर आ खड़ा हुआ जब विपक्ष के नेता राहुल गांधी ने "वोट चोरी" का आरोप लगाया, जिससे एक राष्ट्रव्यापी विवाद खड़ा हो गया। यह घटनाक्रम केवल एक पक्षपातपूर्ण राजनीतिक टकराव नहीं था, बल्कि यह भारत के चुनाव आयोग (ECI) की संस्थागत विश्वसनीयता और देश की चुनावी प्रक्रिया में निहित मौलिक विश्वास के लिए एक गंभीर चुनौती थी। यह विवाद भारतीय लोकतंत्र के उस ताने-बाने पर सवाल उठाता है, जो स्वतंत्र और निष्पक्ष चुनावों के वादे पर आधारित है।
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            इस संकट के केंद्र में तीन प्रमुख किरदार हैं: राहुल गांधी और भारतीय राष्ट्रीय कांग्रेस, जो आरोप लगाने वाले पक्ष हैं; भारत का चुनाव आयोग, जो अपनी संस्थागत स्वायत्तता और प्रक्रियाओं की रक्षा कर रहा है; और भारतीय जनता पार्टी (भाजपा), जो सत्ताधारी दल के रूप में इन आरोपों से राजनीतिक रूप से प्रभावित है और जवाबी आरोप लगा रही है। यह रिपोर्ट इन तीनों दृष्टिकोणों का विश्लेषण करते हुए एक निष्पक्ष मूल्यांकन प्रस्तुत करेगी।
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            इस रिपोर्ट का मुख्य तर्क यह है कि यद्यपि एक केंद्रीय रूप से सुनियोजित "आपराधिक धोखाधड़ी" के सबसे गंभीर आरोप अभी भी अप्रमाणित हैं, इस विवाद ने भारत की मतदाता सूची प्रबंधन प्रणाली में महत्वपूर्ण और सत्यापन योग्य प्रणालीगत खामियों को उजागर करने का एक महत्वपूर्ण कार्य किया है। यह रिपोर्ट आरोपों के विस्तृत विश्लेषण, संस्थागत और राजनीतिक प्रतिक्रियाओं, स्वतंत्र सत्यापन के निष्कर्षों और इस विवाद से उत्पन्न व्यापक प्रणालीगत मुद्दों की गहन जांच करेगी, ताकि पाठक इस जटिल मुद्दे की तह तक पहुंच सकें।
          </p>
        </section>

        {/* Section 1 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-amber-700 text-center">खंड 1: आरोपों का विखंडन: महादेवपुरा केस स्टडी</h2>
          <p className="text-base md:text-lg leading-relaxed">यह खंड चुनावी कदाचार के विशिष्ट दावों का सावधानीपूर्वक विश्लेषण करेगा, जिसमें कर्नाटक के महादेवपुरा विधानसभा क्षेत्र को राहुल गांधी द्वारा प्रस्तुत केंद्रीय केस स्टडी के रूप में उपयोग किया गया है।</p>
          
          <SectionCard title="1.1 &quot;एटम बम&quot; का खुलासा">
            <p>यह विवाद 7 अगस्त, 2025 को राहुल गांधी की प्रेस कॉन्फ्रेंस के साथ सार्वजनिक रूप से सामने आया, जहाँ उन्होंने भारत के चुनाव आयोग के साथ मिलीभगत कर बड़े पैमाने पर मतदाता धोखाधड़ी और "वोट चोरी" का आरोप लगाया। उन्होंने अपने द्वारा प्रस्तुत सबूतों को "एटम बम" की संज्ञा दी, जो इन दावों की गंभीरता को रेखांकित करने की एक सोची-समझी रणनीति थी।</p>
            <StatCard value="1,00,250+" label="फर्जी वोट पाए गए (महादेवपुरा में)" />
            <p>आरोपों का मूल आधार यह था कि कांग्रेस पार्टी की एक टीम द्वारा छह महीने की मैन्युअल जांच के बाद अकेले महादेवपुरा विधानसभा क्षेत्र में यह संख्या पाई गई। यह दावा विवाद का केंद्र बिंदु बन गया और इसने देश भर में चुनावी प्रक्रिया की अखंडता पर एक गंभीर बहस छेड़ दी।</p>
          </SectionCard>

          <SectionCard title="1.2 कथित धोखाधड़ी के पांच तरीके">
             <p>कांग्रेस पार्टी ने अपनी प्रस्तुति में मतदाता सूची में हेरफेर के पांच अलग-अलग तरीकों का विस्तृत विवरण दिया, जो कथित धोखाधड़ी की कार्यप्रणाली को दर्शाते हैं।</p>
            <ul className="space-y-4 mt-4">
              <IconListItem icon={icons.duplicates}><strong>डुप्लीकेट मतदाता (Duplicate Voters):</strong> यह दावा किया गया कि एक ही मतदाता का नाम मतदाता सूची में कई बार दर्ज था, जिससे एक ही व्यक्ति द्वारा कई वोट डालने की संभावना पैदा होती है।</IconListItem>
              <IconListItem icon={icons.address}><strong>फर्जी और अमान्य पते (Fake and Invalid Addresses):</strong> मतदाताओं को ऐसे पतों पर पंजीकृत करने का आरोप लगाया गया जो या तो अस्तित्व में ही नहीं थे या व्यावसायिक प्रतिष्ठान थे।</IconListItem>
              <IconListItem icon={icons.bulk}><strong>एक ही पते पर बड़ी संख्या में मतदाता (Bulk Voters):</strong> यह एक चौंकाने वाला दावा था कि छोटे, एकल-परिवार वाले आवासों पर बड़ी संख्या में (50 से 80 लोग) मतदाता पंजीकृत थे।</IconListItem>
              <IconListItem icon={icons.photo}><strong>अमान्य तस्वीरें (Invalid Photos):</strong> हजारों मतदाताओं की तस्वीरें मतदाता सूची पर या तो धुंधली थीं, गायब थीं, या इतनी छोटी थीं कि पहचान करना असंभव था।</IconListItem>
              <IconListItem icon={icons.form}><strong>फॉर्म 6 का दुरुपयोग (Misuse of Form 6):</strong> यह आरोप लगाया गया कि नए मतदाताओं के पंजीकरण के लिए उपयोग किए जाने वाले फॉर्म 6 का दुरुपयोग वृद्ध मतदाताओं को "पहली बार के मतदाता" के रूप में जोड़ने के लिए किया गया।</IconListItem>
            </ul>
          </SectionCard>

          <SectionCard title="1.3 शकून रानी का विशिष्ट मामला">
            <p>इस व्यापक पैटर्न को एक ठोस उदाहरण के माध्यम से प्रस्तुत करने के लिए, कांग्रेस ने महादेवपुरा की 70 वर्षीय मतदाता शकून रानी का मामला सामने रखा। उन पर दोहरे पंजीकरण और दो वोट डालने का आरोप लगाया गया था। कांग्रेस ने सबूत के तौर पर एक टिक-चिह्नित दस्तावेज़ प्रस्तुत किया, जिसमें कथित तौर पर उनके द्वारा डाले गए दो वोटों को दिखाया गया था। यह मामला विवाद के केंद्र में आ गया और बाद में चुनाव आयोग की जांच का विषय बना।</p>
          </SectionCard>
        </section>

        {/* Section 2 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-amber-700 text-center">खंड 2: संस्थागत प्रतिक्रिया: चुनाव आयोग जांच के दायरे में</h2>
           <p className="text-base md:text-lg leading-relaxed">यह खंड चुनाव आयोग की बहु-आयामी प्रतिक्रिया का आलोचनात्मक विश्लेषण करेगा, जिसमें इसकी प्रक्रियात्मक शुद्धता, आरोपों को संबोधित करने में इसकी प्रभावशीलता और सार्वजनिक विश्वास पर इसके प्रभाव का मूल्यांकन किया जाएगा।</p>
          
          <SectionCard title="2.1 &quot;शपथ के तहत&quot; सबूत की मांग">
            <p>चुनाव आयोग की तत्काल और प्राथमिक प्रतिक्रिया यह थी कि राहुल गांधी अपने आरोपों और सबूतों को औपचारिक रूप से एक घोषणा या शपथ के तहत प्रस्तुत करें। कर्नाटक के मुख्य निर्वाचन अधिकारी (CEO) ने इस प्रस्तुति के लिए एक समय सीमा भी निर्धारित की।</p>
          </SectionCard>

          <SectionCard title="2.2 बिंदु-दर-बिंदु खंडन और तथ्य-जांच">
            <p>चुनाव आयोग ने विशिष्ट दावों पर अपनी तथ्य-जांच भी की। इसका सबसे प्रमुख उदाहरण शकून रानी का मामला था। चुनाव आयोग की जांच ने निष्कर्ष निकाला कि उन्होंने केवल एक बार मतदान किया था और राहुल गांधी द्वारा प्रस्तुत टिक-चिह्नित दस्तावेज़ "फर्जी" था और "एक मतदान अधिकारी द्वारा जारी किया गया दस्तावेज़ नहीं था"।</p>
          </SectionCard>

           <SectionCard title="2.3 प्रणालीगत अखंडता का बचाव">
            <p>चुनाव आयोग ने लगातार यह बनाए रखा है कि उसकी प्रक्रियाएं मजबूत और पारदर्शी हैं। उसने इस बात पर जोर दिया कि राजनीतिक दल चुनाव प्रबंधन के सभी प्रमुख चरणों में शामिल होते हैं, EVM की प्रथम-स्तरीय जांच (FLC) से लेकर उनकी सीलिंग और भंडारण तक, और उनके पास आपत्तियां उठाने के अवसर होते हैं।</p>
          </SectionCard>
        </section>
        
        {/* Section 3 */}
        <section className="space-y-6">
           <h2 className="text-2xl font-bold text-amber-700 text-center">खंड 3: राजनीतिक तूफान: भाजपा और विपक्ष की प्रतिक्रियाएं</h2>
           <p className="text-base md:text-lg leading-relaxed">यह खंड विवाद के राजनीतिक नतीजों का विश्लेषण करेगा, जिसमें सत्ताधारी दल और एकजुट विपक्ष की संचार रणनीतियों की जांच की जाएगी।</p>
            <SectionCard title="3.1 भाजपा का जवाबी हमला">
                <p>भाजपा की प्रतिक्रिया तेज और बहु-आयामी थी, जिसका नेतृत्व अनुराग ठाकुर और रविशंकर प्रसाद जैसे वरिष्ठ नेताओं ने किया।</p>
                <p className="font-semibold mt-2">मुख्य तर्क:</p>
                <ul className="list-disc list-inside space-y-1 pl-4">
                  <li><strong>"हारे हुए खिलाड़ी" की कहानी:</strong> भाजपा ने इन आरोपों को राहुल गांधी और कांग्रेस की ओर से चुनाव हारने पर एक पूर्वानुमेय बहाने के रूप में प्रस्तुत किया।</li>
                  <li><strong>मतदाताओं और संस्थानों का अपमान:</strong> उन्होंने गांधी पर मतदाताओं के जनादेश का अपमान करने और चुनाव आयोग जैसी संवैधानिक संस्थाओं की अखंडता पर हमला करने का आरोप लगाया।</li>
                  <li><strong>ध्यान भटकाना और जवाबी आरोप:</strong> भाजपा ने जवाबी आरोपों का भी सहारा लिया, जिसमें विपक्षी दलों द्वारा शासित राज्यों में कथित अनियमितताओं की ओर इशारा किया गया।</li>
                </ul>
            </SectionCard>
            <SectionCard title="3.2 INDIA ब्लॉक का एकीकृत आंदोलन">
                 <p>ये आरोप जल्द ही पूरे INDIA विपक्षी गुट के लिए एक रैली का बिंदु बन गए। समन्वित विरोध प्रदर्शनों की एक श्रृंखला शुरू की गई, जिसमें नई दिल्ली में चुनाव आयोग के मुख्यालय तक एक मार्च भी शामिल था, जहां राहुल गांधी सहित कई नेताओं को हिरासत में लिया गया।</p>
                 <p>विपक्ष की प्रमुख मांगें दो बिंदुओं पर केंद्रित हो गईं: इलेक्ट्रॉनिक, मशीन-पठनीय प्रारूप में मतदाता डेटा जारी करना और मतदान केंद्रों से CCTV फुटेज जारी करना।</p>
            </SectionCard>
        </section>

        {/* Section 4 */}
        <section className="space-y-6">
           <h2 className="text-2xl font-bold text-amber-700 text-center">खंड 4: जमीनी सत्यापन: दावों और प्रति-दावों का आकलन</h2>
           <p className="text-base md:text-lg leading-relaxed">यह खंड स्वतंत्र मीडिया जांच और तथ्य-जांच के निष्कर्षों को संश्लेषित करेगा ताकि मुख्य आरोपों का एक तृतीय-पक्ष मूल्यांकन प्रदान किया जा सके। यह एक विस्तृत तालिका में समाप्त होगा जो सबूतों का सारांश प्रस्तुत करेगी।</p>
            <ComparisonTable />
        </section>

        {/* Section 5 */}
        <section className="space-y-6">
           <h2 className="text-2xl font-bold text-amber-700 text-center">खंड 5: प्रणालीगत खामियां बनाम जानबूझकर की गई धोखाधड़ी: बहस का सार</h2>
           <p className="text-base md:text-lg leading-relaxed">यह खंड विश्लेषण को विशिष्ट आरोपों से उठाकर भारत के चुनावी बुनियादी ढांचे से संबंधित व्यापक प्रणालीगत मुद्दों, विशेष रूप से मतदाता सूचियों की अखंडता और EVM की सुरक्षा पर केंद्रित करेगा।</p>

            <SectionCard title="5.1 मतदाता सूची की त्रुटियों की ज्ञात समस्या">
                <p>रिपोर्ट में उन विश्लेषणों का हवाला दिया जाएगा जो पंजीकरण खामियों के दस्तावेजीकरण और जानबूझकर की गई धोखाधड़ी को साबित करने के बीच अंतर करते हैं। यह तर्क दिया जाएगा कि यद्यपि कांग्रेस के आरोप "जानबूझकर की गई धोखाधड़ी को स्थापित करने में विफल रहते हैं," वे "प्रणालीगत खामियों को उजागर करके एक मूल्यवान लोकतांत्रिक कार्य करते हैं"।</p>
            </SectionCard>

            <SectionCard title="5.2 अनसुलझी EVM सुरक्षा बहस">
                <p>यह उपखंड EVM सुरक्षा पर समानांतर, लंबे समय से चली आ रही बहस को संबोधित करेगा, जो अक्सर सूची में हेरफेर के मुद्दे के साथ मिल जाती है। चुनाव आयोग और उसके तकनीकी आलोचक एक "बधिरों के संवाद" में लगे हुए हैं। चुनाव आयोग का बचाव प्रशासनिक सुरक्षा उपायों पर टिका है, जबकि आलोचकों के हमले तकनीकी कमजोरियों पर ध्यान केंद्रित करते हैं।</p>
            </SectionCard>
        </section>

        {/* Conclusion */}
        <section className="space-y-6">
           <h2 className="text-2xl font-bold text-amber-700 text-center">निष्कर्ष: मतपत्र में विश्वास बहाल करना</h2>
           <p className="text-base md:text-lg leading-relaxed text-center">यह निष्कर्ष एक द्विआधारी "सच या झूठ" का फैसला नहीं देगा। इसके बजाय, यह एक संतुलित मूल्यांकन प्रदान करता है:</p>
           <div className="space-y-4 pt-4">
              <VerdictCard title="क्या सच है" icon={icons.check} variant="success">
                भारत की मतदाता सूचियों में प्रदर्शन योग्य, गंभीर खामियां और विसंगतियां हैं, जैसा कि स्वतंत्र जमीनी रिपोर्टों द्वारा मान्य किया गया है। इन सूचियों को तैयार करने और सत्यापित करने के लिए मौजूद प्रणालियां अपर्याप्त हैं।
              </VerdictCard>
              <VerdictCard title="क्या झूठ/अप्रमाणित है" icon={icons.question} variant="warning">
                सबसे गंभीर आरोप - चुनाव "चोरी" करने के लिए भाजपा के साथ मिलीभगत में चुनाव आयोग द्वारा एक जानबूझकर, केंद्रीय रूप से आयोजित "आपराधिक धोखाधड़ी" - उपलब्ध सबूतों से एक अप्रमाणित छलांग बनी हुई है।
              </VerdictCard>
           </div>
           <p className="text-base md:text-lg leading-relaxed pt-4">"वोट चोरी" विवाद का असली शिकार चुनाव आयोग में जनता के विश्वास का क्षरण है। इस विश्वास को बहाल करने का एकमात्र तरीका कट्टरपंथी पारदर्शिता और प्रणालीगत सुधार के माध्यम से है।</p>
        </section>

        {/* Recommendations */}
        <section className="space-y-4">
           <h2 className="text-2xl font-bold text-amber-700 text-center">चुनावी सुधार के लिए सिफारिशें</h2>
            <div className="bg-white p-6 rounded-lg shadow-md border border-stone-200">
              <ol className="space-y-4 text-base md:text-lg">
                  <IconListItem icon={icons.audit}><strong>व्यापक मतदाता सूची ऑडिट:</strong> आधुनिक डेटा एनालिटिक्स और AI टूल का उपयोग करके मतदाता सूचियों का एकमुश्त, राष्ट्रव्यापी ऑडिट अनिवार्य किया जाए।</IconListItem>
                  <IconListItem icon={icons.transparency}><strong>बढ़ी हुई डेटा पारदर्शिता:</strong> राजनीतिक दलों और जनता को मशीन-पठनीय प्रारूप में सभी मतदाता सूचियों की सक्रिय रिहाई को अनिवार्य करने के लिए नियमों में संशोधन किया जाए।</IconListItem>
                  <IconListItem icon={icons.review}><strong>EVM की स्वतंत्र तकनीकी सुरक्षा समीक्षा:</strong> विश्वसनीय, जांचे-परखे राष्ट्रीय और अंतर्राष्ट्रीय विशेषज्ञों द्वारा EVM और VVPAT की एक व्यापक, स्वतंत्र सुरक्षा समीक्षा शुरू की जाए।</IconListItem>
                  <IconListItem icon={icons.appointment}><strong>चुनाव आयोग की नियुक्ति प्रक्रिया में सुधार:</strong> चयन पैनल में भारत के मुख्य न्यायाधीश को शामिल करने की सर्वोच्च न्यायालय की पिछली सिफारिश को लागू किया जाए।</IconListItem>
                  <IconListItem icon={icons.verification}><strong>सत्यापन तंत्र को मजबूत करना:</strong> मतदाता पंजीकरण के लिए पूरी तरह से स्व-घोषणात्मक प्रणाली से हटकर एक अधिक मजबूत प्रणाली की ओर बढ़ा जाए।</IconListItem>
              </ol>
            </div>
        </section>
        
        {/* Works Cited */}
        <WorksCitedList />
      </main>

      <footer className="text-center py-8 px-4 text-stone-600">
        <p className="mb-2">यह रिपोर्ट TheOpenCity ReSearch के द्वारा प्रस्तुत की गयी है और इसमें लिखा हर डाटा तथ्यों पर आधारित हैं</p>
        <p className="font-mono text-sm">⚠️Disclaimer⚠️ - This is only for education purpose</p>
      </footer>
    </div>
  );
};

export default App;
