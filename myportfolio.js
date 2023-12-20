// Function để chuyển đổi ngôn ngữ
function switchLanguage(lang) {
  // Chuyển đổi văn bản dựa vào ngôn ngữ được chọn
  if (lang === 'VN') {
    document.querySelectorAll('.nav-link').forEach(function(element) {
      switch (element.textContent.trim()) {
        case 'Kim Phuc':
          element.textContent = 'Kim Phúc';
          break;
        case "Phuc's Portfolio":
          element.textContent = 'Mục lục';
          break;
        case 'Works':
          element.textContent = 'Dự Án';
          break;
        case 'FAQ':
          element.textContent = 'Hỏi Đáp';
          break;
        case 'About':
          element.textContent = 'Về Tôi';
          break;
        case 'Contact':
          element.textContent = 'Liên hệ';
          break;
        default:
          break;
      }
    });
    document.querySelector('#navbarDropdown').textContent = 'VN';
  } else {
    document.querySelectorAll('.nav-link').forEach(function(element) {
      switch (element.textContent.trim()) {
        case 'Kim Phúc':
          element.textContent = 'Kim Phuc';
          break;
        case 'Mục lục':
          element.textContent = "Phuc's Portfolio";
          break;
        case 'Dự Án':
          element.textContent = 'Works';
          break;
        case 'Hỏi Đáp':
          element.textContent = 'FAQ';
          break;
        case 'Về Tôi':
          element.textContent = 'About';
          break;
        case 'Liên hệ':
          element.textContent = 'Contact';
          break;
        default:
          break;
      }
    });
    document.querySelector('#navbarDropdown').textContent = 'EN';
  }
}
