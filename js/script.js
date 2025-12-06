// ===== 1. 里長資料庫 (共31筆) =====
const chiefsData = [
    {
      li: "光復里", chief: "王麗美", phone: "(02)2361-3966", mobile: "0955-526-140", fax: "(02)2361-3966", email: "", address: "開封街1段105-2號",
      history: "本里成立於民國36年，70年第三期里行政區域調整將撫台里併入本里；79年3月12日區里行政區域調整復合併延華里全里及北門里，龍華里地區。"
    },
    {
      li: "建國里", chief: "許瀞尹", phone: "(02)2314-1308", mobile: "0930-886-725", fax: "(02)2314-1308", email: "vivavivahsu@gmail.com", address: "衡陽路78號",
      history: "本里於民國四十三年由文武里劃出成立，同時命名建國里七十年四月一日第三期里行政區域調整，將文武里合併入本里；七十九年三月十二日區里行政區域調整，再將龍華里部份地區併入本里。"
    },
    {
      li: "黎明里", chief: "鄭燕宗", phone: "(02)2382-0387", mobile: "0988-333-679", fax: "(02)2371-4489", email: "ccda084@ms1.gsn.gov.tw", address: "忠孝西路一段29巷2號",
      history: "本里成立於70年4月，79年3月12日區里行政區域調整，復將文賓里全里及北門里部份地區併入本里。"
    },
    {
      li: "梅花里", chief: "吳崑山", phone: "(02)2393-3800", mobile: "0921-100-970", fax: "(02)3322-3890", email: "", address: "紹興北街23號",
      history: "本里原屬玖橋里，民國43年劃出成立，74年4月1日第3期里行政區調整，復將原華山里併入本里。"
    },
    {
      li: "幸福里", chief: "蘇宏仁", phone: "(02)2341-1328", mobile: "0919-588-497", fax: "(02)2321-5303", email: "bq_xf@mail.taipei.gov.tw", address: "北平東路24號1樓",
      history: "本里成立於民國36年，70年4月第3期里行政區域調整將社聚里併入本里。"
    },
    {
      li: "東門里", chief: "牟桂富", phone: "(02)2321-5659", mobile: "0932-388-608", fax: "(02)2321-5659", email: "rick471219@gmail.com", address: "仁愛路一段53號",
      history: "本里於日據時期屬於東門町，民國36年劃分成立東門里。"
    },
    {
      li: "文北里", chief: "陳余秀卿", phone: "(02)2321-8919", mobile: "0939-561-355", fax: "(02)2321-8919", email: "", address: "杭州南路一段39號",
      history: "本里日據時代屬東門町，民國三六年劃出成立本里，以位居文化村之北，故名文北里。"
    },
    {
      li: "文祥里", chief: "李淑珍", phone: "(02)2394-4599", mobile: "0919-319-818", fax: "(02)2391-1931", email: "", address: "金山南路一段100號",
      history: "本里日據時代屬東門町，民國三十六年劃分成立本里。"
    },
    {
      li: "幸市里", chief: "林禎吉", phone: "(02)2351-5824", mobile: "0933-016-568", fax: "(02)2356-7704", email: "ccda087@gmail.com", address: "新生南路1段54巷18之3號",
      history: "本里成立於民國36年，70年4月第三期里行政區域調整將玖橋里併入。"
    },
    {
      li: "三愛里", chief: "陳仁志", phone: "(02)2391-2222", mobile: "0938-205-215", fax: "(02)2392-8882", email: "", address: "臨沂街75巷19號",
      history: "本里係民國79年3月12日里行政區域調整，由原大安區信愛里、惠愛里、普愛里3里合併而成。"
    },
    {
      li: "愛國里", chief: "周德潤", phone: "(02)2388-1662", mobile: "0933-028-353", fax: "(02)2314-5116", email: "bq_ag@mail.taipei.gov.tw", address: "延平南路192巷6號",
      history: "本里原為南興里之一部，於41年8月行政區調整而成立本里。"
    },
    {
      li: "廈安里", chief: "涂光宇", phone: "(02)2306-9521", mobile: "0932-028-027", fax: "(02)2308-7249", email: "bq_xa@mail.taipei.gov.tw", address: "中華路二段175巷24號",
      history: "本里舊名「堀江町」，於民國70年4月1日將廈慶全里及勝利里之兩個鄰合併為廈安里。"
    },
    {
      li: "忠勤里", chief: "方荷生", phone: "(02)2305-6741", mobile: "0935-920-329", fax: "(02)2332-0517", email: "ccda074@yahoo.com.tw", address: "中華路二段303巷14號",
      history: "本里於民國65年由忠義里劃出成立，因位屬南機場舊址興建且有台北市第期整建住宅忠勤社區，故名「忠勤里」。"
    },
    {
      li: "南門里", chief: "郭有賢", phone: "(02)2381-8302", mobile: "0928-490-157", fax: "(02)2312-1577", email: "ccda077@ms1.gsn.gov.tw", address: "廣州街8巷3弄26號",
      history: "南門里在日據時期屬南門町，原為南興與花圃里所轄，民國36年劃出成立本里。"
    },
    {
      li: "龍光里", chief: "陳萬龍", phone: "(02)2303-3498", mobile: "0937-888-899", fax: "(02)2303-9165", email: "bq_lg@mail.taipei.gov.tw", address: "和平西路二段45號1樓",
      history: "本里日據時代為龍口町之一部份，民國36年劃分成立，同時命名「龍光里」。"
    },
    {
      li: "龍興里", chief: "陳月容", phone: "02-2303-2845", mobile: "0917-522-883", fax: "", email: "bq11009@gov.taipei", address: "三元街131號4樓",
      history: "本里在日據時期為「龍口町」之一部份，民國36年劃分成立「龍興里」。"
    },
    {
      li: "永昌里", chief: "陳玟如", phone: "(02)2307-3916", mobile: "0958-971-396", fax: "(02)2332-3731", email: "ccda072@msl.gsn.gov.tw", address: "汀州路一段242巷5號",
      history: "本里在日據時期為「馬場町」，俗名「崁頂」，於民國44年人口急增。"
    },
    {
      li: "永功里", chief: "陳宏明", phone: "(02)2337-9808", mobile: "0933-016-366", fax: "(02)2337-0093", email: "bq_yg@mail.taipei.gov.tw", address: "汀州路一段324號",
      history: "本里原為永成里之一部份，民國４１年分出建里，僅１１鄰。"
    },
    {
      li: "龍福里", chief: "鄭珍珍", phone: "(02)2391-2025", mobile: "0933-763-161", fax: "(02)2396-2052", email: "bj0868@gov.taipei", address: "牯嶺街35號",
      history: "本里現有21鄰，位於中正區精華地帶，中央銀行、財政部、國貿局，及中正區行政中心皆位於本里。"
    },
    {
      li: "南福里", chief: "許益明", phone: "(02)2392-8982", mobile: "0937-855-870", fax: "", email: "bq-tel0@mail.taipei.gov.tw", address: "和平西路1段55巷21號",
      history: "本里係於79年3月12日區里行政區域調整由原自治里、南市里全里及龍津里1至15鄰合併為一里。"
    },
    {
      li: "新營里", chief: "莊柏辰", phone: "02-3393-7573", mobile: "0966-415-705", fax: "02-2356-7318", email: "edgechuang@gmail.com", address: "愛國東路110巷16號1樓",
      history: "本里係民國79年3月12日區里行政區域調整由原新隆里與向營里合併而成。"
    },
    {
      li: "螢雪里", chief: "陳文質", phone: "(02)2305-2201", mobile: "0933-826-949", fax: "(02)2337-8567", email: "winsor588@gmail.com", address: "台北市福州街59號",
      history: "本里在日據時代為川端町螢橋段之一部份，光復後劃分為數里，各里均冠以「螢」字以示劃分。"
    },
    {
      li: "螢圃里", chief: "陳木松", phone: "(02)2365-7968", mobile: "0939-133-669", fax: "(02)2369-8095", email: "ccda069@ms1.gsn.gov.tw", address: "重慶南路3段83巷3號",
      history: "本里日據時期屬於川端町，台灣光復後劃出成立螢圃里，以位於廈門街東南端之螢橋而得名。"
    },
    {
      li: "板溪里", chief: "黃國輝", phone: "(02)2367-6960", mobile: "0928-840-912", fax: "(02)2369-7637", email: "ccda068@msl.gsn.gov.tw", address: "汀州路二段151號",
      history: "本里在日據時期屬川端町，光復後廢町設里，以里域於明末清初為河川地帶，來往竹筏頻繁，故命名板溪里。"
    },
    {
      li: "網溪里", chief: "夏萬浪", phone: "(02)3365-1928", mobile: "0919-940-027", fax: "(02)2368-5992", email: "s33651923@yahoo.com", address: "牯嶺街165號",
      history: "本里日據時期屬順端町，民國36年成立本里，以原位於新店溪旁，高山族人在該處溪中捕魚曬網，故命名「網溪里」。"
    },
    {
      li: "頂東里", chief: "王曜樹", phone: "(02)2364-8892", mobile: "0937-042-108", fax: "(02)2369-6259", email: "bq_dd@mail.taipei.gov.tw", address: "晉江街101號",
      history: "本里日據時期屬古亭町，民國36年劃分成立本里，因位於崁頂以東，故命名為「頂東里」。"
    },
    {
      li: "河堤里", chief: "鄒士根", phone: "(02)2364-1783", mobile: "0932-386-041", fax: "(02)2368-1488", email: "bq_ht@mail.taipei.gov.tw", address: "金門街11之1號",
      history: "本里日據時期屬川端町，民國36年劃出成立，因濱臨新店溪堤防邊，故命名為「河堤里」。"
    },
    {
      li: "林興里", chief: "吳寶燕", phone: "(02)2368-6919", mobile: "0933-213-180", fax: "(02)2368-1659", email: "bq-xzl0@mail.taipei.gov.tw", address: "水源路21號",
      history: "本里原屬林口里，民國63年第2期里行政區域調整劃出成立「林興里」。"
    },
    {
      li: "文盛里", chief: "溫紹宏", phone: "(02)2367-7325", mobile: "0919-246-218", fax: "(02)2368-7590", email: "vovo650224@yahoo.com.tw", address: "羅斯福路三段286巷4弄4號",
      history: "本里於民國四十二年由原水源里劃出自成一里，因本里住戶多為公教人員，又緊鄰台灣大學之故，遂命名文盛里。"
    },
    {
      li: "富水里", chief: "陳麗真", phone: "(02)2365-6541", mobile: "0933-958-335", fax: "(02)8369-2293", email: "chen410814@yahoo.com.tw", address: "永春街185-3號",
      history: "本里於民國五十六年由原水源里劃出自成一里，因位處水源地區之周圍，遂名『富水里』。"
    },
    {
      li: "水源里", chief: "林全義", phone: "(02)2369-0339", mobile: "0935-381-941", fax: "(02)2369-0339", email: "bq_sy@gov.taipei", address: "羅斯福路4段52巷16弄7號",
      history: "本里日據時期屬水道町，由於位居水源地，故取名水源里，42年劃分本里增設文盛、健軍里；56年復劃分，為水源及富水兩里。"
    }
];

