(() => {
  const scenarios = {
    transport: { icon:'🚌', title:'外出交通篇', summary:'視空間辨識、近期記憶與方向感同時卡住時，熟悉的出門路線也可能變得陌生。', prompt:'請先觀察畫面裡的線索：路線圖、車票與周圍的方向感，哪些地方讓人感到混亂或不安？', metaphor:'像是大腦的導航暫時失靈，不是故意亂走。', question:'當長輩突然迷路或走錯方向，我們的第一反應是否容易責怪他「沒看路」或「亂跑」？如果你是陪伴者，會先拿出哪一張牌？', choices:[['悠遊卡','減少辨識幣值與算錢的步驟','🪪','assets/cards/support-07.png'],['緊急聯絡卡','讓旁人知道如何聯繫家屬','📇','assets/cards/support-11.png'],['手機定位','建立找得到人的支持網','📍','assets/cards/support-04.png'],['圖像提示','把複雜路線變成簡單提示','🗺️','assets/cards/support-05.png'],['陪伴協助','用熟悉的人補上方向感','🤝','assets/cards/support-10.png']], recommended:[['悠遊卡','替大腦省電，免去辨識幣值與繁瑣算錢程序。','陪伴者預先儲值，固定放在外出包易抽取的伸縮證件套內。','🪪'],['緊急聯絡卡','在無法辨識需求時，提供直接求助與聯繫的依據。','放在胸前掛牌或皮夾首層，標記個人、家屬與基本醫療資訊。','📇'],['手機定位','建立無形的環境支持網，降低走失尋獲的時間與焦慮。','開啟手機或防走失裝置的家人共享定位功能。','📍']], action:'先陪伴、再提供簡單明確的路線提示；把支持放在容易拿到的地方。'},
    social: { icon:'👥', title:'人際社交篇', summary:'叫不出名字、情緒變化或互動退縮，可能讓原本熟悉的對話變得很費力。', prompt:'觀察對話中的停頓與表情：當名字卡在嘴邊、情緒突然變化時，對方可能正承受什麼壓力？', metaphor:'像是大腦的詞語抽屜暫時找不到那個名字，不代表不在乎你。', question:'當長輩叫不出朋友名字或突然沉默，我們能否先給他時間，而不是立刻糾正？你會先選哪張牌？', choices:[['圖像提示','提供可看的名字與關係線索','🏷️','assets/cards/support-05.png'],['熟悉環境','用圖像喚回關係記憶','🖼️','assets/cards/support-06.png'],['陪伴協助','留出不被催促的時間','🌿','assets/cards/support-10.png'],['便條提醒','一次只問一件容易回答的事','💬','assets/cards/support-01.png'],['固定位置','降低社交與感官負擔','🪑','assets/cards/support-02.png']], recommended:[['熟悉照片','圖像比即時回想更省力，提供熟悉關係的線索。','在手機或小相簿放上姓名清楚的熟悉照片，一起慢慢看。','🖼️'],['名字提示卡','把需要立即記住的名字放到眼前，減少搜尋壓力。','在座位前放名字卡，介紹時自然指向卡片，不要求立刻複誦。','🏷️'],['溫柔等待','不催促、不搶答，讓對方保留表達與參與的安全感。','停下來數三秒，用眼神與點頭告訴對方：我在等你。','🌿']], action:'少一點催促，多一點等待；用熟悉的圖像與簡短句子，讓對話重新有空間。'},
    home: { icon:'🏠', title:'居家生活篇', summary:'物品放錯位置、重複詢問或把熟悉物品認錯，會讓家中日常變得不確定。', prompt:'看看物品的位置與使用方式：哪些生活線索可以被固定、放大或簡化，讓下一次更容易找到？', metaphor:'像是大腦的生活地圖需要重新標記，不是故意把東西藏起來。', question:'當長輩把手機放進電鍋或一直問同一件事，我們可以先調整環境中的哪個線索？', choices:[['固定位置','讓物品總是在同一個地方','📦','assets/cards/support-02.png'],['圖像提示','用清楚文字與圖示提示用途','🏷️','assets/cards/support-05.png'],['待辦清單','把每天步驟變成看得見的順序','📋','assets/cards/support-12.png'],['便條提醒','用一句話提供下一步線索','💛','assets/cards/support-01.png'],['陪伴協助','一起做一次，降低重新學習負擔','👋','assets/cards/support-10.png']], recommended:[['固定收納位','固定的位置就是外接記憶，減少每天重新搜尋。','為手機、鑰匙與眼鏡設定明確位置，並用顏色或圖示標記。','📦'],['大字標籤','把物品功能變成一眼看懂的線索，減少辨認負擔。','在抽屜與常用物品貼上大字加圖示，保持位置不頻繁更換。','🏷️'],['生活流程卡','將複雜步驟拆成一格一格，讓下一步容易跟上。','把吃飯、吃藥或出門流程用短句與圖片貼在固定的地方。','📋']], action:'先整理環境，再提醒行為；把常用物品固定、標示，讓家成為可靠的提示。'},
    shop: { icon:'🛒', title:'超商購物篇', summary:'時間感、判斷與執行順序同時混亂時，簡單採買也可能出現重複或錯誤。', prompt:'觀察購物任務的順序：時間、清單與付款，每一步都可以怎麼變得更清楚？', metaphor:'像是大腦的行程表與購物清單打結了，不是故意買錯。', question:'當長輩反覆買同樣東西或分不清早晚，我們能先提供哪一種可見的線索？', choices:[['待辦清單','把要買的東西與數量寫清楚','📝','assets/cards/support-12.png'],['時間提醒','用早晚與圖像提示現在的時段','🕰️','assets/cards/support-03.png'],['固定小額現金','只帶當次需要的支付方式','👛','assets/cards/support-08.png'],['陪伴協助','一起確認順序與數量','🤝','assets/cards/support-10.png'],['熟悉環境','讓出門任務有熟悉的開始線索','👜','assets/cards/support-06.png']], recommended:[['購物清單','把「要記住什麼」移到紙上，降低執行功能負擔。','用大字寫品項與數量，買到一項就勾一項。','📝'],['簡單錢包','減少付款時的選擇與判斷，讓步驟更單純。','只放當次需要的卡片或零錢，並在固定夾層取用。','👛'],['陪同採買','在需要時補上順序與確認，保留對方參與的自主感。','先一起看清單，再讓對方完成能做到的步驟。','🤝']], action:'把時間、清單與付款步驟變成看得見的線索；陪伴時保留對方能做的部分。'}
  };
  const choiceDetails = {
    '悠遊卡': ['使用熟悉、簡單的支付方式，減少搭乘交通工具時需要記憶與計算的步驟。', '搭車或超商結帳只需「嗶」一聲，並用防掉伸縮拉繩固定卡片。'],
    '緊急聯絡卡': ['將家人、照顧者等重要聯絡方式放在容易找到的地方，需要時能快速尋求幫助。', '放在手機桌布、皮夾第一層透明格或隨身小包最外側，方便熱心民眾協助聯繫。'],
    '手機定位': ['利用手機定位及導航功能，在不熟悉的地方確認目前位置與回程方向。', '事先與個案溝通並取得同意，再使用家人共享定位或安全生活範圍。'],
    '圖像提示': ['以淺顯易懂的圖片提示事情的步驟，降低理解與表達上的困難。', '將路線或要找的物品畫成簡單圖示，放在出門前容易看見的位置。'],
    '陪伴協助': ['面對困難時，由熟悉的人陪伴並協助完成，而不是要求一個人處理所有事情。', '維持一對一、放慢速度、一次只講一個重點，多用鼓勵代替催促。'],
    '熟悉環境': ['將生活環境與物品安排維持固定，讓日常活動更容易依照熟悉的方式進行。', '把常用物品放在固定位置，並避免頻繁更換收納方式。'],
    '便條提醒': ['將重要的事情畫出來、寫下來，把需要記憶的資訊留在看得見的地方。', '把今天的行程或下一個步驟寫成短句，放在固定且容易看到的位置。'],
    '固定位置': ['將鑰匙、錢包等常用物品放在固定的位置，減少尋找物品的困難。', '為手機、鑰匙與眼鏡設定明確位置，並用顏色或圖示標記。'],
    '待辦清單': ['將一天要做的事情依序列出，完成一項再進行下一項。', '用大字寫品項與數量，完成一項就勾一項。'],
    '時間提醒': ['利用行事曆、時鐘、鬧鐘或手機提醒，協助掌握現在的時間與接下來的行程。', '用早晚與活動圖像提示現在的時段，讓下一步更容易預期。'],
    '固定小額現金': ['只攜帶固定金額的現金，減少付款與找零時的計算負擔。', '只放當次需要的卡片或零錢，並固定收在同一個夾層。']
  };
  const $ = (s) => document.querySelector(s);
  const scenarioButtons = [...document.querySelectorAll('.b-scenario-card')];
  const stages = {video:$('#stage-video'), think:$('#stage-think'), reveal:$('#stage-reveal'), summary:$('#stage-summary')};
  let current='transport', selected=null, timerId=null;
  function setScenario(key){ current=key; selected=null; clearInterval(timerId); const s=scenarios[key]; scenarioButtons.forEach(btn=>{const on=btn.dataset.scenario===key;btn.classList.toggle('is-active',on);btn.setAttribute('aria-selected',String(on));}); $('.b-current-icon').textContent=s.icon; $('#experience-heading').textContent=s.title; $('#scenario-summary').textContent=s.summary; $('#scene-prompt').textContent=s.prompt; $('#scene-metaphor').textContent=s.metaphor; $('#think-question').textContent=s.question; $('#stage-video').querySelector('h3').textContent=s.title+'：先看看他眼中的世界'; $('#timer').textContent='01:00'; showStage('video'); }
  function showStage(name){ Object.entries(stages).forEach(([k,node])=>node.hidden=k!==name); const step={video:1,think:2,reveal:3,summary:4}[name]; document.querySelectorAll('.b-progress span').forEach((el,i)=>el.classList.toggle('is-current',i===step-1)); if(name==='think') startTimer(); if(name==='reveal') renderReveal(); if(name==='summary') renderSummary(); document.querySelector('#stage-'+name)?.scrollIntoView({behavior:'smooth',block:'start'}); }
function renderChoices(){
    const s=scenarios[current];
    $('#support-choices').innerHTML=s.choices.map((c,i)=>`<button class="support-choice" type="button" data-index="${i}" aria-label="${c[0]}：${c[1]}"><span class="choice-image"><img src="${c[3]}" alt="${c[0]}" loading="lazy"></span></button>`).join('');
    $('#choice-status').textContent='尚未選擇';
    $('#reveal-button').disabled=true;
    document.querySelectorAll('.support-choice').forEach(btn=>btn.addEventListener('click',()=>{
      selected=Number(btn.dataset.index);
      document.querySelectorAll('.support-choice').forEach(b=>b.classList.toggle('is-selected',b===btn));
      $('#choice-status').textContent='已選：'+s.choices[selected][0];
      $('#reveal-button').disabled=false;
    }));
  }  function startTimer(){ renderChoices(); clearInterval(timerId); let left=60; const update=()=>{$('#timer').textContent=`0${Math.floor(left/60)}:${String(left%60).padStart(2,'0')}`; if(left<=0){clearInterval(timerId);$('#timer').classList.add('is-done');}}; update(); timerId=setInterval(()=>{left--;update();},1000); }
  function renderReveal(){ const card=scenarios[current].choices[selected]?.[0] || scenarios[current].choices[0][0]; const detail=choiceDetails[card] || [scenarios[current].choices[0][1], '請依牌面與帶領者說明，在當下情境中調整使用方式。']; const image=scenarios[current].choices.find(item=>item[0]===card)?.[3] || ''; $('#selected-card-result').innerHTML=`<div class="selected-card-visual"><img src="${image}" alt="${card}" loading="lazy"></div><div class="selected-card-copy"><h4>${card}</h4><p class="selected-card-description">${detail[0]}</p><div class="selected-card-detail"><b>生活化舉例</b><p>${detail[1]}</p></div></div>`; }
  function renderSummary(){ const s=scenarios[current]; $('#summary-text').textContent='改變環境配置與溝通方式，遠比要求長輩努力記住更有用。'; $('#summary-action').textContent=s.action; }
  scenarioButtons.forEach(btn=>btn.addEventListener('click',()=>setScenario(btn.dataset.scenario)));
  document.querySelectorAll('.b-next').forEach(btn=>btn.addEventListener('click',()=>{ if(btn.id==='reveal-button'&&selected===null)return; showStage(btn.dataset.next); }));
  $('#restart-button').addEventListener('click',()=>showStage('video'));
  setScenario('transport');
})();



