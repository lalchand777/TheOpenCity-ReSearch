
import React from 'react';

const ComparisonTable: React.FC = () => {
  return (
    <div className="overflow-x-auto bg-white p-4 rounded-lg shadow-md border border-stone-200/80">
      <h3 className="text-xl font-bold text-amber-700 mb-4 text-center">मुख्य आरोपों और तथ्य-जांच निष्कर्षों का सारांश</h3>
      <table className="w-full text-sm text-left text-stone-700">
        <thead className="text-xs text-amber-800 uppercase bg-amber-50">
          <tr>
            <th scope="col" className="px-4 py-3 border border-stone-200">विशिष्ट आरोप</th>
            <th scope="col" className="px-4 py-3 border border-stone-200">कांग्रेस द्वारा प्रस्तुत साक्ष्य</th>
            <th scope="col" className="px-4 py-3 border border-stone-200">चुनाव आयोग का आधिकारिक खंडन/निष्कर्ष</th>
            <th scope="col" className="px-4 py-3 border border-stone-200">स्वतंत्र मीडिया/तथ्य-जांचकर्ता के निष्कर्ष</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b border-stone-200">
            <td className="px-4 py-4 border border-stone-200 font-medium">1. एक ही पते पर थोक मतदाता (उदा., मकान नंबर 35, महादेवपुरा)</td>
            <td className="px-4 py-4 border border-stone-200">एक छोटे से आवास पर लगभग 80 मतदाताओं के पंजीकृत होने का दावा।</td>
            <td className="px-4 py-4 border border-stone-200">इसे सूची संशोधन के दौरान पार्टियों द्वारा आपत्ति न उठाने की विफलता के लिए जिम्मेदार ठहराया।</td>
            <td className="px-4 py-4 border border-stone-200"><strong>सत्यापित:</strong> इंडिया टुडे की जमीनी रिपोर्ट में एक छोटी संपत्ति मिली जिसमें एक अकेला, असंबंधित किरायेदार था, जो पते की विसंगति की पुष्टि करता है।</td>
          </tr>
          <tr className="bg-stone-50 border-b border-stone-200">
            <td className="px-4 py-4 border border-stone-200 font-medium">2. शकून रानी द्वारा दोहरा मतदान</td>
            <td className="px-4 py-4 border border-stone-200">एक मतदान अधिकारी से कथित तौर पर प्राप्त एक टिक-चिह्नित दस्तावेज़ जिसमें दो वोट डाले गए दिखाए गए।</td>
            <td className="px-4 py-4 border border-stone-200"><strong>खंडित:</strong> चुनाव आयोग ने दस्तावेज़ को "फर्जी" घोषित किया। कहा कि उनकी जांच में पाया गया कि उन्होंने केवल एक बार मतदान किया।</td>
            <td className="px-4 py-4 border border-stone-200"><strong>विरोधाभासी:</strong> शकून रानी के साक्षात्कार से पता चलता है कि वह दो बार मतदान करने से इनकार करती हैं, लेकिन दोहरे पंजीकरण के अस्तित्व की पुष्टि करती हैं, और इस त्रुटि के लिए चुनाव आयोग को दोषी ठहराती हैं।</td>
          </tr>
          <tr className="bg-white border-b border-stone-200">
            <td className="px-4 py-4 border border-stone-200 font-medium">3. कई राज्यों में डुप्लीकेट EPIC नंबर</td>
            <td className="px-4 py-4 border border-stone-200">दावा किया गया कि आदित्य श्रीवास्तव और विशाल सिंह जैसे नाम बैंगलोर, मुंबई, लखनऊ आदि की सूचियों में दिखाई दिए।</td>
            <td className="px-4 py-4 border border-stone-200"><strong>खंडित (यूपी के लिए):</strong> यूपी के CEO ने कहा कि एक खोज में महादेवपुरा में नाम मिले लेकिन लखनऊ या वाराणसी की सूचियों में नहीं।</td>
            <td className="px-4 py-4 border border-stone-200">द हिंदू नोट करता है कि राज्यों में समान EPIC एक महत्वपूर्ण मुद्दा नहीं है और इसे चुनाव आयोग द्वारा पहले ही संबोधित किया जा चुका था।</td>
          </tr>
          <tr className="bg-stone-50">
            <td className="px-4 py-4 border border-stone-200 font-medium">4. व्यापक "फर्जी मतदाता" (महादेवपुरा में 1 लाख से अधिक)</td>
            <td className="px-4 py-4 border border-stone-200">हार्ड-कॉपी मतदाता सूचियों का छह महीने का मैन्युअल विश्लेषण जिसमें धोखाधड़ी की पांच श्रेणियों की पहचान की गई।</td>
            <td className="px-4 py-4 border border-stone-200">शपथ के तहत सभी 1,00,250 मामलों को प्रस्तुत करने की मांग की; इसके बिना दावों को निराधार बताकर खारिज कर दिया।</td>
            <td className="px-4 py-4 border border-stone-200"><strong>आंशिक रूप से सत्यापित:</strong> हालांकि कुल संख्या को सत्यापित करना असंभव है, विशिष्ट उदाहरणों (जैसे थोक मतदाता) पर जमीनी रिपोर्ट इस प्रकार की विसंगतियों के अस्तित्व की पुष्टि करती हैं।</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;
