// 레이어 팝업 열기
document.getElementById('showPopup').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'block';
});

// 레이어 팝업 닫기
document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupContainer').style.display = 'none';
});