// ===== 2. 初始化與事件監聽 =====
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('chiefContainer');
    const selectBox = document.getElementById('chiefSelect');
    const searchBox = document.getElementById('chiefSearch');
    const modal = document.getElementById('chiefModal');
    const modalCloseBtn = document.getElementById('modalCloseBtn');
    
    // 新增：表單元素
    const msgForm = document.getElementById('msgForm');

    // 初始化
    if (container) {
        // 如果您的 chiefsData 是空的，請記得去上一次的對話複製完整資料
        if(typeof chiefsData !== 'undefined') {
            renderChiefs(chiefsData);
            populateSelectOptions();
        }
    }

    // 事件：下拉選單
    if (selectBox) {
        selectBox.addEventListener('change', function() {
            const selectedLi = this.value;
            if(searchBox) searchBox.value = '';
            if (selectedLi === "") {
                renderChiefs(chiefsData);
            } else {
                const filtered = chiefsData.filter(item => item.li === selectedLi);
                renderChiefs(filtered);
            }
        });
    }

    // 事件：文字搜尋
    if (searchBox) {
        searchBox.addEventListener('input', function() {
            const query = this.value.toLowerCase().trim();
            if(selectBox) selectBox.value = "";
            const filtered = chiefsData.filter(item => 
                item.li.includes(query) || item.chief.includes(query)
            );
            renderChiefs(filtered);
        });
    }

    // 事件：關閉 Modal
    if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeChiefModal);
    window.addEventListener('click', function(e) {
        if (e.target === modal) closeChiefModal();
    });

    // ===== 新增：處理表單送出 =====
    if (msgForm) {
        msgForm.addEventListener('submit', function(e) {
            e.preventDefault(); // 阻止網頁重新整理
            
            // 這裡可以抓取使用者輸入的值
            const name = document.getElementById('msgName').value;
            const content = document.getElementById('msgContent').value;
            const currentLi = document.getElementById('m-li-name').innerText; // 抓取現在是哪個里

            // 模擬送出成功
            alert(`感謝 ${name} 的留言！\n我們已收到您對「${currentLi}」的建議：\n${content}\n\n(注意：這是靜態網頁演示，訊息並未真正寄出)`);
            
            // 清空表單並關閉視窗
            msgForm.reset();
            closeChiefModal();
        });
    }
});

