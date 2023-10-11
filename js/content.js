window.addEventListener("load", main, false);

function main(e) {
	const jsInitCheckTimer = setInterval(jsLoaded, 1000);

	function jsLoaded() {
		if (document.querySelector('.red-ui-palette-label') != null) {
			clearInterval(jsInitCheckTimer);
			
			let elements1 = document.getElementById('red-ui-palette');
			let elements2 = elements1.getElementsByClassName('red-ui-palette-label');
			let len = elements2.length;
			
			for (let i = 0; i < len; i++) {
				if(elements2[i].textContent=="inject")elements2[i].textContent="インジェクト";
				if(elements2[i].textContent=="debug")elements2[i].textContent="デバッグ";
				if(elements2[i].textContent=="complete")elements2[i].textContent="コンプリート";
				if(elements2[i].textContent=="catch")elements2[i].textContent="キャッチ";
				if(elements2[i].textContent=="status")elements2[i].textContent="ステータス";
				if(elements2[i].textContent=="comment")elements2[i].textContent="コメント";
				if(elements2[i].textContent=="function"){
					elements2[i].textContent="ファンクション";
					elements2[i].setAttribute('style',"font-size:smaller")
				}
				if(elements2[i].textContent=="switch")elements2[i].textContent="スイッチ";
				if(elements2[i].textContent=="change")elements2[i].textContent="チェンジ";
				if(elements2[i].textContent=="range")elements2[i].textContent="レンジ";
				if(elements2[i].textContent=="template"){
					elements2[i].textContent="テンプレート";
					elements2[i].setAttribute('style',"font-size:smaller")
				}
				if(elements2[i].textContent=="delay")elements2[i].textContent="ディレイ";
				if(elements2[i].textContent=="trigger")elements2[i].textContent="トリガー";
				if(elements2[i].textContent=="exec")elements2[i].textContent="実行";
				if(elements2[i].textContent=="filter")elements2[i].textContent="フィルター";
			}
		};
	}
}
