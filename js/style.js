document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('pre code').forEach((block) => {
      var btn = document.createElement('button');
      btn.className = 'btn-copy';
      btn.textContent = '复制';
      btn.addEventListener('click', function() {
        var code = block.innerText;
        var textArea = document.createElement('textarea');
        textArea.value = code;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        btn.textContent = '复制成功';
        setTimeout(function() {
            btn.textContent = '复制';
            }
        , 800);
      });
      block.parentNode.insertBefore(btn, block); // 将按钮插入到代码块前面
    });
  });