// ===== 3. 功能函式 =====

function renderChiefs(data) {
    const container = document.getElementById('chiefContainer');
    if (!container) return;
    if (data.length === 0) {
        container.innerHTML = '<p style="text-align:center; width:100%; color:#666;">查無資料。</p>';
        return;
    }
    // 注意：這裡圖片路徑保留您設定的 "img/里長留言圖片檔/"
    container.innerHTML = data.map((item) => `
        <div class="chief-card" data-li="${item.li}">
            <img src="img/里長留言圖片檔/${item.li}.jpg" class="chief-avatar" alt="${item.li}" onerror="this.src='https://via.placeholder.com/100?text=無圖'">
            <h3 class="chief-li-name">${item.li}</h3>
            <p class="chief-name">${item.chief} 里長</p>
            <button class="chief-btn">詳細介紹</button>
        </div>
    `).join('');

    document.querySelectorAll('.chief-card').forEach(card => {
        card.addEventListener('click', function() {
            openChiefModal(this.getAttribute('data-li'));
        });
    });
}

function populateSelectOptions() {
    const selectBox = document.getElementById('chiefSelect');
    if (!selectBox) return;
    selectBox.innerHTML = '<option value="">顯示所有里別</option>';
    chiefsData.forEach(item => {
        const option = document.createElement('option');
        option.value = item.li;
        option.innerText = item.li;
        selectBox.appendChild(option);
    });
}

function openChiefModal(liName) {
    const modal = document.getElementById('chiefModal');
    const data = chiefsData.find(d => d.li === liName);
    if(!data || !modal) return;

    // 設定圖片與文字
    const imgEl = document.getElementById('m-avatar');
    imgEl.src = `img/里長留言圖片檔/${data.li}.jpg`;
    imgEl.onerror = function(){ this.src='https://via.placeholder.com/80?text=無圖' };
    
    document.getElementById('m-li-name').innerText = data.li;
    document.getElementById('m-chief').innerText = data.chief + " 里長";
    document.getElementById('m-phone').innerText = data.phone || '(無)';
    document.getElementById('m-mobile').innerText = data.mobile || '(無)';
    document.getElementById('m-fax').innerText = data.fax || '(無)';
    document.getElementById('m-email').innerText = data.email || '(無)';
    document.getElementById('m-address').innerText = data.address;
    document.getElementById('m-history').innerText = data.history || '暫無歷史沿革資料。';

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeChiefModal() {
    const modal = document.getElementById('chiefModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

