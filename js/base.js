window.addEventListener('DOMContentLoaded', function(){
    let hierarchyStr = createPathHierarchy();
    fetchInnerHTML(hierarchyStr + 'parts/header.txt', 'site_header');
    fetchInnerHTML(hierarchyStr + 'parts/footer.txt', 'site_footer');
});

// 外部ファイルに記載した要素を対象のidにinnerHTMLする
async function fetchInnerHTML(targetFile, targetElementId){
    const targetElement = document.getElementById(targetElementId);
    try{
        const res = await fetch(targetFile);
        if (!res.ok) {
            throw new Error(targetFile + 'のfetchに失敗しました');
        }
        const fetchText = await res.text();
        targetElement.innerHTML = fetchText;
    }catch(e){
        console.error(e.message);
        targetElement.innerHTML = '<p class="error">この部分の生成に失敗しました。</p>';
    }
};

// rootまでの上位階層の文字列取得
function createPathHierarchy(){
    const pathname = location.pathname;
    const targetStr = '/';
    let resultStr = '';

    let c = (pathname.match(new RegExp(targetStr, 'g')) || [] ).length;
    
    if(c === 1){
        resultStr = './'
        return resultStr;
    }

    for(let i = 1;  i < c;  i++){
        resultStr += '../'
    }

    return resultStr;
}


